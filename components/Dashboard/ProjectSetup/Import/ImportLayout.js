import React from "react";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import ConfigureProject from "./ConfigureProject";
import Deploy from "./Deploy";
import Link from "next/link";

export default function ImportLayout() {
  const { t } = useTranslation("common");

  return (
    <div className="mb-20">
         <link
        rel="stylesheet"
        href="https://unpkg.com/flowbite@1.5.1/dist/flowbite.min.css"
      />
      <div className="bg-white sm:!px-20 px-10 py-16">
        <Link href="/new">
      <span className="flex items-center gap-1 text-gray-600 mb-2 cursor-pointer">
          <svg
            height="15"
            shapeRendering="geometricPrecision"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            width="15"
          >
            <path d="M19 12H5"></path>
            <path d="M12 19l-7-7 7-7"></path>
          </svg>
          {t("Back")}
        </span>
        </Link>
        <h1 id="heading" className="text-[2.3rem]  font-poppins font-semibold">
          {t("You're almost done")}
        </h1>
        <p className="text-[0.9rem] font-poppins font-normal">
          {t(
            "Please follow the steps to configure your Project and deploy it"
          )}.
        </p>
      </div>
      <div className="flex flex-row !w-full flex-wrap justify-center bg-white px-9 xl:px-20 gap-28">
        {/* left side */}
        <div className="lg:!w-[25%] md:!w-full w-full">
          {/* project Preview */}
          <div className=" min-h-[4.5rem] flex  items-center px-3 py-3 rounded-lg bg-[#eaeaea]">
            <Image src={"/images/github.png"} className="!w-1 !h-1" width="25" height="25" alt='icon'></Image>
            <span className="ml-2 font-medium text-[0.95rem] ">my-project</span>
          </div>

          {/* stepper */}
          <div className="pl-4 sm:block hidden mt-24 pb-8 border-b-2">
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
              <li className="mb-10 ml-6">
                <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-[#eaeaea] rounded-full ring-5 ring-white"></span>
                <h3 className="flex items-center mb-1 text-lg font-medium !text-[1rem] text-[#acacac]">
                  {t("Configure Project")}
                </h3>
              </li>
              <li className="mb-10 ml-6">
                <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-[#eaeaea] rounded-full ring-5 ring-white"></span>
                <h3 className="flex items-center mb-1 text-lg font-medium !text-[1rem] text-[#acacac]">
                  {t("Deploy")}
                </h3>
              </li>
            </ol>
          </div>

          {/* GIT REPOSITORY */}
          <div className="pb-6 sm:block hidden border-b-2">
            <div className="mt-6   pl-2 flex items-center">
              <Image src={"/images/github.png"} className="!w-1 !h-1" width="25" height="25" alt='icon'></Image>
              <span className="ml-1 font-medium text-[0.9rem]">
                user/project
              </span>
            </div>
            <div className="mt-6 pl-2 flex items-center">
              <svg
                data-testid="geist-icon"
                fill="none"
                height="20"
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width="20"
              >
                <path d="M6 3v12"></path>
                <circle cx="18" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M18 9a9 9 0 01-9 9"></path>
              </svg>
              <span className="ml-1 font-medium text-[0.9rem]">
                user/project
              </span>
            </div>
            <div className="mt-6 pl-2 flex items-center">
              <svg
                data-testid="geist-icon"
                fill="none"
                height="20"
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width="20"
              >
                <path d="M2.707 7.454V5.62C2.707 4.725 3.469 4 4.409 4h4.843c.451 0 .884.17 1.204.474l.49.467c.126.12.296.186.473.186h8.399c.94 0 1.55.695 1.55 1.59v.737m-18.661 0h-.354a.344.344 0 00-.353.35l.508 11.587c.015.34.31.609.668.609h17.283c.358 0 .652-.269.667-.61L22 7.805a.344.344 0 00-.353-.35h-.278m-18.662 0h18.662"></path>
              </svg>
              <span className="ml-1 font-medium text-[0.9rem]">./</span>
            </div>
          </div>
          <div className="mt-6 sm:block hidden">
            <a href="#">
              <span className="text-[0.9rem] text-[#0f3dbe] font-medium">
                {t("Import a different Git Repository →")}
              </span>
            </a>
            <br />
            <a href="#">
              <span className="text-[0.9rem] text-[#0f3dbe] font-medium">
                {t("Browse Templates →")}
              </span>
            </a>
          </div>
        </div>
        {/* right side */}
        <div className="flex flex-col lg:!w-[65%] md:!w-full w-full">
          <div className="bg-white px-8 py-7 shadow-md sm:w-[65%] w-full rounded-lg">
            <ConfigureProject />
          </div>
          <div className="bg-white px-8 py-7 mt-10 shadow-md  w-full rounded-lg">
            <Deploy />
          </div>
        </div>
      </div>
    </div>
  );
}
