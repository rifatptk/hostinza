import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Tooltip from '../../Utils/Tooltip'

export default function UsageDetailsBox({functionname,functionlimit,classname,tootlipclasses,text}) {

  const [open,setOpen] = useState(false)

  return (
    <div className='w-[50%] xs:w-[100%]  border-[1px] border-dark-blue-2 p-5 relative'>
          <Tooltip text={text} classNames={tootlipclasses} state={open} setstate={setOpen}/>
       <div>
          <p className='font-semibold text-md xs:text-sm text-dark-blue-2'>{functionname} <span>
          <FontAwesomeIcon
                    // onClick={() => setOpen(true)}
                    onMouseEnter={() => setOpen(true)}
                    onMouseLeave={() => setOpen(false)}
                    icon={faCircleInfo} className="ml-1 text-dark-blue-2 text-sm opacity-60 cursor-pointer"/>
            </span></p>
          <p className='font-light text-sm text-dark-blue-2 mt-1'>{functionlimit}</p>
       </div>
       <div className='w-full rounded-xl bg-gray-300 h-[13px] my-4'>
         <div className={`${classname ? classname : 'w-[0]'} h-[100%] bg-gray-400 rounded-xl`}></div>
       </div>
    </div>
  )
}
