import React from "react";

import ProjectLayout from "../../../../components/Dashboard/Project/ProjectLayout";
import Seo from "../../../../components/Common/Seo";

import SettingsSideMenu from "../../../../components/Dashboard/Project/Settings/Settings2/SettingsSideMenu";
import SettingsHeader from "../../../../components/Dashboard/Project/Settings/Settings2/SettingsHeader";
import EnvironmentVariablesMain from "../../../../components/Dashboard/Project/Settings/Settings2/EnvironmentVariables/EnvironmentVariablesMain";
import EnvironmentalVariable from "../../../../components/Dashboard/Project/Settings/Settings1/environmentVariable/EnvironmentalVariable";
import { parseContextCookie } from "../../../../utils/parse-cookie";

export const getServerSideProps = async (context) => {
  const cookies = parseContextCookie(context?.req?.headers?.cookie);
  if (!cookies?.token) {
    return { redirect: { destination: '/'+context.locale+"/login-redirect?url="+context.resolvedUrl, permanent: false } };
  }
  return {
    props: {
      cookies: parseContextCookie(context?.ctx?.req),
    },
  };
};

export default function EnvironmentVariables() {
  return (
    <>
      <Seo title="Hostinza - Project clone" description="description" />
      <SettingsHeader />
      <div className="maincontainer mx-auto sm:!mt-3 mt-0 flex sm:!flex-row flex-col  pb-10 align-middle justify-between gap-3">
        <SettingsSideMenu />
        <EnvironmentVariablesMain />
      </div>
      <EnvironmentalVariable />
    </>
  );
}
EnvironmentVariables.Layout = ProjectLayout;
