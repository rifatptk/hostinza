import React from 'react';
import AddNew from './AddNew';
import EnvironmentVariablesHeader from './EnvironmentVariablesHeader';
import SearchVariables from './SearchVariables';
import useTranslation from "next-translate/useTranslation";

export default function EnvironmentVariablesMain() {
    const { t } = useTranslation("common");
  return (
    <div className="w-full bg-white rounded-md border-b-[1px] border-gray-300">
      <EnvironmentVariablesHeader />
      <AddNew />
      <div className=" m-4 border-2 mt-8 bg-gray-200 rounded-md">
        <div className="p-4">
          <div className="flex items-center">
            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300" />
            <label htmlFor="default-checkbox" className="ml-2 text-sm font-normal text-gray-900">
              <span>{t("Automatically expose")}{" "}<a href="#" className="text-[#1141d3]">{t("Environment Variables")}</a> </span>
            </label>
          </div>
        </div>
      </div>
      <SearchVariables />
    </div>
  )
}
