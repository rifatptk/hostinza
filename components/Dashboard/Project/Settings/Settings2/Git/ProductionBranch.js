import React from 'react'
import useTranslation from "next-translate/useTranslation";

export default function ProductionBranch() {
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
        Production Branch
        </h1>
        <p className="text-[0.85rem] mt-1 text-gray-600 font-normal">
            {t("By default, every commit pushed to the")}
            <code className="text-pink-500">`main`</code>
            {"branch "}{t("will trigger a Production Deployment instead of the usual Preview Deployment")}{". "}
            {t("You can switch to a different branch here")}
        </p>

        <form className="w-full flex flex-col mt-5">
            <label className="text-[0.85rem] font-medium ml-0.5 text-gray-500">BRANCH NAME</label>
            <input
              className="text-[0.95rem] w-[50%] text-gray-600 border-[1px] mt-2 px-2 py-2 rounded-lg"
              placeholder="main"
              defaultValue="main"
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
