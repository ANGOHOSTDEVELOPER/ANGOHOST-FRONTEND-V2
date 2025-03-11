import { FRONTENDTYPE } from "@/types/frontend-type";
import { CreditCard, List, ShoppingCart } from "lucide-react";

const steps = [
  { id: "ViewCart", label: "Carrinho", icon: ShoppingCart },
  { id: "ViewPayment", label: "Pagamento", icon: CreditCard },
  { id: "ViewOrder", label: "Resumo", icon: List },
];


interface CheckoutStepsProps {
  screen:FRONTENDTYPE.IViewCart
}
export default function CheckoutSteps({screen}:CheckoutStepsProps) {

  return (
    <div className="flex items-center justify-center gap-4 bg-black text-white py-4">
      {steps.map((step, index) => {
        const isActive = screen === step.id;
        const Icon = step.icon;

        return (
          <div key={step.id} className="flex items-center">
            <div className="flex items-center gap-2">
              <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-gray-400"}`} />
              <span className={isActive ? "text-white" : "text-gray-400"}>
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && <div className="w-12 h-px bg-gray-600 mx-4"></div>}
          </div>
        );
      })}
    </div>
  );
}



{/* <div className="flex items-center justify-center gap-6 bg-black text-white py-4">
{steps.map((step, index) => (
  <div key={step.name} className="flex items-center">
    {step.completed ? (
      step.icon === "cart" ? (
        <ShoppingCart className="text-white w-5 h-5" />
      ) : step.icon === "payment" ? (
        <CreditCard className="text-white w-5 h-5" />
      ) : (
        <List className="text-white w-5 h-5" />
      )
    ) : (

      step.icon === "cart" ? (
          <ShoppingCart className="text-gray-400 w-5 h-5" />
        ) : step.icon === "payment" ? (
          <CreditCard className="text-gray-400 w-5 h-5" />
        ) : (
          <List className="text-gray-400 w-5 h-5" />
        )

   
    )}
    <span className={`ml-2 ${step.completed ? "text-white" : "text-gray-400"}`}>
      {step.name}
    </span>
    {index < steps.length - 1 && <div className="w-12 h-px bg-gray-600 mx-4"></div>}
  </div>
))}
</div> */}