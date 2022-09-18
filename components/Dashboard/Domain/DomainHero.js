import React from 'react'
import useTranslation from "next-translate/useTranslation";

export default function DomainHero({ inputValueOutside, handleChangeOutside, classOutside, idOutside }) {
  const { t } = useTranslation("common");


  if (typeof window !== "undefined") {
    window.onload = function () {
      //   document.getElementById("input").onkeypress = function(e) {
      //     var chr = String.fromCharCode(e.which);
      //     if ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890.-".indexOf(chr) < 0)
      //         return false;
      // };
      document.querySelector("#input").onkeypress = function (e) {
        return "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890.-".indexOf(String.fromCharCode(e.which)) >= 0;
      }
    }
  }


  return (
    <div className={classOutside} id={idOutside}>
      <div>
        <h1 className="text-white sm:!text-[2.2rem] text-[1.6rem] font-medium">
          {t("Find your perfect domain")}
        </h1>
      </div>
      <div className="relative lg:!w-[55%] w-[95%]  my-10 mx-auto">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="input"
          value={inputValueOutside}
          onChange={handleChangeOutside}
          className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 border-b rounded-md border-gray-300 focus:ring-blue-500 focus:outline-none"
          placeholder="Search for domains..."
        />
      </div>
    </div>
  )
}
