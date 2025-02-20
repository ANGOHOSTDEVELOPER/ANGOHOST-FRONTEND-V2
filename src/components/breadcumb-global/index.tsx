"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";

// Mapeamento de traduções para os caminhos da aplicação
const pathTranslations: Record<string, string> = {
  "": "Início",
  "dashboard": "Painel",
  "profile": "Perfil",
  "settings": "Configurações",
  "users": "Usuários",
  "projects": "Projetos",
  "docs": "Documentação",
  "components": "Componentes",
  "breadcrumb": "Trilha de Navegação",
  "profile-contact": "Perfil de Contato",
  "configuration-dns":"Configuração DNS",
  "hosting": "Hospedagem",
  "domains": "Domínios",
  "security": "Segurança",
  "billing": "Faturamento",
  "support": "Suporte",
  "tickets": "Tickets",
  "chat": "Chat",
  "cart": "Carrinho",
};

export function BreadcrumbGlobal() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean)
  console.log(pathSegments);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">{pathTranslations[""]}</BreadcrumbLink>
        </BreadcrumbItem>

        {pathSegments.length > 2 && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1">
                  <BreadcrumbEllipsis className="h-4 w-4" />
                  <span className="sr-only">Menu de navegação</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {pathSegments.slice(0, -1).map((segment, index) => {
                    const fullPath = "/" + pathSegments.slice(0, index + 1).join("/");
                    return (
                      <DropdownMenuItem key={fullPath}>
                        <BreadcrumbLink href={fullPath}>
                          {pathTranslations[segment] || segment}
                        </BreadcrumbLink>
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            </BreadcrumbItem>
          </>
        )}

        {pathSegments.map((segment, index) => {
          const isLast = index === pathSegments.length - 1;
          const fullPath = "/" + pathSegments.slice(0, index + 1).join("/");

          return (
            <React.Fragment key={fullPath}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{pathTranslations[segment] || segment}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={fullPath}>{pathTranslations[segment] || segment}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
