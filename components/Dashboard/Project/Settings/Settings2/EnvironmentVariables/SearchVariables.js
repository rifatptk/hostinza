import React from "react";
import useTranslation from "next-translate/useTranslation";

export default function SearchVariables() {
  
  const { t } = useTranslation("common");
  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/flowbite@1.5.1/dist/flowbite.min.css"
      />
      <div className=" m-4 border-2 mt-8  rounded-md">
        <div className="p-4">
          <div className="flex sm:!flex-row flex-col gap-2">
            <div className="sm:!w-[50%] w-full">
              <form className="flex items-center">
                <div className="relative w-full">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 "
                    placeholder={t("Search")}
                    required
                  />
                </div>
              </form>
            </div>
            <div className="sm:!w-[25%] w-full">
              <select defaultValue={'DEFAULT'} className="bg-gray-50 !border-2 focus:ring-2  ring-1 ring-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 ">
                <option disabled>{t("Filter by")}{"..."}</option>
                <option  value="DEFAULT">
                  {t("All Environments")}
                </option>
                <option value="Production">Production</option>
                <option value="Preview">Preview</option>
                <option value="Development">Development</option>
              </select>
            </div>
            <div className="sm:!w-[25%] w-full">
              <select  defaultValue={'DEFAULT'} className="bg-gray-50 !border-2 focus:ring-2  ring-1 ring-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 ">
                <option disabled>{"Sort by"}{"..."}</option>
                <option  value="DEFAULT">
                  {t("Last Updated")}
                </option>
                <option value="Name">{t("Name")}</option>
                <option value="Type">{t("Type")}</option>
              </select>
            </div>
          </div>
          <div className="mt-2">
            <div className="bg-gray-200 flex flex-col justify-center items-center align-middle h-[12rem] rounded-md">
              <h5 className="text-[0.9rem] text-black font-medium mb-5">{t("No Environment Variables Added")}</h5>
              <span className="text-center text-[0.85rem] sm:!px-24 px-14">{t("Customize the behavior of your application based on the phase of the Develop, Preview, Ship workflow that it is in")}{"."}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
