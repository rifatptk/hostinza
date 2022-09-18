import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faArrowDown, faCircleInfo, faDatabase, faPercent, faServer } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import useTranslation from "next-translate/useTranslation";


export default function AdditionalServices() {
    const { t } = useTranslation("common");


    const [showExpandEmail, setShowExpandEmail] = useState(true);
    const [showSrvPerformance, setShowSrvPerformance] = useState(true);
    const [giglaMails, setGigaMails] = useState(1);

    const handleGigaMailsDecrement = () => {
        if(giglaMails > 1){
            setGigaMails(giglaMails -= 1);
        }
    }

    const handleGigaMailsIncrement = () => {
        setGigaMails(giglaMails += 1);
    }

  return (
    <div className='bg-white w-full h-auto py-20'>
        <div className='container w-full items-center mx-auto'>
            <p className='text-gray-500 text-lg font-normal text-start font-poppins'>{t("Select additional service for")}</p>
            <h3 className='text-blue-content text-2xl md:text-4xl font-bold text-start font-poppins mt-2'>
                {t("myDomain.com")}
            </h3>
            <div className='flex flex-wrap justify-center align-top gap-5'>
                <div className='w-full md:w-[77%] flex flex-col align-middle order-2 md:order-1'>

                    {/* Expand your Email Services */}
                    <div className='w-full flex flex-col align-top mt-20'>
                        <div className='flex flex-row align-middle justify-start gap-3'>
                            <button className='px-3 py-1 my-auto border border-black-100 text-base h-fit font-bold' onClick={() => setShowExpandEmail(!showExpandEmail)}>
                                { showExpandEmail ? '-' : '+'}
                            </button>
                            <p className='my-auto text-xl font-medium text-black uppercase'>{t("Expand your Email Services")}</p>
                        </div>
                        <fieldset id='checkDomainReg' className={`${showExpandEmail ? 'block' : 'hidden'} flex flex-wrap gap-5 align-middle justify-center`}>
                            
                            {/* Domain Card 1 */}
                            <div className='w-full max-w-[280px] h-[370px] flex flex-col justify-between p-5 rounded-xl border bg-light-gray mt-5'>
                                <div className='flex flex-row justify-between align-middle w-full'>
                                    <div className='flex align-top w-[75%]'>
                                        <input className='w-5 h-5 my-auto mr-2' type={'radio'} name='checkDomainReg' />
                                        <p className='text-lg font-semibold text-black w-[80%]'>{t("Gigamails")}</p>
                                    </div>
                                    <FontAwesomeIcon className='my-auto' size='lg' icon={faServer} />
                                </div>
                                <div className='w-fit text-sm px-2 py-1 h-fit bg-sky-300 rounded-md ml-5 mt-3'><FontAwesomeIcon icon={faCircleInfo}/> {t("Info")}</div>
                                <p className='my-4 text-base w-full'>{t("Expand the capacity of your @gg0 It mailboxes from 1GB to 5GB Upto 5GB of storage for each domain account")}</p>
                                <div className='w-full flex justify-end align-middle'>
                                    <button className='w-5 h-5 border border-black rounded-full leading-5 my-auto mr-1' onClick={handleGigaMailsDecrement}>-</button>
                                    <input className='w-14 border border-black text-base font-normal text-center p-1' type={'number'} value={giglaMails} onChange={(e) => setGigaMails(e.target.value)} />
                                    <button className='w-5 h-5 border border-black rounded-full leading-5 my-auto ml-1' onClick={handleGigaMailsIncrement}>+</button>
                                </div>
                                <p className='mt-5 text-base font-semibold text-end'>{t("$12.00")} <span className='text-xs font-normal'>{t("+VAT/year")}</span></p>
                            </div>
                            
                            {/* Domain Card 2 */}
                            <div className='w-full max-w-[280px] h-[370px] flex flex-col justify-between p-5 rounded-xl border bg-light-gray mt-5'>
                                <div className='flex flex-row justify-between align-middle w-full'>
                                    <div className='flex align-top w-[75%]'>
                                        <input className='w-5 h-5 mr-2' type={'radio'} name='checkDomainReg' />
                                        <p className='text-lg font-semibold text-black w-[80%]'>{t("Monitoring Notifications Via Text Message")}</p>
                                    </div>
                                    <FontAwesomeIcon size='lg' icon={faServer} />
                                </div>
                                <div className='w-fit text-sm px-2 py-1 h-fit bg-sky-300 rounded-md ml-5 mt-3'><FontAwesomeIcon icon={faCircleInfo}/> {t("Info")}</div>
                                <p className='my-4 text-base w-full'>{t("Recieve error alerts via text message to keep up to date with your WooCommerce site to mobiles only")}</p>
                                
                                <div className='mt-5 text-base font-semibold text-end'>{t("$12.00")} <span className='text-xs font-normal'>{t("+VAT/year")}</span></div>
                            </div>

                            {/* Domain Card 3 */}
                            <div className='w-full max-w-[280px] h-[370px] flex flex-col justify-between p-5 rounded-xl border bg-light-gray mt-5'>
                                <div className='flex flex-row justify-between align-middle w-full'>
                                    <div className='flex align-top w-[75%]'>
                                        <input className='w-5 h-5 mr-2' type={'radio'} name='checkDomainReg' />
                                        <p className='text-lg font-semibold text-black w-[80%]'>{t("Hourly Database Backup")}</p>
                                    </div>
                                    <FontAwesomeIcon size='lg' icon={faDatabase} />
                                </div>
                                <div className='w-fit text-sm px-2 py-1 h-fit bg-sky-300 rounded-md ml-5 mt-3'><FontAwesomeIcon icon={faCircleInfo}/> {t("Info")}</div>
                                <p className='my-4 text-base w-full'>{t("Recieve error alerts via text message to keep up to date with your WooCommerce site. i.e.to Itallion mobiles only")}</p>
                                
                                <div className='mt-5 text-base font-semibold text-end'>{t("$12.00")} <span className='text-xs font-normal'>{t("+VAT/year")}</span></div>
                            </div>

                        </fieldset>
                    </div>

                    {/* Improve Service Performance */}
                    <div className='w-full flex flex-col align-top mt-20'>
                        <div className='flex flex-row align-middle justify-start gap-3'>
                            <button className='px-3 py-1 my-auto border border-black-100 text-base h-fit font-bold' onClick={() => setShowSrvPerformance(!showSrvPerformance)}>
                                { showSrvPerformance ? '-' : '+'}
                            </button>
                            <p className='my-auto text-xl font-medium text-black uppercase'>{t("Improve Service Performance")}</p>
                        </div>
                        <fieldset id='checkServicePerformance' className={`${showSrvPerformance ? 'block' : 'hidden'} flex flex-wrap gap-5 align-middle justify-center`}>
                            
                            {/* Domain Card 1 */}
                            <div className='w-full max-w-[280px] h-[370px] flex flex-col justify-between p-5 rounded-xl border bg-light-gray mt-5'>
                                <div className='flex flex-row justify-between align-middle w-full'>
                                    <div className='flex align-top w-[75%]'>
                                        <input className='w-5 h-5 mr-2' type={'radio'} name='checkServicePerformance' />
                                        <p className='text-lg font-semibold text-black w-[80%]'>{t("Increase MySQL Database Storage")}</p>
                                    </div>
                                    <FontAwesomeIcon size='lg' icon={faServer} />
                                </div>
                                <div className='w-fit text-sm px-2 py-1 h-fit bg-sky-300 rounded-md ml-5 mt-3'><FontAwesomeIcon icon={faCircleInfo}/> {t("Info")}</div>
                                <p className='my-4 text-base w-full'>{t("Increase the storage of MySQL database, Choose from 1GB to 10GB")}</p>
                                <div className='w-full h-10 px-5 shadow-contact-card rounded-xl border border-black-100 flex justify-between relative'>
                                    <select className="z-[1] bg-transparent border text-gray-900 h-10 rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-0">
                                        <option defaultValue={'Choose'}>{t("Choose")}</option>
                                        <option value="US">{t("Italy")}</option>
                                        <option value="CA">{t("Canada")}</option>
                                        <option value="FR">{t("France")}</option>
                                        <option value="DE">{t("Germany")}</option>
                                    </select>
                                    <FontAwesomeIcon className='z-[0] absolute my-auto top-[35%] right-[5%] text-gray-500' icon={faAngleDown} />
                                </div>
                            </div>
                            
                            {/* Domain Card 2 */}
                            <div className='w-full max-w-[280px] h-[370px] flex flex-col justify-between p-5 rounded-xl border bg-light-gray mt-5'>
                                <div className='flex flex-row justify-between align-middle w-full'>
                                    <div className='flex align-top w-[75%]'>
                                        <input className='w-5 h-5 mr-2' type={'radio'} name='checkServicePerformance' />
                                        <p className='text-lg font-semibold text-black w-[80%]'>{t("Hourly Database Backup")}</p>
                                    </div>
                                    <FontAwesomeIcon size='lg' icon={faServer} />
                                </div>
                                <div className='w-fit text-sm px-2 py-1 h-fit bg-sky-300 rounded-md ml-5 mt-3'><FontAwesomeIcon icon={faCircleInfo}/> {t("Info")}</div>
                                <p className='my-4 text-base w-full'>{t("Choose the frequency of automatic backup for your Managed WooCommerce Hosting database")}</p>
                                
                                <div className='w-full h-10 px-5 shadow-contact-card rounded-xl border border-black-100 flex justify-between relative'>
                                    <select className="z-[1] bg-transparent border text-gray-900 h-10 rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-0">
                                        <option defaultValue={'Choose'}>{t("Choose")}</option>
                                        <option value="US">{t("Italy")}</option>
                                        <option value="CA">{t("Canada")}</option>
                                        <option value="FR">{t("France")}</option>
                                        <option value="DE">{t("Germany")}</option>
                                    </select>
                                    <FontAwesomeIcon className='z-[0] absolute my-auto top-[35%] right-[5%] text-gray-500' icon={faAngleDown} />
                                </div>
                            </div>

                            {/* Domain Card 3 */}
                            <div className='w-full max-w-[280px] h-[370px] flex flex-col justify-between p-5 rounded-xl border bg-light-gray mt-5'>
                                <div className='flex flex-row justify-between align-middle w-full'>
                                    <div className='flex align-top w-[75%]'>
                                        <input className='w-5 h-5 mr-2' type={'radio'} name='checkServicePerformance' />
                                        <p className='text-lg font-semibold text-black w-[80%]'>{t("Monitoring Notifications Via Text Message")}</p>
                                    </div>
                                    <FontAwesomeIcon size='lg' icon={faServer} />
                                </div>
                                <div className='w-fit text-sm px-2 py-1 h-fit bg-sky-300 rounded-md ml-5 mt-3'><FontAwesomeIcon icon={faCircleInfo}/> {t("Info")}</div>
                                <p className='my-4 text-base w-full'>{t("Recieve error alerts via text message to keep up to date with your WooCommerce site to mobiles only")}</p>
                                
                                <div className='mt-5 text-base font-semibold text-end'>{t("$12.00")} <span className='text-xs font-normal'>{t("+VAT/year")}</span></div>
                            </div>
                            
                            {/* Domain Card 4 */}
                            <div className='w-full max-w-[280px] h-[370px] flex flex-col justify-between p-5 rounded-xl border bg-light-gray mt-5'>
                                <div className='flex flex-row justify-between align-middle w-full'>
                                    <div className='flex align-top w-[75%]'>
                                        <input className='w-5 h-5 my-auto mr-2' type={'radio'} name='checkServicePerformance' />
                                        <p className='text-lg font-semibold text-black w-[80%]'>{t("Advanced Support Credit")}</p>
                                    </div>
                                    <FontAwesomeIcon size='lg' icon={faServer} />
                                </div>
                                <div className='w-fit text-sm px-2 py-1 h-fit bg-sky-300 rounded-md ml-5 mt-3'><FontAwesomeIcon icon={faCircleInfo}/> {t("Info")}</div>
                                <p className='my-4 text-base w-full'>{t("Expand the capacity of your @gg0 It mailboxes from 1GB to 5GB Upto 5GB of storage for each domain account")}</p>
                                <div className='w-full flex justify-end align-middle'>
                                    <button className='w-5 h-5 border border-black rounded-full leading-5 my-auto mr-1'>-</button>
                                    <div className='w-14 border border-black text-base font-normal text-center p-1'>1</div>
                                    <button className='w-5 h-5 border border-black rounded-full leading-5 my-auto ml-1'>+</button>
                                </div>
                                <p className='mt-5 text-base font-semibold text-end'>{t("$12.00")} <span className='text-xs font-normal'>{t("+VAT/year")}</span></p>
                            </div>

                        </fieldset>
                    </div>

                    <div className='w-full my-5'>
                        <Link href="/search">
                            <p className='text-blue-content text-base font-bold cursor-pointer'>{t("Go back to domain Search")}</p>
                        </Link>
                    </div>
                    
                </div>
                <div className='w-full md:w-[18%] flex flex-col align-middle order-1 md:order-2'>
                    <div className='w-full mx-auto p-5 border border-black-100 rounded-xl mt-12 md:mt-[135px] shadow-contact-card '>
                        <p className='text-xs'>{t("All services include a domain even when you renew")}</p>
                        <hr className='h-[1px] border-none bg-gray-300 my-2'></hr>
                        <div className='w-full flex flex-row justify-between align-middle'>
                            <span className='text-xs font-medium text-black w-[65%]'>{t("myDomain.com")}</span>
                            <span className='text-xs font-medium text-black'>{t("$119.50")}</span>
                        </div>
                        <span className='text-[10px] font-normal block mt-1'>{t("Managed Woocommerce Hosting")}</span>
                        <div className='w-full flex justify-between align-middle mt-4'>
                            <FontAwesomeIcon className='my-auto mr-2' icon={faArrowDown} />
                            <p className='text-[10px]'>
                                {t("Scroll to the bottom of the page to continue with your order")}
                            </p>
                        </div>
                    </div>
                    <div className='w-full flex justify-between align-middle mx-auto p-5 border border-black-100 rounded-xl mt-5 shadow-contact-card '>
                        <FontAwesomeIcon className='my-auto mr-2' icon={faPercent} />
                        <p className='text-[10px]'>
                            <b className='text-[10px]'>{t("Do you have a discount code?")}</b>
                            <p>{t("Great! Keep it ready to enter in the payment page to get your discount!")}</p>
                        </p>
                    </div>
                </div>
            </div> 
        </div>
    </div>
  )
}
