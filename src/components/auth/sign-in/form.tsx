'use client'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useForm } from "react-hook-form"
import AuthHelper, { ISignInProps } from "@/helpers/auth/authHelper"
import { Oval } from "react-loader-spinner"

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {

    const { register, handleSubmit } = useForm<ISignInProps>()
    const { signIn, loading } = AuthHelper(true)

  return (
    <form onSubmit={handleSubmit(signIn)} className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Entre na sua conta</h1>
        <p className="text-balance text-sm w-max text-muted-foreground">
          Insira as suas credenciais abaixo
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input className="h-12 rounded-[16px]" {...register('email')} id="email" type="email" placeholder="user@example.com" required />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Senha</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Esqueceu a senha?
            </a>
          </div>
          <Input className="h-12 rounded-[16px]" {...register('password')} id="password" type="password" required />
        </div>
        <Button  disabled={loading} className="h-12 rounded-[16px] w-full" type="submit">
          {loading ? 
          <Oval
          visible={true}
          height="40"
          width="40"
          color="#555"
          ariaLabel="oval-loading"
          />
          :
          'Entre na sua conta'  
        }
        </Button>
        
      </div>
      <div className="text-center text-sm">
        Não tem uma conta?{" "}
        <Link href="/" className="underline underline-offset-4">
          Torne-se cliente Angohost
        </Link>
      </div>
    </form>
  )
}
