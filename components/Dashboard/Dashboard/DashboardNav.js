import React from "react";
import SubHeaderLink from "./Subheaderlink";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

export default function DashboardNav() {
  const { t } = useTranslation("common");
  const route = useRouter();
  return (
    
    <>
      <div className="w-full border-b-[1px] border-gray-300  bg-[#FFFFFF] xs:py-1">
        <div className="maincontainer md:mx-auto lg:mx-auto xl:mx-auto font-poppins overflow-auto no-scrollbar">
      <div className="flex bg-white">
        <SubHeaderLink
          text={t("Overview")}
          path="/dashboard"    
          active={route.pathname === "/dashboard"}
        />
        <SubHeaderLink
          text={t("Integrations")}
          path="/integrations"
          active={false}
        />
        <SubHeaderLink text={t("Activity")} active={false} path="/dashboard/activity" />
        <SubHeaderLink
          text={t("Domains")}
          active={route.pathname === "/dashboard/domains"}
          path="/dashboard/domains"
        />
            {/* <SubHeaderLink text="Usage" active={false} path="/dashboard"/> */}
        <SubHeaderLink
          text={t("Settings")}
          active={route.pathname.startsWith("/account")}
          path="/account"
        />
      </div>
      </div>
      </div>
    </>
  );
}
