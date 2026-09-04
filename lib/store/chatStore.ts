import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface ChatMessage {
    id: string,
    role: 'system' | 'user' | 'assistant',
    content: string,
    timestamp: Date,
}

interface Chat {
    id: string;
    title: string;
    messages: ChatMessage[]
}

interface ChatStore {
    sessionId: string;
    messages: ChatMessage[];
    history: Chat[]
    setSessionId: (sessionId: string) => void;
    addMessage: (message: Omit<ChatMessage, 'id' | 'timestamp'>) => void;
    clearHistory: () => void;
    setMessages: (messages: ChatMessage[]) => void;
    addHistory: (chat: Omit<Chat, 'id'>) => void;
    setHistory: (history: Chat[]) => void;
}

export const useChatStore = create<ChatStore>()(
    persist(
        (set) => ({
            sessionId: typeof window !== "undefined" ?
            localStorage.getItem('bc_session') || crypto.randomUUID() 
            : crypto.randomUUID(),

            messages: [],
            history: [],
            setSessionId: (id) => set({sessionId: id}),
            addMessage: (message) => set((state) => ({
                messages: [...state.messages, {
                    ...message,
                    id: new Date().toLocaleString(),
                    timestamp: new Date()
                }]
            })),
            clearHistory: () => set({messages: []}),
            setMessages: (msgs) => set({messages: msgs}),
            addHistory: (chat) => set((state) => ({
                history: [...state.history, {
                    ...chat,
                    id: new Date().toLocaleString()
                }]
            })),
            setHistory: (history) => set({history: history})
        }), {
            name: "bc_chat_storage",
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({messages: state.messages, sessionId: state.sessionId}),
        }
    )
)