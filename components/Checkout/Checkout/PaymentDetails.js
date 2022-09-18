import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcMastercard, faCcPaypal, faCcVisa } from '@fortawesome/free-brands-svg-icons';
import useTranslation from "next-translate/useTranslation";


export default function PaymentDetails() {
    const { t } = useTranslation("common");

  return (
    <div className='bg-white w-full h-auto'>
        <div className='container w-full items-center mx-auto'>
            <div className='flex justify-center align-middle w-full h-full py-20'>
                <div className='w-full md:w-[60%] h-fit flex flex-col align-middle shadow-contact-card m-auto p-5 md:p-10'>
                    <h2 className='text-blue-content text-xl font-bold text-center'>
                        {t("Payment Details")}
                    </h2>
                    <div className='w-full flex justify-center md:justify-end align-middle text-light-blue gap-5 mt-7'>
                        <FontAwesomeIcon className='my-auto text-5xl' icon={faCcMastercard} />
                        <FontAwesomeIcon className='my-auto text-5xl' icon={faCcPaypal} />
                        <FontAwesomeIcon className='my-auto text-5xl' icon={faCcVisa} />
                    </div>
                    <div className='flex flex-wrap align-middle justify-between w-full mt-5 mx-auto gap-3 md:gap-5'>
                        <div className='w-full'>
                            <label className='text-black text-sm md:text-base font-medium text-start'>{t("Card Number")}</label>
                            <input className='w-full bg-white border border-black-100 outline-none leading-relaxed h-12 md:h-14 rounded-xl px-3 md:px-5 shadow-contact-card mt-1 md:mt-3 text-sm md:text-base' placeholder='Card Number' type={'number'} />
                        </div>
                        <div className='w-full'>
                            <label className='text-black text-sm md:text-base font-medium text-start'>{t("CardHolder Name")}</label>
                            <input className='w-full bg-white border border-black-100 outline-none leading-relaxed h-12 md:h-14 rounded-xl px-3 md:px-5 shadow-contact-card mt-1 md:mt-3 text-sm md:text-base' placeholder='CardHolder Name' type={'text'} />
                        </div>
                        <div className='w-full md:w-[48%]'>
                            <label className='text-black text-sm md:text-base font-medium text-start'>{t("Expiry Date")}</label>
                            <input className='w-full bg-white border border-black-100 outline-none leading-relaxed h-12 md:h-14 rounded-xl px-3 md:px-5 shadow-contact-card mt-1 md:mt-3 text-sm md:text-base' placeholder='05 / 32' type={'number'} />
                        </div>
                        <div className='w-full md:w-[48%]'>
                            <label className='text-black text-sm md:text-base font-medium text-start'>{t("CVV")}</label>
                            <input className='w-full bg-white border border-black-100 outline-none leading-relaxed h-12 md:h-14 rounded-xl px-3 md:px-5 shadow-contact-card mt-1 md:mt-3 text-sm md:text-base' placeholder='CVV' type={'number'} />
                        </div>
                        <button className='w-full text-sm md:text-lg text-white py-3 px-5 md:px-10 bg-light-blue rounded-full mx-auto mt-5 font-normal'>
                            {t("Confirm")}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
