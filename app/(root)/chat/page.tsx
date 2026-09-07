import AppHeader from "@/components/chat/app-header";
import AppSidebar from "@/components/chat/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function ChatPage() {
    return (
        <SidebarProvider className="h-screen">
            <AppSidebar className="bg-surface-container" />
            <SidebarInset className="h-screen bg-surface">
                <AppHeader />
            </SidebarInset>
        </SidebarProvider>
    )
}