import React from "react";
import useTranslation from "next-translate/useTranslation";

const DomainCardBig = (props) => {
  const { t } = useTranslation("common");

  const domainName = props.domainName || "myDomain.com";
  const domainPrice = props.domainPrice || "$450.50";
  const renewalPrice = props.renewalPrice || "$27.99";
  const available = props.available;

  return (
    <div className="w-full flex flex-wrap align-middle justify-between py-3 px-5 rounded-xl border bg-light-gray hover:bg-gray-100 cursor-pointer">
      <div className="w-full md:w-fit flex flex-col md:flex-row gap-2 md:gap-10">
        {/* <input className="w-5 h-5 my-auto" type={"checkbox"} /> */}
        <div className="flex flex-col align-top my-auto">
          <p className="text-2xl font-normal text-black">{t(domainName)}</p>
          {available ? (
            <p className="text-base font-normal text-green-500">
              {t("Available!")}
            </p>
          ) : (
            <p className="text-base font-normal text-red-500">
              {t("Not Available!")}
            </p>
          )}
        </div>
      </div>
      <div className="my-auto flex flex-col align-middle md:align-bottom items-end h-auto w-full md:w-auto mt-5 md:mt-0 ">
        <p className="w-fit my-auto px-3 py-0 h-fit rounded-full text-xs font-medium uppercase text-white bg-gradient-to-r from-orange-600 to-orange-300">
          {t("Premium")}
        </p>
        <p className="text-xl md:text-2xl font-semibold text-black mt-5 md:mt-1 ml-auto mr-auto md:mr-0">
          {t(domainPrice)}{" "}
          <span className="text-sm ml-1 font-normal">{t("+VAT/1st year")}</span>
        </p>
        <p className="text-sm font-normal mt-1 ml-auto mr-auto md:mr-0">
          {t(`For renewal ${renewalPrice} + VAT`)}
        </p>
      </div>
      {props.CTA && (
        <button
          className={`w-fit text-sm md:text-base text-white h-fit my-2 md:my-auto py-2 px-5 rounded-full ${
            available ? "bg-light-blue hover:bg-blue-content" : "bg-slate-300"
          }`}
        >
          {t("Add to Cart")}
        </button>
      )}
      {props.inCart && (
        <button className="w-fit text-sm md:text-base text-white bg-red-600 hover:bg-red-500 h-fit mt-2  md:my-auto py-2 px-3 -ml-3  rounded-full">
          {t("Remove from Cart")}
        </button>
      )}
    </div>
  );
};

export default DomainCardBig;
