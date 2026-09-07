export type ChatMessage = {
    id: string,
    role: 'system' | 'user' | 'assistant',
    content: string,
    timestamp: Date,
    sources?: Source[],
}

export type MessageItem = {
    role: 'system' | 'user' | 'assistant',
    content: string,
}

export type Source = {
    source_type: string
    file_name?: string
    page?: number | string
    total_pages?: number
    score?: number
    content?: string
    title?: string
    url?: string
}

export type StreamEvent = {
    event: "sources" | "token" | "end"
    sources?: Source[]
    delta?: string
}

