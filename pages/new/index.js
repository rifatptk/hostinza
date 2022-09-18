import React from 'react';
import Seo from "../../components/Common/Seo";
import ProjectSetupLayout from "../../components/Dashboard/ProjectSetup/ProjectSetupLayout";

import NewGitRepo from '../../components/Dashboard/ProjectSetup/New/NewGitRepoLayout'

import NewProject from '../../components/Dashboard/ProjectSetup/New/NewProject';
import ImportRepo from '../../components/Dashboard/ProjectSetup/New/ImportRepo2';

import {parseContextCookie} from '../../utils/parse-cookie'


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


export default function index() {

return(
    <>
      <Seo title="Hostinza - Home" description="description" />
      <NewGitRepo />
      <NewProject/>
      <ImportRepo />
    </>
)

}
index.Layout =  ProjectSetupLayout;