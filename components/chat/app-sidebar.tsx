"use client"
import { Briefcase, Plus } from "lucide-react";
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
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                            <div className="flex items-center gap-2">
                                <Briefcase />
                                <span className="">Projects</span>
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup title="Chat History">
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupAction>
                        <Plus />
                    </SidebarGroupAction>
                    <SidebarMenu>
                        {chats.map((chat) => (
                            <SidebarMenuItem key={chat.id}>
                                <SidebarMenuButton render={
                                    <div>{chat.title}</div>
                                }/>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    )
}