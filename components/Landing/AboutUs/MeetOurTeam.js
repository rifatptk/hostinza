import React from 'react';
import Image from 'next/image';
import useTranslation from "next-translate/useTranslation";

export default function MeetOurTeam() {
    const { t } = useTranslation("common");
  return (
    <div className='bg-light-gray w-full h-auto py-24'>
        <div className='container w-full items-center mx-auto'>
            <div className='flex flex-col w-full align-middle'>
                <p className='text-gray-500 text-lg font-normal text-center font-poppins'>{t("Our Experts")}</p>
                <h3 className='text-blue-content text-2xl md:text-4xl font-bold text-center font-poppins uppercase mt-2'>
                    <span className='text-black'>{t("Meet")}</span> {t("our team")}
                </h3>
                <div className='flex flex-wrap align-middle justify-center gap-10 w-full h-auto mt-16'>
                    <div className='w-full max-w-[260px] flex flex-col align-middle'>
                        <div className='w-full h-80 relative bg-black rounded-xl'>
                            <Image className='opacity-70 rounded-xl' src={'/images/team-1.jpg'} layout='fill' alt='teamMember1' />
                            <div className='flex flex-col justify-end absolute teamMemberIntro h-full w-full p-5 rounded-xl'>
                                <p className='text-xl text-white font-bold'>
                                    {t("Dimon Lake")}
                                </p>
                                <p className='text-base font-normal text-white'>
                                    <i>{t("CEO")}</i>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full max-w-[260px] flex flex-col align-middle'>
                        <div className='w-full h-80 relative bg-black rounded-xl'>
                            <Image className='opacity-70 rounded-xl' src={'/images/team-2.jpg'} layout='fill' alt='teamMember1' />
                            <div className='flex flex-col justify-end absolute teamMemberIntro h-full w-full p-5 rounded-xl'>
                                <p className='text-xl text-white font-bold'>
                                    {t("Dimon Lake")}
                                </p>
                                <p className='text-base font-normal text-white'>
                                    <i>{t("CEO")}</i>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full max-w-[260px] flex flex-col align-middle'>
                        <div className='w-full h-80 relative bg-black rounded-xl'>
                            <Image className='opacity-70 rounded-xl' src={'/images/team-3.jpg'} layout='fill' alt='teamMember1' />
                            <div className='flex flex-col justify-end absolute teamMemberIntro h-full w-full p-5 rounded-xl'>
                                <p className='text-xl text-white font-bold'>
                                    {t("Dimon Lake")}
                                </p>
                                <p className='text-base font-normal text-white'>
                                    <i>{t("CEO")}</i>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full max-w-[260px] flex flex-col align-middle'>
                        <div className='w-full h-80 relative bg-black rounded-xl'>
                            <Image className='opacity-70 rounded-xl' src={'/images/team-4.jpg'} layout='fill' alt='teamMember1' />
                            <div className='flex flex-col justify-end absolute teamMemberIntro h-full w-full p-5 rounded-xl'>
                                <p className='text-xl text-white font-bold'>
                                    {t("Dimon Lake")}
                                </p>
                                <p className='text-base font-normal text-white'>
                                    <i>{t("CEO")}</i>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
