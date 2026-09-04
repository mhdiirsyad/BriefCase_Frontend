import { Separator } from "@base-ui/react";
import { SidebarTrigger } from "../ui/sidebar";
import MessagePanel from "./message-panel";
import { MessageScrollerProvider } from "../ui/message-scroller";
import { InputGroup, InputGroupAddon, InputGroupTextarea } from "../ui/input-group";
import { Send } from "lucide-react";
import { Button } from "../ui/button";

export default function AppHeader() {
    return (
        <>
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                <div className="flex items-center gap-2 px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator
                        orientation="vertical"
                        className="mr-2 data-[orientation=vertical]:h-4"
                    />
                </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0 h-screen justify-center max-w-full">
                <MessageScrollerProvider>
                    <div className="flex flex-1 bg-surface-container w-full max-w-4xl mx-auto">
                        <MessagePanel messages={[]} />
                    </div>
                </MessageScrollerProvider>
                <InputGroup className="sticky w-full max-w-4xl mx-auto bottom-0 bg-surface-container">
                    <InputGroupTextarea
                        className="w-full resize-none border-0 bg-transparent px-3 py-2 text-sm placeholder:text-zinc-400 focus:ring-0 sm:text-base"
                        rows={1}
                        placeholder="Type your message..."
                    />
                    <InputGroupAddon align="inline-end" 
                    className="">
                        <Button variant="ghost" 
                        className="border-none mx-4 w-12 h-12 rounded-md items-center justify-center bg-secondary-container text-zinc-950 hover:bg-on-secondary-container ml-auto">
                            <Send />
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
            </div>
        </>
    )
}