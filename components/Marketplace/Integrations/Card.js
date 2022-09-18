import React from 'react';
import Image from 'next/image'
import Link from 'next/link';

export default function Card({maintext,secondarytext,smallimg}){
    return(
        <Link href={{
            pathname: `/integrations/${maintext}`,
        }}>
        <a className=" xs:w-[300px] lg:w-full md:w-[48%] xl:w-[300px] px-3 min-h-[140px] bg-dark-blue-2 rounded-md shadow-sm border-[1px] border-white transition hover:scale-[1.01] duration-300 hover:border-white cursor-pointer">
            <div className="w-full">
                <div className="flex align-middle px-3 py-3 mt-2">
                    <span >
                        <Image src={require('../../../public/images/mongoavatar.png')} alt={maintext} width={'40px'} height={'40px'} className='w-[40px] h-[40px] rounded-full'/>
                    </span>
                    <span className="self-center ml-2">
                        <p className="text-sm text-white">{maintext}</p>
                    </span>
                </div>
            </div>
            <div>
                <p className="px-3 py-3 text-sm text-white opacity-80">{secondarytext}</p>
            </div>
        </a>
        </Link>
    )
}
