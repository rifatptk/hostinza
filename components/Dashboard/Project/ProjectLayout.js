import React from "react";
import Header from "../Header";
import ProjectNav from "./ProjectNav";
import Footer from "../../Footer"

export default function ProjectLayout({ children }) {

  return (
    <>
      <div className="bg-[#FAFAFA]">
       <Header />
       <ProjectNav />
        {children}
        <Footer />
      </div>
    </>
  );
}