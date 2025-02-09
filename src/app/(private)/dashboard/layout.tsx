import type { Metadata } from "next";

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
    <main>
        <h1>Dashboard Layout</h1>
        {children}
    </main>
  );
}
