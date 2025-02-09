import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Angohost | Home",
  description: "O seu site sempre no ar!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
        <h1>Public Layout</h1>
        {children}
    </main>
  );
}
