import React from "react";
import useTranslation from "next-translate/useTranslation";

export default function ConnectionPrompt() {
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
            {t("CLI Git Connection Prompt")}
          </h1>
          <p className="text-[0.85rem] mt-1 text-gray-600 font-normal">
            {t("Show prompt to connect a local Git repository, if it exists, when running vercel link for this project?")}
          </p>
          <p className="text-[0.85rem] mt-5 text-gray-600 font-normal">
            {t("Disable this prompt if you never want to connect a Git repository and dont want new team members to be prompted for it")}{"."}
            <br />
            <br />
            {t("A GitHub repository is already connected, so there is nothing to do here")}
          </p>
        </div>

        <div className="bg-gray-200 py-4 flex justify-between mt-3 items-center px-4">
          <span className="text-[0.9rem]">
            {t("Learn more about")}{" "}
            <a href="#" className="text-[#1141d3]">
              vercel link
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
