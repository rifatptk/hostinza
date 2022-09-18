import React from "react";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import CreateGitRepository from "./CreateGitRepository";
import DeployClone from "./DeployClone";
import Link from "next/link";

export default function CloneLayout() {
  const { t } = useTranslation("common");
  return (
    <div>
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
        {/* second section */}
        <div className="mt-16 flex flex-wrap gap-10 justify-between">
          {/* left side */}
          <div className="lg:!w-[30%] md:!w-full w-full">
            {/* project Preview */}
            <div className=" min-h-[15rem] flex flex-col items-center p-6 rounded-lg bg-[#eaeaea]">
              <Image src={"/images/nextjs-commerce.webp"} width="400" height="200" className="!w-10 !h-10" alt='clone'></Image>
              <div className="mt-5">
                <a href="#" className="flex items-center justify-start gap-1">
                  <span className="font-medium text-[1.1rem] text-gray-900">
                    Next.js
                  </span>
                  <svg
                    data-testid="geist-icon"
                    fill="none"
                    height="16"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="16"
                  >
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14L21 3"></path>
                  </svg>
                </a>
                <span className=" font-medium text-[0.9rem] text-gray-600">
                  {t("A Next.js app and a Serverless Function API.")}
                </span>
              </div>
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
                <Image src={"/images/github.png"} alt='icon' width="25" height="25" className="!w-1 !h-1"></Image>
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
             <div className="flex flex-col lg:!w-[60%] md:!w-full w-full">
          <div className="bg-white px-8 py-7 shadow-md sm:w-[65%] w-full rounded-lg">
            <CreateGitRepository />
          </div>
          <div className="bg-white px-8 py-7 mt-10 shadow-md  w-full rounded-lg">
            <DeployClone />
          </div>
        </div>
        </div>
     
      </div>
    </div>
  );
}
