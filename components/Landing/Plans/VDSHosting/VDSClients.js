import Image from 'next/image'
import React from 'react'

export default function VDSClients() {
  return (
    <div className='bg-white w-full h-auto py-24'>
        <div className='container w-full items-center mx-auto'>
            <div className='flex flex-wrap w-full justify-between align-middle mx-5 py-10 gap-5'>
                <div className='w-40 h-8 relative'>
                    <Image className='grayscale hover:grayscale-0' src={'/images/client-1.png'} layout='fill' alt='client-1' />
                </div>
                <div className='w-40 h-8 relative'>
                    <Image className='grayscale hover:grayscale-0' src={'/images/client-2.png'} layout='fill' alt='client-2' />
                </div>
                <div className='w-40 h-8 relative'>
                    <Image className='grayscale hover:grayscale-0' src={'/images/client-3.png'} layout='fill' alt='client-3' />
                </div>
                <div className='w-40 h-8 relative'>
                    <Image className='grayscale hover:grayscale-0' src={'/images/client-4.png'} layout='fill' alt='client-4' />
                </div>
                <div className='w-40 h-8 relative'>
                    <Image className='grayscale hover:grayscale-0' src={'/images/client-5.png'} layout='fill' alt='client-5' />
                </div>
            </div>
        </div>
    </div>
  )
}
