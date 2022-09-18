import React from 'react';

export default function SidebarLink({text,ref}){
    return(
        <li className="my-3.5 px-1">
            <a href={`#${text.toLowerCase()}`}  className=" text-dark-blue-2 opacity-70 group hover:opacity-100 transition ">
                <span className="text-md ">{text}</span>
            </a>
        </li>
    )
}