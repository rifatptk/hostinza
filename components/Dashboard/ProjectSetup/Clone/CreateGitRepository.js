import React from "react";
import useTranslation from "next-translate/useTranslation";
import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

const project = [{ id: 1, repo: "my-project" }];

export default function CreateGitRepository() {
  const { t } = useTranslation("common");
  const [selected, setSelected] = useState(project[0]);
  const [query, setQuery] = useState("");

  const filteredProject =
    query === ""
      ? project
      : project.filter((git) =>
          git.repo
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div>
      <div>
        <h1 className="text-[1.6rem] text-[#0f3dbe] font-semibold py-4 pb-6 border-b-2">
          {t("Create Git Repository")}
        </h1>
      </div>
      <p className="text-gray-500 text-[0.9rem] 1 mt-4">
        {t("To ensure you can easily update your project after deploying it, a Git repository must be created")}{". "}  
        {t("Every push to that Git repository will be deployed automatically")}.
      </p>
      <div className=" pt-5 w-full flex !flex-wrap gap-5 mt-3 !items-center justify-between">
        <div className="lg:!w-[48%] md:!w-full w-full">
          <Combobox value={selected} onChange={setSelected}>
            <label className="text-gray-500 text-[0.9rem] font-medium">
              {t("GIT SCOPE")}
            </label>
            <div className="relative mt-1">
              <div className="relative w-full cursor-default overflow-hidden rounded-lg border-2 bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white    sm:text-sm">
                <Combobox.Input
                  className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                  displayValue={(git) => git.repo}
                  onChange={(event) => setQuery(event.target.value)}
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                  <SelectorIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Combobox.Button>
              </div>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery("")}
              >
                <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white rounded-t-lg text-base shadow-lg sm:text-sm">
                  {filteredProject.length === 0 && query !== "" ? (
                    <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                      {t("Nothing found.")}
                    </div>
                  ) : (
                    filteredProject.map((git) => (
                      <Combobox.Option
                        key={git.id}
                        className={({ active }) =>
                          `relative cursor-default select-none py-3 pl-10 pr-4 ${
                            active
                              ? "bg-[#0f3dbe] text-white rounded-lg"
                              : "text-gray-900"
                          }`
                        }
                        value={git}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {git.repo}
                            </span>
                            {selected ? (
                              <span
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                  active ? "text-white" : "text-white"
                                }`}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Combobox.Option>
                    ))
                  )}
                  <div>
                    <a
                      href="#"
                      className="flex items-center text-gray-600 p-3 text-sm font-medium text-white-600 bg-gray-50 border-t border-gray-200 hover:bg-gray-100 "
                    >
                      <svg
                        className="mr-1 w-5 h-5 text-gray-60"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                      </svg>
                      {t("Add Github Account")}
                    </a>
                    <a
                      href="#"
                      className="flex rounded-b-lg items-center p-3 text-gray-600 text-sm font-medium  bg-gray-50 border-t border-gray-200 hover:bg-gray-100 "
                    >
                      <svg
                        className="mr-1 ml-1 mt-2 w-5 h-5 text-gray-600"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 30 30"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.314,4.8h13.372c0.41,0,0.743-0.333,0.743-0.743c0-0.41-0.333-0.743-0.743-0.743H3.314
                    c-0.41,0-0.743,0.333-0.743,0.743C2.571,4.467,2.904,4.8,3.314,4.8z M16.686,15.2H3.314c-0.41,0-0.743,0.333-0.743,0.743
                    s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,15.2,16.686,15.2z M16.686,9.257H3.314
                    c-0.41,0-0.743,0.333-0.743,0.743s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,9.257,16.686,9.257z"
                        ></path>
                      </svg>
                      {t("Switch Git Provider")}
                    </a>
                  </div>
                </Combobox.Options>
              </Transition>
            </div>
          </Combobox>
        </div>
        <div className="lg:!w-[48%] md:!w-full w-full">
          <label className="text-gray-500 text-[0.9rem] font-medium">
            {t("REPOSITORY NAME")}
          </label>
          <input
            type="text"
            id="input-repository"
            className="block p-2 w-full text-sm text-gray-900 bg-white  border-gray-300 focus:outline-[#1141d3] rounded-lg border-2 text-left"
            placeholder="my-repository"
            defaultValue="Nextjs"
          />
        </div>
      </div>
      {/* Checkbox and button  */}
      <div className="flex justify-between items-center mt-12">
        <div className="flex items-center">
          <input
            id="checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 !text-[#0f3dbe] bg-gray-100 rounded border-gray-300 !ring-0 !outline-none focus:!outline-none "
          />
          <label
            htmlFor="checkbox"
            className="ml-2 text-sm font-medium text-gray-900"
          >
            {t("Create private Git Repository")}
          </label>
        </div>
        <div>
          <button className="text-[0.9rem] text-white bg-[#0f3dbe] px-4 py-1.5 rounded-lg">
            {t("Create")}
          </button>
        </div>
      </div>
    </div>
  );
}
