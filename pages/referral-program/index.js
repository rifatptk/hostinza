import React from 'react';
import Layout from '../../components/Landing/Layout';
import Seo from '../../components/Common/Seo';

import RefferalHeroSection from '../../components/Landing/RefferalProgram/RefferalHeroSection';
import WhoWeAre from '../../components/Landing/AboutUs/WhoWeAre';
import HowAffiliateWorks from '../../components/Landing/RefferalProgram/HowAffiliateWorks';
import StepGuide from '../../components/Landing/RefferalProgram/StepGuide';
import GenerateReferralLink from '../../components/Landing/RefferalProgram/GenerateReferralLink';

export default function index() {
  return (
    <>
        <Seo title="Hostinza - Home" description="Hostinza, Share processes and data securely on a need to know basis without the need for reconciliation it combines a permissione."/>
        <RefferalHeroSection/>
        <WhoWeAre/>
        <HowAffiliateWorks/>
        <StepGuide/>
        <GenerateReferralLink/>
    </>
  )
}
index.Layout =Layout;
