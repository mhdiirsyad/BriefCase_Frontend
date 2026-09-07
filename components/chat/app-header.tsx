"use client"

import { SidebarTrigger } from "../ui/sidebar";
import MessagePanel from "./message-panel";
import { MessageScrollerProvider } from "../ui/message-scroller";
import { InputGroup, InputGroupAddon, InputGroupTextarea } from "../ui/input-group";
import { ArrowUp, FileText, LockKeyhole, LucideProps, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { sendMessageStream } from "@/lib/chat";
import { MAX_MESSAGES_PER_SESSION, useChatStore } from "@/lib/store/chatStore";
import Link from "next/link";

function GithubIcon({ ...props }: LucideProps) {
    return (
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      ></path>
    </svg>
  )}
export default function AppHeader() {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const messages = useChatStore((state) => state.messages);
    const canSendMessage = useChatStore((state) => state.canSendMessage);
    const [streamedAnswer, setStreamedAnswer] = useState("");
    const userMessageCount = messages.filter((item) => item.role === "user").length;
    async function handleSendMessage() {
        const query = message.trim();
        if (!query || loading || !canSendMessage()) return;

        try {
            setLoading(true);
            setStreamedAnswer("");
            await sendMessageStream({ query, chatHistory: messages.map(({ role, content }) => ({ role, content })) }, {
                onToken: (delta) => setStreamedAnswer((current) => current + delta),
            });
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : "An unknown error occurred";
            console.error(errorMessage);
        } finally {
            setLoading(false);
            setStreamedAnswer("");
            setMessage("");
        }
    }
    return (
        <div className="flex h-svh min-h-0 flex-1 flex-col bg-surface">
            <header className="flex h-16 shrink-0 items-center justify-between border-b border-outline-variant/45 bg-surface/90 px-4 backdrop-blur-md sm:px-8">
                <div className="flex items-center gap-3">
                    <SidebarTrigger className="text-on-surface-variant hover:bg-surface-container-high" />
                    <div className="hidden h-5 w-px bg-outline-variant sm:block" />
                    <div>
                        <p className="font-display text-sm font-semibold text-on-surface">Legal workspace</p>
                        <p className="hidden text-xs text-on-surface-variant sm:block">Private assistant session</p>
                    </div>
                </div>
                <Link href="https://github.com/your-repo" target="_blank" className="flex items-center gap-2 rounded-full border border-outline-variant/60 bg-white/70 px-3 py-1.5 text-xs font-medium text-on-surface-variant">
                    <GithubIcon className="size-3.5 text-secondary" />
                    Get the code
                </Link>
            </header>
            <main className="flex min-h-0 flex-1 flex-col">
                <MessageScrollerProvider>
                    <div className="min-h-0 flex-1">
                        {messages.length === 0 && !streamedAnswer ? (
                            <div className="mx-auto flex h-full w-full max-w-240 flex-col items-center justify-center px-6 py-16 text-center">
                                <div className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-primary-container text-secondary-container shadow-sm">
                                    <Sparkles className="size-6" />
                                </div>
                                <p className="label-sm mb-3 uppercase text-secondary">Executive intelligence</p>
                                <h1 className="headline-xl-mobile text-on-surface sm:text-4xl sm:leading-11">What can I help you decide?</h1>
                                <p className="body-md mt-4 max-w-[42rem] text-on-surface-variant">Ask about Indonesian regulations, employment law, or the documents in your workspace.</p>
                                <div className="mt-8 grid w-full max-w-[52rem] gap-3 text-left sm:grid-cols-3">
                                    {["Summarize a regulation", "Find a relevant clause", "Compare two documents"].map((prompt) => (
                                        <div key={prompt} className="rounded-lg border border-outline-variant/60 bg-white/75 p-3 text-sm text-on-surface-variant shadow-[0_1px_3px_rgba(26,43,43,0.04)]">
                                            <FileText className="mb-3 size-4 text-secondary" />
                                            {prompt}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <MessagePanel messages={messages} streamedAnswer={streamedAnswer} processing={loading} />
                        )}
                    </div>
                </MessageScrollerProvider>
                <div className="w-full px-4 pb-4 pt-3 sm:px-8 sm:pb-6">
                    <div className="mx-auto flex w-full max-w-240 flex-col gap-2">
                        <InputGroup className="min-h-14 rounded-xl border border-outline-variant/70 bg-white/90 px-2 shadow-[0_8px_24px_rgba(26,43,43,0.06)] backdrop-blur-xl focus-within:border-secondary focus-within:ring-3 focus-within:ring-tertiary-fixed/60">
                            <InputGroupTextarea
                                className="min-h-10 w-full resize-none border-0 px-3 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/55 focus:ring-0 sm:text-base"
                                rows={1}
                                placeholder={canSendMessage() ? "Ask your legal assistant..." : "Start a new conversation to continue"}
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                                disabled={loading || !canSendMessage()}
                                onKeyDown={(event) => {
                                    if (event.key === "Enter" && !event.shiftKey) {
                                        event.preventDefault();
                                        void handleSendMessage();
                                    }
                                }}
                            />
                            <InputGroupAddon align="inline-end" className="pr-1">
                                <Button variant="ghost" onClick={handleSendMessage} disabled={loading || !message.trim() || !canSendMessage()} aria-label="Send message"
                                    className="size-10 rounded-lg bg-primary-container text-on-primary hover:bg-secondary disabled:bg-surface-container-high disabled:text-on-surface-variant/50">
                                    <ArrowUp className="size-4" />
                                </Button>
                            </InputGroupAddon>
                        </InputGroup>
                        <div className="flex items-center justify-between px-1 text-xs text-on-surface-variant/75">
                            <span>Shift + Enter for a new line</span>
                            <span>{userMessageCount}/{MAX_MESSAGES_PER_SESSION} questions</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}