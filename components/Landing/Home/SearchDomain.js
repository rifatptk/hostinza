import React from 'react';
import Link from 'next/link';
import useTranslation from "next-translate/useTranslation";


export default function SearchDomain() {
  const { t } = useTranslation("common");

  return (
    <div className='bg-light-gray w-full py-16'>
        <div className='container w-full items-center mx-auto'>
            <div className='w-full md:w-[70%] mx-auto bg-white rounded-full border-[1px] border-gray-300 h-[70px] flex align-middle p-2 searchDomainContainer'>
                <input className='outline-none bg-transparent border-none flex-1 pl-2 md:pl-5 pr-2 w-[60%] md:[70%]' placeholder='"myDomain.com"' />
                <Link href="/search">
                  <button className='text-base text-white px-3 md:px-10 bg-light-blue rounded-full'>
                      {t("Search")}
                  </button>
                </Link>
            </div>
            <div className='w-full flex flex-wrap justify-evenly align-middle gap-5 mt-10'>

              <div className='flex flex-1 flex-row justify-around md:justify-center align-middle gap-3 rounded-xl p-2 domainPrices'>
                <div className='w-14 h-14 rounded-full bg-red-500 flex justify-center align-middle p-1'>
                  <p className='m-auto text-white text-lg leading-none font-bold'>.com</p>
                </div>
                <p className='text-black text-lg font-bold my-auto'>$9.95</p>
              </div>

              <div className='flex flex-1 flex-row justify-around md:justify-center align-middle gap-3 rounded-xl p-2 domainPrices'>
                <div className='w-14 h-14 rounded-full bg-green-500 flex justify-center align-middle p-1'>
                  <p className='m-auto text-white text-lg leading-none font-bold'>.co</p>
                </div>
                <p className='text-black text-lg font-bold my-auto'>$7.95</p>
              </div>

              <div className='flex flex-1 flex-row justify-around md:justify-center align-middle gap-3 rounded-xl p-2 domainPrices'>
                <div className='w-14 h-14 rounded-full bg-yellow-500 flex justify-center align-middle p-1'>
                  <p className='m-auto text-white text-lg leading-none font-bold'>.info</p>
                </div>
                <p className='text-black text-lg font-bold my-auto'>$2.95</p>
              </div>

              <div className='flex flex-1 flex-row justify-around md:justify-center align-middle gap-3 rounded-xl p-2 domainPrices'>
                <div className='w-14 h-14 rounded-full bg-orange-500 flex justify-center align-middle p-1'>
                  <p className='m-auto text-white text-lg leading-none font-bold'>.net</p>
                </div>
                <p className='text-black text-lg font-bold my-auto'>$5.95</p>
              </div>

              <div className='flex flex-1 flex-row justify-around md:justify-center align-middle gap-3 rounded-xl p-2 domainPrices'>
                <div className='w-14 h-14 rounded-full bg-cyan-500 flex justify-center align-middle p-1'>
                  <p className='m-auto text-white text-lg leading-none font-bold'>.store</p>
                </div>
                <p className='text-black text-lg font-bold my-auto'>$2.95</p>
              </div>

            </div>
        </div>
    </div>
  )
}
