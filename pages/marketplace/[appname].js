import React from 'react';
import Seo from '../../components/Common/Seo';
import MarketplaceHeaderLayout from '../../components/Marketplace/Marketplace1/MarketplaceHeader/MarketplaceHeaderLayout';
import AppDetailedMain from '../../components/Marketplace/Marketplace1/AppDetails/AppDetailedMain'
import DetailPage from '../../components/Marketplace/Marketplace2/detailPage/DetailPage';
import Footer from '../../components/Footer'


export default function index() {

  return (
    <>
        <Seo title="Hostinza - Home" description="description"/>
        <AppDetailedMain />
        <DetailPage/>
        <Footer />
    </>
  )
}
index.Layout =MarketplaceHeaderLayout;
