import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import useTranslation from "next-translate/useTranslation";

export default function MarketingLeft() {
  const { t } = useTranslation("common");



  return (
    <div className="flex flex-col lg:flex-row align-middle justify-center w-full py-16">
      <div className="w-full lg:w-[55%]">
        <div className="w-[65%] h-[500px] relative mx-auto">
          <Image
            src={"/images/info-img-1.png"}
            layout="responsive"
            width={226}
            height={281}
            alt="NetworkImage1"
          />
        </div>
      </div>
      <div className="w-full lg:w-[45%] flex flex-col justify-center font-poppins p-10 lg:p-0">
        <div className="w-16 h-16 relative">
          <Image src={"/images/round.png"} layout="fill" alt="round" />
          <Image src={"/images/electric-wave.png"} layout="fill" alt="round" />
        </div>
        <h4 className="text-3xl text-black font-bold mt-5">
          {t("Get best plans for more Power")}
        </h4>
        <p className="text-gray-400 text-base font-normal my-5 md:my-10">
          {t(
            "Our best-in-class WordPress solution, with additional optimization to make running a WooCommerce online store easy. Our prices are clear and straight forward so you can"
          )}
        </p>
        <p className="flex align-middle text-gray-500 text-base mb-5">
          <FontAwesomeIcon
            className="my-auto"
            color="#1141d3"
            icon={faCircleCheck}
          />
          &nbsp;&nbsp;
          <span>
            {t("We")}&apos;
            {t("ve been supporting WordPress since the beginning.")}
          </span>
        </p>
        <p className="flex align-middle text-gray-500 text-base mb-5">
          <FontAwesomeIcon
            className="my-auto"
            color="#1141d3"
            icon={faCircleCheck}
          />
          &nbsp;&nbsp;
          <span>
            {t("We")}&apos;
            {t("ve been supporting WordPress since the beginning.")}
          </span>
        </p>
        <p className="flex align-middle text-gray-500 text-base mb-10">
          <FontAwesomeIcon
            className="my-auto"
            color="#1141d3"
            icon={faCircleCheck}
          />
          &nbsp;&nbsp;
          <span>
            {t("We")}&apos;
            {t("ve been supporting WordPress since the beginning.")}
          </span>
        </p>
        <button className="w-fit text-sm md:text-lg text-white py-3 px-5 md:px-10 bg-light-blue rounded-full">
          {t("Get Started")}
        </button>
      </div>
    </div>
  );
}
