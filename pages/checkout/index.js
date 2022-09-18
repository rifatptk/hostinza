import React from 'react';
import Layout from '../../components/Landing/Layout';
import Seo from '../../components/Common/Seo';

// import CheckoutHeroSection from '../../components/Checkout/CheckoutHeroSection';
import CheckoutMain from '../../components/Checkout/Checkout-v1/CheckoutMain';

export default function index() {

  return (
      <>
        <Seo title="Hostinza - Home" description="Hostinza, Share processes and data securely on a need to know basis without the need for reconciliation it combines a permissione."/>
        {/* <CheckoutHeroSection/> */}
        <CheckoutMain/>
      </>
  )
}
index.Layout =Layout;