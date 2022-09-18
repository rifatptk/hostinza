import React from 'react';
import Layout from '../../components/Landing/Layout';
import Seo from '../../components/Common/Seo';

import AdditionalServices from '../../components/Checkout/Checkout/AdditionalServices';
// import ChooseServer from '../../components/ChooseServer/ChooseServer';

export default function index() {
  return (
    <>
        <Seo title="Hostinza - Home" description="Hostinza, Share processes and data securely on a need to know basis without the need for reconciliation it combines a permissione."/>
        {/* <ChooseServer/> */}
        <AdditionalServices/>
    </>
  )
}
index.Layout =Layout;
