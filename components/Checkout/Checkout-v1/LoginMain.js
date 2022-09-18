import React from 'react';
import Link from 'next/link';
import useTranslation from "next-translate/useTranslation";
import CheckoutHero from './CheckoutHero';


export default function Login({clickCheckout, clickCheckout2, clickCheckoutBack }) {
    const { t } = useTranslation("common");

  return (
    <>
    <div className='bg-white w-full h-auto py-10 md:py-0 rounded-md'>
        <div className='container w-full items-center mx-auto rounded-md'>
            <div className='flex justify-center align-middle w-full h-full min-h-screen rounded-md'>
                <div className='w-full md:w-[60%] h-fit flex flex-col align-middle shadow-contact-card rounded-md m-auto p-5 md:p-10'>
                    <h2 className='text-blue-content text-[1.5rem] font-semibold text-center'>
                        {t("Login to your account")}
                    </h2>
                    <form className='flex flex-col align-start w-full md:w-[70%] mx-auto mt-10'>
                        <label className='text-black text-sm md:text-base font-medium text-start'>{t("Email")}</label>
                        <input className='w-full bg-white border border-black-100 outline-none leading-relaxed h-12 md:h-14 rounded-xl px-5 mt-3 text-sm md:text-base' placeholder='Enter Your Email' type={'email'} />
                        <label className='text-black text-sm md:text-base font-medium text-start mt-4'>{t("Password")}</label>
                        <input className='w-full bg-white border border-black-100 outline-none leading-relaxed h-12 md:h-14 rounded-xl px-5 mt-3 text-sm md:text-base' placeholder='Enter Your Password' type={'password'} autoComplete="on" />
                        <a className='text-black text-sm md:text-base font-semibold text-end mt-4'>
                            {t("Forgot Password?")}
                        </a>
                            <button onClick={clickCheckout} className='w-full text-sm md:text-lg text-white py-3 px-5 md:px-10 border-2 border-light-blue bg-light-blue rounded-lg mx-auto mt-5 font-normal'>
                                {t("Login")}
                            </button>
                            <button onClick={clickCheckoutBack} className='w-full text-sm md:text-lg text-light-blue py-3 px-5 md:px-10 border-2 border-light-blue rounded-lg mx-auto mt-5 font-normal'>
                                {t("← Go Back")}
                            </button>
                        <span className="flex mt-3">
                        <a className='text-black text-sm md:text-base font-semibold text-start mt-5 '>
                            {t("Don")}&apos;{t("t have an account?")}
                        </a>
                        <a onClick={clickCheckout2} className='cursor-pointer ml-3 text-sm md:text-base font-semibold text-start mt-5 text-blue-content'>
                            {t("Sign Up?")}
                        </a>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
