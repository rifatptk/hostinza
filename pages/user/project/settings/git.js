import React from 'react';
import Seo from '../../../../components/Common/Seo';
import ProjectLayout from "../../../../components/Dashboard/Project/ProjectLayout";

import SettingsSideMenu from '../../../../components/Dashboard/Project/Settings/Settings2/SettingsSideMenu';
import SettingsHeader from '../../../../components/Dashboard/Project/Settings/Settings2/SettingsHeader';
import GitMain from '../../../../components/Dashboard/Project/Settings/Settings2/Git/GitMain';
import Git from '../../../../components/Dashboard/Project/Settings/Settings1/git/Git';

import {parseContextCookie} from '../../../../utils/parse-cookie'

export const getServerSideProps= async (context) => {
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


export default function git() {

return(
    <>
    <Seo title="Hostinza - Project clone" description="description"/>
    <SettingsHeader />
    <div className="maincontainer mx-auto sm:!mt-3 mt-0 flex sm:!flex-row flex-col  pb-10 align-middle justify-between gap-3">
    <SettingsSideMenu />
    <GitMain />
    </div>
    <Git />

    </>
)

}

git.Layout =  ProjectLayout;
