import React from 'react'
import useTranslation from "next-translate/useTranslation";

export default function ContactUsForm() {
    const { t } = useTranslation("common");

  return (
    <div className='bg-light-gray w-full h-auto pt-24 pb-20 md:pb-28'>
        <div className='container w-full items-center mx-auto'>
            <div className='flex flex-col w-full align-middle'>
                <p className='text-gray-500 text-lg font-normal text-center font-poppins'>{t("Have question?")}</p>
                <h3 className='text-blue-content uppercase text-2xl md:text-4xl font-bold text-center font-poppins mt-2'>
                    <span className='text-black'>{t("Send")}</span> {t("a Message")}
                </h3>
                <div className='flex flex-wrap align-middle justify-between w-full md:w-[70%] mt-10 p-5 mx-auto'>
                    <input className='w-full bg-white border border-black-100 outline-none leading-relaxed h-14 rounded-xl px-5 shadow-contact-card' placeholder='Name' type={'text'} />
                    <input className='w-full md:w-[48%] bg-white border border-black-100 outline-none leading-relaxed h-14 rounded-xl px-5 shadow-contact-card mt-7' placeholder='Email' type={'email'} />
                    <input className='w-full md:w-[48%] bg-white border border-black-100 outline-none leading-relaxed h-14 rounded-xl px-5 shadow-contact-card mt-7' placeholder='Website' type={'text'} />
                    <textarea className='w-full bg-white border border-black-100 outline-none leading-relaxed h-32 rounded-xl p-5 shadow-contact-card mt-7' placeholder='Write your message here..' type={'text'} />
                    <button className='w-fit text-sm md:text-lg text-white py-3 px-5 md:px-10 bg-light-blue rounded-full mx-auto mt-10 font-normal'>
                        {t("Send")}
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
