"use client"
import { Briefcase, BriefcaseBusiness, Plus } from "lucide-react";
import { 
    Sidebar, 
    SidebarContent, 
    SidebarFooter, 
    SidebarGroup, 
    SidebarGroupAction, 
    SidebarGroupContent, 
    SidebarGroupLabel, 
    SidebarHeader, 
    SidebarMenu, 
    SidebarMenuButton, 
    SidebarMenuItem, 
    SidebarRail
} from "../ui/sidebar";
import { useChatStore } from "@/lib/store/chatStore";

export default function AppSidebar({...props}: React.ComponentProps<typeof Sidebar>) {
    const chats = useChatStore((state) => state.history);
    const startNewSession = useChatStore((state) => state.startNewSession);
    const loadSession = useChatStore((state) => state.loadSession);
    return (
        <Sidebar {...props} className="border-r border-outline-variant/55 bg-surface-container-low text-on-surface-variant">
            <SidebarHeader className="border-b border-outline-variant/45 p-4">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton className="h-10 text-on-surface hover:bg-surface-container-high">
                            <div className="flex items-center gap-2">
                                <div className="flex size-7 items-center justify-center rounded-lg bg-primary-container text-on-primary"><Briefcase className="size-3.5" /></div>
                                <span className="font-display font-semibold">BriefCase</span>
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup title="Chat History" className="px-3 py-5">
                    <SidebarGroupLabel className="label-sm uppercase tracking-[0.03em] text-on-surface-variant/70">Recent conversations</SidebarGroupLabel>
                    <SidebarGroupAction onClick={startNewSession} title="New conversation" className="text-secondary hover:bg-secondary-container/40">
                        <Plus />
                    </SidebarGroupAction>
                    <SidebarMenu className="mt-3 gap-1">
                        {chats.length === 0 && <p className="px-2 py-4 text-xs leading-5 text-on-surface-variant/65">Your saved conversations will appear here.</p>}
                        {chats.map((chat) => (
                            <SidebarMenuItem key={chat.id}>
                                <SidebarMenuButton onClick={() => loadSession(chat.id)} className="h-auto min-h-9 whitespace-normal py-2 text-left text-sm text-on-surface-variant hover:bg-white hover:text-on-surface">
                                    {chat.title}
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    )
}