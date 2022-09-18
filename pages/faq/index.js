import React from 'react'
import Layout from '../../components/Landing/Layout';
import Seo from '../../components/Common/Seo';

import FaqHeroSection from '../../components/Landing/FAQ/FaqHeroSection'
import FrequentlyAskedQuestion from '../../components/Landing/FAQ/FrequentlyAskedQuestion'
import HostingQuestions from '../../components/Landing/FAQ/HostingQuestions'

export default function index() {
  return (
    <>
        <Seo title="Hostinza - Home" description="Hostinza, Share processes and data securely on a need to know basis without the need for reconciliation it combines a permissione."/>
        <FaqHeroSection/>
        <FrequentlyAskedQuestion/>
        <HostingQuestions/>
    </>
  )
}
index.Layout =Layout;
