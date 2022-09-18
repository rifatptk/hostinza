import React from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import DomainCardBig from "../../Checkout/Checkout/DomainCardBig";

export default function DomainsInCart() {
  const { t } = useTranslation("common");
  return (
    <div className="bg-white w-full h-auto pt-24 pb-20 md:pb-28">
      <div className="container w-full items-center mx-auto">
        <div className="flex flex-col w-full align-middle">
          <h3 className="text-blue-content text-2xl md:text-4xl font-bold text-start font-poppins mt-2 uppercase">
            <span className="text-black">{t("Domains")}</span> {t("in Cart")}
          </h3>
          <p className="text-gray-500 text-lg font-normal text-start font-poppins">
            {t("Proceed to checkout")}
          </p>
        </div>
        <div className="flex flex-col align-middle w-full gap-2 p-5 mt-10">
          <DomainCardBig available={true} inCart={true} />
          <DomainCardBig available={false} inCart={true} />
          <DomainCardBig available={true} inCart={true} />
          <DomainCardBig available={true} inCart={true} />

        </div>
        <div className="flex flex-row justify-end align-middle w-full mt-10">
          <button className="w-fit text-sm md:text-base text-light-blue py-3 px-5 border-2 border-light-blue rounded-full mr-5">
            {t("Go Back")}
          </button>
          <button className="w-fit text-sm md:text-base text-white py-2 px-5 bg-light-blue rounded-full">
            {t("Checkout")}
          </button>
        </div>
      </div>
    </div>
  );
}
