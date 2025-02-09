import { LoginForm } from "@/components/auth/sign-in/form";
import { GalleryVerticalEnd } from "lucide-react";
import Image from "next/image";
import bg from '@/assets/images/login-bg.jpg'

export default function SignIn() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Angohost
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
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
