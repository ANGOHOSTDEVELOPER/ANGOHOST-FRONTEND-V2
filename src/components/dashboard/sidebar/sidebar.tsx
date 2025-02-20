"use client"

import * as React from "react"
import {
  CreditCard,
  Globe,
  Mail,
  Server,
  SquareTerminal,
  User,
  UsersRound
} from "lucide-react"

import { NavMain } from "@/components/dashboard/sidebar/nav-main"
import { NavProjects } from "@/components/dashboard/sidebar/nav-projects"
import { NavUser } from "@/components/dashboard/sidebar/nav-user"
import { TeamSwitcher } from "@/components/dashboard/sidebar/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import Image from "next/image"
import logo from '@/assets/images/Icone-02 - Cópia.png'

// This is sample data.
const data = {
  user: {
    name: "Elisandro Franco",
    email: "elisandrofranco2002@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Angohost",
      logo: <Image src={logo} alt="logo" className="w-full h-full"/>,
      plan: "Seu site sempre no ar!",
    }
  ],
  navMain: [
    {
      title: "Hospedagem",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Serviços ativos",
          url: "#",
        },
        {
          title: "Faturas",
          url: "#",
        },
      ],
    },
    {
      title: "Domínios",
      url: "#",
      icon: Globe,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "E-mail",
      url: "#",
      icon: Mail,
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
    {
      title: "VPS",
      url: "#",
      icon: Server,
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
  ],
  projects: [
    {
      name: "Suporte",
      url: "#",
      icon: User,
    },
    {
      name: "Carteira",
      url: "#",
      icon: CreditCard,
    },
    {
      name: "Perfil de Contacto",
      url: "dashboard/profile-contact",
      icon: UsersRound,
    }
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
