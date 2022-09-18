import React, { useState } from "react";
import CheckoutHero from "./CheckoutHero";
import ChooseDomains from "./ChooseDomains";
import ChooseServerMain from "./ChooseServer/ChooseServerMain";
import LoginMain from "./LoginMain";
import SignupMain from "./SignupMain";
import PaymentDetailsMain from "./PaymentDetailsMain";
import SuccessMain from "./SuccessMain";

export default function CheckoutMain() {
  const [checkoutStep, setCheckoutStep] = useState(0);

function handleBack(){
  document.documentElement.scrollTo(0, 0);
    setCheckoutStep(0)
}


function handleClickServers(){
  document.documentElement.scrollTo(0, 0);
    setCheckoutStep(1)
}
function handleClickLogin(){
  document.documentElement.scrollTo(0, 0);
    setCheckoutStep(2)
}

function handleClickSignup(){
  document.documentElement.scrollTo(0, 0);
    setCheckoutStep(3)
}

function handleClickPayment(){
  document.documentElement.scrollTo(0, 0);
    setCheckoutStep(4)
}

function handleClickSuccess(){
  document.documentElement.scrollTo(0, 0);
    setCheckoutStep(5)
}




  return (
    <>
    <CheckoutHero />
      <div className="py-10">
        {checkoutStep === 0 && (
        <ChooseDomains clickCheckout={handleClickServers} />)} 
        {checkoutStep === 1 && (
        <ChooseServerMain clickCheckoutBack={handleBack} clickCheckout={handleClickLogin} />)}
        {checkoutStep === 2 && (
        <LoginMain clickCheckoutBack={handleClickServers} clickCheckout={handleClickSuccess} clickCheckout2={handleClickSignup} />)}
        {checkoutStep === 3 && (
        <SignupMain clickCheckoutBack={handleClickLogin} clickCheckout={handleClickPayment} />)}
        {checkoutStep === 4 && (
        <PaymentDetailsMain clickCheckoutBack={handleClickSignup} clickCheckout={handleClickSuccess} />)}
        {checkoutStep === 5 && (
        <SuccessMain />)}
      </div>
    </>
  );
}
