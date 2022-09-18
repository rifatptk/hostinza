import React, { useEffect, useState } from 'react';
import useTranslation from "next-translate/useTranslation";


export default function FrequentlyAskedQuestion() {
    const { t } = useTranslation("common");

  return (
    <div className='bg-white w-full h-auto pt-24 pb-5'>
        <div className='container w-full items-center mx-auto'>
            <div className='flex flex-col w-full align-middle'>
                <p className='text-gray-500 text-lg font-normal text-center font-poppins'>{t("FAQs")}</p>
                <h3 className='text-blue-content text-2xl md:text-4xl font-bold text-center font-poppins mt-2 uppercase'>
                    <span className='text-black'>{t("Frequently")}</span> {t("Asked Questions")}
                </h3>
            </div>
            <div className='flex flex-col align-middle w-full'>
                <h4 className='text-blue-content text-xl md:text-3xl font-bold text-center font-poppins mt-10 uppercase'>
                    {t("General Questions")}
                </h4>
                <div className='flex flex-wrap w-full gap-5 p-5'>
                    <div className="w-full md:w-[48%] relative border border-black-100 shadow-contact-card rounded-xl h-fit">
                        <input type="checkbox" id="toggle1" className="toggle hidden rounded-xl" />
                        <label className="title block font-bold bg-white p-4 cursor-pointer rounded-xl max-h-14" htmlFor="toggle1">
                            {t("Title goes here")}
                        </label>
                        <div className="content bg-white overflow-hidden ">
                            <p className="p-4">{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat")}</p>
                        </div>
                    </div>
                    <div className="w-full md:w-[48%] relative border border-black-100 shadow-contact-card rounded-xl h-fit">
                        <input type="checkbox" id="toggle2" className="toggle hidden rounded-xl" />
                        <label className="title block font-bold bg-white p-4 cursor-pointer rounded-xl max-h-14" htmlFor="toggle2">
                            {t("Title goes here")}
                        </label>
                        <div className="content bg-white overflow-hidden">
                            <p className="p-4">{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat")}</p>
                        </div>
                    </div>
                    <div className="w-full md:w-[48%] relative border border-black-100 shadow-contact-card rounded-xl h-fit">
                        <input type="checkbox" id="toggle3" className="toggle hidden rounded-xl" />
                        <label className="title block font-bold bg-white p-4 cursor-pointer rounded-xl max-h-14" htmlFor="toggle3">
                            {t("Title goes here")}
                        </label>
                        <div className="content bg-white overflow-hidden">
                            <p className="p-4">{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat")}</p>
                        </div>
                    </div>
                    <div className="w-full md:w-[48%] relative border border-black-100 shadow-contact-card rounded-xl h-fit">
                        <input type="checkbox" id="toggle4" className="toggle hidden rounded-xl" />
                        <label className="title block font-bold bg-white p-4 cursor-pointer rounded-xl max-h-14" htmlFor="toggle4">
                            {t("Title goes here")}
                        </label>
                        <div className="content bg-white overflow-hidden">
                            <p className="p-4">{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat")}</p>
                        </div>
                    </div>
                    <div className="w-full md:w-[48%] relative border border-black-100 shadow-contact-card rounded-xl h-fit">
                        <input type="checkbox" id="toggle5" className="toggle hidden rounded-xl" />
                        <label className="title block font-bold bg-white p-4 cursor-pointer rounded-xl max-h-14" htmlFor="toggle5">
                            {t("Title goes here")}
                        </label>
                        <div className="content bg-white overflow-hidden">
                            <p className="p-4">{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat")}</p>
                        </div>
                    </div>
                    <div className="w-full md:w-[48%] relative border border-black-100 shadow-contact-card rounded-xl h-fit">
                        <input type="checkbox" id="toggle6" className="toggle hidden rounded-xl" />
                        <label className="title block font-bold bg-white p-4 cursor-pointer rounded-xl max-h-14" htmlFor="toggle6">
                        {t("Title goes here")}
                        </label>
                        <div className="content bg-white overflow-hidden">
                            <p className="p-4">{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat")}</p>
                        </div>
                    </div>
                    <div className="w-full md:w-[48%] relative border border-black-100 shadow-contact-card rounded-xl h-fit">
                        <input type="checkbox" id="toggle7" className="toggle hidden rounded-xl" />
                        <label className="title block font-bold bg-white p-4 cursor-pointer rounded-xl max-h-14" htmlFor="toggle7">
                        {t("Title goes here")}
                        </label>
                        <div className="content bg-white overflow-hidden">
                            <p className="p-4">{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat")}</p>
                        </div>
                    </div>
                    <div className="w-full md:w-[48%] relative border border-black-100 shadow-contact-card rounded-xl h-fit">
                        <input type="checkbox" id="toggle8" className="toggle hidden rounded-xl" />
                        <label className="title block font-bold bg-white p-4 cursor-pointer rounded-xl max-h-14" htmlFor="toggle8">
                        {t("Title goes here")}
                        </label>
                        <div className="content bg-white overflow-hidden">
                            <p className="p-4">{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
