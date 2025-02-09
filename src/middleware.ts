//Esse arquivo define as configurações de proteção de rotas... 

import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("auth_token")?.value;
  const { pathname } = req.nextUrl;

  // Se a rota começar com "/auth"
  if (pathname.startsWith("/auth")) {
    // Se o usuário estiver autenticado, redireciona para o dashboard
    if (token) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
    // Caso contrário, permite o acesso às rotas de autenticação
    return NextResponse.next();
  }

  // Para outras rotas protegidas (ex: /dashboard)
  if (!token) {
    return NextResponse.redirect(new URL("/auth/sign-in", req.url));
  }

  // Permite o acesso se estiver autenticado
  return NextResponse.next();
}

// Configura o middleware para ser aplicado nas rotas de dashboard e autenticação
export const config = {
  matcher: ["/dashboard/:path*", "/auth/:path*"],
};
