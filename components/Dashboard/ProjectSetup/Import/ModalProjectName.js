import React from 'react'
import Image from 'next/image'

export default function ModalProjectName({projectImage,projectName}) {
  return (
    <div className='flex items-center cursor-pointer'>
        <Image src={projectImage} alt='' width="25" height="25"></Image>
        <h5 className='text-[0.8rem] pl-1 font-medium'>{projectName}</h5>
    </div>
  )
}
