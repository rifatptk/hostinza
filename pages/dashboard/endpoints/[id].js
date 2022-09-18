import React from "react";
import DashboardLayout from "../../../components/Dashboard/Dashboard/DashboardLayout";
import Seo from '../../../components/Common/Seo';

import Table from "../../../components/Dashboard/Dashboard/endpoints/Table";
import TopSection from "../../../components/Dashboard/Dashboard/endpoints/TopSecton";
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

export default function index(){
    return(
        <>
          <Seo title="Hostinza - Endpoints" description="Hostinza, Share processes and data securely on a need to know basis without the need for reconciliation it combines a permissione."/>
          <div className="min-h-[60vh]">
              <TopSection />
              <Table />
          </div>
        </>
    )
}
index.Layout =DashboardLayout;
