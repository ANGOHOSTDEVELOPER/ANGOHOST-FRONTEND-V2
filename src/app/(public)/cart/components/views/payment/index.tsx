import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { ButtonOnNextScreen, ButtonOnPrevScreen } from "../../ButtonOnPrevNextScreen";
import { FRONTENDTYPE } from "@/types/frontend-type";
import Script from "next/script";

interface ViewPaymentProps {
  setScreen: (screen: FRONTENDTYPE.IViewCart) => void;
  totalPrice: number;
}

const ViewPayment = ({ setScreen, totalPrice }: ViewPaymentProps) => {
  const [paymentMethod, setPaymentMethod] = useState("bai");
  const [paymentDetails, setPaymentDetails] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const onNextScreen = () => {
    processPayment();
  };

  const onPrevScreen = () => {
    setScreen("ViewCart");
  };

  const processPayment = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.gpo.com/pay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          method: paymentMethod,
          amount: totalPrice,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setPaymentDetails(`Pagamento confirmado! Referência: ${data.reference}`);
      
      } else {
        setPaymentDetails("Erro ao processar pagamento. Tente novamente.");
      }
    } catch {
      setPaymentDetails("Erro ao conectar à API de pagamento.");
    }
    finally{

      setLoading(false);
      setScreen("ViewOrder")
    }
  };

  return (

    <>
    <div className="dot bg-white p-4 h-screen">
      <Card>
        <CardContent className="p-4 space-y-4">
          <h2 className="text-xl font-bold">Pagamento</h2>
          <Separator />

          <div>
            <p className="text-gray-600">Total a pagar: <span className="font-bold">Kz {totalPrice}</span></p>
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

          {paymentDetails && <p className="text-green-600">{paymentDetails}</p>}

          <div className="flex justify-between mt-4">
            <ButtonOnPrevScreen onPrevScreen={onPrevScreen} />
            <Button disabled={loading} className="w-full" onClick={onNextScreen}>
              {loading ? "Processando..." : "Pagar"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
    <Script
        src="https://widget.appypay.co.ao/main.js"
        id="appyPay-charges-widget-v2"
        data-merchant-name="QUx8Q~y3k2fPu7ooBsEQjPWh~hN_p0vWl5sUObXx"
        data-api-key="73945d71-7397-4682-ac8b-27019ac43208"
        data-client-id="bf2ff15a-f497-4e3c-92d4-3414a5d984c3"
        data-payment-amount="15.00"
        data-payment-description="Premium Roast Coffee Beans 1kg"
        strategy="afterInteractive" // ou "afterInteractive" conforme a necessidade

      />
    </>

  );
};

export default ViewPayment;