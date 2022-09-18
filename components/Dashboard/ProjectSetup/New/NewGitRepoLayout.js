import React from "react";
import useTranslation from "next-translate/useTranslation";


import CloneTemplate from "./CloneTemplate";
import ImportTemplate from "./ImportTemplate";
import NewGitHeroSection from "./NewGitHeroSection";

export default function NewGitRepo() {
  const { t } = useTranslation("common");

  return (
    <div className="sm:!-mt-4 !mt-0  bg-white">
   <NewGitHeroSection />

      {/* Hero Section Ends Here */}

      <div className=" flex flex-wrap flex-col justify-center items-center ">
        <CloneTemplate />
        <div>
          <h1 className="sm:text-[3rem] text-[2.5rem] font-semibold mt-5 mb-5 text-center">
            {t("OR")}
          </h1>
        </div>
        <ImportTemplate />
      </div>
    </div>
  );
}
