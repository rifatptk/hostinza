import React from 'react';
import useTranslation from "next-translate/useTranslation";

export default function IgnoredBuildStep() {
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
        {t("Ignored Build Step")}
     </h1>
        <p className="text-[0.85rem] mt-1 text-gray-600 font-normal">
          {t("When a commit is pushed to the Git repository that is connected with your Project, its SHA will determine if a new Build has to be issued")}{". "} 
          {t("If the SHA was deployed before, no new Build will be issued")}{"."}
        </p>
        <p className="text-[0.85rem] mt-3 text-gray-600 font-normal">
          {t("You can customize this behavior with a command that exits with code 1 (new Build needed) or code 0")}{"."}
        </p>

        <form className="w-full flex gap-5 mt-2 flex-col justify-between ">
            <label className="text-[0.85rem] font-medium  ml-0.5 !mt-5 text-gray-500 uppercase">COMMAND</label>
            <input
              className="text-[0.95rem]  w-full text-gray-600 border-[1px] -mt-4 px-2 py-2 focus:outline-[#1141d3] rounded-lg"
              placeholder="git diff --quiet HEAD^ HEAD ./"
          
            ></input>
           
          </form>
      </div>

      <div className="bg-gray-200 py-4 flex justify-between mt-3 items-center px-4">
        <span className="text-[0.9rem]">
        {t("Learn more about")}{" "}
          <a href="#" className="text-[#1141d3]">
          {t("Ignored Build Step")}
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
