import React from 'react';
import Layout from '../../components/Landing/Layout';
import Seo from '../../components/Common/Seo';

import AboutHeroSection from '../../components/Landing/AboutUs/AboutHeroSection';
import LifeAtHostinza from '../../components/Landing/AboutUs/LifeAtHostinza';
import MeetOurTeam from '../../components/Landing/AboutUs/MeetOurTeam';
import WhoWeAre from '../../components/Landing/AboutUs/WhoWeAre';
import WhyChooseUs from '../../components/Landing/Home/WhyChooseUs';
import AboutWhyChooseUs from "../../components/Landing/AboutUs/AboutWhyChooseUs";
import GetProOffers from "../../components/Landing/AboutUs/GetProOffers";
import OurMission from "../../components/Landing/AboutUs/OurMission";

export default function index() {
  return (
    <>
        <Seo title="Hostinza - Home" description="Hostinza, Share processes and data securely on a need to know basis without the need for reconciliation it combines a permissione."/>
        <AboutHeroSection/>
        <WhoWeAre/>
        <WhyChooseUs/>
        <LifeAtHostinza/>
        <MeetOurTeam/>
        <AboutWhyChooseUs />
        <OurMission />
        <GetProOffers />
    </>
  )
}
index.Layout =Layout;
