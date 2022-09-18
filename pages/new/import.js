import React from 'react';
import Seo from '../../components/Common/Seo';

import ProjectSetupLayout from "../../components/Dashboard/ProjectSetup/ProjectSetupLayout";
import ImportLayout from '../../components/Dashboard/ProjectSetup/Import/ImportLayout'

import { parseContextCookie } from "../../utils/parse-cookie";


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
  return (
    <>
    <Seo title="Hostinza - Home" description="Import"/> 
    <ImportLayout />
    </>
  )
}

index.Layout =  ProjectSetupLayout;