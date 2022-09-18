import React from 'react'

export default function ServerCard({domainName}) {
  return (
    <div>
        <link
        rel="stylesheet"
        href="https://unpkg.com/flowbite@1.5.1/dist/flowbite.min.css"
      />
    <input type="checkbox" id="react-option" value="" className="hidden peer"/>
<label htmlFor="react-option" className="flex sm:!flex-row flex-col cursor-pointer peer-checked:border-blue-600 sm:!items-center items-start justify-between  rounded-md border-2 my-4 py-10 px-4 mx-auto ">
    <div className="flex flex-col  gap-3 sm:!mb-0 mb-4">
    <p className="text-[2rem] mt-0 font-medium">{domainName}</p>
    <p className="text-[0.9rem] mt-0 font-normal text-green-500">Yes Available! Register it first</p>
    </div>
    <div className="flex flex-col sm:!items-center items-start ">
    <p className='w-fit px-3 py-[2px] mb-2 rounded-full text-sm font-normal text-white bg-gradient-to-r from-orange-500 to-orange-300'>Premium</p>
    <span className="text-[1.6rem] font-normal">$512.85</span>
    <span className="text-[0.9rem] font-normal text-gray-700">+ VAT/1st year for renewal 9.99 € + VAT</span>
    </div>
</label>
</div>
  )
}
