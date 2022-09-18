import React, { useRef } from 'react';


export default function Box({heading,para,secondtext,btntext,secondpara,avatar,deletebox,hideinput,onClick}){

    const fileref = useRef()

    return(
        <div className={`w-full   rounded-md ${deletebox ? 'border-red-600 border-[3px]' : 'border-dark-blue-2 border-[1px]'}  min-h-[200px] my-4 font-poppins relative`}>
            <div className="px-7 py-3 xs:px-4 xs:py-2">
          <div className="mt-1">
             <h3 className="text-xl my-2 text-dark-blue-2 font-semibold">{heading}</h3>
             {secondpara &&  <p className=' text-sm my-1 text-dark-blue-2 font-light sm:my-4'>{secondpara}</p>}
             <p className='text-base my-2 text-dark-blue-2 font-light'>{para}</p>
          </div>
          {!hideinput && (
          <div>
            <input defaultValue={'anyone1245'} type="text" className='p-[5px] mt-2 w-[250px] bg-transparent border-[1px] border-gray-400 text-md text-dark-blue-2  transition duration-300'/>
          </div>
          )}
          </div>

          <div className="mt-2 border-t-[1px] border-dark-blue-2 py-3 px-7 flex align-middle justify-between xs:flex-col">
                <p className="text-base my-1 opacity-90 text-dark-blue-2 font-light">
                    {secondtext}
                </p>
                {btntext && (
                <button onClick={onClick} className={`bg-dark-blue-2 px-4 py-1 xs:w-full xs:my-2 xs:py-2 ${deletebox && 'bg-red-600 text-white'} text-white transition duration-200 hover:scale-105 text-base rounded-md`}>
                    {btntext}
                </button>
                )}
          </div>
          {avatar && (
          
          <div onClick={() => fileref.current?.click()} className="w-20 rounded-full xs:w-14 xs:h-14 homeHeroGradient h-20 mr-2 cursor-pointer transition duration-300 hover:scale-105 shadow-md absolute lg:top-8 lg:right-8 xl:top-8 xl:right-8 top-3 right-3">
             <input type={'file'} className="hidden" ref={fileref}/>
          </div>
          )}
        </div>
    )
}