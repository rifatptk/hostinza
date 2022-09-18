import React from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const FooterLink = ({ groupTitle, groupLinks }) => {
  const { t } = useTranslation("common");

  return (
    <div className="w-auto text-left pt-10 lg:pt-0 md:ml-0">
      <h3 className="text-xl font-normal text-white mb-0">{t(groupTitle)}</h3>
      <hr className="h-1 bg-light-blue w-10 border-none my-4"></hr>
      <div className="flex flex-col w-auto mt-5">
        {groupLinks.map((item) => (
          <Link key={item.title} href={item.link}>
            <a className="mt-5 text-gray-300 text-sm cursor-pointer hover:text-white hover:scale-105 transition-all duration-500">
              {t(item.title)}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterLink;
