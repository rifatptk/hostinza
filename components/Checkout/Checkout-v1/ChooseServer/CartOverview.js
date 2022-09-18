import React from 'react'
import useTranslation from "next-translate/useTranslation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faCartShopping, faCheck, faCircleInfo, faDollar, faFile, faPercent, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function CartOverview() {
    const { t } = useTranslation("common");


  return (
    <div className='flex flex-col top-0 sm:!sticky static'>
    <div className='w-full mx-auto p-5 border border-black-100 rounded-xl mt-12 md:mt-[135px] !bg-white shadow-md'>
        <p className='text-xs'>{t("All services include a domain even when you renew.")}</p>
        <hr className='h-[1px] border-none bg-gray-300 my-2'></hr>
        <div className='w-full flex flex-row justify-between align-middle'>
            <span className='text-xs font-medium text-black w-[65%]'>{t(".myDomain.com")}</span>
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
    <div className='w-full flex justify-between align-middle mx-auto p-5 border border-black-100 rounded-xl mt-5  '>
        <FontAwesomeIcon className='my-auto mr-2' icon={faPercent} />
        <span className='text-[10px]'>
            <p className='text-[10px]'>{t("Do you have a discount code?")}</p>
            <p>{t("Great! Keep it ready to enter in the payment page to get your discount!")}</p>
        </span>
    </div>
</div>
  )
}
