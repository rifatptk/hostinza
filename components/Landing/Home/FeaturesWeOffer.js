import React, { useState } from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

export default function FeaturesWeOffer() {
  const { t } = useTranslation("common");

  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="bg-gradient-to-bl from-black via-dark-blue to-light-blue w-full h-auto py-24">
      <div className="container w-full items-center mx-auto">
        <div className="flex flex-col w-full align-middle">
          <p className="text-white text-lg font-normal text-center font-poppins">
            {t("We Offer")}
          </p>
          <h3 className="text-white text-2xl md:text-4xl font-bold text-center font-poppins">
            {t("FEATURES INCLUDED")}
          </h3>

          <div className="md:hidden sm:hidden xs:hidden lg:flex justify-evenly align-middle w-full mt-10 border-b-[1px] border-cyan-400">
            <div
              className={`flex flex-col align-middle p-3 flex-1 basis-72 border-b-4 ${
                activeTab === 1 ? "border-cyan-400" : "border-transparent"
              }  pb-10 cursor-pointer transition-all duration-1000`}
              onClick={() => setActiveTab(1)}
            >
              <div className="w-11 mx-auto h-11 relative">
                <Image
                  src={"/images/tab-icon-1.png"}
                  layout="fill"
                  alt="tab-icon-1"
                />
              </div>
              <p className="text-white text-center text-xl font-semibold font-poppins mt-5">
                {t("Website Transfers")}
              </p>
            </div>
            <div
              className={`flex flex-col align-middle p-3 flex-1 basis-72 border-b-4 ${
                activeTab === 2 ? "border-cyan-400" : "border-transparent"
              }  pb-10 cursor-pointer transition-all duration-1000`}
              onClick={() => setActiveTab(2)}
            >
              <div className="w-11 mx-auto h-11 relative">
                <Image
                  src={"/images/tab-icon-2.png"}
                  layout="fill"
                  alt="tab-icon-2"
                />
              </div>
              <p className="text-white text-center text-xl font-semibold font-poppins mt-5">
                {t("Get free email")}
              </p>
            </div>
            <div
              className={`flex flex-col align-middle p-3 flex-1 basis-72 border-b-4 ${
                activeTab === 3 ? "border-cyan-400" : "border-transparent"
              }  pb-10 cursor-pointer transition-all duration-1000`}
              onClick={() => setActiveTab(3)}
            >
              <div className="w-11 mx-auto h-11 relative">
                <Image
                  src={"/images/tab-icon-3.png"}
                  layout="fill"
                  alt="tab-icon-3"
                />
              </div>
              <p className="text-white text-center text-xl font-semibold font-poppins mt-5">
                {t("Website speed")}
              </p>
            </div>
            <div
              className={`flex flex-col align-middle p-3 flex-1 basis-72 border-b-4 ${
                activeTab === 4 ? "border-cyan-400" : "border-transparent"
              }  pb-10 cursor-pointer transition-all duration-1000`}
              onClick={() => setActiveTab(4)}
            >
              <div className="w-11 mx-auto h-11 relative">
                <Image
                  src={"/images/tab-icon-4.png"}
                  layout="fill"
                  alt="tab-icon-3"
                />
              </div>
              <p className="text-white text-center text-xl font-semibold font-poppins mt-5">
                {t("Free cPanel")}
              </p>
            </div>
          </div>
          <div className="md:hidden sm:hidden xs:hidden mt-20 lg:flex flex-wrap w-full align-middle justify-center">
            <div className="w-full md:w-[48%]">
              <div className="w-[75%] md:w-[55%] h-[370px] mx-auto relative">
                <Image
                  src={"/images/feature-image.png"}
                  layout="fill"
                  alt="FeaturesImage"
                />
              </div>
            </div>
            <div className="w-full flex flex-col justify-center md:w-[48%] mt-10 md:mt-0">
              <h2 className="text-3xl text-white font-bold text-start">
                {activeTab === 1
                  ? "Get free Website Transfers"
                  : activeTab === 2
                  ? "Free unlimited email service"
                  : activeTab === 3
                  ? "Super web speed"
                  : "Free cPanel service"}
              </h2>
              <p className="text-lg text-white font-normal mt-10 transition-all duration-1000">
                {activeTab === 1
                  ? "Moving your website from another Web Host? Chat with us and our Account Manager will do the cPanel to cPanel website migration for you, completely Free of charge! Also, you can upgrade between plans on Shared Hosting by yourself from your panel."
                  : activeTab === 2
                  ? "Moving your website from another Web Host? Chat with us and our Account Manager will do the cPanel to cPanel website migration for you, completely Free of charge! Also."
                  : activeTab === 3
                  ? "Moving your website from another Web Host? Chat with us and our Account Manager will do the cPanel to cPanel website migration for you, completely Free of charge! Also."
                  : "Moving your website from another Web Host? Chat with us and our Account Manager will do the cPanel to cPanel website migration for you, completely Free of charge! Also, you can upgrade between plans on Shared Hosting by yourself from your panel."}
              </p>
            </div>
          </div>
          {/* for small to mid devices (rf) */}
          <div className="lg:hidden md:flex md:text-start text-start items-start justify-between md:space-x-5">
            <div className="   w-full flex flex-col justify-center  mt-10 ">
              <h1 className="text-xl text-white font-bold ">
                Get free Website Transfers
              </h1>
              <p className=" text-white font-normal mt-1 transition-all duration-1000">
                Moving your website from another Web Host? Chat with us and our
                Account Manager will do the cPanel to cPanel website migration
                for you, completely Free of charge! Also, you can upgrade
                between plans on Shared Hosting by yourself from your panel.
              </p>
            </div>
            <div className="   w-full flex flex-col justify-center  mt-10 ">
              <h1 className="text-xl text-white font-bold ">
                Free unlimited email service
              </h1>
              <p className=" text-white font-normal mt-1 transition-all duration-1000">
                Moving your website from another Web Host? Chat with us and our
                Account Manager will do the cPanel to cPanel website migration
                for you, completely Free of charge! Also.
              </p>
            </div>
            <div className="   w-full flex flex-col justify-center  mt-10 ">
              <h1 className="text-xl text-white font-bold ">Super web speed</h1>
              <p className=" text-white font-normal mt-1 transition-all duration-1000">
                Moving your website from another Web Host? Chat with us and our
                Account Manager will do the cPanel to cPanel website migration
                for you, completely Free of charge! Also.
              </p>
            </div>
            <div className="   w-full flex flex-col justify-center  mt-10 ">
              <h1 className="text-xl text-white font-bold ">
                Free cPanel service
              </h1>
              <p className=" text-white font-normal mt-1 transition-all duration-1000">
                Moving your website from another Web Host? Chat with us and our
                Account Manager will do the cPanel to cPanel website migration
                for you, completely Free of charge! Also, you can upgrade
                between plans on Shared Hosting by yourself from your panel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
