"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2 } from "lucide-react";

const initialCart = [
  { id: 1, name: "Produto 1", price: 10000, quantity: 1 },
  { id: 2, name: "Produto 2", price: 15000, quantity: 1 },
];

export default function CartPage() {
  const [cart, setCart] = useState(initialCart);

  interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }


  const updateQuantity = (id: number, quantity: number) => {
    setCart((prevCart: CartItem[]) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCart((prevCart: CartItem[]) => prevCart.filter((item: CartItem) => item.id !== id));
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Carrinho de Compras</h1>
      <div className="space-y-4">
        {cart.map((item) => (
          <Card key={item.id} className="flex items-center justify-between p-4">
            <CardContent className="flex w-full justify-between items-center">
              <span>{item.name}</span>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  className="w-16 border rounded-md text-center"
                />
                <span>{(item.price * item.quantity).toLocaleString("pt-AO", { style: "currency", currency: "AOA" })}</span>
                <Button variant="ghost" onClick={() => removeItem(item.id)}>
                  <Trash2 className="w-5 h-5 text-red-500" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-6 text-right text-lg font-semibold">
        Total: {total.toLocaleString("pt-AO", { style: "currency", currency: "AOA" })}
      </div>
      <Button className="w-full mt-4" disabled={cart.length === 0}>
        Finalizar Compra
      </Button>
    </div>
  );
}
