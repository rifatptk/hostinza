import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
  faArrowRight,
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import useTranslation from "next-translate/useTranslation";
import { useState } from "react";

import {
  faBitbucket,
  faGithub,
  faGitlab,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function NewProject() {
  const [toggle, seToggle] = useState(false);
  const [custoModal, setCustoModal] = useState(false);
  const { t } = useTranslation("common");

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
    <div className="max-w-6xl mx-auto px-4 my-10">
      <div className="flex justify-between items-center">
        <div>
          <p className="mt-5 text-3xl font-semibold tracking-tight text-dark-blue-2">
          {t("Let's build something new")}.
          </p>
          <p className="mt-4 text-xl text-gray-500 text-base">
          {t("To deploy a new Project, import an existing Git Repository or get started with one of our Templates")}.
          </p>
        </div>
        <button
          onClick={() => setTeaModal()}
          onMouseEnter={() => setFlag()}
          type="button"
          id="dropdownDefault"
          data-dropdown-toggle="dropdown"
          className="text-dark-blue-2 mb-0 bg-white font-semibold border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          <FontAwesomeIcon
            className="mr-1 mt-1 text-light hover:text-white hover:scale-105 duration-300"
            icon={faPlus}
            alt="footerFacebook"
          />{" "}
          {t("Collaborate with a team")}
        </button>
      </div>

      <hr className="my-10" />
      <div className="">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div className="relative bg-white p-6 rounded-lg border-gray-100 border-2 border-solid	">
            <p className="mt-2 mb-5 text-2xl font-medium tracking-tight text-dark-blue-2 sm:text-2xl">
              {t("Import Git Repository")}
            </p>
            {/* <div className="flex justify-between space-3 my-10">
              <select
                onChange={(e) => setGitProvider(e.target.value)}
                className="form-select appearance-none
                            block px-3
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
                Default Repository                </option>
                <option value={false}>+ Add Github Account</option>
                <option value={true}>☰ Switch Git Provider</option>
              </select>
              <div>
                  <input
                    type="text"
                    id="first_name"
                    className="ml-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Search..."
                    required
                  />
                </div>
            </div> */}
            <div className="mt-3 py-10 px-5 bg-gray-100 rounded-lg border-slate-200 border border-solid mx-auto w-100">
              <p className="mt-4 text-gray-600 text-sm text-center">
                {t("Select a Git provider to import an existing project from a Git Repository")}.
              </p>
              <div className="my-10 py-3 xs:my-5 text-center">
                <button className="bg-gray-800 text-slate-100 my-2 w-full py-2 rounded hover:bg-black">
                  <FontAwesomeIcon
                    className="mr-2 text-light hover:text-white hover:scale-105 duration-300"
                    icon={faGithub}
                    alt="footerFacebook"
                  />
                  {t("Continue with GitHub")}
                </button>
                <button className="bg-purple-800 text-slate-100 my-2 w-full py-2 rounded hover:bg-purple-900">
                  <FontAwesomeIcon
                    className="mr-2 text-light hover:text-white hover:scale-105 duration-300"
                    icon={faGitlab}
                    alt="footerFacebook"
                  />
                  {t("Continue with GitLab")}
                </button>
                <button className="bg-indigo-800 text-slate-100 my-2 w-full py-2 rounded hover:bg-indigo-900">
                  <FontAwesomeIcon
                    className="mr-2 text-light hover:text-white hover:scale-105 duration-300"
                    icon={faBitbucket}
                    alt="footerFacebook"
                  />
                  {t("Continue with BitBucket")}
                </button>
              </div>
            </div>
            <div className="mt-10">
              <a
                href="#"
                className="text-sm font-medium tracking-tight text-dark-blue-2 hover:text-indigo-800 hover:scale-105 duration-300"
              >
                {t("Import Third-Party Git Repository")}{" "}
                <FontAwesomeIcon
                  className="mr-2 text-light"
                  icon={faArrowRight}
                  alt="footerFacebook"
                />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="py-10 px-5 bg-gray-100 rounded-lg border-slate-200 border border-solid mx-auto w-100">
              <p className="text-2xl mb-1 ml-3 font-medium tracking-tight text-dark-blue-2 sm:text-2xl">
                {t("Clone Template")}
              </p>
              <div className="grid grid-cols-2">
                <Link href="/new/clone">
                  <div className="mx-3 my-2 bg-white nextImage-cover relative shadow-xl rounded-lg">
                    <Image
                      layout="responsive"
                      className="rounded-tl-lg rounded-tr-lg"
                      src={"/images/nextjs.avif"}
                      alt="Next.js"
                      width="100%"
                      height="70px"
                    />
                    <div className="flex w-full items-center justify-center">
                      <Image
                        className="rounded-tl-lg rounded-tr-lg"
                        src={"/images/next.svg"}
                        alt="Next.js image"
                        layout="responsive"
                        width={"150px"}
                        height="50px"
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
                </Link>
                <Link href="/new/clone">
                  <div className="mx-3 my-2 bg-white nextImage-cover relative shadow-xl rounded-lg">
                    <Image
                      layout="responsive"
                      className="rounded-tl-lg rounded-tr-lg"
                      src={"/images/nextjs-commerce.webp"}
                      alt="Next.js e-commerce"
                      width="100%"
                      height="70px"
                    />
                    <div className="flex w-full items-center justify-center">
                      {/* <Image layout="fill"
                          className="rounded-tl-lg rounded-tr-lg w-6 h-6"
                          src={"/images/next.svg"}
                          alt="Next.js e-commerce image"
                        /> */}
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
                </Link>
                <Link href="/new/clone">
                  <div className="mx-3 my-2 bg-white nextImage-cover relative shadow-xl rounded-lg">
                    <Image
                      layout="responsive"
                      className="rounded-tl-lg rounded-tr-lg"
                      src={"/images/sveltekit.avif"}
                      alt="Svelte"
                      width="100%"
                      height="70px"
                    />
                    <div className="flex w-full items-center justify-center">
                      {/* <Image layout="fill"
                          className="rounded-tl-lg rounded-tr-lg w-6 h-6"
                          src={"/images/svelte.svg"}
                          alt="Svelte image"
                        /> */}
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
                </Link>
                <Link href="/new/clone">
                  <div className="mx-3 my-2 bg-white nextImage-cover relative shadow-xl rounded-lg">
                    <Image
                      layout="responsive"
                      className="rounded-tl-lg rounded-tr-lg"
                      src={"/images/nuxtjs.avif"}
                      alt="Nuxt.js"
                      width="100%"
                      height="70px"
                    />
                    <div className="flex w-full items-center justify-center">
                      {/* <Image layout="fill"
                          className="rounded-tl-lg rounded-tr-lg w-6 h-6"
                          src={"/images/nuxt.svg"}
                          alt="Nuxt.js svg"
                        /> */}
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
                </Link>
              </div>
              <div className="pt-7">
                <a
                  href="#"
                  className="ml-3 text-sm font-medium tracking-tight text-dark-blue-2 hover:text-indigo-800 hover:scale-105 duration-300"
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
        </dl>
      </div>
      {custoModal && (
        <div className="container flex justify-center">
          <div
            style={{ top: "150px" }}
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
                {t(
                  "Collaborate with others and take advantage of increased build concurrency, performance analytics, security features, and more. To get started, name your new Vercel team:"
                )}
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
              <div className="flex text-dark-blue-2 font-semibold">
                <div
                  className="h-16  text-center px-5  py-5 w-1/2 hover:shadow hover:cursor-pointer"
                  onClick={() => setTeaModal(false)}
                >
                  {t("Close")}
                </div>
                <div className="h-16 text-center px-5  py-5 w-1/2 font-semibold hover:shadow hover:cursor-pointer">
                  {t("Save")}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}