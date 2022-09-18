import React from 'react'
import useTranslation from "next-translate/useTranslation";

export default function Version() {
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
          Node.js Version
          </h1>
          <p className="text-[0.85rem] mt-1 text-gray-600 font-normal">
          {t("The version of Node.js that is used in the Build Step and for Serverless Functions")}{". "}
          {t("A new Deployment is required for your changes to take effect")}. 
          </p>
          <div className="border-b-2 mt-4 pb-6">
            <div className="bg-white w-[50%] text-gray-900 text-sm rounded-lg focus:outline-[#1141d3] !outline-none !border-[1px] !border-[#cacaca] ">
              <select className="bg-white w-full text-gray-900 text-sm rounded-lg focus:outline-[#1141d3] !outline-none !border-[1px] !border-[#cacaca] p-2.5">
                <option value="16.x">16.x</option>
                <option value="14.x">14.x</option>
                <option value="12.x">12.x</option>
              </select>
            </div>
          </div>
         
        </div>

        <div className="bg-gray-200 py-4 flex justify-between mt-3 items-center px-4">
          <span className="text-[0.9rem]">
            {t("Learn more about")}{" "}
            <a href="#" className="text-[#1141d3]">
            Node.js Version
            </a>{" "}
          </span>
          <button className="bg-gray-200 border-[1px] float-right border-[#1141d3] text-[#1141d3] py-0.5 px-3 rounded-lg hover:text-white hover:bg-[#1141d3]">
            {t("Save")}
          </button>
        </div>
      </div>
    </>
  )
}
