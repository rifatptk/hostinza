import React from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

export default function LifeAtHostinza() {
  const { t } = useTranslation("common");
  return (
    <div className="bg-white w-full h-auto pt-24 pb-20 md:pb-28">
      <div className="container w-full items-center mx-auto">
        <div className="flex flex-col w-full align-middle">
          <p className="text-gray-500 text-lg font-normal text-center font-poppins">
            {t("Our Office")}
          </p>
          <h3 className="text-blue-content text-2xl md:text-4xl font-bold text-center font-poppins mt-2 uppercase">
            <span className="text-black">{t("Life at")}</span> {t("Hostinza")}
          </h3>
          <div className="flex flex-wrap align-middle w-full mt-20 relative">
            <div className="ml-auto xs:mx-auto sm:mx-auto md:ml-[15%] w-full max-w-[350px] h-[350px] relative">
              <Image
                src={"/images/office-img-1.jpg"}
                layout="fill"
                alt="office-image-1"
              />
            </div>
            <div className="relative md:absolute flex flex-col justify-center top-0 md:top-[20%] right-0 md:right-[15%] w-full max-w-[550px] h-96 bg-[#1868dd] z-[4] p-3 mt-5 md:mt-0">
              <h2 className="text-white text-4xl font-bold text-center">
                {t("Do you want to join our Team?")}
              </h2>
              <button className="w-fit text-sm md:text-lg text-light-blue py-3 px-5 md:px-10 bg-white rounded-full mx-auto mt-8 font-normal">
                {t("Apply Now")}
              </button>
            </div>
            <div className="flex flex-wrap w-full align-middle gap-5 mt-5">
              <div className="w-full md:w-[60%] h-52 md:h-[430px] relative">
                <Image
                  src={"/images/office-img-2.jpg"}
                  layout="fill"
                  alt="Office-img-2"
                />
              </div>
              <div className="w-full md:w-[35%] flex align-middle">
                <div className="xs:mx-auto sm:mx-auto w-[320px] h-[270px] ml-auto md:ml-0 my-auto relative">
                  <Image
                    src={"/images/office-img-3.jpg"}
                    layout="fill"
                    alt="Office-img-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
