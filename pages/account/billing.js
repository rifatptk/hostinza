import React from 'react';
import DashboardLayout from "../../components/Dashboard/Dashboard/DashboardLayout";
import Seo from '../../components/Common/Seo';
import SideBar from '../../components/Dashboard/Account/SideBar';
import TopSection from '../../components/Dashboard/Account/TopSection';
import PlanBox from '../../components/Dashboard/Account/billing/PlanBox';
import PaymentBox from '../../components/Dashboard/Account/billing/PaymentBox';
import RemoteCachingBox from '../../components/Dashboard/Account/billing/RemoteCachingBox';
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

export default function index(){
    return(
      <>
        <Seo title="Hostinza - Home" description="Hostinza, Share processes and data securely on a need to know basis without the need for reconciliation it combines a permissione."/>
       <div className="min-h-[60vh]">
         <TopSection />
         <div className="maincontainer mx-auto mt-3 flex align-middle justify-between  gap-3">
              <SideBar />
              <div className='md:w-[75%] lg:w-[75%] xl:[75%] w-[75%] sm:w-[90%] xs:w-[95%] xs:mx-auto'>
              <PlanBox />
              <PaymentBox />
              <RemoteCachingBox />
              </div>
            </div>
       </div>       
      </>
    )
}
index.Layout =DashboardLayout;