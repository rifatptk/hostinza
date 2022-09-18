import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import useTranslation from "next-translate/useTranslation";


export default function SelectPlan() {
    const { t } = useTranslation("common");



    const plans = [
        {data: 'Visits per month', data1: 'Up to 25000', data2: 'Up to 50000', data3: 'Unlimited'},
        {data: 'Total Sites', data1: '1', data2: '3', data3: '5'},
        {data: 'Hosting Type', data1: 'Shared', data2: 'Shared', data3: 'Shared'},
        {data: 'Shared', data1: '50 GB', data2: '100 GB', data3: '500 GB'},
        {data: 'Bandwidth per month', data1: '256 GB', data2: '512 GB', data3: '1 TB'},
        {data: 'Imported SSL', data1: 'false', data2: 'true', data3: 'true'},
        {data: '24/7 Phone Support', data1: 'true', data2: 'true', data3: 'true'},
        {data: 'Consultative onboarding', data1: 'false', data2: 'false', data3: 'true'},
        {data: 'Dev, Stage, Prod', data1: 'false', data2: 'true', data3: 'true'},
        {data: 'Transferable Sites', data1: 'true', data2: 'true', data3: 'true'},
        {data: 'Multisite ready', data1: 'true', data2: 'true', data3: 'true'},
        {data: 'Php 7 ready', data1: 'false', data2: 'true', data3: 'true'},
        {data: 'LargeFS', data1: 'false', data2: 'true', data3: 'true'},
        {data: 'Global CDN', data1: 'true', data2: 'true', data3: 'true'},
        {data: 'Page Performance', data1: 'true', data2: 'false', data3: 'false'},
        {data: 'SSL Certificates', data1: 'false', data2: 'true', data3: 'true'},
        {data: 'GeoTarget', data1: 'Add On', data2: 'Add On', data3: 'Add On'},
        {data: 'Content Performance', data1: '', data2: 'Add On', data3: 'Add On'},
        {data: 'Readiness assessment', data1: 'true', data2: 'Limited', data3: 'Unlimited'},
        {data: 'Success Management', data1: 'true', data2: 'true', data3: 'true'},
        {data: 'Application Performance', data1: 'true', data2: 'true', data3: 'true'},
        {data: 'High availability', data1: 'false', data2: 'true', data3: 'true'}
    ]

  return (
    <div className='bg-light-gray w-full h-auto pt-24 pb-36'>
        <div className='container w-full items-center mx-auto'>
            <p className='text-gray-500 text-lg font-normal text-center font-poppins'>{this("Pricing Plans")}</p>
            <h3 className='text-blue-content text-2xl md:text-4xl font-bold text-center font-poppins'>
                <span className='text-black'>{this("SELECT")}</span> {this("BEST PLAN")}
            </h3>

            {/* Table */}
            <div className="flex flex-col w-[95%] mx-auto mt-[20px] plansTable">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden rounded-xl border border-fd-light-blue">
                            <table className="min-w-full text-center">
                                <thead className="border-b border-fd-blue">
                                    <tr className='rounded-xl bg-white'>
                                        <th scope="col" className="w-[25%] font-semibold text-lg text-black border-r border-b py-5">
                                            <div className='w-[50%] h-52 relative mx-auto'>
                                                <Image src={'/images/pricing_img-1.png'} layout='fill' alt='PricingImage' />
                                            </div>
                                        </th>
                                        <th scope="col" className="w-[25%] border-r border-b py-8">
                                            <p className='font-semibold text-2xl text-black'>{this("Regular")}</p>
                                            <p className='text-gray-500 text-base font-normal mt-5 w-[90%] mx-auto'>
                                                {this("Hight performance cloud platform ever")}
                                            </p>
                                            <p className='mt-5 flex flex-row justify-center mx-auto text-blue-content font-montserrat'>
                                                <span className='font-bold text-xl self-start'>$</span> &nbsp;
                                                <span className='font-extrabold text-6xl'>29</span> &nbsp;
                                                <span className='font-bold self-end'>{t("/month")}</span>
                                            </p>
                                            <button className='w-fit text-sm md:text-lg text-white py-3 px-5 md:px-10 bg-light-blue rounded-full mx-auto mt-5 font-normal'>
                                                {t("Buy Now")}
                                            </button>
                                        </th>
                                        <th scope="col" className="w-[25%] font-semibold text-lg text-black border-r border-b">
                                            <p className='font-semibold text-2xl text-black'>{t("Standard")}</p>
                                            <p className='text-gray-500 text-base font-normal mt-5 w-[90%] mx-auto'>
                                                {t("Hight performance cloud platform ever")}
                                            </p>
                                            <p className='mt-5 flex flex-row justify-center mx-auto text-blue-content font-montserrat'>
                                                <span className='font-bold text-xl self-start'>$</span> &nbsp;
                                                <span className='font-extrabold text-6xl'>39</span> &nbsp;
                                                <span className='font-bold self-end'>{t("/month")}</span>
                                            </p>
                                            <button className='w-fit text-sm md:text-lg text-white py-3 px-5 md:px-10 bg-light-blue rounded-full mx-auto mt-5 font-normal'>
                                            {t("Buy Now")}
                                            </button>
                                        </th>
                                        <th scope="col" className="w-[25%] font-semibold text-lg text-black border-b">
                                            <p className='font-semibold text-2xl text-black'>{t("Plus")}</p>
                                            <p className='text-gray-500 text-base font-normal mt-5 w-[90%] mx-auto'>
                                            {t("Hight performance cloud platform ever")}
                                            </p>
                                            <p className='mt-5 flex flex-row justify-center mx-auto text-blue-content font-montserrat'>
                                                <span className='font-bold text-xl self-start'>$</span> &nbsp;
                                                <span className='font-extrabold text-6xl'>29</span> &nbsp;
                                                <span className='font-bold self-end'>{t("/month")}</span>
                                            </p>
                                            <button className='w-fit text-sm md:text-lg text-white py-3 px-5 md:px-10 bg-light-blue rounded-full mx-auto mt-5 font-normal'>
                                            {t("Buy Now")}
                                            </button>
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className='rounded-bl-10'>
                                    <tr className='h-14'></tr>
                                    {
                                        plans.map((item, key) => (
                                            <tr key={key} className='bg-white'>
                                                <td className="text-base text-gray-900 font-medium whitespace-nowrap border-t border-r py-3">
                                                    {item.data}
                                                </td>
                                                <td className="text-base text-gray-900 font-medium whitespace-nowrap border py-3">
                                                    {item.data1 === 'true' ? <FontAwesomeIcon color='#1868dd' icon={faCheck} /> : 
                                                     item.data1 === 'false' ? <FontAwesomeIcon color='red' icon={faXmark} /> : item.data1}
                                                </td>
                                                <td className="text-base text-gray-900 font-medium whitespace-nowrap border py-3">
                                                    {item.data2 === 'true' ? <FontAwesomeIcon color='#1868dd' icon={faCheck} /> : 
                                                     item.data2 === 'false' ? <FontAwesomeIcon color='red' icon={faXmark} /> : item.data2}
                                                </td>
                                                <td className="text-base text-gray-900 font-medium whitespace-nowrap border-t py-3">
                                                    {item.data3 === 'true' ? <FontAwesomeIcon color='#1868dd' icon={faCheck} /> : 
                                                     item.data3 === 'false' ? <FontAwesomeIcon color='red' icon={faXmark} /> : item.data3}
                                                </td>
                                            </tr>
                                        )
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
