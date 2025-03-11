"use client"

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {  Trash } from "lucide-react";

import { FRONTENDTYPE } from "@/types/frontend-type";


interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

// interface ICreateInvoice {
//   user_id: number;
//   products: {
//     id: number;
//     quantity: number;
//     rank: number;
//   }[];
//   total: number;
//   pmethod: string;
//   status: string;
// }



interface ViewCartProps {
  setScreen: (screen: FRONTENDTYPE.IViewCart) => void;
}

const ViewCart = ({setScreen}:ViewCartProps) => {
  
  
  const [cart, setCart] = useState<Product[]>([
    { id: 1, name: "Plano de Hospedagem", price: 5000, quantity: 1 },
    { id: 2, name: "Domínio .ao", price: 10000, quantity: 1 },
  ]);



  const [paymentMethod, setPaymentMethod] = useState("bai");
  const suggestions: Product[] = [
    { id: 3, name: "Email Profissional", price: 3000, quantity: 1 },
    { id: 4, name: "VPS Linux", price: 15000, quantity: 1 },
  ];

  const handleQuantityChange = (id: number, quantity: number) => {
    setCart(cart.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item)));
  };

  const handleAddToCart = (product: Product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)));
    } else {
      setCart([...cart, product]);
    }
  };

  const handleRemove = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // const handleCheckout = async () => {
  //   const invoiceData: ICreateInvoice = {
  //     user_id: 1, // Alterar para o ID do usuário logado
  //     products: cart.map((item, index) => ({
  //       id: item.id,
  //       quantity: item.quantity,
  //       rank: index + 1,
  //     })),
  //     total: cart.reduce((total, item) => total + item.price * item.quantity, 0),
  //     pmethod: paymentMethod,
  //     status: "unpaid",
  //   };

  //   try {
  //     const response = await fetch("/api/invoices", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(invoiceData),
  //     });

  //     if (!response.ok) throw new Error("Erro ao processar pagamento");

  //     alert("Pedido realizado com sucesso!");
  //   } catch (error) {
  //     console.error(error);
  //     alert("Erro ao finalizar a compra");
  //   }
  // };
  

  const onNextScreen = () => {
    setScreen("ViewPayment")
  }


  return (
    <>

    <div className=" w-full container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Carrinho */}
      <div className="md:col-span-2">
        <Card>
          <CardContent className="p-4 space-y-4">
            <h2 className="text-xl font-bold">Carrinho</h2>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b pb-2">
                <span>{item.name}</span>
                <Input
                  type="number"
                  value={item.quantity}
                  min={1}
                  onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                  className="w-16 text-center"
                />
                <span>{(item.price * item.quantity).toLocaleString("pt-AO")} KZ</span>
                <Button variant="destructive" size="icon" onClick={() => handleRemove(item.id)}>
                  <Trash size={16} />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Pagamento e Resumo */}
      <div>
        <Card>
          <CardContent className="p-4 space-y-4">
            <h2 className="text-xl font-bold">Resumo</h2>
            <Separator />
            
            <div className="flex justify-between">
              <span>Total</span>
              <span>{cart.reduce((total, item) => total + item.price * item.quantity, 0).toLocaleString("pt-AO")} KZ</span>
            </div>
            <Select value={paymentMethod} onValueChange={setPaymentMethod}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione uma opção" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bai">BAI Directo</SelectItem>
                <SelectItem value="transferencia">Transferência Bancária</SelectItem>
                <SelectItem value="multicaixa">Multicaixa Express</SelectItem>
              </SelectContent>
            </Select>
            <Button className="w-full" onClick={onNextScreen}>Continuar</Button>
          </CardContent>
        </Card>
      </div>

      {/* Sugestões de Produtos */}
      <div className="md:col-span-3">
        <h2 className="text-xl font-bold">Sugestões</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {suggestions.map((product) => (
            <Card key={product.id}>
              <CardContent className="p-4 flex justify-between items-center">
                <span>{product.name}</span>
                <span>{product.price.toLocaleString("pt-AO")} KZ</span>
                <Button variant="outline" onClick={() => handleAddToCart(product)}>Adicionar</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="md:col-span-3">
        <h2 className="text-xl font-bold">Sugestões Hospedagem</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {suggestions.map((product) => (
            <Card key={product.id}>
              <CardContent className="p-4 flex justify-between items-center">
                <span>{product.name}</span>
                <span>{product.price.toLocaleString("pt-AO")} KZ</span>
                <Button variant="outline" onClick={() => handleAddToCart(product)}>Adicionar</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="md:col-span-3">
        <h2 className="text-xl font-bold">Sugestões Microsoft Exange</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {suggestions.map((product) => (
            <Card key={product.id}>
              <CardContent className="p-4 flex justify-between items-center">
                <span>{product.name}</span>
                <span>{product.price.toLocaleString("pt-AO")} KZ</span>
                <Button variant="outline" onClick={() => handleAddToCart(product)}>Adicionar</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>

    </>
  );
};

export default ViewCart;
