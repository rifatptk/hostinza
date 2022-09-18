import React, { useEffect, useState } from 'react'


export default function TopSection() {
  return (
    <div className=' w-full pt-48 xs:pt-60'>
        <div className='w-[100%] flex align-middle justify-center flex-col'>
            <h1 className='text-center text-dark-blue-2 font-medium md:text-6xl lg:text-7xl xs:text-4xl sm:text-5xl  tracking-tight'>Find an Integration</h1>
            <p className="text-center text-dark-blue-2 opacity-60 md:text-xl xs:text-md sm:text-lg mt-5 md:tracking-wider xs:px-1 sm:px-1 md:px-0" >Extend and automate your workflow by using integrations for your favorite tools.</p>
        </div>
    </div>
  )
}
