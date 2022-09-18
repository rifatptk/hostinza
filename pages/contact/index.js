import React from 'react';
import Layout from '../../components/Landing/Layout';
import Seo from '../../components/Common/Seo';

import ContactHeroSection from '../../components/Landing/Contact/ContactHeroSection';
import ContactUsForm from '../../components/Landing/Contact/ContactUsForm';
import FindUs from '../../components/Landing/Contact/FindUs';

export default function index() {
  return (
    <>  
        <Seo title="Hostinza - Home" description="Hostinza, Share processes and data securely on a need to know basis without the need for reconciliation it combines a permissione."/>
        <ContactHeroSection/>
        <FindUs/>
        <ContactUsForm/>
    </>
  )
}
index.Layout =Layout;
