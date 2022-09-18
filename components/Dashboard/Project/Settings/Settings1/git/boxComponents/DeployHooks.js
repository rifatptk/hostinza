import {
    faUpRightFromSquare,
    faCircleQuestion,
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useTranslation from "next-translate/useTranslation";

export default function DeployHooks(){
    const { t } = useTranslation("common");
    return(
        <div className="flex justify-center mb-4">
            <div className="block border rounded-md border-dark-blue-2 bg-white w-full shadow-md">
              <div className="p-6">
                <h5 className="text-dark-blue-2 text-xl font-semibold mb-2">
                  Deploy Hooks
                </h5>
                <p className="text-dark-blue-2 text-base mb-4 font-light">
                  {"Deploy hooks "}{t("are unique URLs that allow you to trigger deployment of a given branch")}{"."}
                </p>
                <p className="text-dark-blue-2 text-base mb-4 font-light">
                  {t("This project does not have any deploy hooks")}{"."}
                </p>
                <p className="text-dark-blue-2 text-lg font-semibold mb-4">
                  {t("Create")} Hook
                </p>
                <form className="flex flex-col md:flex-row space-x-6">
                  <input
                    type="text"
                    className="bg-clip-padding bg-white block border border-gray-300 border-solid ease-in-out focus:bg-white focus:border-gray-600 focus:outline-none focus:text-gray-700 font-normal m-0 px-3 py-2 rounded-l rounded-r text-base text-gray-700 transition md:w-1/2"
                    placeholder="My Example Hook"
                  />
                  <input
                    type="text"
                    className="bg-clip-padding bg-white block border border-gray-300 border-solid ease-in-out focus:bg-white focus:border-gray-600 focus:outline-none focus:text-gray-700 font-normal m-0 px-3 py-2 rounded-l rounded-r text-base text-gray-700 transition md:w-1/4"
                    placeholder="main"
                  />
                  <button
                    type="button"
                    className="inline-block px-4 py-1 border hover:text-gray-900 font-normal text-sm leading-tight rounded-lg bg-dark-blue-2 hover:bg-transparent hover:border-dark-blue-2 text-gray-50 focus:outline-none focus:ring-0 transition duration-150 ease-in-out md:w-1/6"
                  >
                    {t("Create")} Hook
                  </button>
                </form>
              </div>
              <div className="py-4 px-6 border-t bg-gray-100 text-gray-800 flex justify-between">
                <div className="left">
                  {t("Learn more about")}
                  <a className="text-indigo-600 hover:underline ml-1" href="#">
                    Root Directory
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