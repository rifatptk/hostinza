import React from 'react';
import useTranslation from "next-translate/useTranslation";


export default function StepGuide() {
    const { t } = useTranslation("common");

  return (
    <div className='bg-white w-full h-auto py-24'>
        <div className='container w-full items-center mx-auto'>
            <div className='flex flex-col w-full align-middle'>
                <p className='text-gray-500 text-lg font-normal text-center font-poppins'>{t("Follow Steps")}</p>
                <h3 className='text-blue-content text-2xl md:text-4xl font-bold text-center font-poppins uppercase'>
                    <span className='text-black'>{t("Refer")}</span> {t("And Earn")}
                </h3>
                <p className='mt-20 text-center text-black text-xl font-bold'>
                    {t("Refer  and earn $10 per paid signup!")}
                </p>
                <div className='flex flex-col align-middle w-full gap-5 p-5'>
                    <div className='w-full flex flex-wrap align-middle justify-center p-2 rounded-xl border bg-light-gray'>
                        <div className='w-28 h-28 bg-dark-blue flex rounded-xl'>
                            <p className='text-2xl md:text-5xl font-bold text-white m-auto'>1</p>
                        </div>
                        <div className='flex-1 ml-0 md:ml-3 flex'>
                            <p className='text-base font-normal text-black m-auto'>
                                {t("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. it to make a type specimen book. it to make a type specimen book.")}
                            </p>
                        </div>
                    </div>
                    <div className='w-full flex flex-wrap align-middle justify-center p-2 rounded-xl border bg-light-gray'>
                        <div className='w-28 h-28 bg-dark-blue flex rounded-xl'>
                            <p className='text-2xl md:text-5xl font-bold text-white m-auto'>2</p>
                        </div>
                        <div className='flex-1 ml-0 md:ml-3 flex'>
                            <p className='text-base font-normal text-black m-auto'>
                                {t("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. it to make a type specimen book. it to make a type specimen book.")}
                            </p>
                        </div>
                    </div>
                    <div className='w-full flex flex-wrap align-middle justify-center p-2 rounded-xl border bg-light-gray'>
                        <div className='w-28 h-28 bg-dark-blue flex rounded-xl'>
                            <p className='text-2xl md:text-5xl font-bold text-white m-auto'>3</p>
                        </div>
                        <div className='flex-1 ml-0 md:ml-3 flex'>
                            <p className='text-base font-normal text-black m-auto'>
                                {t("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. it to make a type specimen book. it to make a type specimen book.")}
                            </p>
                        </div>
                    </div>
                    <div className='w-full flex flex-wrap align-middle justify-center p-2 rounded-xl border bg-light-gray'>
                        <div className='w-28 h-28 bg-dark-blue flex rounded-xl'>
                            <p className='text-2xl md:text-5xl font-bold text-white m-auto'>4</p>
                        </div>
                        <div className='flex-1 ml-0 md:ml-3 flex'>
                            <p className='text-base font-normal text-black m-auto'>
                                {t("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. it to make a type specimen book. it to make a type specimen book.")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
