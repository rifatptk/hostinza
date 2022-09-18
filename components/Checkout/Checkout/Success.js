import React from 'react';
import Image from 'next/image';
import useTranslation from "next-translate/useTranslation";


export default function Success() {
    const { t } = useTranslation("common");

  return (
    <div className='bg-white w-full h-auto'>
        <div className='container w-full items-center mx-auto'>
            <div className='flex justify-center align-middle w-full h-full py-20'>
                <div className='w-full md:w-[60%] h-fit flex flex-col align-middle shadow-contact-card m-auto p-5 md:p-10'>
                    <div className=' w-[90%] md:w-[60%] h-40 relative mx-auto'>
                        <Image src={'/images/firework.svg'} layout='fill' alt='CongratulationImage' />
                    </div>
                    <h2 className='mt-5 text-center text-xl md:text-3xl font-bold text-dark-blue'>
                        {t("Congratulations!")}
                    </h2>
                    <p className='mt-3 text-center text-base md:text-lg font-semibold text-dark-blue'>
                        {t("Your Payment has been successfully completed!")}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
