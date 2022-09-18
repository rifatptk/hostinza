import {
    faUpRightFromSquare,
    faCircleQuestion,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useTranslation from "next-translate/useTranslation";

export default function ProjectId({heading, paragraph}){
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
            <div className="border inline-flex p-2 rounded">
              <input
                type="text"
                value="prj_3H73Y3oxiyuyiU2MYIWszwWrgokw"
                id="projectId"
                disabled=""
                className="bg-transparent w-64 px-1"
              />
              <button className="mx-1">
                <i className="far fa-copy px-1"></i>
              </button>
            </div>
          </div>
          <div className="py-4 px-6 border-t bg-gray-100 text-gray-800 flex justify-between">
            <div className="left">
              {t("Learn more about")}
              <a className="text-indigo-600 hover:underline ml-1" href="#">
                Project ID
                <FontAwesomeIcon
                  className="text-indigo-700 ml-2"
                  icon={faUpRightFromSquare}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}