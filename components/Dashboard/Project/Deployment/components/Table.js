import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faCodeBranch,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

export default function Table() {
  const { t } = useTranslation("common");
  return (
    <div className="flex w-full justify-between items-center mt-5 rounded-md shadow-lg border p-4">
      <div>
        <p className="text-dark-blue-3 font-medium text-sm">
          weather-acnhg0z4w-fjgg.host
        </p>
        <p className="mt-2 text-sm text-gray-500">Production (Current)</p>
      </div>
      <div>
        <p className="text-dark-blue-3 font-normal text-sm">
          <FontAwesomeIcon className="text-green-600 mr-2" icon={faCircle} />{" "}
          <span>{t("Ready")}</span>
        </p>
        <p className="text-gray-500 font-normal text-sm mt-2">2m 1s</p>
      </div>
      <div>
        <p className="text-sm text-gray-600 font-medium">Weather integrated</p>
        <p className="text-gray-600 font-normal text-sm mt-2">
          <FontAwesomeIcon className="text-gray-800 mr-3" icon={faCodeBranch} />{" "}
          <span>Main</span>
        </p>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-sm text-gray-500 mr-3">6d ago by user34564</p>
        <Image
          className="rounded-full ml-3"
          layout="fixed"
          width={"30px"}
          height="30px"
          src="/images/project-avatar.png"
          alt="project avatar"
        />
        <FontAwesomeIcon
          className="text-gray-800 mx-3"
          icon={faEllipsisVertical}
        />
      </div>
    </div>
  );
}