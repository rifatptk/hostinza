import React from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

export default function HowAffiliateWorks() {
  const { t } = useTranslation("common");

  return (
    <div className="bg-light-gray w-full h-auto py-24">
      <div className="container w-full items-center mx-auto">
        <div className="flex flex-col w-full align-middle">
          <p className="text-gray-500 text-lg font-normal text-center font-poppins">
            {t("Affiliate Program")}
          </p>
          <h3 className="text-blue-content text-2xl md:text-4xl font-bold text-center font-poppins uppercase">
            <span className="text-black">{t("How")}</span>{" "}
            {t("Affiliate Works")}
          </h3>
          <div className="mt-20 flex flex-wrap justify-center align-middle w-full">
            {/* Card 1 */}
            <div className="flex-1 basis-72 h-auto p-5 border-r-0 md:border-r border-gray-300">
              <div className="w-[60%] md:w-[50%] h-36 mx-auto relative">
                <Image
                  className="mx-auto"
                  src={"/images/affiliate-works-1.png"}
                  layout="fill"
                  alt="whyChooseImage1"
                />
              </div>
              <p className="text-black text-xl font-semibold font-poppins mt-10 text-center">
                {t("Sign up Hostinza")}
              </p>
              <p className="text-gray-500 text-lg font-normal text-center mt-3 leading-tight">
                Share processes and data secure lona need to know basis
              </p>
            </div>
            {/* Card 2 */}
            <div className="flex-1 basis-72 h-auto p-5 border-r-0 lg:border-r border-gray-300">
              <div className="w-[60%] md:w-[50%] h-36 mx-auto relative">
                <Image
                  className="mx-auto"
                  src={"/images/affiliate-works-2.png"}
                  layout="fill"
                  alt="whyChooseImage1"
                />
              </div>
              <p className="text-black text-xl font-semibold font-poppins mt-10 text-center">
                {t("AD on your Website")}
              </p>
              <p className="text-gray-500 text-lg font-normal text-center mt-3 leading-tight">
                {t("Our team assured your web site is always safe and secure")}
              </p>
            </div>
            {/* Card 3 */}
            <div className="flex-1 basis-72 h-auto p-5">
              <div className="w-[80%] md:w-[50%] h-36 mx-auto relative">
                <Image
                  className="mx-auto"
                  src={"/images/affiliate-works-3.png"}
                  layout="fill"
                  alt="whyChooseImage1"
                />
              </div>
              <p className="text-black text-xl font-semibold font-poppins mt-10 text-center">
                {t("Get Monthly Earning")}
              </p>
              <p className="text-gray-500 text-lg font-normal text-center mt-3 leading-tight">
                {t("We finally found a host that truly understood the unique")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
