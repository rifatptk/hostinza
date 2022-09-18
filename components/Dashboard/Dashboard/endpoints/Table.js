import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import TableRow from "./Tablerow";
// import {MenuSelect} from "../../Utils/Menu";
import Tooltip from "../../Utils/Tooltip";
import { useEndpointsQuery } from "../../../../data/apps";
import Spinner from "../../Utils/Loader/Preloader";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

export default function Table() {
    const { t } = useTranslation("common");
    const router =useRouter()
    const [open,setOpen] = useState(false)
    const [opentwo,setOpentwo] = useState(false)

    const { data:dataList, isLoading: fetchloading }  = useEndpointsQuery({id:router?.query.id})

  return (
    <>
        <Spinner loading={fetchloading}/>
        <div className="maincontainer mx-auto">
        <div className="overflow-x-auto relative shadow-md   mt-8 no-scrollbar">
        <table className="w-full xs:w-[95%] text-sm text-left no-scrollbar  text-gray-500 z-0 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200  ">
                <tr>
                    <th scope="col" className="py-3 px-6 ">
                    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded-lg border-gray-300 focus:ring-dark-blue-2  accent-light-blue focus:ring-1 "/>
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Container
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Type
                    </th>
                    <th scope="col" className="py-3 px-6">
                        <Tooltip classNames={'w-64 absolute top-[40px] text-center font-medium'} text={t("This column indicates whether your domain is using Vercel-powered nameservers or third-party nameservers")} state={open} setstate={setOpen}/>
                        <span>Status</span>
                    </th>
                    <th scope="col" className="py-3 px-6">
                    <Tooltip classNames={'w-64 absolute top-[40px] text-center font-medium'} text={"However, Vercel will automatically renew your domain before this date is reached (unless the domain is removed)"} state={opentwo} setstate={setOpentwo}/>
                        <span>EXPIRATION DATE</span><span>
                        <FontAwesomeIcon
                        // onClick={() => setOpen(true)}
                        onMouseEnter={() => setOpentwo(true)}
                        onMouseLeave={() => setOpentwo(false)}
                        icon={faCircleInfo} className=" ml-2 mt-0.5 text-dark-blue-2 text-xs opacity-40 cursor-pointer"/>
                        </span>
                        
                    </th>
                    <th scope="col" className="py-3 px-6">
                        {/* <MenuSelect tablehead={true} clickone={() => setmodelone(true)} clicktwo={() => setmodeltwo(true)}/> */}
                        {/* <FontAwesomeIcon icon={faEllipsisVertical} className="text-lg cursor-pointer"/> */}
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    dataList?.map((item,i)=>{
                        return (
                            <TableRow data={item} key={i} exp={'-'} />
                        )
                    })
                }
            </tbody>
        </table>
    </div>
        </div>
    </>
  );
}
