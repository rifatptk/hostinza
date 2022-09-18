import React from 'react';
import useTranslation from "next-translate/useTranslation";

export default function EnvironmentVariablesHeader() {
  const { t } = useTranslation("common");
  return (
    <div className=" m-4">
    <div className="p-2">
      <h1 className="text-[1.5rem] text-black font-semibold">
      Deploy Hooks
   </h1>
      <p className="text-[0.85rem] mt-1 text-gray-600 font-normal">
      {t("In order to provide your Deployment with Environment Variables at Build and Runtime, you may enter them right here, for the Environment of your choice")}{"."}
      </p>
      <p className="text-[0.85rem] mt-3 text-gray-900 font-normal">
      {t("A new Deployment is required for your changes to take effect")}{"."}
      </p>
      </div>
      </div>
  )
}
