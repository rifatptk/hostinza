import React from "react";
import EditModal from "./EditModal";
import "./toggle";
import useTranslation from "next-translate/useTranslation";

export default function ConfigureProject() {
  const { t } = useTranslation("common");

  return (
    <div>
      <div className="w-full">
        <h1 className="text-[1.6rem] text-[#0f3dbe] font-semibold py-4 pb-6 border-b-2">
          {t("Configure Project")}
        </h1>
        <div className="flex flex-row !w-full">
          <div className="w-full">
            <label
              htmlFor="teamName"
              className="block mb-0 mt-3 text-[0.8rem] font-medium text-gray-400 uppercase"
            >
              {t("Project Name")}
            </label>
            <div className="w-full">
              <input
                type="text"
                name="teamName"
                id="teamName"
                className="bg-[#fafafa] w-full text-gray-900 text-sm rounded-lg focus:outline-[#1141d3] !outline-none !border-[1px] !border-[#cacaca] p-2"
                required
              />
            </div>
            <label
              htmlFor="teamName"
              className="block mb-0 mt-3 text-[0.8rem] font-medium text-gray-400 uppercase"
            >
              {t("FRAMEWORK PRESET")}
            </label>
            <div className="bg-white w-full text-gray-900 text-sm rounded-lg focus:outline-[#1141d3] !outline-none !border-[1px] !border-[#cacaca] ">
              <select className="bg-white w-full text-gray-900 text-sm rounded-lg focus:outline-[#1141d3] !outline-none !border-[1px] !border-[#cacaca] p-2.5">
                <option value="angular">Angular</option>
                <option value="astro">Astro</option>
                <option value="blitzjs">Blitz.js</option>
                <option value="brunch">Brunch</option>
                <option value="create-react-app">Create React App</option>
                <option value="docusaurus">Docusaurus 1</option>
                <option value="docusaurus-2">Docusaurus 2</option>
                <option value="dojo">Dojo</option>
                <option value="eleventy">Eleventy</option>
                <option value="ember">Ember.js</option>
                <option value="gatsby">Gatsby.js</option>
                <option value="gridsome">Gridsome</option>
                <option value="hexo">Hexo</option>
                <option value="hugo">Hugo</option>
                <option value="hydrogen">Hydrogen</option>
                <option value="ionic-angular">Ionic Angular</option>
                <option value="ionic-react">Ionic React</option>
                <option value="jekyll">Jekyll</option>
                <option value="middleman">Middleman</option>
                <option value="nextjs">Next.js</option>
                <option value="nuxtjs">Nuxt.js</option>
                <option value="parcel">Parcel</option>
                <option value="polymer">Polymer</option>
                <option value="preact">Preact</option>
                <option value="redwoodjs">RedwoodJS</option>
                <option value="remix">Remix</option>
                <option value="saber">Saber</option>
                <option value="sanity">Sanity</option>
                <option value="sapper">Sapper</option>
                <option value="scully">Scully</option>
                <option value="solidstart">SolidStart</option>
                <option value="stencil">Stencil</option>
                <option value="svelte">Svelte</option>
                <option value="sveltekit">SvelteKit</option>
                <option value="umijs">UmiJS</option>
                <option value="vite">Vite</option>
                <option value="vue">Vue.js</option>
                <option value="zola">Zola</option>
                <option value="other">Other</option>
              </select>
            </div>
            <label
              htmlFor="teamName"
              className="block mb-0 mt-3 text-[0.8rem] font-medium text-gray-400 uppercase"
            >
              {t("ROOT DIRECTORY")}
            </label>

            <div className="flex gap-2 justify-between">
              <input
                type="text"
                name="rootDir"
                id="rootDir"
                value="./"
                className="bg-[#fafafa] w-full text-gray-900 text-sm rounded-lg focus:outline-[#1141d3] !outline-none !border-[1px] !border-[#cacaca] p-2"
                required
                disabled
              />

              <button
                className="block text-white !bg-[#0f3dbe]  bg-ovr focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                type="button"
                data-modal-toggle="defaultModal"
              >
                {t("Edit")}
              </button>
              <EditModal />
            </div>

            {/* //Build & Output Settings */}

            <div className="accordion bg-white mt-5 w-full text-gray-900 text-sm rounded-lg focus:outline-[#1141d3] !outline-none !border-[1px] !border-[#cacaca] p-3">
              <details className="list-none outline-none ease-in duration-300 transition-all will-change-transform">
                <summary className="summary marker text-[0.9rem] font-medium text-gray-900">
                 {t("Build and Output Settings")}
                </summary>
                <div className="flex flex-col w-full ">
                  {/* Build Command */}
                  <div className="w-full">
                    <h1 className="block mb-0 mt-5 text-[0.85rem] font-medium text-gray-500 uppercase">
                      {t("BUILD COMMAND")}
                    </h1>
                    <div className="flex items-center w-full">
                      <input
                        type="text"
                        name="buildCmd"
                        id="buildCmd"
                        placeholder="`npm run build` or `react-scripts build`"
                        className="bg-[#fafafa] w-full text-gray-900 text-sm rounded-lg focus:outline-[#1141d3] !outline-none !border-[1px] !border-[#cacaca] p-2"
                        disabled
                      ></input>
                      <span className="ml-3 mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                        {t("OVERRIDE")}
                      </span>
                      <label
                        htmlFor="toggle-build"
                        className="inline-flex relative items-center cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          value=""
                          id="toggle-build"
                          className="sr-only peer"
                          // onClick={handleClick}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                  {/* Output DIRECTORY */}
                  <div>
                    <h1 className="block mb-0 mt-5 text-[0.85rem] font-medium text-gray-500 uppercase">
                    {t("OUTPUT DIRECTORY")}
                    </h1>
                    <div className="flex items-center">
                      <input
                        type="text"
                        name="outputDir"
                        id="outputDir"
                        placeholder="build"
                        className="bg-[#fafafa] w-full text-gray-900 text-sm rounded-lg focus:outline-[#1141d3] !outline-none !border-[1px] !border-[#cacaca] p-2"
                        disabled
                      ></input>
                      <span className="ml-3 mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                        {t("OVERRIDE")}
                      </span>
                      <label
                        htmlFor="toggle-output"
                        className="inline-flex relative items-center cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          value=""
                          id="toggle-output"
                          className="sr-only peer"
                          // onClick={handleClick}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                  {/* Intsall Command */}
                  <div>
                    <h1 className="block mb-0 mt-5 text-[0.85rem] font-medium text-gray-500 uppercase">
                      {t("INSTALL COMMAND")}
                    </h1>
                    <div className="flex items-center">
                      <input
                        type="text"
                        name="installCmd"
                        id="installCmd"
                        placeholder="`yarn install`, `pnpm install`, or `npm install`"
                        className="bg-[#fafafa] w-full text-gray-900 text-sm rounded-lg focus:outline-[#1141d3] !outline-none !border-[1px] !border-[#cacaca] p-2"
                        disabled
                      ></input>
                      <span className="ml-3 mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                        {t("OVERRIDE")}
                      </span>
                      <label
                        htmlFor="toggle-install"
                        className="inline-flex relative items-center cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          value=""
                          id="toggle-install"
                          className="sr-only peer"
                          // onClick={handleClick}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </details>
            </div>

            {/* Environment Variables */}
            <div className="accordion bg-white mt-5 w-full flex flex-wrap text-gray-900 text-sm rounded-lg focus:outline-[#1141d3] !outline-none !border-[1px] !border-[#cacaca] p-3">
              <details className="list-none outline-none w-full flex">
                <summary className="summary marker text-[0.9rem] font-medium text-gray-900">
                  {t("Environment Variables")}
                </summary>
                <form className="flex sm:!flex-row flex-col justify-start items-center w-full gap-3 flex-wrap ">
                  {/* Name */}
                  <div className="sm:!w-[40%] w-full flex flex-col">
                    <h1 className="block mb-1 mt-5 text-[0.85rem] font-medium text-gray-500 uppercase">
                      {t("NAME")}
                    </h1>
                    <div className="flex items-center">
                      <input
                        type="text"
                        name="nameExample"
                        id="nameExample"
                        placeholder="EXAMPLE_NAME"
                        className="bg-[#fafafa] w-full text-gray-900 text-sm rounded-lg focus:outline-[#1141d3] !outline-none !border-[1px] !border-[#cacaca] p-3"
                      ></input>
                    </div>
                  </div>
                  {/* Value Key */}
                  <div className="sm:!w-[40%] w-full  flex flex-col">
                    <h1 className="flex mb-1 mt-5 text-[0.85rem] font-medium text-gray-500 uppercase">
                      {t("VALUE")}{" "}
                      <span className="sm:flex hidden md:hidden lg:block xl:block">
                        {t("(WILL BE ENCRYPTED)")}
                      </span>
                    </h1>
                    <div className="flex items-center">
                      <input
                        type="text"
                        name="valueKey"
                        id="valueKey"
                        placeholder="I9JU23NF394R6HH"
                        className="bg-[#fafafa] w-full text-gray-900 text-sm rounded-lg focus:outline-[#1141d3] !outline-none !border-[1px] !border-[#cacaca] p-3"
                      ></input>
                    </div>
                  </div>
                  {/* Add button */}
                  <div className="sm:!w-[15%] w-full  flex flex-col">
                    <h1 className="block mb-1  md:mt-5 lg:mt-5 !xl:mt-5 -mt-4 text-[0.85rem] font-medium text-gray-500 uppercase invisible">
                      .
                    </h1>
                    <div>
                      <button
                        className=" !bg-[#1141d3] w-full text-white font-medium rounded-lg text-sm px-5 py-3 text-center"
                        role="button"
                        type="submit"
                      >
                        {t("Add")}
                      </button>
                    </div>
                  </div>
                </form>
                <span className="block mb-0 mt-5 ml-1 text-[0.85rem] font-medium text-gray-500">
                  {t("Learn more about")}{" "}
                  <a href="#" className="text-blue-content">
                    {t("Environment Variables")}
                  </a>
                </span>
              </details>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className="w-full bg-[#0f3dbe] py-2.5 px-2 mt-5 rounded-lg text-white text-[0.9rem]">
          {t("Deploy")}
        </button>
      </div>
    </div>
  );
}
