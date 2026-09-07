import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { ChatMessage } from "../type";

export const MAX_MESSAGES_PER_SESSION = 5;
export const SESSION_RETENTION_MS = 7 * 24 * 60 * 60 * 1000;

export interface Chat {
    id: string;
    title: string;
    messages: ChatMessage[];
    createdAt: number;
    updatedAt: number;
    userMessageCount: number;
}

interface ChatStore {
    sessionId: string;
    messages: ChatMessage[];
    history: Chat[];
    setSessionId: (sessionId: string) => void;
    addMessage: (message: Omit<ChatMessage, 'id' | 'timestamp'>) => boolean;
    canSendMessage: () => boolean;
    startNewSession: () => void;
    loadSession: (sessionId: string) => boolean;
    removeExpiredSessions: () => void;
    clearHistory: () => void;
    setMessages: (messages: ChatMessage[]) => void;
    addHistory: (chat: Omit<Chat, 'id'>) => void;
    setHistory: (history: Chat[]) => void;
}

export const useChatStore = create<ChatStore>()(
    persist(
        (set, get) => ({
            sessionId: crypto.randomUUID(),

            messages: [],
            history: [],
            setSessionId: (id) => set({sessionId: id}),
            addMessage: (message) => {
                const state = get();
                if (message.role === "user" && !state.canSendMessage()) {
                    return false;
                }

                const now = Date.now();
                const nextMessages = [...state.messages, {
                    ...message,
                    id: crypto.randomUUID(),
                    timestamp: new Date()
                }];
                const userMessageCount = nextMessages.filter(
                    (item) => item.role === "user",
                ).length;
                const currentSession: Chat = {
                    id: state.sessionId,
                    title: state.history.find((chat) => chat.id === state.sessionId)?.title
                        ?? message.content.slice(0, 40),
                    messages: nextMessages,
                    createdAt: state.history.find((chat) => chat.id === state.sessionId)?.createdAt ?? now,
                    updatedAt: now,
                    userMessageCount,
                };
                set({
                    messages: nextMessages,
                    history: [
                        ...state.history.filter((chat) => chat.id !== state.sessionId),
                        currentSession,
                    ],
                });
                return true;
            },
            canSendMessage: () => {
                const state = get();
                return state.messages.filter((item) => item.role === "user").length < MAX_MESSAGES_PER_SESSION;
            },
            startNewSession: () => set({
                sessionId: crypto.randomUUID(),
                messages: [],
            }),
            loadSession: (sessionId) => {
                const session = get().history.find((chat) => chat.id === sessionId);
                if (!session) return false;

                set({
                    sessionId: session.id,
                    messages: session.messages,
                });
                return true;
            },
            removeExpiredSessions: () => {
                const cutoff = Date.now() - SESSION_RETENTION_MS;
                const activeSession = get().history.find((chat) => chat.id === get().sessionId);
                const history = get().history.filter((chat) => chat.updatedAt >= cutoff);

                if (activeSession && activeSession.updatedAt < cutoff) {
                    set({
                        sessionId: crypto.randomUUID(),
                        messages: [],
                        history,
                    });
                    return;
                }
                set({history});
            },
            clearHistory: () => set({
                sessionId: crypto.randomUUID(),
                messages: [],
                history: [],
            }),
            setMessages: (msgs) => set({messages: msgs}),
            addHistory: (chat) => set((state) => ({
                history: [...state.history, {
                    ...chat,
                    id: crypto.randomUUID(),
                    createdAt: Date.now(),
                    updatedAt: Date.now(),
                    userMessageCount: chat.messages.filter((item) => item.role === "user").length,
                }]
            })),
            setHistory: (history) => set({history}),
        }), {
            name: "bc_chat_storage",
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({
                messages: state.messages,
                sessionId: state.sessionId,
                history: state.history,
            }),
            onRehydrateStorage: () => (state) => {
                state?.removeExpiredSessions();
            },
        }
    )
)
