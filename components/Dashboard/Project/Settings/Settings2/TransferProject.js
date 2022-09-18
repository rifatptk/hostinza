import React from 'react'
import useTranslation from "next-translate/useTranslation";

export default function TransferProject() {
  const { t } = useTranslation("common");
  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/flowbite@1.5.1/dist/flowbite.min.css"
      />
      <div className=" m-4 border-2 mt-8  rounded-md">
        <div className="p-4">
          <h1 className="text-[1.5rem] text-black font-semibold">
          {t("Transfer Project")}
          </h1>
          <p className="text-[0.85rem] mt-1 text-gray-600 font-normal">
          {t("Get full access to collaborative features, multiple Concurrent Builds, and more powerful Serverless Functions by transferring your Project to a Vercel Team")}{"."} 
          </p>
         
        </div>

        <div className="bg-gray-200 py-4 flex justify-between mt-3 items-center px-4">
          <span className="text-[0.9rem]">
            {t("Learn more about")}{" "}
            <a href="#" className="text-[#1141d3]">
            {t("Transferring Projects")}
            </a>{" "}
          </span>
          <button className="bg-gray-200 border-[1px] float-right border-[#1141d3] text-[#1141d3] py-0.5 px-3 rounded-lg hover:text-white hover:bg-[#1141d3]">
            {t("Transfer")}
          </button>
        </div>
      </div>
    </>
  )
}
