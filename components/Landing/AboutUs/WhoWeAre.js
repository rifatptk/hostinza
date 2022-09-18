import React from 'react';
import useTranslation from "next-translate/useTranslation";
export default function WhoWeAre() {
    const { t } = useTranslation("common");
  return (
    <div className='bg-white w-full h-auto pt-24 pb-20 md:pb-28'>
        <div className='container w-full items-center mx-auto'>
            <div className='flex flex-col w-full align-middle'>
                <p className='text-gray-500 text-lg font-normal text-center font-poppins'>{t("Who We Are")}</p>
                <h3 className='text-blue-content text-2xl md:text-4xl font-bold text-center font-poppins mt-2 uppercase'>
                    <span className='text-black'>{t("Meet")}</span> {t("Hostinza")}
                </h3>
                <div className='flex flex-wrap align-middle justify-center w-full mt-16'>
                    <video className='w-[90%] md:w-[60%]' loop playsInline controls width={100}>
                        <source src={'/images/sky.mp4'} type='video/mp4' />
                    </video>
                </div>
            </div>
        </div>
    </div>
  )
}
