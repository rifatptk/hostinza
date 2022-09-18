import React from "react";
import Image from "next/image";
import Script from "next/script";
import useTranslation from "next-translate/useTranslation";

export default function GitUsers(props) {
  const { t } = useTranslation("common");

  return (
    <ul className="overflow-y-auto px-3 pb-3 h-min text-sm text-gray-700 dark:text-gray-200">
      <li>
        <a
          href="#"
          className="flex items-center py-2 px-4 hover:bg-gray-100 hover:rounded text-slate-600"
        >
          <Image
            className="mr-2 w-5 h-5 rounded-full"
            src={props.repoImg}
            alt="avatar"
          />
          {props.repoName}
        </a>
      </li>
    </ul>
  );
}
