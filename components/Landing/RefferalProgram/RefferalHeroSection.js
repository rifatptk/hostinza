import React from 'react';
import Image from 'next/image';
import useTranslation from "next-translate/useTranslation";


export default function RefferalHeroSection() {
    const { t } = useTranslation("common");

  return (
    <div className='homeHeroGradient w-full h-auto pt-40 pb-5 md:pb-14'>
        <div className='container w-full items-center mx-auto'>
            <div className='flex flex-wrap justify-between align-middle w-full my-8 md:my-20'>
                <div className='flex flex-col align-middle justify-center w-full lg:w-[50%] mt-10 md:mt-0'>
                    <p className='text-white text-lg font-normal text-start uppercase font-poppins'>{t("Do you want to earn with us?")}</p>
                    <h2 className='text-white text-4xl md:text-6xl font-extrabold tracking-wide mt-2'>
                        {t("Refferal Program")}
                    </h2>
                    <p className='text-white text-lg leading-relaxed mt-5'>
                        {t("Share processes and data securely on a need to know basis without the need for reconciliation it combines a permissione")}
                    </p>
                </div>
                <div className='w-full lg:w-[50%] py-0 md:py-5 mt-10 lg:mt-0'>
                    <div className='w-[65%] h-80 relative mx-auto'>
                        <Image src={'/images/Group-1966.png'} layout='fill' alt='HomeHeroImage'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
