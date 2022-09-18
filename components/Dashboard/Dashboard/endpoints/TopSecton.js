import React, { useState } from "react";
import AddModel from "./AddModel";
import Button from "./Button";

export default function TopSection(){

    const [state,setstate] = useState(false)

    return(
        <div className="w-full border-b-[1px] border-gray-300 py-2 font-poppins">
            <AddModel state={state} setstate={setstate}/>
        <div className="maincontainer mx-auto">
            <div className="flex align-middle justify-between xs:flex-col">
                <div>
                    <h1 className="text-3xl font-semibold text-dark-blue-2 xs:mx-2">Endpoints</h1>
                </div>
                <div className="flex align-middle xs:mt-3">
                    <Button text={'Add'} onClick={() => setstate(true)}/>
                </div>
            </div>
        </div>
        </div>
    )
}