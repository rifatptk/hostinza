import { faEarth } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useTranslation from "next-translate/useTranslation";

export default function BillingDetails() {
    const { t } = useTranslation("common");
    return (
    <div className='bg-white w-full h-auto'>
        <div className='container w-full items-center mx-auto'>
            <div className='flex justify-center align-middle w-full h-full py-20'>
                <div className='w-full md:w-[60%] h-fit flex flex-col align-middle shadow-contact-card m-auto p-5 md:p-10'>
                    <h2 className='text-blue-content text-xl font-bold text-center'>
                        {t("Billing Details")}
                    </h2>
                    <div className='flex flex-wrap align-middle justify-between w-full mx-auto mt-5 gap-3 md:gap-5'>
                        <div className='w-full'>
                            <label className='text-black text-sm md:text-base font-medium text-start'>{t("Full Name")}</label>
                            <input className='w-full bg-white border border-black-100 outline-none leading-relaxed h-12 md:h-14 rounded-xl text-sm md:text-base px-3 md:px-5 shadow-contact-card mt-1 md:mt-3' placeholder='Your name' type={'text'} />
                        </div>
                        <div className='w-full'>
                            <label className='text-black text-sm md:text-base font-medium text-start'>{t("Address")}</label>
                            <input className='w-full bg-white border border-black-100 outline-none leading-relaxed h-12 md:h-14 rounded-xl text-sm md:text-base px-3 md:px-5 shadow-contact-card mt-1 md:mt-3' placeholder='Address' type={'text'} />
                        </div>
                        <div className='w-full md:w-[48%]'>
                            <label className='text-black text-sm md:text-base font-medium text-start'>{t("City")}</label>
                            <input className='w-full bg-white border border-black-100 outline-none leading-relaxed h-12 md:h-14 rounded-xl text-sm md:text-base px-3 md:px-5 shadow-contact-card mt-1 md:mt-3' placeholder='City' type={'text'} />
                        </div>
                        <div className='w-full md:w-[48%]'>
                            <label className='text-black text-sm md:text-base font-medium text-start'>{t("Zip Code")}</label>
                            <input className='w-full bg-white border border-black-100 outline-none leading-relaxed h-12 md:h-14 rounded-xl text-sm md:text-base px-3 md:px-5 shadow-contact-card mt-1 md:mt-3' placeholder='Code' type={'number'} />
                        </div>
                        <div className='w-full'>
                            <label className='text-black text-sm md:text-base font-medium text-start'>{t("Select Country")}</label>
                            <div className='w-full mt-1 md:mt-3 h-fit text-sm md:text-base px-3 md:px-5 shadow-contact-card rounded-xl border border-black-100 flex justify-between relative'>
                                <select className="z-[1] bg-transparent border text-gray-900 h-12 md:h-14 rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-0">
                                    <option selected>{t("Choose a country")}</option>
                                    <option value="US">{t("Italy")}</option>
                                    <option value="CA">{t("Canada")}</option>
                                    <option value="FR">{t("France")}</option>
                                    <option value="DE">{t("Germany")}</option>
                                </select>
                                <FontAwesomeIcon className='z-[0] absolute my-auto top-[35%] right-[5%] text-gray-500' icon={faEarth} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
