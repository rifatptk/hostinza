import React from 'react';
import Image from 'next/image';
import useTranslation from "next-translate/useTranslation";


export default function FindUs() {
    const { t } = useTranslation("common");

  return (
    <div className='bg-white w-full h-auto pt-24 pb-20 md:pb-28'>
        <div className='container w-full items-center mx-auto'>
            <div className='flex flex-col w-full align-middle'>
                <p className='text-gray-500 text-lg font-normal text-center font-poppins'>{t("Find Us")}</p>
                <h3 className='text-blue-content text-2xl md:text-4xl font-bold text-center font-poppins mt-2'>
                    <span className='text-black'>{t("CONTACT")}</span> {t("WITH US")}
                </h3>
                <div className='flex flex-wrap align-middle justify-center gap-8 w-full mt-20'>
                    <div className='w-full max-w-[320px] flex flex-col align-middle shadow-none hover:shadow-contact-card transition-all duration-300 p-10'>
                        <div className='w-24 h-24 relative mx-auto'>
                            <Image src={'/images/contact-info-icon.png'} layout='fill' alt='ContactInfoIcon' />
                        </div>
                        <h4 className='text-black text-xl font-bold text-center mt-5'>
                            {t("Find Us")}
                        </h4>
                        <p className='text-gray-500 font-normal text-center mt-3'>
                            {t("1Hd- 50, 010 Avenue, NY 90001 United States")}
                        </p>
                    </div>
                    <div className='w-full max-w-[320px] flex flex-col align-middle shadow-contact-card p-10'>
                        <div className='w-24 h-24 relative mx-auto'>
                            <Image src={'/images/contact-info-icon.png'} layout='fill' alt='ContactInfoIcon' />
                        </div>
                        <h4 className='text-black text-xl font-bold text-center mt-5'>
                            {t("Make a Call")}
                        </h4>
                        <p className='text-gray-500 font-normal text-center mt-3'>
                            009-215-5596 ({t("toll free")}) <br/> 009-215-5595
                        </p>
                    </div>
                    <div className='w-full max-w-[320px] flex flex-col align-middle shadow-none hover:shadow-contact-card transition-all duration-300 p-10'>
                        <div className='w-24 h-24 relative mx-auto'>
                            <Image src={'/images/contact-info-icon.png'} layout='fill' alt='ContactInfoIcon' />
                        </div>
                        <h4 className='text-black text-xl font-bold text-center mt-5'>
                            {t("Send Mail")}
                        </h4>
                        <p className='text-gray-500 font-normal text-center mt-3'>
                            {t("contact@example.com")} <br/> {t("info@example.com")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
