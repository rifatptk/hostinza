import React from 'react'

export default function RecommendedCard({domainName}) {
  return (
<div className="flex sm:!flex-row flex-col sm:!items-center items-start justify-between  rounded-md border-[1.5px] my-4 py-5 px-4 mx-auto ">
    <div className="flex items-center gap-3 sm:!mb-0 mb-4">
    <input type="checkbox" className="!h-[18px] !w-[18px] !rounded-2xl"></input>
    <span className="text-[0.99rem] font-medium">{domainName}</span>
    </div>
    <div className="flex flex-col sm:!items-center items-start ">
    <p className='w-fit px-3 py-[2px] mb-2 rounded-full text-sm font-normal text-white bg-gradient-to-r from-orange-500 to-orange-300'>Premium</p>
    <span className="text-[1.6rem] font-normal">$512.85</span>
    <span className="text-[0.9rem] font-normal text-gray-700">+ VAT/1st year for renewal 9.99 € + VAT</span>
    </div>
</div>
  )
}
