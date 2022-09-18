import React from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

import Recommendation from "./Recommendation";

export default function SearchResults() {
  const { t } = useTranslation("common");

  return (
    <div className="bg-white w-full h-auto pt-24 pb-20 md:pb-28">
      <div className="container w-full items-center mx-auto">
        <div className="flex flex-col w-full align-middle">
          <h3 className="text-blue-content text-2xl md:text-4xl font-bold text-start font-poppins mt-2 uppercase">
            <span className="text-black">{t("Search")}</span> {t("Results")}
          </h3>
          <p className="text-gray-500 text-lg font-normal text-start font-poppins">
            {t("Showing Results for")} &ldquo; {"myDomain.com"} &rdquo;
          </p>
        </div>
        <div className="w-full p-5 flex flex-col align-middle mt-10 rounded-xl border-2 border-gray-400">
          <h3 className="text-3xl font-semibold text-black">
          {"myDomain.com"}
          </h3>
          <p className="text-sm text-black font-normal mt-1">
            <span className="text-red-700 font-semibold">
              {t("Not available")}
            </span>
            , {t("because it has already been registered by someone else")}.
          </p>
          <div className="w-full my-5 flex flex-wrap justify-between align-middle p-5 rounded-xl border border-gray-400">
            <div className="flex w-fit">
              <div className="w-12 h-12 relative">
                <Image
                  src={"/images/domainTransfer.png"}
                  layout="fill"
                  alt="DomainTransfer"
                />
              </div>
              <div className="ml-3 flex flex-col justify-center">
                <p className="text-sm text-black font-semibold">
                  {t("Do you already own it?")}
                </p>
                <p className="text-xs text-black font-normal m-0">
                  {t(
                    "If the domain already belongs to you, you can transfer it to us"
                  )}
                </p>
              </div>
            </div>
            <button className="w-fit h-fit my-auto text-sm md:text-base text-white py-2 px-6 bg-light-blue rounded-full">
              Transfer
            </button>
          </div>
          <div className="w-full flex flex-wrap justify-between align-middle p-5 rounded-xl border border-gray-400">
            <div className="flex w-full md:w-[80%]">
              <div className="w-12 h-12 block relative">
                <Image
                  src={"/images/userDomain.png"}
                  layout="fill"
                  alt="DomainTransfer"
                />
              </div>
              <div className="ml-3 flex flex-col justify-center w-[95%]">
                <p className="text-sm text-black font-semibold">
                  {t("Domain Recovery Service - Brokerage")}
                </p>
                <p className="text-xs text-black font-normal m-0">
                  {t(
                    "If the domain that you wanted is already in use and is of particular importance to you and your online activity, we can still try to buy it. We will get in touch with the current owner on your behalf and negotiate the best possible sale price"
                  )}
                </p>
              </div>
            </div>
            <button className="w-fit h-fit my-auto text-sm md:text-base text-white py-2 px-6 bg-light-blue rounded-full">
              {t("Enquire")}
            </button>
          </div>
        </div>

        <Recommendation />

        <div className="flex flex-row justify-end align-middle w-full mt-10">
          <button className="w-fit text-sm md:text-base text-light-blue py-3 px-5 border-2 border-light-blue rounded-full mr-5">
            {t("Go Back")}
          </button>
          <button className="w-fit text-sm md:text-base text-white py-2 px-5 bg-light-blue rounded-full">
            {t("Go to Cart")}
          </button>
        </div>
      </div>
    </div>
  );
}
