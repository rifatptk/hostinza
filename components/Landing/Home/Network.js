import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import useTranslation from "next-translate/useTranslation";


import NetworkMap from "./NetworkMap";
import MarketingLeft from "./MarketingLeft";
import MarketingRight from "./MarketingRight";

export default function Network() {
  const { t } = useTranslation("common");

  return (
    <div className="bg-white w-full h-auto pt-24 pb-4 md:pb-4">
      <div className="container w-full items-center mx-auto">
        <div className="flex flex-col w-full align-middle">
          <p className="text-gray-500 text-lg font-normal text-center font-poppins">
            {t("World-class Data centers With Premium Connectivity")}
          </p>
          <h3 className="text-blue-content text-2xl md:text-4xl font-bold text-center font-poppins mt-2">
            <span className="text-black">{t("HOSTINZA")}</span> {t("NETWORK")}
          </h3>
          {/* ---------------------------------MAP--------------------------------------- */}
          <NetworkMap />
          {/* ---------------------------------MAP--------------------------------------- */}

          {/* ---------------------------------Feature1---------------------------------- */}
          <MarketingLeft />
          {/* ---------------------------------Feature1---------------------------------- */}

          {/* ---------------------------------Feature2---------------------------------- */}
          <MarketingRight />
          {/* ---------------------------------Feature2---------------------------------- */}
        </div>
      </div>
    </div>
  );
}
