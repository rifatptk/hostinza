import React from 'react';
import useTranslation from "next-translate/useTranslation";

export default function ProjectId() {
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
          Project ID
          </h1>
          <p className="text-[0.85rem] mt-1 text-gray-600 font-normal">
          {t("Used when interacting with the Vercel API")}{"."} 
          </p>
          <div className="border-b-2 mt-4 pb-6">
          <form>
            <div className="text-[0.95rem] flex justify-between sm:!w-[40%] w-full text-gray-900 border-[1px] px-2 py-2 rounded-lg" >
            zsj_qYIGUiD4MFxNclBaC2ArAb4fLz
            <svg className="relative left-0" fill="none" height="22" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="22"><path d="M8 17.929H6c-1.105 0-2-.912-2-2.036V5.036C4 3.91 4.895 3 6 3h8c1.105 0 2 .911 2 2.036v1.866m-6 .17h8c1.105 0 2 .91 2 2.035v10.857C20 21.09 19.105 22 18 22h-8c-1.105 0-2-.911-2-2.036V9.107c0-1.124.895-2.036 2-2.036z"></path></svg>
            </div>
          
          </form>
          </div>
         
        </div>

        <div className="bg-gray-200 py-4 flex justify-between mt-3 items-center px-4">
          <span className="text-[0.9rem]">
            {t("Learn more about")}{" "}
            <a href="#" className="text-[#1141d3]">
            Project ID
            </a>{" "}
          </span>
        </div>
      </div>
    </>
  )
}
