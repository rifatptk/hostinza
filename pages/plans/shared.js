import React from 'react';
import Layout from '../../components/Landing/Layout';
import Seo from '../../components/Common/Seo';

import VDSClients from '../../components/Landing/Plans/VDSHosting/VDSClients';
import VDSHeroSection from '../../components/Landing/Plans/VDSHosting/VDSHeroSection';
import VDSPlans from '../../components/Landing/Plans/VDSHosting/VDSPlans';
import FeaturesOffered from '../../components/Landing/Plans/VPSHosting/FeaturesOffered';

export default function index() {
  return (
    <>
        <Seo title="vbs-hosting - Hostinza" description="Hostinza, Share processes and data securely on a need to know basis without the need for reconciliation it combines a permissione."/>
        <VDSHeroSection/>
        <VDSPlans/>
        <FeaturesOffered/>
        <VDSClients/>
    </>
  )
}
index.Layout =Layout;
