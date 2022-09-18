import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { DeleteDomainModel, MoveDomainModel } from "../../Account/billing/Model";
import {MenuSelect} from "../../Utils/Menu";

export default function TableRow({webname,reg,nameserver,exp,age}){

   const [state,setstate] = useState(false)
   const [statetwo,setstatetwo] = useState(false)

    return(
        <tr className="bg-white border-b ">
            <MoveDomainModel state={state} setstate={setstate}/>
            <DeleteDomainModel state={statetwo} setstate={setstatetwo}/>
        <th scope="col" className="py-3 px-6">
            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded-lg border-gray-300 focus:ring-dark-blue-2  accent-light-blue focus:ring-1 "/>
            </th>
            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                {webname}
            </th>
            <td className="py-4 px-6">
                {reg}
            </td>
            <td className="py-4 px-6">
                {nameserver}
            </td>
            <td className="py-4 px-6">
                {exp}
            </td>
            <td className="py-4 px-6">
                {age}
            </td>
            <td scope="col" className="py-3 px-6">
                <MenuSelect tablehead={false} clickone={() => setstate(true)} clicktwo={() => setstatetwo(true)}/>
                {/* <FontAwesomeIcon icon={faEllipsisVertical} className="text-lg cursor-pointer "/> */}
            </td>
        </tr>
    )
}