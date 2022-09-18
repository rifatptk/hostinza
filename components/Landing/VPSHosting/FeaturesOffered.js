import Image from 'next/image';
import React from 'react';
import useTranslation from "next-translate/useTranslation";


export default function FeaturesOffered() {
  const { t } = useTranslation("common");
    
  return (
    <div className='bg-gradient-to-br from-dark-blue to-light-blue w-full h-auto py-24'>
        <div className='container w-full items-center mx-auto'>
            <div className='flex flex-col w-full align-middle'>
                <p className='text-white text-lg font-normal text-center font-poppins'>{t("We Offer")}</p>
                <h3 className='text-white text-2xl md:text-4xl font-bold text-center font-poppins'>
                    {t("Features Included")}
                </h3>
                <div className='mt-20 flex flex-wrap justify-center align-middle w-full gap-10 gap-y-20'>
                    <div className='w-full md:w-[48%] flex flex-wrap gap-10'>
                        <div className='w-12 h-16 relative'>
                            <Image src={'/images/tenancy.png'} layout='fill' alt='Tenancy' />
                        </div>
                        <div className='flex-1'>
                            <p className='text-xl text-white font-semibold'>{t("No Multi Tenancy")}</p>
                            <p className='text-base text-white font-normal mt-3'>
                                {t("Share processes and data secure lon a need to know basis with out the need for reconciliation it combines")}
                            </p>
                        </div>
                    </div>
                    <div className='w-full md:w-[48%] flex flex-wrap gap-10'>
                        <div className='w-12 h-10 relative'>
                            <Image src={'/images/php-selector.png'} layout='fill' alt='Tenancy' />
                        </div>
                        <div className='flex-1'>
                            <p className='text-xl text-white font-semibold'>{t("PHP Selector")}</p>
                            <p className='text-base text-white font-normal mt-3'>
                                {t("Share processes and data secure lon a need to know basis with out the need for reconciliation it combines")}
                            </p>
                        </div>
                    </div>
                    <div className='w-full md:w-[48%] flex flex-wrap gap-10'>
                        <div className='w-12 h-16 relative'>
                            <Image src={'/images/lite-speed.png'} layout='fill' alt='Tenancy' />
                        </div>
                        <div className='flex-1'>
                            <p className='text-xl text-white font-semibold'>{t("LiteSpeed Web Server")}</p>
                            <p className='text-base text-white font-normal mt-3'>
                            {t("Share processes and data secure lon a need to know basis with out the need for reconciliation it combines")}
                            </p>
                        </div>
                    </div>
                    <div className='w-full md:w-[48%] flex flex-wrap gap-10'>
                        <div className='w-12 h-14 relative'>
                            <Image src={'/images/lite-speed-system.png'} layout='fill' alt='Tenancy' />
                        </div>
                        <div className='flex-1'>
                            <p className='text-xl text-white font-semibold'>{t("LiteSpeed Web Server")}</p>
                            <p className='text-base text-white font-normal mt-3'>
                            {t("Share processes and data secure lon a need to know basis with out the need for reconciliation it combines")}
                            </p>
                        </div>
                    </div>
                    <div className='w-full md:w-[48%] flex flex-wrap gap-10'>
                        <div className='w-12 h-12 relative'>
                            <Image src={'/images/cpanel.png'} layout='fill' alt='Tenancy' />
                        </div>
                        <div className='flex-1'>
                            <p className='text-xl text-white font-semibold'>{t("cPanel Hosting Control")}</p>
                            <p className='text-base text-white font-normal mt-3'>
                            {t("Share processes and data secure lon a need to know basis with out the need for reconciliation it combines")}
                            </p>
                        </div>
                    </div>
                    <div className='w-full md:w-[48%] flex flex-wrap gap-10'>
                        <div className='w-12 h-14 relative'>
                            <Image src={'/images/patchman.png'} layout='fill' alt='Tenancy' />
                        </div>
                        <div className='flex-1'>
                            <p className='text-xl text-white font-semibold'>{t("Patchman Killer")}</p>
                            <p className='text-base text-white font-normal mt-3'>
                            {t("Share processes and data secure lon a need to know basis with out the need for reconciliation it combines")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
