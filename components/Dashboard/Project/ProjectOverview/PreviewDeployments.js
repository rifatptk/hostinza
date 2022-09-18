import React from 'react'
import useTranslation from "next-translate/useTranslation";

export default function PreviewDeployments() {
  const { t } = useTranslation("common");
  return (

    <div className="bg-white border-b-2 py-10">
    <div className="flex bg-white justify-between sm:!px-24 px-6 py-6 flex-wrap items-center">
      <div>
        <h2 className="text-[1.6rem] text-black font-semibold">
        {t("Preview Deployments")}
        </h2>

      </div>

    </div>

    {/* Preview */}
    <div className="bg-white w-full flex justify-center items-center m-auto">
      <div className="flex w-[85%] flex-wrap drop-shadow-md px-6 py-6 !pb-8 gap-5 bg-white border-2  rounded-md">
        <div className="flex w-[100%] flex-col">
          <div className="flex w-[100%] flex-col border-dotted border-2 sm:!items-center items-center justify-center gap-10 mt-2 h-[30rem] bg-gray-100 py-5  px-2 rounded-md">
         <div className="text-center">
      <h1 className="text-[1.3rem] text-black font-semibold">{t("No Preview Deployments")}</h1>
      <span className="text-[0.9rem] text-gray-600 font-normal">{t("Commit using our Git connections")}.</span>
      </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )

}
