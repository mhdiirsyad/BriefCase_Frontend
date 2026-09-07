import { ChatMessage } from "@/lib/type";
import { MessageScroller, MessageScrollerButton, MessageScrollerContent, MessageScrollerItem, MessageScrollerViewport } from "../ui/message-scroller";
import { Bubble, BubbleContent } from "../ui/bubble";
import Markdown from "./markdown";
import { FileText } from "lucide-react";
import { Spinner } from "../ui/spinner";

export default function MessagePanel({messages, streamedAnswer = "", processing = false}: { messages: ChatMessage[]; streamedAnswer?: string; processing?: boolean }) {
    return (
        <MessageScroller>
            <MessageScrollerViewport>
                <MessageScrollerContent className="pt-4">
                    {
                        messages.map((msg) => (
                            <MessageScrollerItem 
                            key={msg.id} 
                            messageId={msg.id}
                            scrollAnchor={msg.role === 'user'}
                            className="mx-auto flex w-full max-w-240 flex-col gap-2 px-4 sm:px-8"
                            >
                                <Bubble 
                                align={msg.role === 'user' ? 'end' : 'start'} 
                                variant={msg.role === 'user' ? 'default' : 'ghost'}
                                className="max-w-[88%]">
                                    <BubbleContent className={msg.role === 'user' ? "rounded-xl bg-primary px-4 py-3 text-on-primary shadow-sm" : "border-0! bg-transparent! px-0! py-0! text-on-surface shadow-none"}>
                                        <Markdown content={msg.content} tone={msg.role} classname="body-md" />
                                        {msg.sources && msg.sources.length > 0 && (
                                            <div className="mt-4 border-t border-outline-variant/45 pt-3">
                                                <p className="label-sm mb-2 uppercase text-on-surface-variant/65">Sources</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {msg.sources.map((source, index) => (
                                                        <span key={`${source.file_name ?? "source"}-${source.page ?? index}`} className="inline-flex items-center gap-1.5 rounded-md border border-outline-variant/55 bg-surface-container-low px-2 py-1 text-xs text-on-surface-variant">
                                                            <FileText className="size-3.5 text-secondary" />
                                                            {source.file_name?.split(".pdf")[0] ?? source.title ?? "Document"}
                                                            {source.page && <span className="text-on-surface-variant/60">p. {source.page}</span>}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </BubbleContent>
                                </Bubble>
                            </MessageScrollerItem>
                        ))
                    }
                    {!streamedAnswer && processing ? (
                        <MessageScrollerItem messageId="thinking" scrollAnchor={true} className="mx-auto flex w-full max-w-240 px-4 sm:px-8">
                            <Bubble align="start" variant="ghost" className="w-full">
                                <BubbleContent className="border-0! bg-transparent! px-0! py-0! text-on-surface shadow-none">
                                    <span className="inline-flex items-center gap-2">
                                        <Spinner />
                                        Thinking...
                                    </span>
                                </BubbleContent>
                            </Bubble>
                        </MessageScrollerItem>
                    ) : (
                        <MessageScrollerItem messageId="streaming" scrollAnchor={true} className="mx-auto flex w-full max-w-240 px-4 sm:px-8">
                            <Bubble align="start" variant="ghost" className="w-full">
                                <BubbleContent className="border-0! bg-transparent! px-0! py-0! text-on-surface shadow-none">
                                    <Markdown content={streamedAnswer} tone="assistant" classname="body-md" />
                                </BubbleContent>
                            </Bubble>
                        </MessageScrollerItem>
                    )}
                </MessageScrollerContent>
            </MessageScrollerViewport>
            <MessageScrollerButton />
        </MessageScroller>
    )
}