import React from 'react'
import useTranslation from "next-translate/useTranslation";
import CloneTemplateCard from "./CloneTemplateCard";

export default function CloneTemplate() {
    const { t } = useTranslation("common");
  return (
    <div className="box-1 -mt-[75px] bg-[#e3e7f8] p-2 lg:w-4/5 w-11/12  flex flex-col  items-center rounded-lg  border-slate-300 border-2 !pb-5">
    <h2 className="sm:text-[2rem] text-[1.8rem] font-semibold mt-2 mb-5 text-center">
      {t("Clone")}<span className="text-[#0f3dbe]">{t("Template")}</span>
    </h2>
    <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 px-4">
      <CloneTemplateCard cardName={t("next commerce")} cardImg={"/images/nextjs-commerce.webp"} />
      <CloneTemplateCard cardName={t("sveltekit")} cardImg={"/images/sveltekit.avif"} />
      <CloneTemplateCard cardName={t("nuxt.js")} cardImg={"/images/nuxtjs.avif"} />
      <CloneTemplateCard cardName={t("next.js")} cardImg={"/images/nextjs.avif"} />
    </div>
    <a href="#" className="mt-5 mb-0 ">
      <span className=" text-[1rem] font-semibold hover:underline text-[#0d2352]">
        {t("Browse All Templates →")}
      </span>
    </a>
  </div>
  )
}
