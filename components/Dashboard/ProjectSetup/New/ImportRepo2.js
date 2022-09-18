import React from "react";
import useTranslation from "next-translate/useTranslation";
import { useState } from "react";
import BitbucketButton from "../Buttons/BitbucketButton";
import GitHubButton from "../Buttons/GitHubButton";
import GitLabButton from "../Buttons/GitLabButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
//import {
//  faBitbucket,
//  faGithub,
//  faGitlab,
//} from "@fortawesome/free-brands-svg-icons";

function ImportRepo(props) {
  const { t } = useTranslation("common");
  const [toggle, seToggle] = useState(false);
  const [custoModal, setCustoModal] = useState(false);
  const [gitProvider, setGitProvider] = useState(false);

  const setFlag = () => {
    if (custoModal) {
      seToggle(false);
    } else {
      // seToggle(!toggle);
    }
  };
  const setTeaModal = () => {
    setCustoModal(!custoModal);
    seToggle(false);
  };
  return (
    <div>
      <div className="container mx-auto w-full  justify-between pt-10 pb-5 md:pb-14 flex flex-col-reverse md:flex-row item-center">
        <div className="flex">
          <div>
            <h1 className="mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
              {t("Let's build something new")}.
            </h1>
            <p className="mt-4 text-xl text-gray-500 text-base">
              {t("To deploy a new Project, import an existing Git Repository or get started with one of our Templates")}.
            </p>
          </div>
        </div>
        <div className="relative flex flex-col">
          <p className="mt-5 text-right text-gray-500">
            <button
              onClick={() => setTeaModal()}
              onMouseEnter={() => setFlag()}
              type="button"
              id="dropdownDefault"
              data-dropdown-toggle="dropdown"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              {t("Collaborate with a team")}
            </button>
          </p>
          <div
            style={{ zIndex: "99" }}
            className={
              +!toggle
                ? "hidden absolute ml-1 border shadow-md h-40 w-64"
                : "ml-1 border bg-white shadow-md h-40 w-64 absolute top-20"
            }
          >
            <p className="p-3">{t("Upgrade to Pro")}</p>
            <p className="p-3 text-xs text-gray-500">
              {t("Additional resources. Security and collaboration features.")}
            </p>

            <p className="mt-2 text-center text-gray-500">
              <button
                type="button"
                id="dropdownDefault"
                data-dropdown-toggle="dropdown"
                className="text-gray-900 bg-white px-12 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                {t("Learn More")}
              </button>
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full bg-gary-custom  mt-20 border">
        <div
          className="container flex justify-between flex-col-reverse md:flex-row"
          style={{ position: "relative", top: "-90px" }}
        >
          <div className="md:w-3/5" style={{ paddingRight: "60px" }}>
            <div className="w-full bg-white border shadow-lg rounded-lg border border-solid border-gray-200">
              <h1 className="p-5 text-3xl">{t("Import Git Repository")}</h1>
              <hr></hr>
              <div className="flex justify-between md:flex-row p-5">
                <div className="w-1/2">
                  <select
                    onChange={(e) => setGitProvider(e.target.value)}
                    className="form-select appearance-none
                             block
      w-full
      px-3
      py-2
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded-lg
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    aria-label="Default select example"
                  >
                    <option selected className="text-gray-500" disabled>
                      {"⌕ "}{t("Select a Git NameSpace")}
                    </option>
                    <option value={false}>{"+ "}{t("Add Github Account")}</option>
                    <option value={true}>{"☰ "}{t("Switch Git Provider")}</option>
                  </select>
                </div>
                <div>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                    placeholder={t("⌕ Search")} 
                    required
                  />
                </div>
              </div>

              {/* internal box */}

              <div className="m-5 flex fext-col border h-64 items-center justify-center bg-gary-custom text-center">
                <div className="py-8 text-center mt-3">
                  {gitProvider ? (
                    <>
                      <div>
                        <GitHubButton />
                      </div>
                      <div>
                        {" "}
                        <GitLabButton />
                      </div>
                      <div>
                        <BitbucketButton />
                      </div>
                    </>
                  ) : (
                    <>
                      <p>{t("You're Almost There")}</p>
                      <p className="mt-3 text-gray-500">
                        {t(
                          "Select a GitHub account or organization on the top left to see your Git repositories"
                        )}
                      </p>
                    </>
                  )}
                </div>
              </div>

              <p className="p-5">{t("Import Third-Party Git Repository →")}</p>
            </div>
          </div>

          <div className="md:w-2/5">
            <div className="py-10 px-5 bg-gray-100 rounded-lg border-slate-200 border border-solid mx-auto w-full">
              <p className="text-2xl mb-1 ml-3 font-medium tracking-tight text-black-900 sm:text-2xl">
                {t("Clone Template")}
              </p>
              <div className="grid grid-cols-2">
                <div className="mx-3 my-2 bg-white nextImage-cover relative shadow-xl rounded-lg">
                  <Image
                    className="rounded-tl-lg rounded-tr-lg" layout="fill"
                    src={"/images/nextjs.avif"}
                    alt="project image 1"
                    width="100%"
                    height="70px"
                  />
                  <div className="flex w-full items-center justify-center">
                    <Image
                      className="rounded-tl-lg rounded-tr-lg w-6 h-6"
                      src={"/images/next.svg"}
                      alt="project image 2"
                      width="100%"
                      height="70px"
                    />
                    <p className=" text-gray-900 font-medium p-2 text-center rounded-bl-lg rounded-br-lg">
                      Next.Js
                    </p>
                  </div>
                  <div className="absolute inset-0 h-full w-full imagesArrow  flex items-center justify-center text-center mx-auto">
                    <div className="bg-gray-800 flex rounded-full justify-center items-center w-8 h-8">
                      <FontAwesomeIcon
                        className="text-white"
                        icon={faArrowRight}
                        alt="footerFacebook"
                      />
                    </div>
                  </div>
                </div>
                <div className="mx-3 my-2 bg-white nextImage-cover relative shadow-xl rounded-lg">
                  <Image
                    className="rounded-tl-lg rounded-tr-lg" layout="fill"
                    src={"/images/nextjs-commerce.webp"}
                    alt="project image 3"
                    width="100%"
                    height="70px"
                  />
                  <div className="flex w-full items-center justify-center">
                    <Image
                      className="rounded-tl-lg rounded-tr-lg w-6 h-6"
                      src={"/images/next.svg"}
                      alt="project image 4"
                      width="100%"
                      height="70px"
                    />
                    <p className=" text-gray-900 font-medium p-2 text-center rounded-bl-lg rounded-br-lg">
                      Next.Js Commerce
                    </p>
                  </div>
                  <div className="imagesArrow absolute inset-0 h-full w-full imagesArrow  flex items-center justify-center text-center mx-auto">
                    <div className="bg-gray-100 flex rounded-full justify-center items-center w-8 h-8">
                      <FontAwesomeIcon
                        className="text-black"
                        icon={faArrowRight}
                        alt="footerFacebook"
                      />
                    </div>
                  </div>
                </div>
                <div className="mx-3 my-2 bg-white nextImage-cover relative shadow-xl rounded-lg">
                  <Image
                    className="rounded-tl-lg rounded-tr-lg" layout="fill"
                    src={"/images/sveltekit.avif"}
                    alt="project image 5"
                    width="100%"
                    height="70px"
                  />
                  <div className="flex w-full items-center justify-center">
                    <Image
                      className="rounded-tl-lg rounded-tr-lg w-6 h-6"
                      src={"/images/svelte.svg"}
                      alt="project image 6"
                      width="100%"
                      height="70px"
                    />
                    <p className=" text-gray-900 font-medium p-2 text-center rounded-bl-lg rounded-br-lg">
                      SvelteKit
                    </p>
                  </div>
                  <div className="imagesArrow absolute inset-0 h-full w-full imagesArrow  flex items-center justify-center text-center mx-auto">
                    <div className="bg-gray-800 flex rounded-full justify-center items-center w-8 h-8">
                      <FontAwesomeIcon
                        className="text-white"
                        icon={faArrowRight}
                        alt="footerFacebook"
                      />
                    </div>
                  </div>
                </div>
                <div className="mx-3 my-2 bg-white nextImage-cover relative shadow-xl rounded-lg">
                  <Image
                    className="rounded-tl-lg rounded-tr-lg" layout="fill"
                    src={"/images/nuxtjs.avif"}
                    alt="project image 7"
                    width="100%"
                    height="70px"
                  />
                  <div className="flex w-full items-center justify-center">
                    <Image
                      className="rounded-tl-lg rounded-tr-lg w-6 h-6"
                      src={"/images/nuxt.svg"}
                      alt="project image 8"
                      width="100%"
                      height="70px"
                    />
                    <p className=" text-gray-900 font-medium p-2 text-center rounded-bl-lg rounded-br-lg">
                      Nuxt.Js
                    </p>
                  </div>
                  <div className="imagesArrow absolute inset-0 h-full w-full imagesArrow  flex items-center justify-center text-center mx-auto">
                    <div className="bg-gray-100 flex rounded-full justify-center items-center w-8 h-8">
                      <FontAwesomeIcon
                        className="text-black"
                        icon={faArrowRight}
                        alt="footerFacebook"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <a
                  href="#"
                  className="ml-3 text-sm font-medium tracking-tight text-black-900 hover:text-indigo-800 hover:scale-105 duration-300"
                >
                  {t("Browse All Templates")}{" "}
                  <FontAwesomeIcon
                    className="mr-2 text-light"
                    icon={faArrowRight}
                    alt="footerFacebook"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {custoModal && (
          <div className="container flex justify-center">
            <div
              style={{ top: "-150px" }}
              className="absolute bg-white dark:bg-slate-900 w-96 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
            >
              <div>
                <p className="text-center text-2xl">
                  {t("Collaborate with a Team")}
                </p>
              </div>

              <hr className="mt-5"></hr>
              <div>
                <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                  {t("Collaborate with others and take advantage of increased build concurrency, performance analytics, security features, and more")}  
                  {t("To get started, name your new team:")}
                  
                </p>

                <div className="mt-5">
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-500 text-xs"
                  >
                    {t("TEAM NAME")}
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>

                <details className="mt-5 text-xs">
                  <summary>
                    {t("Continuing will start a 14-day Pro plan trial.")}
                  </summary>
                  <p className="text-gray-500">
                    {t(
                      "Creating a new team will not affect your Personal Account (Hobby) or any of its projects."
                    )}
                  </p>
                </details>
                <hr className="mt-5"></hr>
                <div className="flex text-gray-500">
                  <div
                    className="h-30 w-30 px-10 border py-5 w-1/2 hove:shadow"
                    onClick={() => setTeaModal(false)}
                  >
                    {t("Close")}
                  </div>
                  <div className="h-30 w-30 px-10 border py-5 w-1/2">
                    {t("Save")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ImportRepo;
