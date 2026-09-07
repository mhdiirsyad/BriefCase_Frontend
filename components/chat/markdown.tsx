import { cn } from "cn";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownProps {
    content: string;
    tone: "user" | "assistant" | "system";
    classname: string;
}

export default function Markdown({ content, tone, classname }: MarkdownProps) {
    return (
        <div className={cn(
            "min-w-0 max-w-full wrap-break-words whitespace-pre-wrap text-sm",
            tone === "user" && "[&_a]:text-primary",
            classname
        )}
        >
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    a: ({ href, children }) => (
                        <Link href={href ?? "#"}>{children}</Link>
                    ),
                    p: ({ children }) => <p className="last:mb-0">{children}</p>,
                    ul: ({ children }) => <ul className="list-disc space-y-1.5 pl-5 last:mb-0">{children}</ul>,
                    ol: ({ children }) => <ol className="list-decimal space-y-1.5 pl-5 last:mb-0">{children}</ol>,
                    li: ({ children }) => <li className="leading-7">{children}</li>,
                    strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
                    em: ({ children }) => <em className="italic">{children}</em>,
                    code: ({ children, className: codeClassName }) => {
                        const isBlock = Boolean(codeClassName)
                        return (
                            <code className={isBlock ? "block overflow-x-auto rounded-lg bg-muted px-3 py-2 text-sm leading-6"
                                : "rounded bg-muted px-1.5 py-0.5 text-sm font-medium"
                            }>
                                {children}
                            </code>
                        )
                    },
                    pre: ({ children }) => <pre className=" max-w-full overflow-x-auto rounded-xl bg-muted p-4 last:mb-0">{children}</pre>,
                    h1: ({ children }) => <h1 className=" font-heading text-xl font-semibold last:mb-0">{children}</h1>,
                    h2: ({ children }) => <h2 className=" font-heading text-lg font-semibold last:mb-0">{children}</h2>,
                    h3: ({ children }) => <h3 className=" text-base font-semibold last:mb-0">{children}</h3>,
                    blockquote: ({ children }) => <blockquote className=" border-l-2 border-primary/40 pl-3 italic text-muted-foreground last:mb-0">{children}</blockquote>,
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    )
}