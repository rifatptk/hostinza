import React from "react";
import AppInstall from "./AppInstall";
import AppOverviewCard from "./AppOverviewCard";


export default function AppDetailedMain() {


  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/flowbite@1.5.1/dist/flowbite.min.css"
      />

      <div className="flex sm:!flex-row flex-col gap-12 flex-warp pt-12 pb-24  !mx-auto sm:!w-[95%] w-[87%]">
        <AppOverviewCard />
        <AppInstall />
      </div>
    </>
  );
}
