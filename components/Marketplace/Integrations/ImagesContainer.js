import React from "react";
import Image from 'next/image';
import { useBlogsSlugQuery  } from '../../../data/blogs';

export default function ImagesContainer({slug}){
    const { data}  = useBlogsSlugQuery(slug)

    if(!data?.feature_image){
        return
    }
    return(
        <div className="no-scrollbar overflow-hidden grid my-7 py-2 gap-x-4 gap-y-1 xs:place-items-center grid-rows-1 sm:place-items-center xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  mx-auto sm:px-4 md:px-1 lg:px-0 xs:px-4">
            <Image src={data?.feature_image} height={600} width={800} alt={data?.title} className="w-[100%] rounded-md cursor-pointer transition duration-200 hover:scale-[1.02] "/>
        </div>
    )
}
