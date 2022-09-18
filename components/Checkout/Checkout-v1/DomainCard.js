import React from 'react'

export default function DomainCard({domainName}) {
  return (
<div className="flex sm:!flex-row flex-col sm:!items-center items-start justify-between  rounded-md border-[1.5px] my-4 py-5 px-4 mx-auto ">
    <div className="flex items-center gap-3 sm:!mb-0 mb-4">
    <input type="checkbox" className="!h-[18px] !w-[18px] !rounded-2xl"></input>
    <span className="text-[0.99rem] font-medium">{domainName}</span>
    </div>
    <div className="flex sm:!flex-row flex-col sm:!items-center items-start gap-3">
    <p className='w-fit px-3 py-0.5 rounded-full text-sm font-normal text-white bg-gradient-to-r from-green-600 to-green-300'>Special Offer</p>
    <span className="text-[0.9rem] font-normal text-gray-700">from 3.99 € + VAT/1st year for renewal 9.99 € + VAT</span>
    </div>
</div>
  )
}
