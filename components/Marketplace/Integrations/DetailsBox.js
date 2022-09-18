import React from 'react'

export default function DetailsBox() {
  return (
    <div className='w-full py-3'>
    <h1 className='pt-6 pb-8 text-dark-blue-2 font-semibold text-4xl'>Details</h1>
        <div>
            <ul className=''>
                <li className='border-b-[1px] border-gray-400 flex align-middle justify-between px-2 py-6'>
                   <p className=' font-medium text-dark-blue-2 opacity-80'>Installs</p> 
                   <p className=' font-medium text-dark-blue-2 opacity-80'>Fewer than 1000</p> 
                </li>
                <li className='border-b-[1px] border-gray-400 flex align-middle justify-between px-2 py-6'>
                   <p className=' font-medium text-dark-blue-2 opacity-80'>Developer</p> 
                   <p className=' font-medium text-dark-blue-2 opacity-80'>Sitecore</p> 
                </li>
                <li className='border-b-[1px] border-gray-400 flex align-middle justify-between px-2 py-6'>
                   <p className=' font-medium text-dark-blue-2 opacity-80'>Category</p> 
                   <p className=' font-medium text-dark-blue-2 opacity-80'>Commerce</p> 
                </li>
                <li className='border-b-[1px] border-gray-400 flex align-middle justify-between px-2 py-6'>
                   <p className=' font-medium text-dark-blue-2 opacity-80'>Website</p> 
                   <a className=' font-bold text-dark-blue-2 opacity-80' href='https://ordercloud.io/'>ordercloud.io</a> 
                </li>
            </ul>
        </div>
    </div>
  )
}
