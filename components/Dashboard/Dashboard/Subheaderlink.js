import React from 'react'
import Link from "next/link";

export default function NavLinks({active,text,path}) {
  return (
    <div className={`lg:py-2 xl:py-2 md:py-2 py-1 ${active ? 'border-b-2 border-gray-500 text-black' : 'text-gray-600'}`}>
    <Link href={path}>
      <li className="text-[0.9rem] list-none px-4 cursor-pointer hover:bg-gray-300 py-1.5 rounded-md transition ease-in-out duration-300">
        {text}
      </li>
    </Link>
    </div>
  )
}
