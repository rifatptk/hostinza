import React from 'react'
import useTranslation from "next-translate/useTranslation";


export default function SupportGeneralQuestions() {
  const { t } = useTranslation("common");

  return (
    <div className='bg-white w-full h-auto py-24'>
        <div className='container w-full items-center mx-auto'>
            <div className='flex flex-col w-full align-middle'>
                <p className='text-gray-500 text-lg font-normal text-center font-poppins'>{t("Our Support")}</p>
                <h3 className='text-blue-content text-2xl md:text-4xl font-bold text-center font-poppins uppercase mt-2'>
                    <span className='text-black'>{t("General")}</span> {t("Questions")}
                </h3>
            </div>
            <div className='flex flex-col align-middle w-full mt-5'>
                <div className='flex flex-wrap w-full gap-5 p-5'>
                    <div className="w-full md:w-[48%] relative border border-black-100 shadow-contact-card rounded-xl h-fit">
                        <input type="checkbox" id="SupportGQ1" className="toggle hidden rounded-xl" />
                        <label className="title block font-bold bg-white p-4 cursor-pointer rounded-xl max-h-14" htmlFor="SupportGQ1">
                            {t("Do you offer managed hosting?")}
                        </label>
                        <div className="content bg-white overflow-hidden ">
                            <p className="p-4">{t("No, its completely unmanaged — if you experience issues with your server, you can reach out to our support team")}</p>
                        </div>
                    </div>
                    <div className="w-full md:w-[48%] relative border border-black-100 shadow-contact-card rounded-xl h-fit">
                        <input type="checkbox" id="SupportGQ2" className="toggle hidden rounded-xl" />
                        <label className="title block font-bold bg-white p-4 cursor-pointer rounded-xl max-h-14" htmlFor="SupportGQ2">
                            {t("How to set up Free Email Forwarding")}
                        </label>
                        <div className="content bg-white overflow-hidden ">
                            <p className="p-4">{t("No, its completely unmanaged — if you experience issues with your server, you can reach out to our support team")}</p>
                        </div>
                    </div>
                    <div className="w-full md:w-[48%] relative border border-black-100 shadow-contact-card rounded-xl h-fit">
                        <input type="checkbox" id="SupportGQ3" className="toggle hidden rounded-xl" />
                        <label className="title block font-bold bg-white p-4 cursor-pointer rounded-xl max-h-14" htmlFor="SupportGQ3">
                           {t(" How to buy a domain in cheap price?")}
                        </label>
                        <div className="content bg-white overflow-hidden ">
                            <p className="p-4">{t("Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod brunch")}</p>
                        </div>
                    </div>
                    <div className="w-full md:w-[48%] relative border border-black-100 shadow-contact-card rounded-xl h-fit">
                        <input type="checkbox" id="SupportGQ4" className="toggle hidden rounded-xl" />
                        <label className="title block font-bold bg-white p-4 cursor-pointer rounded-xl max-h-14" htmlFor="SupportGQ4">
                            {t("How do I transfer a domain?")}
                        </label>
                        <div className="content bg-white overflow-hidden ">
                            <p className="p-4">{t("Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod brunch")}</p>
                        </div>
                    </div>
                    <div className="w-full md:w-[48%] relative border border-black-100 shadow-contact-card rounded-xl h-fit">
                        <input type="checkbox" id="SupportGQ5" className="toggle hidden rounded-xl" />
                        <label className="title block font-bold bg-white p-4 cursor-pointer rounded-xl max-h-14" htmlFor="SupportGQ5">
                            {t("How do I set up a URL redirect for a domain?")}
                        </label>
                        <div className="content bg-white overflow-hidden ">
                            <p className="p-4">{t("Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod brunch")}</p>
                        </div>
                    </div>
                    <div className="w-full md:w-[48%] relative border border-black-100 shadow-contact-card rounded-xl h-fit">
                        <input type="checkbox" id="SupportGQ6" className="toggle hidden rounded-xl" />
                        <label className="title block font-bold bg-white p-4 cursor-pointer rounded-xl max-h-14" htmlFor="SupportGQ6">
                            {t("How to transfer an existing hosting account?")}
                        </label>
                        <div className="content bg-white overflow-hidden ">
                            <p className="p-4">{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat")}</p>
                        </div>
                    </div>
                    <div className="w-full md:w-[48%] relative border border-black-100 shadow-contact-card rounded-xl h-fit">
                        <input type="checkbox" id="SupportGQ7" className="toggle hidden rounded-xl" />
                        <label className="title block font-bold bg-white p-4 cursor-pointer rounded-xl max-h-14" htmlFor="SupportGQ7">
                            {t("How can I change the nameservers for my domain?")}
                        </label>
                        <div className="content bg-white overflow-hidden ">
                            <p className="p-4">{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat")}</p>
                        </div>
                    </div>
                    <div className="w-full md:w-[48%] relative border border-black-100 shadow-contact-card rounded-xl h-fit">
                        <input type="checkbox" id="SupportGQ8" className="toggle hidden rounded-xl" />
                        <label className="title block font-bold bg-white p-4 cursor-pointer rounded-xl max-h-14" htmlFor="SupportGQ8">
                            {t("How do I generate a CSR code?")}
                        </label>
                        <div className="content bg-white overflow-hidden ">
                            <p className="p-4">{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
