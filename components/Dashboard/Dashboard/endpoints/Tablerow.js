import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { DeleteDomainModel, MoveDomainModel } from "../../Account/billing/Model";
import ActionMenu from './ActionMenu'
import { faTimesCircle, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default function TableRow({exp,data}){

   const [state,setstate] = useState(false)
   const [statetwo,setstatetwo] = useState(false)

    return(
        <tr className="bg-white border-b">

            <th scope="col" className="py-3 px-6">
                <input id="default-checkbox" type="checkbox" value={data?.EndpointId} className="w-4 h-4 text-blue-600 bg-gray-100 rounded-lg border-gray-300 focus:ring-dark-blue-2  accent-light-blue focus:ring-1 "/>
            </th>
            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                {data?.Env[0]?.value}
            </th>
            <td className="py-4 px-6">
                {data?.Type}
            </td>
            <td className="py-4 px-6">
                {data?.Status===1?
                (
                    <>
                    <FontAwesomeIcon
                                className={`my-auto text-green-500 mr-2`}
                                color="black"
                                icon={faCheckCircle}
                            />
                            Running
                    </>
                ):
                (
                <>
                <FontAwesomeIcon
                    className={`my-auto text-red-500 mr-2`}
                    color="black"
                    icon={faTimesCircle}
                />
                Stop
                </>)
                
                }
            </td>
            <td className="py-4 px-6">
                {exp}
            </td>
            <td scope="col" className="py-3 px-6">
                <ActionMenu domain={data?.Env[0]?.value} Id={data?.Id} tablehead={false} clickone={() => setstate(true)} clicktwo={() => setstatetwo(true)}/>
                {/* <FontAwesomeIcon icon={faEllipsisVertical} className="text-lg cursor-pointer "/> */}
            </td>
            <MoveDomainModel state={state} setstate={setstate}/>
            <DeleteDomainModel state={statetwo} setstate={setstatetwo}/>
        </tr>
    )
}