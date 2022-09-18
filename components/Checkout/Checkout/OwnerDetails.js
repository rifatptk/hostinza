import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faEarth, faEnvelope, faHome, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import useTranslation from "next-translate/useTranslation";


export default function OwnerDetails() {
    const { t } = useTranslation("common");

  return (
    <div className='bg-white w-full h-auto'>
        <div className='container w-full items-center mx-auto'>
            <div className='flex justify-center align-middle w-full h-full py-20'>
                <div className='w-full md:w-[60%] h-fit flex flex-col align-middle shadow-contact-card m-auto p-5 md:p-10'>
                    <h2 className='text-blue-content text-xl font-bold text-center'>
                        {t("Owner Details")}
                    </h2>
                    <div className='flex flex-wrap align-middle justify-between w-full mx-auto mt-5 gap-5'>
                        <div className='w-full md:w-[48%] h-fit px-3 md:px-5 shadow-contact-card rounded-xl border border-black-100 flex justify-between'>
                            <input className='w-[90%] bg-white text-black outline-none leading-relaxed h-12 md:h-14 text-sm md:text-base rounded-xl' placeholder='Full Name' type={'text'} />
                            <FontAwesomeIcon className='my-auto text-gray-500' icon={faUser} />
                        </div>
                        <div className='w-full md:w-[48%] h-fit px-3 md:px-5 shadow-contact-card rounded-xl border border-black-100 flex justify-between'>
                            <input className='bg-white text-black outline-none leading-relaxed h-12 md:h-14 text-sm md:text-base rounded-xl' placeholder='Username' type={'text'} />
                            <FontAwesomeIcon className='my-auto text-gray-500' icon={faUser} />
                        </div>
                        <div className='w-full md:w-[48%] h-fit px-3 md:px-5 shadow-contact-card rounded-xl border border-black-100 flex justify-between'>
                            <input className='bg-white text-black outline-none leading-relaxed h-12 md:h-14 text-sm md:text-base rounded-xl' placeholder='Email' type={'email'} />
                            <FontAwesomeIcon className='my-auto text-gray-500' icon={faEnvelope} />
                        </div>
                        <div className='w-full md:w-[48%] h-fit px-3 md:px-5 shadow-contact-card rounded-xl border border-black-100 flex justify-between'>
                            <input className='bg-white text-black outline-none leading-relaxed h-12 md:h-14 text-sm md:text-base rounded-xl' placeholder='Phone' type={'number'} />
                            <FontAwesomeIcon className='my-auto text-gray-500' icon={faPhone} />
                        </div>
                        <div className='w-full h-fit px-3 md:px-5 shadow-contact-card rounded-xl border border-black-100 flex justify-between relative'>
                            <select className="z-[1] bg-transparent border text-gray-900 h-12 md:h-14 text-sm md:text-base rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-0">
                                <option selected>{t("Choose a country")}</option>
                                <option value="US">{t("Italy")}</option>
                                <option value="CA">{t("Canada")}</option>
                                <option value="FR">{t("France")}</option>
                                <option value="DE">{t("Germany")}</option>
                            </select>
                            <FontAwesomeIcon className='z-[0] absolute my-auto top-[35%] right-[5%] text-gray-500' icon={faEarth} />
                        </div>
                        <div className='w-full md:w-[48%] h-fit px-3 md:px-5 shadow-contact-card rounded-xl border border-black-100 flex justify-between'>
                            <input className='bg-white text-black outline-none leading-relaxed h-12 md:h-14 text-sm md:text-baserounded-xl' placeholder='Address' type={'text'} />
                            <FontAwesomeIcon className='my-auto text-gray-500' icon={faHome} />
                        </div>
                        <div className='w-full md:w-[48%] h-fit px-3 md:px-5 shadow-contact-card rounded-xl border border-black-100 flex justify-between relative'>
                            <select className="z-[1] bg-transparent border text-gray-900 h-12 md:h-14 text-sm md:text-base rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-0">
                                <option selected>{t("City")}</option>
                                <option value="US">{t("Islamabad")}</option>
                                <option value="CA">{t("Dubai")}</option>
                                <option value="FR">{t("Istanbul")}</option>
                                <option value="DE">{t("New York")}</option>
                            </select>
                            <FontAwesomeIcon className='z-[0] absolute my-auto top-[35%] right-[8%] text-gray-500' icon={faAngleDown} />
                        </div>
                        <div className='w-full md:w-[48%] h-fit px-3 md:px-5 shadow-contact-card rounded-xl border border-black-100 flex justify-between'>
                            <input className='bg-white text-black outline-none leading-relaxed h-12 md:h-14 text-sm md:text-base rounded-xl' placeholder='State' type={'text'} />
                        </div>
                        <div className='w-full md:w-[48%] h-fit px-3 md:px-5 shadow-contact-card rounded-xl border border-black-100 flex justify-between'>
                            <input className='bg-white text-black outline-none leading-relaxed h-12 md:h-14 text-sm md:text-base rounded-xl' placeholder='Zip Code' type={'number'} />
                        </div>
                        <p className='w-full mt-5 text-xs md:text-sm text-gray-500 leading-normal'>
                            {t("The data you provide now will help us deliver, develope and promote our products. Placing an order indicates your consent to having your data  used by our company. Please read your data protection rights")} <a className='font-bold text-light-blue cursor-pointer'>{t("here.")}</a>
                        </p>
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
