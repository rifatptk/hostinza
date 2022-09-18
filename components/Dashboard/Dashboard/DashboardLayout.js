import React from "react";
import Header from "../Header";
import DashboardNav from "./DashboardNav";
import Footer from "../../Footer";

export default function DashboardLayout({ children }) {

  return (
    <>
      <div className="bg-[#FAFAFA]">
        <Header />
        <DashboardNav />
        {children}
        <Footer />
      </div>
    </>
  );
}
