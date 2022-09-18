import {
    faUpRightFromSquare,
    faCircleQuestion,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useTranslation from "next-translate/useTranslation";

export default function NodeVersion({heading, paragraph}){
    const { t } = useTranslation("common");
    return(
        <div className="flex justify-center mb-4">
        <div className="block border rounded-md border-dark-blue-2 bg-white w-full">
          <div className="p-6">
            <h5 className="text-dark-blue-2 text-xl font-semibold mb-2">
             {heading}
            </h5>
            <p className="text-dark-blue-2 text-base mb-4 font-light">
            {paragraph}
            </p>
            <div className="flex">
              <select
                className="block w-1/2 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                aria-label="Node.js Version select"
              >
                <option selected>16.x</option>
                <option>15.x</option>
                <option>14.x</option>
              </select>
            </div>
          </div>
          <div className="py-4 px-6 border-t bg-gray-100 text-gray-800 flex justify-between">
            <div className="left">
              {t("Learn more about")}
              <a className="text-indigo-600 hover:underline ml-1" href="#">
                Node.js Version
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