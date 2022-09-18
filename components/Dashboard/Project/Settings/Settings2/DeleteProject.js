import React from 'react'
import Image from 'next/image';
import useTranslation from "next-translate/useTranslation";

export default function DeleteProject() {
  const { t } = useTranslation("common");
  return (
    <>
    <link
      rel="stylesheet"
      href="https://unpkg.com/flowbite@1.5.1/dist/flowbite.min.css"
    />
    <div className=" m-4 border-2 border-red-600 mt-8  rounded-md">
      <div className="p-4">
        <h1 className="text-[1.5rem] text-red-600 font-semibold">
        {t("Delete Project")}
        </h1>
        <p className="text-[0.85rem] mt-1 text-gray-600 font-normal">
        {t("The project will be permanently deleted, including its deployments and domains")}{". "}{t("This action is irreversible and can not be undone")}{"."} 
        </p>

        <div className="flex items-center gap-6 mt-2">
            <Image className="rounded-md" src={"/images/nextjs-commerce.webp"} width="120" height="80" alt="delete project" ></Image>
            <div className="flex flex-col">
                <span className="text-[1rem] font-medium" >MyProject</span>
                <span className="text-[0.9rem] text-gray-700 font-medium">Last updated 8d ago</span>
            </div>
        </div>
      </div>

      <div className="bg-gray-200 py-4 flex justify-end mt-3 items-center px-4">
        <button className="bg-gray-200 border-2 float-right border-red-600 text-red-600 py-0.5 px-3 rounded-lg hover:text-white hover:bg-red-600">
          {t("Delete")}
        </button>
      </div>
    </div>
  </>
  )
}
