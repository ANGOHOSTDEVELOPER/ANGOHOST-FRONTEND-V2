import {Rubik,Rubik_Mono_One } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800', '900']
});

const geistMono = Rubik_Mono_One({
  variable: "--font-rubik-mono-one",
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <body
      style={{fontFamily: `var(--font-rubik)`}}
        className={`${geistSans.variable} ${geistMono.variable} font-regular antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
