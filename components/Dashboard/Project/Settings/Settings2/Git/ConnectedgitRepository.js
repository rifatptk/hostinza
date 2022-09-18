import React from 'react';
import useTranslation from "next-translate/useTranslation";

export default function ConnectedgitRepository() {
    const { t } = useTranslation("common");
  return (
    <>
    <link
      rel="stylesheet"
      href="https://unpkg.com/flowbite@1.5.1/dist/flowbite.min.css"
    />
    <div className=" m-4 border-2 mt-8  rounded-md">
      <div className="p-4">
        <h1 className="text-[1.5rem] text-black font-semibold">
        {t("Connected Git Repository")}
        </h1>
        <p className="text-[0.85rem] mt-1 text-gray-600 font-normal">
        {t("Seamlessly create Deployments for any commits pushed to your Git repository")}{"."}
        </p>
        <div className="!border-[1px] rounded-md border-gray-400 flex justify-between mt-4 py-6 px-3">
      <div className="flex items-center gap-3">
      <svg  height="24" viewBox="0 0 14 14" width="24"><path d="M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z"  fillRule="nonzero"></path></svg>
      <div className="flex flex-col">
        <span className="font-semibold text-[0.9rem] text-black">user/project</span>
        <span className="font-normal text-[0.9rem] text-gray-500">Connected 8d ago</span>
      </div>
      </div>
      <button className="bg-white text-gray-500 border-[1px] text-[0.9rem] px-3 rounded-md">Disconnect</button>
        </div>
       
      </div>

      <div className="bg-gray-200 py-4 flex justify-between mt-3 items-center px-4">
        <span className="text-[0.9rem]">
          {t("Learn more about")}{" "}
          <a href="#" className="text-[#1141d3]">
          {t("Vercel for Git")}
          </a>{" "}
        </span>
      </div>
    </div>
  </>
  )
}
