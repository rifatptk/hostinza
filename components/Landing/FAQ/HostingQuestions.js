import React from 'react';
import useTranslation from "next-translate/useTranslation";

export default function HostingQuestions() {
    const { t } = useTranslation("common");

  return (
    <div className='bg-white w-full h-auto pb-20'>
        <div className='container w-full items-center mx-auto'>
            <div className='flex flex-col align-middle w-full'>
                <h4 className='text-blue-content text-xl md:text-3xl font-bold text-center font-poppins mt-10 uppercase'>
                    {t("Hosting Questions")}
                </h4>
            </div>
            <div className='flex flex-wrap w-full gap-5 p-5'>
                <div className="w-full md:w-[48%] relative border border-black-100 shadow-contact-card rounded-xl h-fit">
                    <input type="checkbox" id="toggle9" className="toggle hidden rounded-xl" />
                    <label className="title block font-bold bg-white p-4 cursor-pointer rounded-xl max-h-14" htmlFor="toggle9">
                    {t("Title goes here")}
                    </label>
                    <div className="content bg-white overflow-hidden ">
                        <p className="p-4">{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat")}</p>
                    </div>
                </div>
                <div className="w-full md:w-[48%] relative border border-black-100 shadow-contact-card rounded-xl h-fit">
                    <input type="checkbox" id="toggle10" className="toggle hidden rounded-xl" />
                    <label className="title block font-bold bg-white p-4 cursor-pointer rounded-xl max-h-14" htmlFor="toggle10">
                    {t("Title goes here")}
                    </label>
                    <div className="content bg-white overflow-hidden">
                        <p className="p-4">{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat")}</p>
                    </div>
                </div>
                <div className="w-full md:w-[48%] relative border border-black-100 shadow-contact-card rounded-xl h-fit">
                    <input type="checkbox" id="toggl11" className="toggle hidden rounded-xl" />
                    <label className="title block font-bold bg-white p-4 cursor-pointer rounded-xl max-h-14" htmlFor="toggle11">
                    {t("Title goes here")}
                    </label>
                    <div className="content bg-white overflow-hidden ">
                        <p className="p-4">{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat")}</p>
                    </div>
                </div>
                <div className="w-full md:w-[48%] relative border border-black-100 shadow-contact-card rounded-xl h-fit">
                    <input type="checkbox" id="toggle12" className="toggle hidden rounded-xl" />
                    <label className="title block font-bold bg-white p-4 cursor-pointer rounded-xl max-h-14" htmlFor="toggle12">
                    {t("Title goes here")}
                    </label>
                    <div className="content bg-white overflow-hidden">
                        <p className="p-4">{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat")}</p>
                    </div>
                </div>
                <div className="w-full md:w-[48%] relative border border-black-100 shadow-contact-card rounded-xl h-fit">
                    <input type="checkbox" id="toggle13" className="toggle hidden rounded-xl" />
                    <label className="title block font-bold bg-white p-4 cursor-pointer rounded-xl max-h-14" htmlFor="toggle13">
                    {t("Title goes here")}
                    </label>
                    <div className="content bg-white overflow-hidden ">
                        <p className="p-4">{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat")}</p>
                    </div>
                </div>
                <div className="w-full md:w-[48%] relative border border-black-100 shadow-contact-card rounded-xl h-fit">
                    <input type="checkbox" id="toggle14" className="toggle hidden rounded-xl" />
                    <label className="title block font-bold bg-white p-4 cursor-pointer rounded-xl max-h-14" htmlFor="toggle14">
                    {t("Title goes here")}
                    </label>
                    <div className="content bg-white overflow-hidden">
                        <p className="p-4">{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat")}</p>
                    </div>
                </div>
                <div className="w-full md:w-[48%] relative border border-black-100 shadow-contact-card rounded-xl h-fit">
                    <input type="checkbox" id="toggle15" className="toggle hidden rounded-xl" />
                    <label className="title block font-bold bg-white p-4 cursor-pointer rounded-xl max-h-14" htmlFor="toggle15">
                    {t("Title goes here")}
                    </label>
                    <div className="content bg-white overflow-hidden ">
                        <p className="p-4">{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat")}</p>
                    </div>
                </div>
                <div className="w-full md:w-[48%] relative border border-black-100 shadow-contact-card rounded-xl h-fit">
                    <input type="checkbox" id="toggle16" className="toggle hidden rounded-xl" />
                    <label className="title block font-bold bg-white p-4 cursor-pointer rounded-xl max-h-14" htmlFor="toggle16">
                    {t("Title goes here")}
                    </label>
                    <div className="content bg-white overflow-hidden">
                        <p className="p-4">{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat")}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
