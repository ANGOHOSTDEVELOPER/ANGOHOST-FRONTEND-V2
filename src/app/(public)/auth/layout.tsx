import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Angohost | Auth",
  description: "O seu site sempre no ar!",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
        {children}
    </main>
  );
}
