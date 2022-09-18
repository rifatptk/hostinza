import React from "react";

import Seo from "../../components/Common/Seo";
import MarketplaceHeaderLayout from "../../components/Marketplace/Marketplace1/MarketplaceHeader/MarketplaceHeaderLayout";
import MarketplaceMain from "../../components/Marketplace/Marketplace1/MarketplaceMain";
import MarketPlace from "../../components/Marketplace/Marketplace2/MarketPlace";
import Footer from "../../components/Footer";

export default function index() {
  return (
    <>
      <Seo title="Hostinza - Home" description="Page description" />
      <MarketplaceMain />
      <MarketPlace />
      <Footer />
    </>
  );
}
index.Layout = MarketplaceHeaderLayout;
