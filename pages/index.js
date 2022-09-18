import dynamic from "next/dynamic";
import React from "react";
import Layout from "../components/Landing/Layout";
import Seo from "../components/Common/Seo";

import FeaturesWeOffer from "../components/Landing/Home/FeaturesWeOffer";
import HomeHeroSection from "../components/Landing/Home/HomeHeroSection";
import HomeSlider from "../components/Landing/Home/HomeSlider";
import InfoBlogs from "../components/Landing/Home/InfoBlogs";
import PricingPlans from "../components/Landing/Home/PricingPlans";
// import SelectPlan from "../components/Landing/Home/SelectPlan";
// import WhyChooseUs from "../components/Landing/Home/WhyChooseUs";
// import ExploreLocations from "../components/Landing/Home/ExploreLocations";
// import AccelerateYourApp from "../components/Landing/Home/AccelerateYourApp";

//const HostinzaNetwork = dynamic(()=>import("../components/Landing/Home/Network"))
const SearchDomain = dynamic(() =>
  import("../components/Landing/Home/SearchDomain")
);
import { getBlogs, getBlogsKey } from "../data/blogs";
import { getPlans, getPlansKey } from "../data/plans";

// import HostinzaNetworkMap from "../components/Landing/Home/HostinzaNetworkMap"
import { SWRConfig } from "swr";
import Products from "../components/Landing/Products/Products";

export const getStaticProps = async () => {
  const blogs = await getBlogs();
  const plans = await getPlans();
  return {
    props: {
      fallback: {
        [getBlogsKey]: blogs,
        [getPlansKey]: plans,
      },
    },
  };
};

export default function Home({ fallback }) {
  return (
    <SWRConfig value={{ fallback }}>
      <Seo title="Hostinza - Home" description="Hostinza, Home" />
      <HomeHeroSection />
      <Products />
      <SearchDomain />
      {/* <WhyChooseUs /> */}
      <PricingPlans />
      {/* <SelectPlan/> */}
      <FeaturesWeOffer />
      {/* <HostinzaNetwork /> */}
      <HomeSlider />
      <InfoBlogs />
      {/* <ExploreLocations/> */}
      {/* <AccelerateYourApp/> */}
    </SWRConfig>
  );
}
Home.Layout = Layout;
