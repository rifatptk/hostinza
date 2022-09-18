import React from "react";
import NavLinks from "./NavLinks";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

export default function ProjectNav() {
  const { t } = useTranslation("common");
  const route = useRouter();
  return (
    
    <>
      <div className="w-full border-b-[1px] border-gray-300  bg-[#FFFFFF] xs:py-1">
        <div className="maincontainer md:mx-auto lg:mx-auto xl:mx-auto font-poppins overflow-auto no-scrollbar">
      <div className="flex bg-white">
        <NavLinks
          text={t("Overview")}
          path="/user/project"
          active={route.pathname === "/user/project"}
        />
        <NavLinks
          text={t("Deployments")}
          path="/user/project/deployments"
          active={route.pathname === "/user/project/deployments"}
        />
        <NavLinks
          text={t("Analytics")}
          path="/user/project/analytics"
          active={route.pathname === "/user/project/analytics"}
        />
        <NavLinks
          text={t("Settings")}
          path="/user/project/settings"
          active={route.pathname === "/user/project/settings"}
        />
      </div>
      </div>
      </div>
    </>
  );
}
