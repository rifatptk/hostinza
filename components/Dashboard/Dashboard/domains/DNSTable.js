import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import TableRow from "./Tablerow";
import {MenuSelect} from "../../Utils/Menu";
import Tooltip from "../../Utils/Tooltip";
import { AddDomainModel, TransferInModel } from "../../Account/billing/Model";
import useTranslation from "next-translate/useTranslation";

export default function DomainTable() {

    const { t } = useTranslation("common");
    const [open,setOpen] = useState(false)
    const [opentwo,setOpentwo] = useState(false)
    const [modelone,setmodelone] = useState(false)
    const [modeltwo,setmodeltwo] = useState(false)

  return (
    <div className="maincontainer mx-auto mb-20">
        <TransferInModel state={modelone} setstate={setmodelone}/>
        <AddDomainModel state={modeltwo} setstate={setmodeltwo}/>
      <div className="overflow-x-auto relative shadow-md  mt-8">
    <table className="w-full xs:w-[95%] text-sm text-left text-gray-500 z-0 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200  ">
            <tr>
                <th scope="col" className="py-3 px-6 ">
                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded-lg border-gray-300 focus:ring-dark-blue-2  accent-light-blue focus:ring-1 "/>
                </th>
                <th scope="col" className="py-3 px-6">
                    {t("Hostname")}
                </th>
                <th scope="col" className="py-3 px-6">
                  {t("Record type")}
                </th>
                <th scope="col" className="py-3 px-6">
                    <Tooltip classNames={'w-64 absolute top-[40px] text-center font-medium'} text={t("This column indicates whether your domain is using Vercel-powered nameservers or third-party nameservers")} state={open} setstate={setOpen}/>
                    <span>{t("Address")}</span><span>
                    <FontAwesomeIcon
                    // onClick={() => setOpen(true)}
                    onMouseEnter={() => setOpen(true)}
                    onMouseLeave={() => setOpen(false)}
                    icon={faCircleInfo} className=" ml-2 mt-0.5 text-dark-blue-2 text-xs opacity-40 cursor-pointer"/>
                    </span>
                </th>
                <th scope="col" className="py-3 px-6">
                <Tooltip classNames={'w-64 absolute top-[40px] text-center font-medium'} text={t("On this date, your domain is set to expire")} state={opentwo} setstate={setOpentwo}/>
                    <span>{t("MX pref")}</span><span>
                    <FontAwesomeIcon
                    // onClick={() => setOpen(true)}
                    onMouseEnter={() => setOpentwo(true)}
                    onMouseLeave={() => setOpentwo(false)}
                    icon={faCircleInfo} className=" ml-2 mt-0.5 text-dark-blue-2 text-xs opacity-40 cursor-pointer"/>
                    </span>
                    
                </th>
                <th scope="col" className="py-3 px-6">
                    TTL
                </th>
                <th scope="col" className="py-3 px-6">
                    <MenuSelect tablehead={true} clickone={() => setmodelone(true)} clicktwo={() => setmodeltwo(true)}/>
                    {/* <FontAwesomeIcon icon={faEllipsisVertical} className="text-lg cursor-pointer"/> */}
                </th>
            </tr>
        </thead>
        <tbody>
            <TableRow  webname={'@'} reg={'A'} nameserver={'10.20.55.55'}  exp={'2'} age={'300 sec'}/>
            <TableRow  webname={'@'} reg={'A'} nameserver={'2001:b07:5d2e:6e67:552a:ae40:7e9d:f47'}  exp={'2'} age={'300 sec'}/>
            <TableRow  webname={'@'} reg={'A'} nameserver={'10.20.55.55'}  exp={'2'} age={'300 sec'}/>
            <TableRow  webname={'www'} reg={'CNAME'} nameserver={'mywebsite.org'}  exp={'2'} age={'300 sec'}/>
            
        </tbody>
    </table>
</div>
    </div>
  );
}
