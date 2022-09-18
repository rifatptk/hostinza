import React from "react";
import Seo from "../../components/Common/Seo";
import ProjectSetupLayout from "../../components/Dashboard/ProjectSetup/ProjectSetupLayout";

import CloneGitRepo from "../../components/Dashboard/ProjectSetup/Clone/CloneLayout";

import ProjectClone from "../../components/Dashboard/ProjectSetup/Clone/ProjectClone";
import { parseContextCookie } from "../../utils/parse-cookie";

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

export default function clone() {
  return (
    <>
      <Seo title="Hostinza - Project clone" description="Hostinza." />
      <CloneGitRepo />
      <ProjectClone />
    </>
  );
}

clone.Layout = ProjectSetupLayout;
