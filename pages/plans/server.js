import React from 'react'
import Layout from '../../components/Landing/Layout';
import Seo from '../../components/Common/Seo';

import DSClients from '../../components/Landing/Plans/DSHosting/DSClients'
import DSHeroSection from '../../components/Landing/Plans/DSHosting/DSHeroSection'
import DSPlans from '../../components/Landing/Plans/DSHosting/DSPlans'
import FeaturesOffered from '../../components/Landing/Plans/VPSHosting/FeaturesOffered'

export default function index() {
  return (
    <>
        <Seo title="Hostinza - Home" description="Hostinza, Share processes and data securely on a need to know basis without the need for reconciliation it combines a permissione."/>
        <DSHeroSection/>
        <DSPlans/>
        <FeaturesOffered/>
        <DSClients/>
    </>
  )
}
index.Layout =Layout;
