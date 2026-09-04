export type ChatMessage = {
    id: string,
    role: 'system' | 'user' | 'assistant',
    content: string,
    timestamp: Date,
}