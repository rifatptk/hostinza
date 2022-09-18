import React from "react";
import Header from "../Header";


export default function ProjectSetupLayout({ children }) {
  return (
    <>
      <div className="bg-[#FAFAFA]">
        <Header />
        {children}
      </div>
    </>
  );
}