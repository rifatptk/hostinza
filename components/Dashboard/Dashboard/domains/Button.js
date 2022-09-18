import React from "react";

export default function Button({text,onClick}) {
    return(
        <button onClick={onClick} className="border-[1px] border-gray-500 py-1 px-2 text-gray-500 hover:border-dark-blue-2 hover:text-dark-blue-2 duration-300 cursor-pointer hover:scale-105 rounded-md mx-2">
           {text}
        </button>
    )
}