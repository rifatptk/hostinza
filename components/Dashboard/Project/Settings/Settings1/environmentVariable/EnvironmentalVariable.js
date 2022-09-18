import SettingsSideBar from "../SettingsSideBar";
import {
  faUpRightFromSquare,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../Header";
import AddNew from "./components/AddNew";
import Search from "./components/Search";
import AllVariables from "./components/AllVariables";
import useTranslation from "next-translate/useTranslation";

export default function EnvironmentalVariable() {
    const { t } = useTranslation("common");
  return (
    <div className="max-w-6xl mx-auto px-4">
      <Header heading="Project Settings" />
      <hr />
      <div className="flex flex-col md:flex-row main py-6 mt-5">
        <SettingsSideBar />
        <main className="flex flex-col md:ml-4 w-full">
          <h2 className="text-dark-blue-2 text-3xl font-semibold mb-2">
            {t("Environment Variables")}
          </h2>
          <p className="text-gray-700 text-base mb-4">
            {t("In order to provide your Deployment with Environment Variables at Build and Runtime, you may enter them right here, for the Environment of your choice")}{"."}
          </p>
          <p className="text-gray-700 text-base mb-4">
            {t("A new Deployment is required for your changes to take effect")}{"."}
          </p>
          <AddNew/>
          <div className="flex justify-center mb-4">
            <div className="block border rounded-md bg-white w-full shadow-md">
              <div className="py-4 px-6 border-t bg-gray-100 text-gray-800 flex justify-between">
                <div className="flex items-center ml-2">
                  <input
                    className="h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-gray-900 checked:border-gray-900 focus:outline-none transition duration-200 mt-1 align-top float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked
                  />
                  <label className="px-1 inline-block text-gray-800">
                    {t("Automatically expose")}
                    <a
                      className="text-indigo-600 hover:underline ml-1"
                      href="#"
                    >
                      {t("System Environment Variables")}
                      <FontAwesomeIcon
                        className="text-indigo-700 ml-2"
                        icon={faUpRightFromSquare}
                      />
                    </a>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <Search/>
          <AllVariables/>
        </main>
      </div>
    </div>
  );
}
