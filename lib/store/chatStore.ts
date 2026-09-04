import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface ChatMessage {
    id: string,
    role: 'system' | 'user' | 'assistant',
    content: string,
    timestamp: Date,
}

interface ChatStore {
    sessionId: string;
    messages: ChatMessage[];
    setSessionId: (sessionId: string) => void;
    addMessage: (message: Omit<ChatMessage, 'id' | 'timestamp'>) => void;
    clearHistory: () => void;
    setMessages: (message: ChatMessage[]) => void;
}

export const useChatStore = create<ChatStore>()(
    persist(
        (set) => ({
            sessionId: typeof window !== "undefined" ?
            localStorage.getItem('bc_session') || crypto.randomUUID() 
            : crypto.randomUUID(),

            messages: [],
            setSessionId: (id) => set({sessionId: id}),
            addMessage: (message) => set((state) => ({
                messages: [...state.messages, {
                    ...message,
                    id: new Date().toLocaleString(),
                    timestamp: new Date()
                }]
            })),
            clearHistory: () => set({messages: []}),
            setMessages: (msgs) => set({messages: msgs})
        }), {
            name: "bc_chat_storage",
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({messages: state.messages, sessionId: state.sessionId}),
        }
    )
)