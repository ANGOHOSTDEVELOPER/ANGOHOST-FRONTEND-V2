import type { Metadata } from "next";
import Image from "next/image";
import bg from "@/assets/images/login-bg.jpg";
import logo from "@/assets/images/ANGOHOST-02.png";

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
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="flex w-8 h-8 items-center justify-center rounded-md">
              <Image src={logo} alt="logo" className="absolute top-6 left-6 w-[180px]" />
            </div>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          {children}
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block bg-white">
        <Image
          src={bg}
          alt="Image"
          className="absolute inset-0 h-[98%] w-[98%] m-auto rounded-[34px] object-cover dark:brightness-[0.5] dark:grayscale"
        />
      </div>
    </div>
  );
}
