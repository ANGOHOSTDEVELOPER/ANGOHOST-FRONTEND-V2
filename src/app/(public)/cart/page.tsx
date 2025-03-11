"use client"
import CheckoutSteps from "./components/CheckoutSteps/CheckoutSteps";
import ViewCart from "./components/views/cart";
import ViewPayment from "./components/views/payment";
import ViewOrder from "./components/views/order";
import { useState } from "react";
import { FRONTENDTYPE } from "@/types/frontend-type";









const CartPage = () => {

  const [screen, setScreen] = useState<FRONTENDTYPE.IViewCart>("ViewCart");



  return (
    <>
    <section className="w-full h-screen dot">
    <CheckoutSteps screen={screen}/>
    {
      screen==="ViewCart"&&<ViewCart setScreen={setScreen} />

    }
    {
      screen==="ViewPayment"&&<ViewPayment totalPrice={900}  setScreen={setScreen} />

    }
    {
      screen==="ViewOrder"&&<ViewOrder setScreen={setScreen} />

    }
    </section>
  
    </>
  );
};

export default CartPage;
