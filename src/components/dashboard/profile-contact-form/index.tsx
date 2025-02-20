"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { ContactProfileFormData } from "./types";




export default function ContactProfileForm() {
  const { register, handleSubmit } = useForm<ContactProfileFormData>();



  const onSubmit = (data:ContactProfileFormData) => {
    console.log(data);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
    <h2 className="text-lg font-semibold">Criar Perfil de Contato</h2>
    <p className="text-sm text-gray-600">Para registrar ou transferir domínios e emitir faturas, será necessário criar um ou mais perfis.</p>
    
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
      <div>
        <label className="block text-sm font-medium">Nome do Perfil*</label>
        <Input {...register("profileName", { required: true })} placeholder="Nova configuração" />
      </div>

      <div className="flex items-center gap-2">
        <Checkbox id="foreign" {...register("isForeign")}   />
        <label htmlFor="foreign" className="text-sm">Este perfil pertence a um cidadão estrangeiro</label>
      </div>

      <div>
        <label className="block text-sm font-medium">NIF*</label>
        <div className="flex gap-2">
          <Input {...register("nif", { required: true })} placeholder="Insira o seu número de Identificação Fiscal" />
          <Button type="button" className=" text-white">Validar</Button>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">Empresa/Indivíduo*</label>
        <Input {...register("companyOrIndividual", { required: true })} placeholder="Nome do titular do domínio" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Email*</label>
          <Input {...register("email", { required: true })} placeholder="E-mail do titular do domínio" />
        </div>
        <div>
          <label className="block text-sm font-medium">Número de Telefone*</label>
          <div className="flex gap-2">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="+244" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="+244">+244</SelectItem>
                <SelectItem value="+55">+55</SelectItem>
                <SelectItem value="+351">+351</SelectItem>
              </SelectContent>
            </Select>
            <Input {...register("phone", { required: true })} placeholder="Número de telefone" />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">Endereço*</label>
        <Input {...register("address", { required: true })} placeholder="Endereço de rua, bairro, apartamento" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">País*</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Angola" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="angola">Angola</SelectItem>
              <SelectItem value="brasil">Brasil</SelectItem>
              <SelectItem value="portugal">Portugal</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block text-sm font-medium">Estado/Província*</label>
          <Input {...register("state", { required: true })} placeholder="Estado/Província" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Cidade*</label>
          <Input {...register("city", { required: true })} placeholder="Cidade" />
        </div>
        <div>
          <label className="block text-sm font-medium">Código Postal (Opcional)</label>
          <Input {...register("postalCode")} placeholder="Código postal" />
        </div>
      </div>

      <div className="mt-6">
        <Button type="submit" className="w-full  text-white">Salvar Perfil</Button>
      </div>
    </form>
  </div>
  );
}
