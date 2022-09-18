import React from 'react';
import Seo from "../../../components/Common/Seo";
import ProjectLayout from "../../../components/Dashboard/Project/ProjectLayout";

// import Projects from '../../../../components/Dashboard/Project/projects/Projects';
import DeploymentLayout from '../../../components/Dashboard/Project/Deployment/DeploymentLayout/DeploymentLayout';
import Deployment from "../../../components/Dashboard/Project/Deployment/Deployment";
import {parseContextCookie} from '../../../utils/parse-cookie'


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


export default function deployments() {

return(
    <>
    <Seo
        title="Hostinza - Home"
        description="descr"
    />
    <DeploymentLayout />
    <Deployment/>
    </>
)

}
deployments.Layout =  ProjectLayout;