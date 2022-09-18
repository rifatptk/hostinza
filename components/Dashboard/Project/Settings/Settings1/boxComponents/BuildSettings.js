import {
    faUpRightFromSquare,
    faCircleQuestion,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import useTranslation from "next-translate/useTranslation";

export default function BuildSettings({heading, paragraph}){
    const { t } = useTranslation("common");
    return(
        <div className="flex justify-center mb-4">
            <div className="block border-[1px] rounded-md border-dark-blue-2 w-full">
              <div className="p-6">
                <h5 className="text-dark-blue-2 text-xl font-semibold mb-2">
                  {heading}
                </h5>
                <p className="text-dark-blue-2 text-base mb-4 font-light">
                  {paragraph}
                </p>
                <div className="flex flex-col my-5">
                  <label className="uppercase font-semibold text-sm text-gray-600">
                    Framework Present
                  </label>
                  <select
                    className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                    aria-label="Framework Present select"
                    id="frameworkPreset"
                  >
                    <option selected>{t("Create")} React App</option>
                    <option>{t("Create")} Angular App</option>
                  </select>
                </div>
                <hr />
                <div className="flex flex-col md:flex-row items-center space-x-4 py-3 my-1">
                  <h5 className="font-normal text-dark-blue-2 inline-block text-sm uppercase whitespace-nowrap">
                    Build Command
                    <FontAwesomeIcon
                      className="text-gray-400 mx-2"
                      icon={faCircleQuestion}
                    />
                  </h5>
                  <input
                    type="text"
                    className="block w-full rounded-md px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-r transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none"
                    placeholder="`npm run vercel-build` or `npm run build`"
                    disabled
                  />

                  <div className="flex items-center justify-center">
                    <label className="flex items-center cursor-pointer">
                      <div className="mr-2 uppercase text-gray-700 font-medium">
                        {t("Override")}
                      </div>

                      <div className="relative">
                        <input
                          type="checkbox"
                          id="toggleB"
                          className="sr-only peer"
                        />

                        <div className="block bg-gray-400 peer-checked:bg-indigo-600 w-14 h-8 rounded-full"></div>

                        <div className="peer-checked:translate-x-full absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center space-x-4 py-3 my-1">
                  <h5 className="font-normal text-dark-blue-2 inline-block text-sm uppercase whitespace-nowrap">
                    Output Directory
                    <FontAwesomeIcon
                      className="text-gray-400 mx-2"
                      icon={faCircleQuestion}
                    />
                  </h5>
                  <input
                    type="text"
                    className="block w-full rounded-md px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-r transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none"
                    placeholder="`public` if it exists, or `.`"
                    disabled
                  />

                  <div className="flex items-center justify-center">
                    <label className="flex items-center cursor-pointer">
                      <div className="mr-2 uppercase text-gray-700 font-medium">
                        {t("Override")}
                      </div>
                      <div className="relative">
                        <input
                          type="checkbox"
                          id="toggleC"
                          className="sr-only peer"
                        />
                        <div className="block bg-gray-400 peer-checked:bg-indigo-600 w-14 h-8 rounded-full"></div>
                        <div className="peer-checked:translate-x-full absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center space-x-4 py-3 my-1">
                  <h5 className="font-normal text-dark-blue-2 inline-block text-sm uppercase whitespace-nowrap">
                    Install Command
                    <FontAwesomeIcon
                      className="text-gray-400 mx-2"
                      icon={faCircleQuestion}
                    />
                  </h5>
                  <input
                    type="text"
                    className="block w-full rounded-md px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-r transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none"
                    placeholder="`yarn install`, `pnpm install`, or `npm install`"
                    disabled
                  />

                  <div className="flex items-center justify-center">
                    <label className="flex items-center cursor-pointer">
                      <div className="mr-2 uppercase text-gray-700 font-medium">
                      {t("Override")}
                      </div>

                      <div className="relative">
                        <input
                          type="checkbox"
                          id="toggleD"
                          className="sr-only peer"
                        />

                        <div className="block bg-gray-400 peer-checked:bg-indigo-600 w-14 h-8 rounded-full"></div>
                        <div className="peer-checked:translate-x-full absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center space-x-4 py-3 my-1">
                  <h5 className="font-normal text-dark-blue-2 inline-block text-sm uppercase whitespace-nowrap">
                    Development Command
                    <FontAwesomeIcon
                      className="text-gray-400 mx-2"
                      icon={faCircleQuestion}
                    />
                  </h5>
                  <input
                    type="text"
                    className="block w-full rounded-md px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-r transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none"
                    placeholder="None"
                    disabled
                  />

                  <div className="flex items-center justify-center">
                    <label className="flex items-center cursor-pointer">
                      <div className="mr-2 uppercase text-gray-700 font-medium">
                      {t("Override")}
                      </div>

                      <div className="relative">
                        <input
                          type="checkbox"
                          id="toggleE"
                          className="sr-only peer"
                        />

                        <div className="block bg-gray-400 peer-checked:bg-indigo-600 w-14 h-8 rounded-full"></div>

                        <div className="peer-checked:translate-x-full absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="py-4 px-6 border-t bg-gray-100 text-gray-600 font-light flex justify-between">
                <div className="left">
                  {t("Learn more about")}
                  <a className="text-indigo-600 hover:underline ml-1" href="#">
                    Build and Development Settings
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