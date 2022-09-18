import React from 'react';
import Layout from '../../components/Landing/Layout';
import Seo from '../../components/Common/Seo';

import SupportGeneralQuestions from '../../components/Landing/Support/SupportGeneralQuestions';
import SupportHeroSection from '../../components/Landing/Support/SupportHeroSection';
// import ContactUsForm from '../../components/Landing/Contact/ContactUsForm';
import TokensTable from '../../components/Landing/Support/TokensTable';

export default function index() {
  return (
    <>
        <Seo title="Hostinza - Support" description="Hostinza, Share processes and data securely on a need to know basis without the need for reconciliation it combines a permissione."/>

        <SupportHeroSection/>
        <SupportGeneralQuestions/>
        <TokensTable/>
    </>
  )
}
index.Layout =Layout;
