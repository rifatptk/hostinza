import {
    faUpRightFromSquare,
    faCircleQuestion,
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useTranslation from "next-translate/useTranslation";

export default function IgnoreBuild(){
    const { t } = useTranslation("common");
    return(
        <div className="flex justify-center mb-4">
        <div className="block border rounded-md border-dark-blue-2 bg-white w-full shadow-md">
          <div className="p-6">
            <h5 className="text-dark-blue-2 text-xl font-semibold mb-2">
              {t("Ignored Build Step")}
            </h5>
            <p className="text-dark-blue-2 text-base mb-4 font-light">
              {t("When a commit is pushed to the Git repository that is connected with your Project, its SHA will determine if a new Build has to be issued")}{". "} 
              {t("If the SHA was deployed before, no new Build will be issued")}{"."}
            </p>
            <p className="text-dark-blue-2 text-base mb-4 font-light">
              {t("You can customize this behavior with a command that exits with code 1 (new Build needed) or code 0")}{"."}
            </p>
            <div className="flex flex-col">
              <label className="uppercase text-gray-600 text-xs font-medium mb-3">
                Command
              </label>
              <input
                type="text"
                className="bg-clip-padding bg-white block border border-gray-300 border-solid ease-in-out focus:bg-white focus:border-gray-600 focus:outline-none focus:text-gray-700 font-normal m-0 px-3 py-1 rounded-l rounded-r text-base text-gray-700 transition md:w-1/2"
                id="branchName"
                placeholder="git diff --quiet HEAD^ HEAD ./"
              />
            </div>
          </div>
          <div className="py-4 px-6 border-t bg-gray-100 text-gray-800 flex justify-between">
            <div className="left">
              {t("Learn more about")}
              <a className="text-indigo-600 hover:underline ml-1" href="#">
                {t("Ignored Build Step")}
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