import React, { useState } from 'react';
import { faCheck, faCircle, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ChooseDomain from './ChooseDomain';
import Login from '../../Landing/Login/Login';
import OwnerDetails from './OwnerDetails';
import PaymentDetails from './PaymentDetails';
import Success from './Success';
import BillingDetails from './BillingDetails';
import ChooseServer from './ChooseServer';
import useTranslation from "next-translate/useTranslation";



export default function CheckoutSteps() {
    const { t } = useTranslation("common");


    let [activeStep, setActiveStep] = useState(1);

    const handlePrevious = () => {
        if(activeStep > 1){
            setActiveStep(activeStep -= 1);
            console.log('Previous', activeStep);
            document.documentElement.scrollTop = 700;
        }
    }

    const handleNext = () => {
        if(activeStep < 7){
            setActiveStep(activeStep += 1);
            console.log('Next', activeStep);
            document.documentElement.scrollTop = 700;
        }
    }

  return (
    <div className='py-20 bg-white pt-40'>
        <div className='container w-full items-center mx-auto'>
            <div className="overflow-hidden">
                <div className="p-0 md:p-4 mb-5">
                    <div className="flex items-center">
                        <div className="flex items-center text-light-blue relative">
                            <div className="rounded-full flex transition duration-500 ease-in-out h-5 w-5 md:h-8 md:w-8 border-2 border-dark-blue">
                                <FontAwesomeIcon className='m-auto text-xs md:text-lg' icon={activeStep > 1  ? faCheck : faCircle} />
                            </div>
                            <div className={`absolute top-0 mt-10 md:mt-14 w-32 text-xs font-medium uppercase text-light-blue ${activeStep == 1 ? 'block' : 'hidden md:block'}`}>{t("Choose Domains")}</div>
                        </div>
                        <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${activeStep < 2 ? 'border-gray-300' : 'border-dark-blue'}`}></div>
                        <div className={`flex items-center ${activeStep < 2 ? 'text-gray-600' : 'text-light-blue'} relative`}>
                            <div className={`absolute top-0 mt-10 md:mt-14 w-32 text-xs font-medium uppercase ${activeStep < 2 ? 'text-gray-500' : 'text-light-blue'} ${activeStep == 2 ? 'block' : 'hidden md:block'}`}>{t("Choose Services")}</div>
                            <div className="rounded-full flex transition duration-500 ease-in-out h-5 w-5 md:h-8 md:w-8 border-2 border-dark-blue">
                                <FontAwesomeIcon className='m-auto text-xs md:text-lg' icon={activeStep < 2 ? faXmark : activeStep == 2 ? faCircle : faCheck } />
                            </div>
                        </div>
                        <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${activeStep < 3 ? 'border-gray-300' : 'border-dark-blue'}`}></div>
                        <div className={`flex items-center ${activeStep < 3 ? 'text-gray-600' : 'text-light-blue'} relative`}>
                            <div className={`rounded-full flex transition duration-500 ease-in-out h-5 w-5 md:h-8 md:w-8 border-2 ${activeStep < 3 ? 'border-gray-300' : 'border-dark-blue'}`}>
                                <FontAwesomeIcon className='m-auto text-xs md:text-lg' icon={activeStep < 3 ? faXmark : activeStep == 3 ? faCircle : faCheck } />
                            </div>
                            <div className={`absolute top-0 mt-10 md:mt-14 w-32 text-xs font-medium uppercase ${activeStep < 3 ? 'text-gray-500' : 'text-light-blue'} ${activeStep == 3 ? 'block' : 'hidden md:block'}`}>{t("Login")}</div>
                        </div>
                        <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${activeStep < 4 ? 'border-gray-300' : 'border-dark-blue'}`}></div>
                        <div className={`flex items-center ${activeStep < 4 ? 'text-gray-600' : 'text-light-blue'} relative`}>
                            <div className={`rounded-full flex transition duration-500 ease-in-out h-5 w-5 md:h-8 md:w-8 border-2 ${activeStep < 4 ? 'border-gray-300' : 'border-dark-blue'}`}>
                                <FontAwesomeIcon className='m-auto text-xs md:text-lg' icon={activeStep < 4 ? faXmark : activeStep == 4 ? faCircle : faCheck } />
                            </div>
                            <div className={`absolute top-0 mt-10 md:mt-14 w-32 text-xs font-medium uppercase ${activeStep < 4 ? 'text-gray-500' : 'text-light-blue'} ${activeStep == 4 ? 'block' : 'hidden md:block'}`}>{t("Owner Details")}</div>
                        </div>
                        <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${activeStep < 5 ? 'border-gray-300' : 'border-dark-blue'}`}></div>
                        <div className={`flex items-center ${activeStep < 5 ? 'text-gray-600' : 'text-light-blue'} relative`}>
                            <div className={`rounded-full flex transition duration-500 ease-in-out h-5 w-5 md:h-8 md:w-8 border-2 ${activeStep < 5 ? 'border-gray-300' : 'border-dark-blue'}`}>
                                <FontAwesomeIcon className='m-auto text-xs md:text-lg' icon={activeStep < 5 ? faXmark : activeStep == 5 ? faCircle : faCheck } />
                            </div>
                            <div className={`absolute top-0 mt-10 md:mt-14 w-32 text-xs font-medium uppercase ${activeStep < 5 ? 'text-gray-500' : 'text-light-blue'} ${activeStep == 5 ? 'block' : 'hidden md:block'}`}>{t("Billing Details")}</div>
                        </div>
                        <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${activeStep < 6 ? 'border-gray-300' : 'border-dark-blue'}`}></div>
                        <div className={`flex items-center ${activeStep < 6 ? 'text-gray-600' : 'text-light-blue'} relative`}>
                            <div className={`rounded-full flex transition duration-500 ease-in-out h-5 w-5 md:h-8 md:w-8 border-2 ${activeStep < 6 ? 'border-gray-300' : 'border-dark-blue'}`}>
                                <FontAwesomeIcon className='m-auto text-xs md:text-lg' icon={activeStep < 6 ? faXmark : activeStep == 6 ? faCircle : faCheck } />
                            </div>
                            <div className={`absolute top-0 -ml-10 md:-ml-0 mt-10 md:mt-14 w-32 text-xs font-medium uppercase ${activeStep < 6 ? 'text-gray-500' : 'text-light-blue'} ${activeStep == 6 ? 'block' : 'hidden md:block'}`}>{t("Payment Details")}</div>
                        </div>
                        <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${activeStep < 7 ? 'border-gray-300' : 'border-dark-blue'}`}></div>
                        <div className={`flex items-center ${activeStep < 7 ? 'text-gray-600' : 'text-light-blue'} relative`}>
                            <div className={`rounded-full flex transition duration-500 ease-in-out h-5 w-5 md:h-8 md:w-8 border-2 ${activeStep < 7 ? 'border-gray-300' : 'border-dark-blue'}`}>
                                <FontAwesomeIcon className='m-auto text-xs md:text-lg' icon={activeStep < 7 ? faXmark : activeStep == 7 ? faCircle : faCheck } />
                            </div>
                            <div className={`absolute top-0 -ml-10 md:-ml-0 mt-10 md:mt-14 w-32 text-xs font-medium uppercase ${activeStep < 7 ? 'text-gray-500' : 'text-light-blue'} ${activeStep == 7 ? 'block' : 'hidden md:block'}`}>{t("Success")}</div>
                        </div>
                    </div>
                </div>
                <div className="pb-4 mt-10">
                    {
                        activeStep == 1 ? <ChooseDomain/> :
                        activeStep == 2 ? <ChooseServer/> :
                        activeStep == 3 ? <Login/> :
                        activeStep == 4 ? <OwnerDetails/> :
                        activeStep == 5 ? <BillingDetails/> :
                        activeStep == 6 ? <PaymentDetails/> : <Success/>
                    }
                    <div className="flex justify-between align-middle p-2 mt-4">
                        <button disabled={activeStep == 1 ? true : false} className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded-full font-bold cursor-pointer
                            bg-gray-100
                            disabled:bg-gray-400
                            disabled:scale-100
                            disabled:cursor-not-allowed
                            text-gray-700
                            border duration-200 ease-in-out
                            border-gray-600 transition" onClick={handlePrevious}>{t("Previous")}</button>

                        <button disabled={activeStep == 7 ? true : false} className="text-base hover:scale-110 focus:outline-none flex justify-center px-6 py-2 rounded-full font-bold cursor-pointer
                            bg-light-blue
                            disabled:bg-opacity-50
                            disabled:scale-100
                            disabled:cursor-not-allowed
                            text-white
                            duration-200 ease-in-out transition" onClick={handleNext}>{t("Next")}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
