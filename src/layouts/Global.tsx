
import { AppSidebar } from "@/components/sidebars/global"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export default function GlobalLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <SidebarTrigger className="-ml-1" />
                Hii
                <main>
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}
