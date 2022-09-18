import React from "react";
import ProjectSetupLayout from "../../components/Dashboard/ProjectSetup/ProjectSetupLayout";
import Footer from "../../components/Footer";
import DomainMain from "../../components/Dashboard/Domain/DomainMain";

export default function index() {
  return (
    <>
      <DomainMain />
      <Footer />
    </>
  );
}
index.Layout = ProjectSetupLayout;
