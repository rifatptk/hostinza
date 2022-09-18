import Image from 'next/image';
import React from 'react';
import useTranslation from "next-translate/useTranslation";


export default function WhyChooseUs() {
    const { t } = useTranslation("common");

  return (
    <div className='bg-light-gray w-full h-auto py-24'>
        <div className='container w-full items-center mx-auto'>
            <div className='flex flex-col w-full align-middle'>
                <p className='text-gray-500 text-lg font-normal text-center font-poppins'>{t("Best Hosting")}</p>
                <h3 className='text-blue-content text-2xl md:text-4xl font-bold text-center font-poppins'>
                    <span className='text-black'>{t("WHY")}</span> {t("CHOOSE US")}
                </h3>
                <div className='mt-20 flex flex-wrap justify-center align-middle w-full'>
                    {/* Card 1 */}
                    <div className='flex-1 basis-72 h-auto p-5 border-r-0 md:border-r border-gray-300'>
                        <div className='w-[60%] md:w-[50%] h-36 mx-auto relative'>
                            {/* <Image className='mx-auto' src={'/images/7.png'} layout='fill' alt='whyChooseImage1' /> */}
                            <Image className='mx-auto' src={'/images/choose-us-1.png'} layout='fill' alt='whyChooseImage1' />
                        </div>
                        <p className='text-black text-xl font-semibold font-poppins mt-10 text-center'>
                            {t("99,9% Uptime Guarantee")}
                        </p>
                        <p className='text-gray-500 text-lg font-normal text-center mt-3 leading-tight'>
                            {t("Share processes and data secure lona need to know basis")}
                        </p>
                    </div>
                    {/* Card 2 */}
                    <div className='flex-1 basis-72 h-auto p-5 border-r-0 lg:border-r border-gray-300'>
                        <div className='w-[60%] md:w-[50%] h-36 mx-auto relative'>
                            {/* <Image className='mx-auto' src={'/images/14.png'} layout='fill' alt='whyChooseImage1' /> */}
                            <Image className='mx-auto' src={'/images/choose-us-2.png'} layout='fill' alt='whyChooseImage1' />
                        </div>
                        <p className='text-black text-xl font-semibold font-poppins mt-10 text-center'>
                            {t("Safe and Secured")}
                        </p>
                        <p className='text-gray-500 text-lg font-normal text-center mt-3 leading-tight'>
                            {t("Our team assured your web site is always safe and secure")}
                        </p>
                    </div>
                    {/* Card 3 */}
                    <div className='flex-1 basis-72 h-auto p-5'>
                        <div className='w-[80%] md:w-[60%] h-36 mx-auto relative'>
                            {/* <Image className='mx-auto' src={'/images/Group815.png'} layout='fill' alt='whyChooseImage1' /> */}
                            <Image className='mx-auto' src={'/images/choose-us-3.png'} layout='fill' alt='whyChooseImage1' />
                        </div>
                        <p className='text-black text-xl font-semibold font-poppins mt-10 text-center'>
                            {t("Our Dedicated Support")}
                        </p>
                        <p className='text-gray-500 text-lg font-normal text-center mt-3 leading-tight'>
                            {t("We finally found a host that truly understood the unique")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
