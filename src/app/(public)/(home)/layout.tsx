
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
    <main className="w-full">
      
      {children}
    </main>
  );
}

