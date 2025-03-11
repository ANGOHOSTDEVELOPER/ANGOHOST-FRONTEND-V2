import { ButtonOnPrevScreen } from "../ButtonOnPrevNextScreen";
import { FRONTENDTYPE } from "@/types/frontend-type";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface ViewOrderProps {
  setScreen: (screen: FRONTENDTYPE.IViewCart) => void;
  cart?: Product[];
  paymentMethod?: string;
}

const ViewOrder = ({ setScreen, cart, paymentMethod }: ViewOrderProps) => {
  
  const total = cart?.reduce((sum, item) => sum + item.price * item.quantity, 0);


  const onPrevScreen = () => {
    setScreen("ViewPayment");
  };

  const handleConfirmOrder = () => {
    alert("Pedido realizado com sucesso!");
  };

  return (
    <div className="dot bg-white p-6 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Resumo do Pedido</h1>
      <Card>
        <CardContent className="p-4 space-y-4">
          {(cart ??[]).length > 0 ? (
            (cart ??[]).map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b pb-2">
                <span>{item.name} (x{item.quantity})</span>
                <span>{(item.price * item.quantity).toLocaleString("pt-AO")} KZ</span>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Seu carrinho está vazio.</p>
          )}
        </CardContent>
      </Card>

      <div className="mt-6">
        <h2 className="text-lg font-semibold">Forma de Pagamento</h2>
        <p className="text-gray-700">{paymentMethod}</p>
      </div>

      <Separator className="my-4" />

      <div className="flex justify-between text-xl font-bold">
        <span>Total:</span>
        <span>{total?.toLocaleString("pt-AO")} KZ</span>
      </div>

      <div className="flex justify-between mt-6">
        <ButtonOnPrevScreen onPrevScreen={onPrevScreen} />
        <Button className="bg-blue-600 text-white px-4 py-2 rounded-md" onClick={handleConfirmOrder}>
          Finalizar Pedido
        </Button>
      </div>
    </div>
  );
};

export default ViewOrder;