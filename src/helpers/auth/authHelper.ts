import api from "@/services/api/api";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export interface ISignInProps {
  email: string;
  password: string;
}

interface IResponse {
  success: boolean;
  message: string;
  data: {
    token: string;
    userId: string;
  };
}

export default function AuthHelper(withRedirect: boolean) {
  
  const [loading, setLoading] = useState(false);

  async function signIn(data: ISignInProps) {
    const body = {
      ...data,
      secure_hash: "angohost",
    };

    try {
      setLoading(true);
      const response: IResponse = await (
        await api.post("/auth/login", body)
      ).data;
      if (response.success) {
        const { token, userId } = response.data;
        Cookies.set("auth_token", token);
        Cookies.set("uid", userId);
        if (withRedirect) {
          redirect("/dashboard");
        }
        return true;
      }
      if (withRedirect) {
        toast.error("Credenciais inválidas!");
      }
      return false;
    } catch {
      if (withRedirect) {
        toast.error("Credenciais inválidas!");
      }
      return false;
    } finally {
      setLoading(false);
    }
  }

  function isAuth() {
    const token = Cookies.get('auth_token')
    if (!token) {
      return false
    }
    return true
  }

  return { signIn, loading, isAuth };
}
