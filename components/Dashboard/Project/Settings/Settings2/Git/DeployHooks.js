import React from 'react';
import useTranslation from "next-translate/useTranslation";

export default function DeployHooks() {
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
        Deploy Hooks
     </h1>
        <p className="text-[0.85rem] mt-1 text-gray-600 font-normal">
          {"Deploy hooks "}{t("are unique URLs that allow you to trigger deployment of a given branch")}{"."}
        </p>
        <p className="text-[0.85rem] mt-3 text-gray-900 font-normal">
          {t("This project does not have any deploy hooks")}{"."}
        </p>

            <h5 className="text-[0.91rem] font-semibold  ml-0.5 !mt-5 text-gray-900 uppercase">{t("Create")} Hook</h5>
        <form className="w-full flex gap-5 mt-2 sm:!flex-row flex-col justify-between ">
            <input
              className="text-[0.95rem] sm:!w-[50%] w-full text-gray-600 border-[1px] px-2 py-2 focus:outline-[#1141d3] rounded-lg"
              placeholder="My Example Hook"
          
            ></input>
            <input
              className="text-[0.95rem] sm:!w-[25%] w-full text-gray-600 border-[1px] px-2 py-2 focus:outline-[#1141d3] rounded-lg"
              placeholder="main"
             
            ></input>
            <input
              className="text-[0.95rem] sm:!w-[25%] w-full text-white cursor-pointer !bg-[#1141d3] hover:!bg-white hover:text-[#1141d3] border-[1px] px-2 py-2  rounded-lg"
              type="button"
              value="Create Hook"
            ></input>
          </form>
      </div>

      <div className="bg-gray-200 py-4 flex justify-between mt-3 items-center px-4">
        <span className="text-[0.9rem]">
          {t("Learn more about")}{" "}
          <a href="#" className="text-[#1141d3]">
          Production Branch
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
