import React from 'react'
import Collaborate from "./Collaborate";
import useTranslation from "next-translate/useTranslation";

export default function NewGitHeroSection() {
    const { t } = useTranslation("common");
    
  return (
    <>
       <link
        rel="stylesheet"
        href="https://unpkg.com/flowbite@1.5.1/dist/flowbite.min.css"
      />
      <div className="bg-[#1141d3] sm:px-20 px-8 sm:pb-32 pb-24 sm:pt-32 pt-14 flex flex-wrap justify-between">
        <div>
          <h1 className="text-[2.7rem] leading-none mb-3 text-white font-semibold">
            {t("Let's build something new")}
          </h1>
          <p className="text-[0.8rem] mb-3 text-white font-medium">
            {t(
              "To deploy a new Project, import an existing Git Repository or get started with one of our Templates"
            )}{" "}
          </p>
        </div>
        <div>
          <Collaborate />
          <div
            id="tooltip-animation"
            role="tooltip"
            className="inline-block absolute w-[15rem] invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 "
          >
            <div>
              <h1 className="pt-2 text-[1.2rem] font-bold">
                {t("Upgrade to Pro")}
              </h1>
              <p className="pt-2 pb-2 text-[0.8rem] font-normal">
                {t(
                  "Additional resources. Security and collaboration features."
                )}
              </p>
            </div>

            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
      </div></>
  )
}
