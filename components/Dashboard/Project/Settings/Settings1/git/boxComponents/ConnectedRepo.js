import {
    faUpRightFromSquare,
    faCircleQuestion,
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useTranslation from "next-translate/useTranslation";

export default function ConnectedRepo(){
    const { t } = useTranslation("common");
    return(
        <div className="flex justify-center mb-4">
        <div className="block border rounded-md border-dark-blue-2 bg-white w-full shadow-md">
          <div className="p-6">
            <h5 className="text-dark-blue-2 text-xl font-semibold mb-2">
              Connected Git Repository
            </h5>
            <p className="text-dark-blue-2 text-base mb-4 font-light">
              {t("Seamlessly create Deployments for any commits pushed to your Git repository")}{"."}
            </p>
            <div className="border flex flex-col items-center justify-between md:flex-row px-4 py-3 rounded-lg">
              <div className="flex items-center left space-x-4">
                <div className="">
                  <i className="fa fa-2x fa-github"></i>
                </div>
                <div>
                  <p className="text-dark-blue-2">
                    <a className="" href="#">
                      randomuser/weatherApp
                      <FontAwesomeIcon
                        className="text-dark-700 ml-2"
                        icon={faUpRightFromSquare}
                      />
                    </a>
                  </p>
                  <div className="updated text-dark-blue-2">Connected 2d ago</div>
                </div>
              </div>
              <div className="right">
                <button
                  type="button"
                  className="inline-block px-6 py-2 border text-gray-700 font-medium text-xs leading-tight rounded hover:text-black hover:border-black focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                >
                  {t("Disconnect")}
                </button>
              </div>
            </div>
          </div>
          <div className="py-4 px-6 border-t bg-gray-100 text-gray-800 flex justify-between">
            <div className="left">
              {t("Learn more about")}
              <a className="text-indigo-600 hover:underline ml-1" href="#">
                {t("Vercel for Git")}
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