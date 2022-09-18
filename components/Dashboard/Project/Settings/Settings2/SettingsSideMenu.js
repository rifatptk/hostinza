import React from 'react'
import SettingLinks from "./SettingLinks"
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

export default function SettingsSideMenu() {
    const route = useRouter();
    const { t } = useTranslation("common");
  return (
    <>
    <div className="sm:!w-[30%] w-full flex sm:!flex-col h-fit top-5 sm:!sticky rounded-md bg-[#fafafa] xs:py-1">
      <div className="maincontainer md:mx-auto lg:mx-auto xl:mx-auto font-poppins overflow-auto no-scrollbar">
    <div className="flex sm:!flex-col flex-row justify-center bg-[#fafafa]">
      <SettingLinks
        text={t("General")}
        path="/user/project/settings"
        active={route.pathname === "/user/project/settings"}
      />
      <SettingLinks
        text={t("Domains")}
        path="/user/project/settings/"
        active={route.pathname === "/user/project/settings"}
      />
      <SettingLinks
        text={t("Integrations")}
        path="/user/project/settings"
        active={route.pathname === "/user/project/settings"}
      />
      <SettingLinks
        text="Git"
        path="/user/project/settings/git"
        active={route.pathname === "/user/project/settings/git"}
      />
      <SettingLinks
        text={t("Serverless Functions")}
        path="/user/project/settings"
        active={route.pathname === "/user/project/settings"}
      />
      <SettingLinks
        text={t("Environment Variables")}
        path="/user/project/settings/environment-variables"
        active={route.pathname === "/user/project/settings/environment-variables"}
      />
      <SettingLinks
        text={t("Security")}
        path="/user/project/settings"
        active={route.pathname === "/user/project/settings"}
      />
      <SettingLinks
        text={t("Advanced")}
        path="/user/project/settings"
        active={route.pathname === "/user/project/settings"}
      />
    </div>
    </div>
    </div>
  </>
  )
}
