import React from "react";
import useTranslation from "next-translate/useTranslation";

export default function AppInstall() {
    const { t } = useTranslation("common");    
  return (
    <div className="sm:!w-[50%] w-full mx-auto pt-10">
      <div className="border-[1px] rounded-md h-[25rem] py-6 px-8 sm:!ml-24 ml-0 flex top-2 sticky flex-col justify-between">
        <div>
          <h2 className="text-[1.5rem] font-bold">{t("INSTALL")}</h2>
          <p className="text-[0.9rem] text-gray-800 mt-3 pr-4">
            Sed sed sollicitudin orci. In at odio tellus. Ut convallis elit
            risus, eget tempus leo elementum nec.sed sollicitudin orci. In at
            odio tellus. Ut convallis elit risus, eget tempus leo elementum nec.
          </p>
        </div>
        <div className="flex flex-wrap items-center border-[1px] py-4 px-3 rounded-md">
          <span className="text-[0.95rem] font-medium mr-2 my-2">
            Features:
          </span>
          <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-3 py-1 rounded  my-2">
            Wordpress
          </span>
          <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-3 py-1 rounded  my-2">
            Wordpress
          </span>
          <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-3 py-1 rounded  my-2">
            Wordpress
          </span>
        </div>

        <div>
          <button className="w-full bg-[#1141d3] rounded-md py-3 text-white font-medium">
            CONTINUE
          </button>
        </div>
      </div>
    </div>
  );
}
