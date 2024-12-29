"use client"

import * as React from "react"
import {
    BookOpen,
    Database,
    FolderCog,
    LucideMagnet,
    MSquareIcon,
    Projector,
    Router,
    Settings2,
    Unplug,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar"
import { ProjectSwitcher } from "../project-switcher"

// This is sample data.
const data = {
    user: {
        name: "chintu",
        email: "chintu@example.com",
        avatar: "@/assets/logo.png",
    },
    projects: [
        {
            name: "Project 1 API",
            logo: Projector,
            plan: "Free",
        },
        {
            name: "Project 2 API",
            logo: LucideMagnet,
            plan: "Startup",
        },
        {
            name: "Project 3 API",
            logo: MSquareIcon,
            plan: "Plus",
        },
    ],
    navMain: [
        {
            title: "Data Base",
            url: '#',
            icon: Unplug,
            items: [
                {
                    title: "Connect",
                    url: "#",
                },
                {
                    title: "Manage",
                    url: "#",
                }
            ]
        },
        {
            title: "Models",
            url: "#",
            icon: Database,
            items: [
                {
                    title: "Create",
                    url: "#",
                },
                {
                    title: "Manage",
                    url: "#",
                },
                {
                    title: "Playground",
                    url: "#",
                },
            ],
        },
        {
            title: "Controllers",
            url: "#",
            icon: FolderCog,
            isActive: true,
            items: [
                {
                    title: "Create",
                    url: "#",
                },
                {
                    title: "Manage",
                    url: "#",
                },
            ],
        },
        {
            title: "API Service",
            url: "#",
            icon: Router,
            items: [
                {
                    title: "Introduction",
                    url: "#",
                },
                {
                    title: "Get Started",
                    url: "#",
                },
                {
                    title: "Tutorials",
                    url: "#",
                },
                {
                    title: "Changelog",
                    url: "#",
                },
            ],
        },
    ],
    footer: [
        {
            title: "Settings",
            url: "#",
            icon: Settings2,
            items: [
                {
                    title: "General",
                    url: "#",
                },
                {
                    title: "Team",
                    url: "#",
                },
                {
                    title: "Billing",
                    url: "#",
                },
                {
                    title: "Limits",
                    url: "#",
                },
            ],
        },
        {
            title: "Documentation",
            url: "#",
            icon: BookOpen,
            items: [
                {
                    title: "Introduction",
                    url: "#",
                },
                {
                    title: "Get Started",
                    url: "#",
                },
                {
                    title: "Tutorials",
                    url: "#",
                },
                {
                    title: "Changelog",
                    url: "#",
                },
            ],
        },
    ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <NavUser user={data.user} />
                <ProjectSwitcher projects={data.projects} />
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarFooter>
                <NavMain items={data.footer} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
