import {
    faUpRightFromSquare,
    faCircleQuestion,
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useTranslation from "next-translate/useTranslation";


export default function AddNew(){
    const { t } = useTranslation("common");
    return(
        <div className="flex justify-center mb-4">
        <div className="block border rounded-md border-dark-blue-2 w-full shadow-md bg-gray-50">
          <div className="p-6">
            <h5 className="text-dark-blue-2 text-xl font-medium mb-3">
              {t("Add New")}
            </h5>
            <hr />
            <div className="flex flex-col md:flex-row mt-3">
              <div className="md:w-1/2">
                <div className="flex flex-col">
                  <label className="uppercase text-xs my-3 text-gray-500 font-medium">
                    {t("Name")}
                  </label>
                  <input
                    type="text"
                    className="block rounded-md w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none"
                    id="envName"
                    placeholder="EXAMPLE_NAME"
                  />
                  <label className="uppercase text-xs my-3 text-gray-500 font-medium">
                    Value
                  </label>
                  <textarea
                    type="text"
                    className="block rounded-md w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none"
                    id="envValue"
                    placeholder="I9JU23NF394R6HH"
                  ></textarea>
                </div>
              </div>
              <div className="pl-3 md:w-1/2">
                <div className="ml-4">
                  <div className="uppercase text-xs my-3 text-gray-500 font-medium">
                    {t("Environment")}
                  </div>
                  <div className="flex items-center ml-2 my-2">
                    <input
                      className="h-5 w-5 border border-gray-300 rounded-sm bg-white checked:bg-gray-900 checked:border-gray-900 focus:outline-none transition duration-200 mt-1 align-top float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                      checked
                    />
                    <label className="px-1 inline-block text-gray-800">
                      Production
                    </label>
                  </div>
                  <hr />
                  <div className="flex justify-between ml-2 my-2">
                    <div className="">
                      <input
                        className="h-5 w-5 border border-gray-300 rounded-sm bg-white checked:bg-gray-900 checked:border-gray-900 focus:outline-none transition duration-200 mt-1 align-top float-left mr-2 cursor-pointer"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                        checked
                      />
                      <label className="px-1 inline-block text-gray-800">
                        {t("Preview")}
                      </label>
                    </div>
                    <a className="text-indigo-600" href="#">
                      Select Custom Branch
                    </a>
                  </div>
                  <hr />
                  <div className="flex items-center ml-2 my-2">
                    <input
                      className="h-5 w-5 border border-gray-300 rounded-sm bg-white checked:bg-gray-900 checked:border-gray-900 focus:outline-none transition duration-200 mt-1 align-top float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                      checked
                    />
                    <label className="px-1 inline-block text-gray-800">
                      Development
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-4 px-6 border-t text-gray-800 flex justify-between">
            <div className="left">
              {t("Learn more about")}
              <a className="text-indigo-600 hover:underline ml-1" href="#">
                {t("Environment Variables")}
                <FontAwesomeIcon
                  className="text-indigo-700 ml-2"
                  icon={faUpRightFromSquare}
                />
              </a>
            </div>
            <div className="right">
              <button
                type="button"
                className="inline-block px-6 py-2 bg-dark-blue-2  border  text-white font-medium text-xs leading-tight rounded-lg hover:scale-105 focus:outline-none focus:ring-0 transition duration-200 ease-in-out"
              >
                {t("Save")}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}