import React from "react";
import useTranslation from "next-translate/useTranslation";

export default function DeployClone() {
  const { t } = useTranslation("common");

  return (
    <div>
      <h1 className="text-[1.6rem] text-[#0f3dbe] font-semibold py-4 pb-6 border-b-2">
        {t("Deploy")}
      </h1>
      <p className="text-gray-500 text-[0.9rem] 1 mt-4">
        {t( "Preparing Git Repository")}{"."}
      </p>
      <div className="my-4 bg-gray-200 h-[18rem] -ml-[1px] rounded-lg flex flex-col  items-center justify-center">
        <div className="flex items-center gap-2">
          {/* file svg */}
          <svg fill="none" height="26" viewBox="0 0 32 32" width="26">
            <path
              d="M29.3333 25.3333C29.3333 26.0406 29.0524 26.7189 28.5523 27.219C28.0522 27.719 27.3739 28 26.6667 28H5.33333C4.62609 28 3.94781 27.719 3.44771 27.219C2.94762 26.7189 2.66666 26.0406 2.66666 25.3333V6.66667C2.66666 5.95942 2.94762 5.28115 3.44771 4.78105C3.94781 4.28095 4.62609 4 5.33333 4H12L14.6667 8H26.6667C27.3739 8 28.0522 8.28095 28.5523 8.78105C29.0524 9.28115 29.3333 9.95942 29.3333 10.6667V25.3333Z"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            ></path>
          </svg>
          {/* line svg */}
          <svg
            className="cloning_line__JxgHY"
            fill="none"
            height="2"
            viewBox="0 0 66 2"
            width="64"
          >
            <path
              d="M65 0.625H1"
              stroke="black"
              strokeDasharray="3 3"
              strokeLinecap="square"
            ></path>
          </svg>

          {/* github svg */}
          <svg
            aria-label="github"
            height="26"
            viewBox="0 0 14 14"
            width="26"
          >
            <path
              d="M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z"
              fill="black"
              fillRule="nonzero"
            ></path>
          </svg>
         
        </div>
        <div >
        <span className="text-[0.8rem] font-medium"><strong>Cloning</strong> nextjs/my-project</span>
          </div>
      </div>
    </div>
  );
}
