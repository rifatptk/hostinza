import React from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

export default function ProductionDeployment() {
    const { t } = useTranslation("common");
  return (
    <div className="bg-white border-b-2 pb-10">
      <div className="flex bg-white justify-between sm:!px-24 px-6 py-6 flex-wrap items-center">
        <div>
          <h2 className="text-[1.6rem] text-black font-semibold">
            {t("Production Deployment")}
          </h2>
          <h5 className="text-[0.9rem] pt-2 text-gray-900 ">
            {t("The deployment that is available to your visitors")}{"."}
          </h5>
        </div>
        <div className="sm:!flex flex-col gap-2 hidden">
          <button className="text-gray-700 text-[0.9rem] border-2 py-1 px-3 rounded-md bg-white hover:border-[#1141d3] hover:text-[#1141d3]">
            {t("View Build Logs")}
          </button>
          <button className="text-gray-700 text-[0.9rem] border-2 py-1 px-3 rounded-md bg-white hover:border-[#1141d3] hover:text-[#1141d3]">
            {t("View Function Logs")}
          </button>
          <button className="text-gray-700 text-[0.9rem] border-2 py-1 px-3 rounded-md bg-white hover:border-[#1141d3] hover:text-[#1141d3]">
            {t("View Domains")}
          </button>
        </div>
      </div>

      {/* project details card */}
      <div className="bg-white py-10 w-[95%] flex justify-center items-center m-auto">
        <div className="flex flex-wrap drop-shadow-md px-6  py-6 !pb-4 gap-5 bg-white border-2  rounded-md">
          <div className="flex  flex-col">
            <div>
              <a href="#">
                <Image className="rounded-lg" width="1100" height="500" src={"/images/nextjs-commerce.webp"} alt="" ></Image>
        
              </a>
            </div>
            <div className="flex sm:!flex-row flex-col border-2 sm:!items-center items-start justify-between gap-10 mt-2  bg-gray-100 py-5   px-2 rounded-md">
                <div className="flex sm:!flex-row flex-col sm:!items-center items-start gap-10">
                <div className="flex flex-col">
              <span className="text-[0.9rem] text-gray-600 font-medium ">
                DEPLOYMENT
              </span>
              <span className="text-[0.9rem] text-gray-900 font-medium hover:underline cursor-pointer hover:text-[#1141d3]">
                project-depolyment.vercel.app
              </span>
              </div>
              <div className="flex flex-col">
              <span className="text-[0.9rem] text-gray-600 font-medium">
                {t("DOMAINS")}
              </span>
              <span className="text-[0.9rem] text-gray-900 font-medium hover:underline cursor-pointer  hover:text-[#1141d3] ">
                project.vercel.app
              </span>
              </div>
              <div className="flex flex-col">
              <span className="text-[0.9rem] text-gray-600 font-medium">
                {t("STATUS")}
              </span>
              <div className="flex gap-2 items-baseline">
                <span className="bg-green-400 w-2.5 h-2.5 text-[0.9rem] rounded-[50%]"></span>
                <span className="text-[0.9rem] text-gray-900 font-medium">
                  {t("Ready")}
                </span>
              </div>
              </div>
              <div className="flex flex-col">
              <span className="text-[0.9rem] text-gray-600 font-medium">
                {t("CREATED")}
              </span>
              <div className="flex gap-2 items-baseline">
                <span className="bg-[#1141d3] w-2.5 h-2.5 text-[0.9rem] rounded-[50%]"></span>
                <span className="text-[0.9rem] text-gray-900 font-medium">
                  9d ago
                </span>
              </div>
              </div>
              <div className="flex flex-col">
              <span className="text-[0.9rem] text-gray-600 font-medium ">
                BRANCH
              </span>
              <div className="flex gap-2 items-center">
                <svg height="18" viewBox="0 0 14 14" width="18">
                  <path
                    d="M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z"
                    fillRule="nonzero"
                  ></path>
                </svg>
                <span className="text-[0.9rem] text-gray-900 font-medium hover:underline cursor-pointer hover:text-[#1141d3] ">
                  Main
                </span>
              </div>
              </div>
              </div>
              <div className="flex justify-end">
                <div>
                    <button className="border-2 !border-[#1141d3] py-1 px-3 text-[#1141d3] text-[0.9rem] rounded-md">{t("Learn More")}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
