import React from "react";
import useTranslation from "next-translate/useTranslation";

export default function Deploy() {
  const { t } = useTranslation("common");

  return (
    <div >
      <h1 className="text-[1.6rem] text-[#0f3dbe] font-semibold py-4 pb-6 border-b-2">
        {t("Deploy")}
      </h1>
      <div className="mt-10">
        <details>
          <summary className="border-[1px] py-6 text-[#0f3dbe] text-[0.9rem] font-medium font-poppins pl-4 bg-[#215cff19] border-[#0f3dbe] rounded-t-lg"> {t("Building")}</summary>
        <div className="font-mono bg-[#d7d7d7] border-[1px] border-[#0f3dbe] border-t-0 border-b-[#0f3dbe] py-4 pl-4 !w-full">
            <span >{t("No logs to show!")}</span>
        </div>
        </details>
        <details>
          <summary className="border-[1px] py-6 text-[#0f3dbe] text-[0.9rem] font-medium font-poppins pl-4 bg-[#215cff19] border-[#0f3dbe] border-t-0"> {t("Running Checks")}</summary>
          <div className="font-mono bg-[#46ddaf5b] text-[#1c7b4f] border-[1px] border-[#0f3dbe] border-t-0 border-b-[#0f3dbe] py-4 pl-4 !w-full">
            <span >{t("Everything Clear")}</span>
        </div>
        </details>
        <details>
          <summary className="border-[1px] py-6 text-[#0f3dbe] text-[0.9rem] font-medium font-poppins pl-4 bg-[#215cff19] border-[#0f3dbe] border-t-0 rounded-b-lg"> {t("Assigning Domains")}
          </summary>
        </details>
        <div className="mt-8">
          <button className="float-right bg-white border-2 text-[0.9rem] font-medium px-2 py-1 rounded-md border-red-600 text-red-600">{t("Cancel Deployment")}</button>
        </div>
      </div>
    </div>
  );
}
