import {
    faUpRightFromSquare,
    faCircleQuestion,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useTranslation from "next-translate/useTranslation";

export default function ProjectName({heading, paragraph}){
    const { t } = useTranslation("common");
    return(
        <div className="flex justify-center mb-4">
        <div className="block border border-dark-blue-2 rounded-md bg-white w-full">
          <div className="p-6">
            <h5 className="text-dark-blue-2 text-xl font-semibold mb-2">
             {heading}
            </h5>
            <p className="text-dark-blue-2 text-base mb-4 font-light">
              {paragraph}
            </p>
            <div className="flex flex-col md:flex-row">
              <span className="bg-gray-200 rounded-l px-3 py-2">
                vercel.com/randomuser/
              </span>
              <input
                type="text"
                className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-r transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none"
                placeholder="weather-app"
              />
            </div>
          </div>
          <div className="py-4 px-6 border-t bg-gray-100 text-gray-800 flex justify-between">
            <div className="left">
              {t("Learn more about")}
              <a className="text-indigo-600 hover:underline ml-1" href="#">
                {t("Project Name")}
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