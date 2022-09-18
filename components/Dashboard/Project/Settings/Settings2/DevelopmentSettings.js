import React from "react";
import "./toggle.js";
import useTranslation from "next-translate/useTranslation";

export default function DevelopmentSettings() {
  const { t } = useTranslation("common");

  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/flowbite@1.5.1/dist/flowbite.min.css"
      />
      <div className=" m-4 border-2 mt-8  rounded-md">
        <div className="p-4">
          <h1 className="text-[1.5rem] text-black font-semibold">
            {t("Build & Development Settings")}
          </h1>
          <p className="text-[0.85rem] mt-1 text-gray-600 font-normal">
            {t("When using a framework for a new project, it will be automatically detected")}{". "} 
            {t("As a result, several project settings are automatically configured to achieve the best result")}{". "} 
            {t("You can override them below")}{"."}
          </p>
          <div className="border-b-2 pb-6">
            <label
              htmlFor="teamName"
              className="block mb-0 mt-3 text-[0.8rem] font-medium text-gray-400 uppercase"
            >
              FRAMEWORK PRESET
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
          </div>
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
            {/* Development Command */}
            <div>
              <h1 className="block mb-0 mt-5 text-[0.85rem] font-medium text-gray-500 uppercase">
                {t("DEVELOPMENT COMMAND")}
              </h1>
              <div className="flex items-center">
                <input
                  type="text"
                  name="developmentCmd"
                  id="developmentCmd"
                  placeholder="brunch watch --server"
                  className="bg-[#fafafa] w-full text-gray-900 text-sm rounded-lg focus:outline-[#1141d3] !outline-none !border-[1px] !border-[#cacaca] p-2"
                  disabled
                ></input>
                <span className="ml-3 mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  {t("OVERRIDE")}
                </span>
                <label
                  htmlFor="toggle-development"
                  className="inline-flex relative items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value=""
                    id="toggle-development"
                    className="sr-only peer"
                    // onClick={handleClick}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-200 py-4 flex justify-between mt-3 items-center px-4">
          <span className="text-[0.9rem]">
            {t("Learn more about")}{" "}
            <a href="#" className="text-[#1141d3]">
              {t("Build and Development Settings")}
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
