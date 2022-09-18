import React from 'react';
import Layout from '../../components/Landing/Layout';
import Seo from '../../components/Common/Seo';

import FeaturesOffered from '../../components/Landing/VPSHosting/FeaturesOffered';
import VPSClients from '../../components/Landing/VPSHosting/VPSClients';
import VPSHeroSection from '../../components/Landing/VPSHosting/VPSHeroSection';
import VPSPlans from '../../components/Landing/VPSHosting/VPSPlans';

export default function index() {
  return (
    <>
        <Seo title="Hostinza - vps-hosting" description="Hostinza, Share processes and data securely on a need to know basis without the need for reconciliation it combines a permissione."/>
        <VPSHeroSection/>
        <VPSPlans/>
        <FeaturesOffered/>
        <VPSClients/>
    </>
  )
}
index.Layout =Layout;
