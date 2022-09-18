import React from 'react';
import Layout from '../../components/Landing/Layout';
import Seo from '../../components/Common/Seo';

import CartHeroSection from '../../components/Checkout/Cart/CartHeroSection';
import DomainsInCart from '../../components/Checkout/Cart/DomainsInCart';

export default function index() {
  return (
    <>
        <Seo title="Hostinza - Home" description="Hostinza, Share processes and data securely on a need to know basis without the need for reconciliation it combines a permissione."/>
        <CartHeroSection/>
        <DomainsInCart/>
    </>
  )
}
index.Layout =Layout;