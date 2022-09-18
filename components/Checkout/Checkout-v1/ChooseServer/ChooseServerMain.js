import React from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import CartDomain from "./CartDomain";
import CartOverview from "./CartOverview";
import Services from "./Services";

export default function ChooseServerMain({ clickCheckout, clickCheckoutBack }) {
  const { t } = useTranslation("common");

  return (
    <>

      <div className="sm:!w-[90%] w-[95%] flex gap-14 flex-wrap-reverse	 mx-auto py-10">
        <div className="lg:!w-[70%] md:!w-full w-full">
          <h1 className="text-[1rem] font-medium px-2 ">
            Choose a service for:

            <span className="text-[2rem] sm:!ml-2 ml-0 font-medium text-[#1141d3]">
              domain.com
            </span>
          </h1>

          <Services />
          <Link href="/checkout">
            <a className="text-[0.9rem] text-blue-content font-medium ml-3 my-10">
              Go back to domain selection
            </a>
          </Link>
          <CartDomain domain="mydomain.com" />
        </div>
        <div className="lg:!w-[25%] md:!w-full w-full">
          <CartOverview />
        </div>
      </div>
      <div className="ml-16 -mt-10 flex">
        <button onClick={clickCheckoutBack} className="border-2 border-[#1141d3] mt-4 ml-3 py-2 px-5 rounded-md text-[#1141d3] font-medium">
          {t("← BACK")}
        </button>
        <button onClick={clickCheckout} className="bg-[#1141d3] mt-4 ml-3 py-2 px-5 rounded-md text-white font-medium">
         {t("PROCEED")}
        </button>
      </div>

    </>
  );
}
