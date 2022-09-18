import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function FeaturedCard({mainimg,smallimg,maintext,secondarytext}){
    return(
        <Link href={{
            pathname: `/integrations/${maintext}`,
        }}>
        <a className="xs:w-[300px] sm:w-[300px] lg:w-full md:w-full xl:w-[300px] h-[350px]  bg-dark-blue-2  rounded-sm shadow-sm border-[1px] border-white transition hover:scale-[1.01] duration-300 hover:border-white cursor-pointer">
            <div className="w-full h-[60%]">
            <div style={{width: '100%', height: '100%', position: 'relative'}}>
  <Image
    alt='Mountains'
    src={require('../../../public/images/mongodb.png')}
    layout='fill'
    objectFit='cover'
  />
</div>
                {/* <Image src={} alt="" width={'100%'} height={'100%'} className="object-cover rounded-t-sm" /> */}
            </div>
            <div className="w-full">
                <div className="flex align-middle px-3 py-3 mt-2">
                    <span >
                        <Image src={require('../../../public/images/mongoavatar.png')} alt=""  width={'40px'} height={'40px'} className=' rounded-full'/>
                    </span>
                    <span className="self-center ml-2">
                        <p className="text-sm text-white">{maintext}</p>
                    </span>
                </div>
            </div>
            <div>
                <p className="px-3 py-2 text-sm text-white opacity-80">{secondarytext}</p>
            </div>
        </a>
        </Link>
    )
}
