import type { Metadata } from "next";
import { AppSidebar } from "@/components/dashboard/sidebar/sidebar"

import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { BreadcrumbGlobal } from "@/components/breadcumb-global";

export const metadata: Metadata = {
  title: "Angohost | Dashboard",
  description: "Gerencie os seus servi;os!",
};

export default function DashbaordLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <BreadcrumbGlobal/>
          </div>
        </header>
       
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
