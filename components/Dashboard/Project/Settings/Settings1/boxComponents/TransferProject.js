import {
    faUpRightFromSquare,
    faCircleQuestion,
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useTranslation from "next-translate/useTranslation";

export default function TransferProject({heading, paragraph}){
    const { t } = useTranslation("common");
    return(
        <div className="flex justify-center mb-4">
        <div className="block border rounded-md border-dark-blue-2 bg-white w-full">
          <div className="p-6">
            <h5 className="text-dark-blue-2 text-xl font-semibold mb-2">
              {heading}            </h5>
            <p className="text-dark-blue-2 text-base mb-4 font-light">
              {paragraph}
            </p>
          </div>
          <div className="py-4 px-6 border-t bg-gray-100 text-gray-800 flex justify-between">
            <div className="left">
              {t("Learn more about")}
              <a className="text-indigo-600 hover:underline ml-1" href="#">
                {t("Transferring Projects")}
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