import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import useTranslation from "next-translate/useTranslation";

export default function MarketingRight() {
  const { t } = useTranslation("common");

  return (
    <div className="flex flex-col lg:flex-row align-middle justify-center w-full py-16">
      <div className="w-full lg:w-[45%] flex flex-col justify-center font-poppins p-10 lg:p-0">
        <h4 className="text-3xl text-black font-bold mt-5">
          {t("Powerful Server and Platform")}
        </h4>
        <div className="flex flex-row mt-12">
          <div className="w-11 h-10 relative">
            <Image
              src={"/images/gaurd-icon.png"}
              layout="fill"
              alt="InfoPoint1"
            />
          </div>
          <div className="flex-1 ml-2">
            <h4 className="text-xl text-black font-semibold tracking-wide">
              {t("Better Security and faster Server")}
            </h4>
            <p className="text-base text-gray-500 font-normal mt-2">
              {t(
                "Our best-in-class WordPress solution, with additio nal optiz ation to make running a WooCommerce"
              )}
            </p>
          </div>
        </div>
        <div className="flex flex-row mt-10">
          <div className="w-11 h-10 relative">
            <Image
              src={"/images/cloud-icon.png"}
              layout="fill"
              alt="InfoPoint1"
            />
          </div>
          <div className="flex-1 ml-2">
            <h4 className="text-xl text-black font-semibold tracking-wide">
              {t("Better Security and faster Server")}
            </h4>
            <p className="text-base text-gray-500 font-normal mt-2">
              {t(
                "Our best-in-class WordPress solution, with additio nal optiz ation to make running a WooCommerce"
              )}
            </p>
          </div>
        </div>
        <div className="flex flex-row mt-10">
          <div className="w-9 h-9 relative">
            <Image
              src={"/images/clock-icon.png"}
              layout="fill"
              alt="InfoPoint1"
            />
          </div>
          <div className="flex-1 ml-3">
            <h4 className="text-xl text-black font-semibold tracking-wide">
              {t("Better Security and faster Server")}
            </h4>
            <p className="text-base text-gray-500 font-normal mt-2">
              {t(
                "Our best-in-class WordPress solution, with additio nal optiz ation to make running a WooCommerce"
              )}
            </p>
          </div>
        </div>
        <button className="w-fit text-sm md:text-lg text-white py-3 px-5 md:px-10 bg-light-blue rounded-full mt-10">
          {t("Get Started")}
        </button>
      </div>
      <div className="w-full lg:w-[55%]">
        <div className="w-[65%] h-[500px] relative mx-auto">
          <Image
            src={"/images/info-img-2.png"}
            layout="responsive"
            width={591}
            height={631}
            alt="NetworkImage1"
          />
        </div>
      </div>
    </div>
  );
}
