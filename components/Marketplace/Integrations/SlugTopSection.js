import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { AddIntegrationModel } from '../../Dashboard/Account/billing/Model';
import { useBlogsSlugQuery  } from '../../../data/blogs';


export default function SlugTopSection({slug}){
    const [state,setstate] = useState(false)
    const { data}  = useBlogsSlugQuery(slug)

    return(
        <div className=' w-full lg:pt-44 xl:pt-48 sm:pt-60 md:pt-52 xs:pt-60 border-b-[0.1px] border-dark-blue-2 md:px-1 lg:px-0 sm:px-4 xs:px-4'>
            <div className='xs:w-full sm:w-[90%] max-w-[1220px] mx-auto py-1'>
                <AddIntegrationModel state={state} setstate={setstate}/>
                <Link href={'/integrations'}>
                    <p className='text-dark-blue-2 text-sm py-2 cursor-pointer opacity-80 mt-2'> - Back To Integrations Marketplace</p>
                </Link>
                <div className='flex align-middle justify-between py-6 md:flex-row sm:flex-col xs:flex-col'>
                    <div className="flex align-middle">
                        <Image src={require('../../../public/images/mongoavatar.png')} alt="mongodb" className='self-center rounded-full w-[80px] h-[80px] mr-3 -ml-3'/>
                        <p className='self-center sm:text-4xl xs:text-2xl md:text-5xl font-semibold  text-dark-blue-2'>{data?.title}</p>
                    </div>
                    <div className='sm:self-start xs:self-start md:self-center xs:my-5 sm:my-5 md:my-0'>
                        <button onClick={() => setstate(true)} className='bg-dark-blue-2 py-2 px-4 active:scale-[1.05] group rounded-md transition hover:scale-[1.02] hover:bg-transparent duration-200 border-[1px] border-dark-blue-2 shadow-sm'>
                            <span className='text-sm group-hover:text-dark-blue-2 text-white font-medium'>Add Integrations</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
