import React from 'react';
import ProjectLayout from "../../../components/Dashboard/Project/ProjectLayout";
import UserOverviewLayout from '../../../components/Dashboard/Project/ProjectOverview/ProjectOverviewLayout';
import Project from '../../../components/Dashboard/Project/ProjectOverview/Projects';
    
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


export default function index() {

return(
    <>
    <UserOverviewLayout />
    <Project/>
    </>
)

}

index.Layout =  ProjectLayout;