import { ChatMessage } from "@/lib/type";
import { MessageScroller, MessageScrollerButton, MessageScrollerContent, MessageScrollerItem, MessageScrollerViewport } from "../ui/message-scroller";

export default function MessagePanel({messages}: { messages: ChatMessage[] }) {
    return (
        <MessageScroller>
            <MessageScrollerViewport>
                <MessageScrollerContent>
                    {
                        messages.map((msg) => (
                            <MessageScrollerItem 
                            key={msg.id} 
                            messageId={msg.id}
                            scrollAnchor={msg.role === 'user'}
                            >
                                {msg.content}
                            </MessageScrollerItem>
                        ))
                    }
                </MessageScrollerContent>
            </MessageScrollerViewport>
            <MessageScrollerButton />
        </MessageScroller>
    )
}