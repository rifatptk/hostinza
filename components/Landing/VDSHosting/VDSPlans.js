import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import useTranslation from "next-translate/useTranslation";


export default function VDSPlans() {
  const { t } = useTranslation("common");


    let [activeStep, setActiveStep] = useState(1);

    let plans = [
        {name: 'Basic Pack', price: '5.99', cpu: '1', bandwidth1: '100 GB', bandwidth2: '0.5 TB', ram: '1 GB', setup1: 'Paid', setup2: 'Free', diskSpace: '100 GB', ip1: 'Up to 1', ip2: 'Up to 0', description: 'It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name'},
        {name: 'Starter Pack', price: '10.99', cpu: '2', bandwidth1: '500 GB', bandwidth2: '1 TB', ram: '2 GB', setup1: 'Free', setup2: 'Paid', diskSpace: '200 GB', ip1: 'Up to 3', ip2: 'Up to 2', description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.'},
        {name: 'Enterprise Pack', price: '15.99', cpu: '3', bandwidth1: '1000 GB', bandwidth2: '5 TB', ram: '5 GB', setup1: 'Paid', setup2: 'Free', diskSpace: '300 GB', ip1: 'Up to 4', ip2: 'Up to 6', description: 'It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name'},
        {name: 'Business Pack', price: '18.99', cpu: '5', bandwidth1: '2000 GB', bandwidth2: '50 TB', ram: '16 GB', setup1: 'Free', setup2: 'Paid', diskSpace: '400 GB', ip1: 'Up to 8', ip2: 'Up to 10', description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.'},
        {name: 'Pro Pack', price: '20.99', cpu: '8', bandwidth1: 'Unlimited', bandwidth2: '500 TB', ram: '32 GB', setup1: 'Paid', setup2: 'Free', diskSpace: '500 GB', ip1: 'Up to 9', ip2: 'Up to 6', description: 'It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name'},
    ]

    let activePlan = plans[(activeStep - 1)];

  return (
    <div className='bg-light-gray w-full h-auto'>
        <div className='container w-full mx-auto py-16'>
            <div className='flex flex-col align-middle justify-center gap-5 bg-white shadow-blog-card-content'>

                {/* Progress Bar */}
                <div className='bg-gradient-to-br from-dark-blue to-light-blue min-h-[190px] px-5 rounded-xl'>
                <div className="p-0 md:p-4 my-10">
                    <div className="flex items-center">
                        <div className={`flex items-center text-white relative`}>
                            { activeStep == 1 ? <div className={`rounded-full flex transition duration-500 ease-in-out h-5 w-5 md:h-8 md:w-8 border-2 border-white`}>
                                <FontAwesomeIcon className='m-auto text-xs md:text-lg' icon={faCircle} />
                            </div> : null}
                            <div className={`absolute top-0 mt-10 ${ activeStep == 1 ? 'md:mt-[70px]':'md:mt-14'} w-32 text-base font-medium uppercase ${activeStep >= 1 ? 'text-white' : 'text-gray-400'} ${activeStep == 1 ? 'block' : 'hidden md:block'} cursor-pointer`} onClick={() => setActiveStep(1)}>{t("Basic")}</div>
                        </div>
                        <div className={`flex-auto border-t-4 transition duration-500 ease-in-out ${activeStep >= 2 ? 'border-white' : 'border-gray-400'}`} onClick={() => setActiveStep(1)}></div>
                        <div className={`flex items-center text-white relative`}>
                            { activeStep == 2 ? <div className={`rounded-full flex transition duration-500 ease-in-out h-5 w-5 md:h-8 md:w-8 border-2 border-white`}>
                                <FontAwesomeIcon className='m-auto text-xs md:text-lg' icon={faCircle} />
                            </div> : null}
                            <div className={`absolute top-0 mt-10 ${ activeStep == 2 ? 'md:mt-[70px]':'md:mt-14'} w-32 text-base font-medium uppercase ${activeStep >= 2 ? 'text-white' : 'text-gray-400'} ${activeStep == 2 ? 'block' : 'hidden md:block'} cursor-pointer`} onClick={() => setActiveStep(2)}>{t("Starter")}</div>
                        </div>
                        <div className={`flex-auto border-t-4 transition duration-500 ease-in-out ${activeStep >= 3 ? 'border-white' : 'border-gray-400'}`} onClick={() => setActiveStep(2)}></div>
                        <div className={`flex items-center text-white relative`}>
                            { activeStep == 3 ? <div className={`rounded-full flex transition duration-500 ease-in-out h-5 w-5 md:h-8 md:w-8 border-2 border-white`}>
                                <FontAwesomeIcon className='m-auto text-xs md:text-lg' icon={faCircle} />
                            </div> : null}
                            <div className={`absolute top-0 mt-10 ${ activeStep == 3 ? 'md:mt-[70px]':'md:mt-14'} w-32 text-base font-medium uppercase ${activeStep >= 3 ? 'text-white' : 'text-gray-400'} ${activeStep == 3 ? 'block' : 'hidden md:block'} cursor-pointer`} onClick={() => setActiveStep(3)}>{t("Enterprise")}</div>
                        </div>
                        <div className={`flex-auto border-t-4 transition duration-500 ease-in-out ${activeStep >= 4 ? 'border-white' : 'border-gray-400'}`} onClick={() => setActiveStep(3)}></div>
                        <div className={`flex items-center text-white relative`}>
                            { activeStep == 4 ? <div className={`rounded-full flex transition duration-500 ease-in-out h-5 w-5 md:h-8 md:w-8 border-2 border-white`}>
                                <FontAwesomeIcon className='m-auto text-xs md:text-lg' icon={faCircle} />
                            </div> : null}
                            <div className={`absolute top-0 -ml-10 md:-ml-0 mt-10 ${ activeStep == 4 ? 'md:mt-[70px]':'md:mt-14'} w-32 text-base font-medium uppercase ${activeStep >= 4 ? 'text-white' : 'text-gray-400'} ${activeStep == 4 ? 'block' : 'hidden md:block'} cursor-pointer`} onClick={() => setActiveStep(4)}>{t("Business")}</div>
                        </div>
                        <div className={`flex-auto border-t-4 transition duration-500 ease-in-out ${activeStep >= 5 ? 'border-white' : 'border-gray-400'}`} onClick={() => setActiveStep(4)}></div>
                        <div className={`flex items-center text-white relative`}>
                            { activeStep == 5 ? <div className={`rounded-full flex transition duration-500 ease-in-out h-5 w-5 md:h-8 md:w-8 border-2 border-white`}>
                                <FontAwesomeIcon className='m-auto text-xs md:text-lg' icon={faCircle} />
                            </div> : null}
                            <div className={`absolute top-0 ${ activeStep == 5 ? 'ml-0' : '-ml-10' } mt-10 ${ activeStep == 5 ? 'md:mt-[70px]':'md:mt-14'} w-32 text-base font-medium uppercase ${activeStep >= 5 ? 'text-white' : 'text-gray-400'} ${activeStep == 5 ? 'block' : 'hidden md:block'} cursor-pointer`} onClick={() => setActiveStep(5)}>{t("Pro")}</div>
                        </div>
                    </div>
                </div>
                </div>

                <div className='flex flex-wrap align-middle justify-center gap-5 p-10'>
                    <div className='flex flex-wrap align-middle justify-center gap-5 p-10'>
                        <div className='w-full md:w-[48%]'>
                            <p className='text-base text-gray-400 font-semibold'>{activePlan.name}</p>
                            <h2 className='text-5xl text-light-blue font-bold my-5'>${activePlan.price}</h2>
                            <p className='text-sm text-gray-600 font-medium w-[90%] leading-loose'>{activePlan.description}</p>
                            <button className='w-fit text-sm md:text-lg text-white py-3 px-5 md:px-10 bg-light-blue rounded-full mx-auto mt-5 font-normal'>
                                {t("Purchase Now")}
                            </button>
                        </div>
                        <div className='w-full md:w-[48%] flex flex-col gap-5'>
                            <div className='w-full flex flex-wrap justify-between align-middle'>
                                <div className='w-[30%] min-w-[150px] pb-5 border-b-2 border-gray-300'>
                                    <p className='text-lg text-black font-semibold'>CPU</p>
                                    <p className='text-sm text-gray-400 font-light mt-2'>{activePlan.cpu} {t("Core")}</p>
                                </div>
                                <div className='w-[30%] min-w-[150px] pb-5 border-b-2 border-gray-300'>
                                    <p className='text-lg text-black font-semibold'>{t("Bandwidth")}</p>
                                    <p className='text-sm text-gray-400 font-light mt-2'>{activePlan.bandwidth1}</p>
                                </div>
                                <div className='w-[30%] min-w-[150px] pb-5 border-b-2 border-gray-300'>
                                    <p className='text-lg text-black font-semibold'>{t("Bandwidth")}</p>
                                    <p className='text-sm text-gray-400 font-light mt-2'>{activePlan.bandwidth2}</p>
                                </div>
                            </div>
                            <div className='w-full flex flex-wrap justify-between align-middle'>
                                <div className='w-[30%] min-w-[150px] pb-5 border-b-2 border-gray-300'>
                                    <p className='text-lg text-black font-semibold'>{t("RAM")}</p>
                                    <p className='text-sm text-gray-400 font-light mt-2'>{activePlan.ram} {t("Core")}</p>
                                </div>
                                <div className='w-[30%] min-w-[150px] pb-5 border-b-2 border-gray-300'>
                                    <p className='text-lg text-black font-semibold'>{t("Setup")}</p>
                                    <p className='text-sm text-gray-400 font-light mt-2'>{activePlan.setup1}</p>
                                </div>
                                <div className='w-[30%] min-w-[150px] pb-5 border-b-2 border-gray-300'>
                                    <p className='text-lg text-black font-semibold'>{t("Setup")}</p>
                                    <p className='text-sm text-gray-400 font-light mt-2'>{activePlan.setup2}</p>
                                </div>
                            </div>
                            <div className='w-full flex flex-wrap justify-between align-middle'>
                                <div className='w-[30%] min-w-[150px] pb-5 border-b-2 border-gray-300'>
                                    <p className='text-lg text-black font-semibold'>{t("Disk Space")}</p>
                                    <p className='text-sm text-gray-400 font-light mt-2'>{activePlan.diskSpace} {t("Core")}</p>
                                </div>
                                <div className='w-[30%] min-w-[150px] pb-5 border-b-2 border-gray-300'>
                                    <p className='text-lg text-black font-semibold'>{t("IP")}</p>
                                    <p className='text-sm text-gray-400 font-light mt-2'>{activePlan.ip1}</p>
                                </div>
                                <div className='w-[30%] min-w-[150px] pb-5 border-b-2 border-gray-300'>
                                    <p className='text-lg text-black font-semibold'>{t("IP")}</p>
                                    <p className='text-sm text-gray-400 font-light mt-2'>{activePlan.ip2}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}
