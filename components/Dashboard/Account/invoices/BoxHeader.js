import React from 'react';
import useTranslation from "next-translate/useTranslation";

export default function BoxHeader(){
    const { t } = useTranslation("common");
    return(
        <div className='w-[100%]'>
           <div className='my-4'>
              <h1 className='text-2xl font-semibold text-dark-blue-2 xs:ml-1'>{t("Invoices")}</h1>
           </div>
        </div>
    )
}