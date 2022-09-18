import React from "react";
import useTranslation from "next-translate/useTranslation";

export default function RootDirectory() {
    const { t } = useTranslation("common");
  return (
    <>
      <div className=" m-4 mt-8 border-2  rounded-md">
        <div className="p-4">
          <h1 className="text-[1.5rem] text-black font-semibold">
            Root Directory
          </h1>
          <p className="text-[0.85rem] mt-1 text-gray-600 font-normal">
            {t("The directory within your project, in which your code is located")}{". "}
            {t("Leave this field empty if your code is not located in a subdirectory")}{". "}
            {t("A new Deployment is required for your changes to take effect")}{"."}
          </p>
          <form className="w-full mt-5">
            <input
              className="text-[0.95rem] w-[50%] text-gray-600 border-[1px] px-2 py-2 rounded-lg"
              placeholder="./"
            ></input>
          </form>
          <div className="flex items-center mt-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 "
            />
            <label htmlFor="default-checkbox">
              <span className="ml-2 mr-2 text-[0.9rem]">
                {t("Include source files outside of the Root Directory in the")}
                <a href="#" className="text-[#1141d3] ml-1">
                  Build Steps
                </a>{" "}
              </span>
            </label>
          </div>
        </div>
        <div className="bg-gray-200 py-4 flex justify-between mt-3 items-center px-4">
          <span className="text-[0.9rem]">
            {t("Learn more about")}{" "}
            <a href="#" className="text-[#1141d3]">
              Root Directory
            </a>{" "}
          </span>
          <button className="bg-gray-200 border-[1px] float-right border-[#1141d3] text-[#1141d3] py-0.5 px-3 rounded-lg hover:text-white hover:bg-[#1141d3]">
            {t("Save")}
          </button>
        </div>
      </div>
    </>
  );
}
