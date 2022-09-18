import React from "react";
import useTranslation from "next-translate/useTranslation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";;
import {
  faBitbucket,
  faGithub,
  faGitlab,
} from "@fortawesome/free-brands-svg-icons";
function ProjectClone(props) {
  const { t } = useTranslation("common");
  return (
    <>
      <div className="max-w-6xl mx-auto w-full pt-5 pb-5 md:pb-14 flex flex-col-reverse md:flex-row item-center">
        <div className="flex flex-col">
          <h1 className="text-3xl text-dark-blue-2 font-semibold">{t("You're Almost done")}{"."}</h1>
          <p className="mt-5 text-gray-500">
            {t(
            "Please follow the steps to configure your Project and deploy it"
             )}.
          </p>
        </div>
      </div>

      <div className=" w-full bg-gary-custom  mt-20">
        <div
          className="mx-auto  container flex justify-between flex-col-reverse md:flex-row item-center"
          style={{ position: "relative", top: "-70px" }}
        >
          <div className="flex flex-col md:w-1/3 ml-9">
            <div style={{ position: "sticky", top: "100px", zIndex: "999" }}>
              <div role="status" className="animate-shimmer">
                <div className="h-12  min-h-12  w-80  bg-custom-color rounded "></div>
              </div>

              <div className="mt-10">
                <ul className="list-outside">
                  <li>{t('Create Git Repository')}</li>
                  <li className="mt-5 text-gray-500">{t("Deploy")}</li>
                </ul>
              </div>

              <hr className="mt-5"></hr>

              <p className="mt-5 text-gray-500 text-xs">{t("GIT REPOSITORY")}</p>
              <div role="status" className="max-w-sm animate-shimmer mt-5">
                <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-2.5"></div>
                <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <span className="sr-only">Loading...</span>
              </div>

              <p className="mt-8">{t('Import a different Git Repository →')}</p>
              <p className="mt-3">{t('Browse Templates →')}</p>
            </div>
          </div>

          <div className="md:w-2/3 w-full">
            <div className="w-full border border-dark-blue-2 shadow-lg rounded-md">
              <h1 className="p-5 text-3xl text-dark-blue-2 font-semibold">{t("Get Started")}</h1>
              <hr></hr>
              <div className="p-5">
                <p>{t("Vercel is the easiest way to deploy websites")}{"."}</p>
                <p className="font-light pt-3">
                  {t("Log in or sign up to clone and deploy")}
                </p>
              </div>

              {/* internal box */}

              <div className="m-5 flex border rounded-md justify-center  text-center">
                <div className="py-8">
                  <p className="text-dark-blue-2">{t("Select a Git provider to continue with")}{":"}</p>
                  <div className="socila-buttons mt-10">
                  <button className="bg-gray-800 text-slate-100 my-2 w-96 py-2 rounded-lg hover:bg-black">
                  <FontAwesomeIcon
                    className="mr-2 text-light hover:text-white hover:scale-105 duration-300"
                    icon={faGithub}
                    alt="github button logo"
                  />
                  {t("Continue with GitHub")}
                </button>
                <button className="bg-purple-800 text-slate-100 my-2 w-96 py-2 rounded-lg hover:bg-purple-900">
                  <FontAwesomeIcon
                    className="mr-2 text-light hover:text-white hover:scale-105 duration-300"
                    icon={faGitlab}
                    alt="gitlab button logo"
                  />
                  {t("Continue with GitLab")}
                </button>
                <button className="bg-indigo-800 text-slate-100 my-2 w-96 py-2 rounded-lg hover:bg-indigo-900">
                  <FontAwesomeIcon
                    className="mr-2 text-light hover:text-white hover:scale-105 duration-300"
                    icon={faBitbucket}
                    alt="bitbucket button logo"
                  />
                  {t("Continue with BitBucket")}
                </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Create Git Repository */}
            <div className=" w-full border-dark-blue-2 border shadow-lg mt-10 rounded-md">
              <h1 className="p-5 text-2xl text-gray-500">
                {("Create Git Repository")}
              </h1>
              <hr></hr>
              <div className="p-5">
                <p className="text-gray-500">
                    {t("To ensure you can easily update your project after deploying it, a Git repository must be created")}{". "}  
                    {t("Every push to that Git repository will be deployed automatically")}.
                </p>
              </div>

              {/* internal box */}

              <div className="m-5 flex justify-center text-center ">
                <div>
                  <form className="w-full">
                    <div role="status" className="flex flex-wrap -mx-3 mb-6 ">
                      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label
                          className="block text-left uppercase tracking-wide text-gray-700 text-xs  mb-2"
                          htmlFor="gitScope"
                        >
                          {t("GIT SCOPE")}
                        </label>
                        <input
                          className="appearance-none block w-full border text-gray-700  rounded py-3 px-4 mb-3 leading-tight"
                          id="gitScope"
                          type="text"
                          
                        />
                      </div>
                      <div className="w-full md:w-2/3 px-3">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs text-left mb-2"
                          htmlFor="repoName"
                        >
                        {t("REPOSITORY NAME")}
                        </label>
                        <input
                          className="appearance-none border block w-full  text-gray-700 rounded py-3 px-4 leading-tight"
                          id="repoName"
                          type="text"x
                        />
                      </div>

                      <div className="w-full flex  justify-between  md:flex md:items-center mt-4 pl-5">
                        <label className=" block text-gray-500 mt-10">
                          <input
                            className="leading-tight text-gray-700"
                            type="checkbox"
                            checked={true}
                          />
                          <span className="pl-1 text-sm text-gray-500">
                           {t("Create private Git Repository")}
                          </span>
                        </label>

                        <div className="mt-10">
                          {" "}
                          <p>
                            <button
                              className="border px-3 text-gray-500 text-xs p-2 bg-gray-100 rounded mr-3"
                              
                            >
                             {t("Create")}
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Deploy Section */}
            <div className=" w-ful border-dark-blue-2 border rounded-md shadow-lg mt-10">
              <h1 className="p-5 text-2xl text-gray-500">{t("Deploy")}</h1>
              <hr></hr>
              <div className="p-5">
                <p className="text-gray-500 text-xs">
                 {t( "Preparing Git Repository")}{"."}
                </p>
              </div>

              {/* internal box */}

              <div className="m-5  flex  h-64 justify-center bg-gary-custom text-center">
                <div className="mt-10">
                  <svg
                    style={{
                      border: "rgb(217, 217, 221) 1px solid",
                      borderRadius: "50%",
                      padding: "15px",
                    }}
                    fill="none"
                    height="70"
                    viewBox="0 0 32 32"
                    width="70"
                  >
                    <path
                      d="M29.3333 25.3333C29.3333 26.0406 29.0524 26.7189 28.5523 27.219C28.0522 27.719 27.3739 28 26.6667 28H5.33333C4.62609 28 3.94781 27.719 3.44771 27.219C2.94762 26.7189 2.66666 26.0406 2.66666 25.3333V6.66667C2.66666 5.95942 2.94762 5.28115 3.44771 4.78105C3.94781 4.28095 4.62609 4 5.33333 4H12L14.6667 8H26.6667C27.3739 8 28.0522 8.28095 28.5523 8.78105C29.0524 9.28115 29.3333 9.95942 29.3333 10.6667V25.3333Z"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    ></path>
                  </svg>
                </div>
                <div className="mt-10 pt-6 text-gray-500">
                  -----------------
                </div>
                <div className="mt-10">
                  <svg
                    aria-label="github"
                    height="70"
                    style={{
                      border: "rgb(217, 217, 221) 1px solid",
                      borderRadius: "50%",
                      padding: "15px",
                    }}
                    viewBox="0 0 14 14"
                    width="70"
                  >
                    <path
                      d="M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z"
                      fill="var(--geist-foreground)"
                      fillRule="nonzero"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectClone;
