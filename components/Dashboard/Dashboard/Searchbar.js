import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


export default function SearchBar(){
    return(
        <div className="relative w-[100%] py-0 xs:w-['90%'] xs:ml-2 max-w-[70%] xs:max-w-[100%]">
             <div className="absolute top-[10px] left-2">
                <FontAwesomeIcon icon={faSearch} className="text-gray-300"/>
             </div>
            <input type="search" placeholder="Search" className="w-[100%] pl-8 py-[8px] bg-transparent rounded-md focus:border-gray-500 transition outline-none text-gray-500 border-gray-200 border-2" />
        </div>
    )
}