import React from "react";
import useTranslation from "next-translate/useTranslation";

export default function SearchHeroSection() {
  const { t } = useTranslation("common");

  return (
    <div className="bg-gradient-to-br from-black via-dark-blue to-light-blue w-full h-auto pt-40 pb-5 md:pb-14">
      <div className="container w-full items-center mx-auto">
        <div className="flex flex-col w-full justify-center align-middle py-14 md:py-32">
          <h3 className="text-white text-2xl md:text-4xl font-bold text-center font-poppins leading-relaxed">
            {t("Search here for more domain!")}
          </h3>
          <div className="mt-8 w-full md:w-[70%] mx-auto rounded-full border-2 border-gray-300 h-[70px] flex align-middle p-2 searchDomainContainer">
            <input
              className="outline-none bg-transparent border-none flex-1 pl-2 md:pl-5 pr-2 w-[60%] md:[70%] text-white"
              placeholder="myDomain.com"
            />
            <button className="text-base text-white px-3 md:px-10 bg-light-blue rounded-full">
              {t("Search")}
            </button>
          </div>
          <div className="w-full flex flex-wrap justify-evenly align-middle gap-5 mt-14">
            <div className="flex flex-1 flex-row justify-around md:justify-center align-middle gap-3 rounded-xl p-2 domainPrices bg-light-blue">
              <div className="w-14 h-14 rounded-full bg-red-500 flex justify-center align-middle p-1">
                <p className="m-auto text-white text-lg leading-none font-bold">
                  .com
                </p>
              </div>
              <p className="text-white text-lg font-bold my-auto">$9.95</p>
            </div>

            <div className="flex flex-1 flex-row justify-around md:justify-center align-middle gap-3 rounded-xl p-2 domainPrices bg-light-blue">
              <div className="w-14 h-14 rounded-full bg-green-500 flex justify-center align-middle p-1">
                <p className="m-auto text-white text-lg leading-none font-bold">
                  .co
                </p>
              </div>
              <p className="text-white text-lg font-bold my-auto">$7.95</p>
            </div>

            <div className="flex flex-1 flex-row justify-around md:justify-center align-middle gap-3 rounded-xl p-2 domainPrices bg-light-blue">
              <div className="w-14 h-14 rounded-full bg-yellow-500 flex justify-center align-middle p-1">
                <p className="m-auto text-white text-lg leading-none font-bold">
                  .info
                </p>
              </div>
              <p className="text-white text-lg font-bold my-auto">$2.95</p>
            </div>

            <div className="flex flex-1 flex-row justify-around md:justify-center align-middle gap-3 rounded-xl p-2 domainPrices bg-light-blue">
              <div className="w-14 h-14 rounded-full bg-orange-500 flex justify-center align-middle p-1">
                <p className="m-auto text-white text-lg leading-none font-bold">
                  .net
                </p>
              </div>
              <p className="text-white text-lg font-bold my-auto">$5.95</p>
            </div>

            <div className="flex flex-1 flex-row justify-around md:justify-center align-middle gap-3 rounded-xl p-2 domainPrices bg-light-blue">
              <div className="w-14 h-14 rounded-full bg-cyan-500 flex justify-center align-middle p-1">
                <p className="m-auto text-white text-lg leading-none font-bold">
                  .store
                </p>
              </div>
              <p className="text-white text-lg font-bold my-auto">$2.95</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
