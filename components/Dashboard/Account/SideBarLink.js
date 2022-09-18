import React from 'react';
import Link from 'next/link'

export default function SideBarLink({path,active,text}){
    return(
        <Link href={path}>
             <li className={`xs:text-md xs:border-b-[1px] xs:border-gray-300 text-base py-1 xs:py-4 xs:my-2 mx-1 hover:bg-gray-400 px-1 hover:text-white rounded-md my-2 transition ease-in-out duration-300 cursor-pointer ${active && ' text-dark-blue-2 '} ${!active && ' opacity-70'} text-gray-500`}>{text}</li>
        </Link>
    )
}