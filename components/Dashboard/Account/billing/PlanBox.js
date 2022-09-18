import React, { useState } from "react";
import UsageDetailsBox from "./UsageDetailsBox";
import {TeamModel} from "./Model";
import useTranslation from "next-translate/useTranslation";

export default function PlanBox() {

  const { t } = useTranslation("common");
  const [state,setstate] = useState(false)

  return (
    <div className="w-[100%] border-[1px] border-dark-blue-2 my-6 xs:my-0   rounded-md  ">
    <TeamModel state={state} setstate={setstate}/>
    <div
      className={`w-full py-1 font-poppins relative px-6 xs:px-3`}
    >
      <div className="border-b-[2px] border-gray-300 py-2">
        <h5 className="text-dark-blue-2 text-lg font-semibold py-2">{t("Plan")}</h5>
        <p className="text-dark-blue-2 text-md opacity-70 pb-2 pt-1">
          Your Personal account is on the <span> Hobby </span> plan. {t("Free of charge")}. 
          <span>{t("Learn more")} → </span>
        </p>
      </div>
      <div className="flex align-middle justify-between py-2 mt-2 xs:flex-col">
        <p className="text-dark-blue-2 text-md xs:text-sm">
          Current period (Jun 23 – Jul 23).
        </p>
        <button className="bg-transparent border-[2px]  xs:my-2 xs:py-2 xs:w-full border-dark-blue-2 hover:opacity-80 text-dark-blue-2 text-sm py-1 px-4 rounded inline-flex items-center transition duration-200 mr-2">
          <span className="mx-auto">View Usage</span>
        </button>
      </div>
      <div className="flex align-middle flex-wrap w-full border-[1px] border-dark-blue-2 my-2 rounded-sm">
        <UsageDetailsBox tootlipclasses={'text-center top-[45px] left-14 absolute'} text={'13 GB / 100 GB'} functionname={'Bandwidth'} functionlimit={'13 GB (13%)'} classname={'w-[13%]'}/>
        <UsageDetailsBox tootlipclasses={'text-center w-60 top-[45px] left-16 absolute'} text={'Go to the Usage page to see full insights about the feature'} functionname={'Image Optimization'} functionlimit={'0 (0%)'} classname={'w-[0]'}/>
        <UsageDetailsBox tootlipclasses={'text-center top-[45px] left-20 absolute'} text={'50 GB-Hrs / 100 GB-Hrs'} functionname={'Function Execution'} functionlimit={'50 GB-Hrs (50%)'} classname={'w-[50%]'}/>
        <UsageDetailsBox tootlipclasses={'text-center top-[45px] left-14 absolute'} text={'2.5 GB / 10 GB'} functionname={'Artifacts'} functionlimit={'2.5 GB (25%)'} classname={'w-[25%]'}/>
      </div>
      <div className=" w-full border-[1px] border-dark-blue-2 my-3 rounded-md px-2 py-3 ">
        <p className="text-dark-blue-2 text-sm ">Personal accounts cannot be upgraded and will remain <span className="font-semibold">free forever</span> . In order to use the platform for professional purposes or work with a team, get started by creating a team or contacting sales.</p>
      </div>
     
    </div>
     <div className=" w-full border-t-[1px] border-dark-blue-2 mt-3  px-6 py-4 flex align-middle justify-between xs:mx-auto xs:flex-col">
     <p className="text-sm text-link-color font-medium self-center">
       <a href="#" >{t("Contact Sales")}</a>
     </p>
     <button onClick={() => setstate(true)} className="bg-dark-blue-2 py-[7px] w-[140px] border-[2px] border-dark-blue-2 hover:scale-[1.03] hover:shadow-sm text-dark-blue-2 text-sm  rounded  transition duration-200 mr-2 xs:mx-auto xs:my-1">
            <span className="text-white  ml-2  text-sm mx-auto">
              {t("Create a team")}
            </span>
          </button>
   </div>
   </div>
  );
}
