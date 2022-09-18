import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
  faArrowRight,
  faCircle,
  faInfoCircle,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import {
  faBitbucket,
  faGithub,
  faGitlab,
} from "@fortawesome/free-brands-svg-icons";
import useTranslation from "next-translate/useTranslation";

export default function Project() {
    const { t } = useTranslation("common");
  return (
    <div className="max-w-6xl mx-auto px-4 my-10">
      <div className="flex justify-between items-center">
        <div className="header flex">
          <h1 className="text-3xl font-semibold text-dark-blue-2 xs:ml-3 xs:text-2xl my-3">
            Weather Application
          </h1>
        </div>
        <hr />
        <div className="flex justify-end">
          <button className="bg-transparent border-[2px] border-dark-blue-2 hover:scale-[1.03] hover:shadow-sm text-dark-blue-2 text-sm  rounded  transition duration-200 px-3 py-2 mr-2 xs:hidden">
            <span className="text-dark-blue-2 text-sm mx-auto">
              {t("View Git Repository")}
            </span>
          </button>
          <button className="bg-dark-blue-2 border-[2px] border-dark-blue-2 hover:scale-105  text-sm  rounded transition duration-200 mr-2">
            <span className="text-light-gray px-5 text-sm xs:hidden">
              {t("Visit")}
            </span>
          </button>
        </div>
      </div>
      <hr className="mt-5"></hr>

      <div className="flex justify-between items-center mt-10 ">
        <div>
          <h4 className="mt-2 text-2xl text-md font-medium tracking-tight text-dark-blue-2">
            Production Deployment
          </h4>
          <p className="text-sm mt-3 text-gray-500">
            {t("The deployment that is available to your visitors")}.
          </p>
        </div>
        <div className="flex justify-end items-center">
          <button className="bg-dark-blue-2 border-[2px] border-dark-blue-2 hover:scale-105  text-sm  rounded transition duration-200 py-1 mr-2">
            <span className="text-light-gray px-5 text-sm xs:hidden">
              {t("View Build Logs")}
            </span>
          </button>
          <button className="bg-transparent border-[2px] border-dark-blue-2 hover:scale-[1.03] hover:shadow-sm text-dark-blue-2 text-sm rounded transition duration-200 px-3 py-1 mr-2 xs:hidden">
            <span className="text-dark-blue-2 text-sm mx-auto">
              {t("View Functions Logs")}
            </span>
          </button>
          <button className="bg-dark-blue-2 border-[2px] border-dark-blue-2 hover:scale-105  text-sm  rounded transition duration-200 py-1 mr-2">
            <span className="text-light-gray px-5 text-sm xs:hidden">
              {t("View Domains")}
            </span>
          </button>
          <Image
            layout="fixed"
            className="rounded-full ml-2 w-16 h-16"
            src="/images/project-avatar.png"
            alt="project avatar"
            width="40px"
            height="40px"
          />
        </div>
      </div>
      <div className="my-10">
        <div className="grid grid-cols-2 gap-4 items-center rounded-md border border-dark-blue-2 bg-white p-4 shadow-lg p-4">
          <div className="text-center">
            <div className="my-5">
              <p className="text-gray-500 text-sm font-normal">{t("DEPLOYMENT")}</p>
              <p className="text-sm text-black font-medium">
                <a href="#">weather-acnhg0z4w-sddj.vercel.app</a>
              </p>
            </div>
            <div className="my-5">
              <p className="text-gray-500 text-sm font-normal">{t("DOMAINS")}</p>
              <p className="text-sm text-black font-medium">
                <a href="#">weather-app-gilt-xi.vercel.app</a>{" "}
                <span className="bg-gray-700 ml-2 rounded-full p-2 text-white">
                  +2
                </span>
              </p>
            </div>
            <div className="flex justify-center my-5">
              <div>
                <p className="text-gray-500 text-sm font-normal">STATUS</p>
                <p className="text-sm mt-2">
                  <FontAwesomeIcon
                    className="text-green-600 mr-2"
                    icon={faCircle}
                  />
                  {t("Ready")}
                </p>
              </div>
              <div className="ml-10">
                <p className="text-gray-500 text-sm font-normal">
                  {t("CREATED")}{" "}
                  <FontAwesomeIcon
                    className="text-gray-400 ml-1"
                    icon={faInfoCircle}
                  />
                </p>
                <p className="text-sm mt-2">2h ago</p>
              </div>
            </div>
            <div>
              <p className="text-gray-500 text-sm font-normal">BRANCH</p>
              <p>
                <FontAwesomeIcon
                  className="text-gray-900 mr-2"
                  icon={faGithub}
                />{" "}
                main
              </p>
              <p className="text-gray-500 font-medium">
                <a href="#">weather integrated</a>
              </p>
            </div>
          </div>
          <div className="">
            <div className="border p-5 rounded-sm">
              <Image
                objectFit="cover"
                width={6}
                height={4}
                layout="responsive"
                className="rounded-md"
                src="/images/logo-og.png"
                alt="image logo"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 bg-white p-5 items-center rounded-md mt-5 shadow-lg">
        <div className="text-gray-600 text-sm">
          <p>{t("To update your Production Deployment, push to the main branch")}.</p>
        </div>
        <div>
          <button className="bg-transparent ml-auto block border-[2px] border-dark-blue-2 hover:scale-[1.03] hover:shadow-sm text-dark-blue-2 text-sm rounded transition duration-200 px-3 py-1 mr-2 xs:hidden">
            <span className="text-dark-blue-2 text-sm mx-auto">{t("Learn More")}</span>
          </button>
        </div>
      </div>
      <hr className="mt-10"></hr>
      <div className="mt-10">
        <h4 className="mt-2 text-2xl text-md font-medium tracking-tight text-dark-blue-2">
          {t("Preview Deployments")}
        </h4>

        <div className="bg-white shadow-lg rounded-lg p-4 mt-4 border border-dark-blue-2">
          <div className="border-2 border-dotted h-80 flex items-center justify-center">
            <div>
              <h4 className="mt-2 text-2xl text-md font-medium tracking-tight text-dark-blue-2">
                {t("No Preview Deployments")}
              </h4>
              <p className="text-gray-500 mt-5">
                {t("Commit using our Git connections")}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
