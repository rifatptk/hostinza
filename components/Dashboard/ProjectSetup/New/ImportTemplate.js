import React from "react";
import useTranslation from "next-translate/useTranslation";
import GitUsers from "./GitUsers";

import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import ImportRepo from "./ImportRepo";

const project = [{ id: 1, repo: "my-repository" }];

export default function ImportTemplate() {
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
    <div className="box-2 bg-white p-2 lg:w-4/5 w-11/12  flex flex-col  items-center rounded-lg mb-10 border-slate-300 border-2">
      <h2 className="sm:text-[2rem] text-[1.8rem] font-semibold mt-2 mb-5 text-center">
        {t("Import Git Repository")}
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-x-2">
        <div className="mt-1 z-10 flex-auto max-w-[65%]">
          <Combobox value={selected} onChange={setSelected}>
            <div className="relative mt-1">
              <div className="relative w-full cursor-default overflow-hidden rounded-lg !bg-white text-left focus:outline-[#0f3dbe] !outline-4">
                <Combobox.Input
                  className="px-4 py-2 pl-8 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 !focus:outline-[#1141d3] focus:!outline-4"
                  displayValue={(git) => git.repo}
                  placeholder="Select a Git Namespace"
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
        <div className="mt-2 sm:mt-1 flex-auto max-w-[65%]">
          <form>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-2 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="px-4 py-2 pl-10 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:!outline-[1px]   focus:outline-[#1141d3]"
                placeholder={t("Search")}
              />
            </div>
          </form>
        </div>
      </div>

      {/* <div className="bg-[#0f3dbe12] h-[23rem] w-full rounded-md mt-4 flex flex-col justify-center items-center">
      <h2 className="text-center text-[1.2rem] text-[#0d2352] font-semibold">
        {t("You're Almost There")}
      </h2>
      <p className="text-center text-[0.8rem] px-10">
        {t(
          "Select a GitHub account or organization on the top left to see your Git repositories."
        )}
      </p>
    </div> */}
      <div className="bg-white h-[23rem] w-full rounded-md mt-4 items-center">
        <ImportRepo />
      </div>

      <a href="#" className="mt-5 mb-1">
        <span className=" text-[0.7rem]">
          {t("Import Third-Party Git Repository →")}
        </span>
      </a>
    </div>
  );
}
