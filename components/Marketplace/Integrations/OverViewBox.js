import React from 'react'

export default function OverViewBox({data}) {
  return (
    <div className='w-full py-3'>
        <h1 className='pt-6 pb-8 text-dark-blue-2 font-semibold text-4xl'>Overview</h1>
        <div>
            <p className='pt-2 text-dark-blue-2 opacity-80 text-md'>{data?.excerpt}</p>
        </div>
    </div>
  )
}
