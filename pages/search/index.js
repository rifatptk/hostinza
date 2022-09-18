import React from 'react'
import Layout from '../../components/Landing/Layout';
import Seo from '../../components/Common/Seo';

import SearchHeroSection from '../../components/Checkout/Checkout/SearchHeroSection';
import SearchResults from '../../components/Checkout/Checkout/SearchResults';

export default function index() {
  return (
    <>
        <Seo title="Hostinza - Home" description="Hostinza, Share processes and data securely on a need to know basis without the need for reconciliation it combines a permissione."/>
        <SearchHeroSection/>
        <SearchResults/>
    </>
  )
}
index.Layout =Layout;
