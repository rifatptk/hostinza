import React from 'react';
import useTranslation from "next-translate/useTranslation";

export default function BoxHeader(){
    const { t } = useTranslation("common");
    return(
        <div className='w-[100%]'>
           <div className='my-4'>
              <h1 className='text-2xl font-semibold text-dark-blue-2 xs:text-xl xs:ml-1'>{t("Login Connections")}</h1>
              <p className='text-md text-dark-blue-2 my-5 xs:text-sm xs:ml-1'>{t("Connect your Personal Account on Vercel with a third-party service to use it for login")} {t("One Login Connection can be added per third-party service")}</p>
           </div>
        </div>
    )
}