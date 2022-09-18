import React from "react";
import useTranslation from "next-translate/useTranslation";

export default function ProjectName() {
  const { t } = useTranslation("common");
  return (
    <>
      <div className=" m-4 border-2  rounded-md">
        <div className="p-4">
          <h1 className="text-[1.5rem] text-black font-semibold">
            {t("Project Name")}
          </h1>
          <p className="text-[0.85rem] mt-1 text-gray-600 font-normal">
            {t("Used to identify your Project on the Dashboard, Vercel CLI, and in the URL of your Deployments")}{"."}
          </p>
          <form className="w-full mt-5">
            <div>
              <input
                className="text-[0.95rem] w-[25%] text-gray-600 border-[1px] px-2 py-2 rounded-l-lg"
                defaultValue="hoztinza.com/user"
                disabled
              ></input>
              <input
                className="text-[0.95rem] w-[75%] text-gray-600 border-[1px] px-2 py-2 rounded-r-lg focus:!outline-[#1141d3]"
                defaultValue="project"
              ></input>
            </div>
          </form>
        </div>
        <div className="bg-gray-200 py-4 flex justify-between mt-3 items-center px-4">
          <span className="text-[0.9rem]">
            {t("Learn more about")}{" "}
            <a href="#" className="text-[#1141d3]">
              {t("Project Name")}
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
