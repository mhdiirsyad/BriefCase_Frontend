import { safeEnv } from "./env";
import type { MessageItem, Source } from "./type";
import { useChatStore } from "./store/chatStore";

export async function loadChat(sessionId: string) {
    const store = useChatStore.getState();
    store.removeExpiredSessions();
    const session = store.history.find((chat) => chat.id === sessionId);

    if (!session || !store.loadSession(sessionId)) {
        throw new Error("Chat session not found");
    }

    return session;
}

type StreamResult = {
    answer: string;
    sources: Source[];
};

type StreamOptions = {
    onToken?: (delta: string) => void;
    onSources?: (sources: Source[]) => void;
};

function parseSources(data: string): Source[] {
    const parsed = JSON.parse(data) as unknown;
    return typeof parsed === "string"
        ? JSON.parse(parsed) as Source[]
        : parsed as Source[];
}

function parseToken(data: string): string {
    const parsed = JSON.parse(data) as unknown;
    const payload = typeof parsed === "string"
        ? JSON.parse(parsed) as { delta?: string }
        : parsed as { delta?: string };

    return payload.delta ?? "";
}

export async function sendMessageStream(
    input: { query: string; chatHistory?: MessageItem[] },
    options: StreamOptions = {},
): Promise<StreamResult> {
    const chatStore = useChatStore.getState();
    const chatHistory = input.chatHistory ?? [];

    chatStore.removeExpiredSessions();
    if (!chatStore.canSendMessage()) {
        throw new Error("This conversation has reached the five-message limit. Start a new conversation to continue.");
    }

    const messageAdded = chatStore.addMessage({ role: "user", content: input.query });
    if (!messageAdded) {
        throw new Error("This conversation has reached the five-message limit. Start a new conversation to continue.");
    }

    const result = await fetch(`${safeEnv.NEXT_PUBLIC_API_URL}/chat/stream`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "text/event-stream"
        },
        body: JSON.stringify({ ...input, chatHistory })
    })

    if(!result.ok || !result.body) {
        throw new Error("Server can't response")
    }

    const reader = result.body.getReader()
    const decoder = new TextDecoder()

    let buffer = "";
    let answer = "";
    let sources: Source[] = [];
    let eventName = "message";

    const processBlock = (block: string) => {
        let data = "";

        for (const line of block.split(/\r?\n/)) {
            if (line.startsWith("event:")) {
                eventName = line.slice(6).trim();
            } else if (line.startsWith("data:")) {
                data += `${line.slice(5).trim()}\n`;
            }
        }

        data = data.trimEnd();
        if (!data) return;

        if (eventName === "sources") {
            sources = parseSources(data);
            options.onSources?.(sources);
        } else if (eventName === "token") {
            const delta = parseToken(data);
            answer += delta;
            options.onToken?.(delta);
        } else if (eventName === "error") {
            const payload = JSON.parse(data) as { error?: string };
            throw new Error(payload.error ?? "Chat stream failed");
        }

        eventName = "message";
    };

    while (true) {
        const {done, value} = await reader.read()
        buffer += decoder.decode(value ?? new Uint8Array(), { stream: !done });

        const blocks = buffer.split(/\r?\n\r?\n/);
        buffer = blocks.pop() ?? "";

        for (const block of blocks) {
            processBlock(block);
        }

        if (done) break;
    }

    if (buffer.trim()) processBlock(buffer);

    chatStore.addMessage({
        role: "assistant",
        content: answer,
        sources,
    });

    return { answer, sources };
}