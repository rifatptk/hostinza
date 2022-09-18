import React from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
export default function HomeHeroSection() {
  const { t } = useTranslation("common");
  return (
    <div className="homeHeroGradient w-full h-auto pt-40 pb-14">
      <div className="container w-full items-center mx-auto">
        <div className="flex flex-wrap justify-between align-middle w-full">
          <div className="flex flex-col align-middle justify-center w-full lg:w-[50%] mt-10 md:mt-0">
            <h2 className="text-white text-4xl md:text-6xl font-extrabold tracking-wide">
              {t("SHARED HOSTING")}
            </h2>
            <p className="text-white text-lg leading-relaxed mt-5">
              {t(
                "Share processes and data securely on a need to know basis without the need for reconciliation it combines a permissione"
              )}
              .
            </p>
            <div className="flex flex-wrap w-full justify-start align-middle gap-5 mt-20">
              <button className="text-sm md:text-lg text-white py-3 px-5 md:px-10 bg-light-blue rounded-full">
                {t("Get Started")}
              </button>
              <button className="text-sm md:text-lg text-white py-3 px-5 md:px-10 border border-white rounded-full">
                {t("Know More")}
              </button>
            </div>
          </div>
          <div className="w-full lg:w-[50%] relative py-10 mt-10 lg:mt-0">
            <Image
              src={"/images/Group69.svg"}
              width={80}
              height={65}
              layout="responsive"
              alt="HomeHeroImage"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
