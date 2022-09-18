import React from "react";
import useTranslation from "next-translate/useTranslation";
import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";


const project = [{ id: 1, repo: "main" }];

export default function AddNew() {
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
    <>
      <div className=" m-4 border-2 mt-8  rounded-md">
        <div className="p-4">
          <h1 className="text-[1.1rem] border-b-2 pb-4 text-black font-semibold">
            {t("Add New")}
          </h1>

          <div className="flex sm:!flex-row flex-col items-start gap-5">
            <div className="sm:!w-[60%] w-full">
              <form className="w-full flex flex-col mt-5">
                <label className="text-[0.85rem] font-medium ml-0.5 text-gray-500">
                  {t("NAME")}
                </label>
                <input
                  className="text-[0.95rem] w-full text-gray-600 border-[1px] mt-2 px-2 py-2 focus:!outline-[#1141d3] rounded-lg"
                  placeholder="EXAMPLE_NAME"
                ></input>
              </form>
              <form className="w-full flex flex-col mt-5">
                <label className="text-[0.85rem] font-medium ml-0.5 text-gray-500">
                  {t("VALUE")}
                </label>
                <textarea
                  rows="5"
                  className="text-[0.95rem] resize-none w-full text-gray-600 border-[1px] mt-2 px-2 focus:!ring-[#1141d3] py-2 rounded-lg"
                  placeholder="II9JU23NF394R6FH"
                ></textarea>
              </form>
            </div>
            <div className="sm:!w-[40%] w-full">
              <h5 className="text-[0.85rem] font-medium  mt-5 text-gray-500">
                {t("ENVIRONMENT")}
              </h5>
              <div>
                <form className="mt-2">
                <div className="flex items-center border-b-2 py-2">
                  <input
                    type="checkbox"
                    id="production"
                    name="production"
                    value="Production"
                  />
                  <label className="text-[0.92rem] text-gray-900 ml-2" htmlFor="production">Production</label>
                  </div>
                  <div className="flex items-center border-b-2 py-2">
                  <input
                    type="checkbox"
                    id="preview"
                    name="preview"
                    value="Preview"
                  />
                  <label className="text-[0.92rem] text-gray-900 ml-2" htmlFor="preview">Preview</label>
                  </div>
                  <div className="flex items-center border-b-2 py-2">
                  <input
                    type="checkbox"
                    id="deployment"
                    name="deployment"
                    value="Deployment"
                  />
                  <label className="text-[0.92rem] text-gray-900 ml-2" htmlFor="deployment">Deployment</label>
                  </div>
                </form>
              </div>
              <div>
              <Combobox value={selected} onChange={setSelected}>
            <h5 className="text-gray-500 text-[0.9rem] mt-3 ml-1 font-medium">
            <strong>{t("OR")}</strong> {t("Select Custom Branch")}
            </h5>
            <div className="relative mt-1">
              <div className="relative w-full cursor-default overflow-hidden rounded-lg border-2 bg-white text-left">
                <Combobox.Input
                  className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5  focus:!outline-none text-gray-900 focus:!ring-0"
                  displayValue={(git) => git.repo}
                  onChange={(event) => setQuery(event.target.value)}
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex focus:!outline-none items-center pr-2">
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
                      {t("No branch found.")}
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
                </Combobox.Options>
              </Transition>
            </div>
          </Combobox>
                
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-200 py-4 flex justify-between mt-3 items-center px-4">
          <span className="text-[0.9rem]">
            {t("Learn more about")}{" "}
            <a href="#" className="text-[#1141d3]">
            {t("Environment Variables")}
            </a>{" "}
          </span>
          <button className="bg-gray-200 border-[1px] float-right border-[#1141d3] text-[#1141d3] py-0.5 px-3 rounded-lg hover:text-white hover:bg-[#1141d3]">
            {t("Save")}
          </button>
        </div>
      </div>
    </>
  );
}
