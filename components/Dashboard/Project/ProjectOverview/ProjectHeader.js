import React from 'react';
import useTranslation from "next-translate/useTranslation";

export default function ProjectHeader(props) {
    const { t } = useTranslation("common");
  return (
    <div className="flex bg-[#1141d3] justify-between border-b-[1px] gap-3 sm:!p-24 p-6 py-10 items-center">
        <h1 className='text-white text-[2rem] font-medium'>
            {props.projectName}
        </h1>
        <div className='flex gap-2'>
            <button className='border-[1px] border-white py-2 px-3 text-white text-[0.96rem] rounded-md'>{t("View Git Repository")}</button>
            <button className='border-[1px] bg-white border-white py-2 px-6 text-[#1141d3] text-[0.96rem] rounded-md'>{t("Visit")}</button>
        </div>
    </div>
  )
}
