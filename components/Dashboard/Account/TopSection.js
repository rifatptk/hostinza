import React from "react";
import Link from 'next/link'
import useTranslation from "next-translate/useTranslation";
import {useRouter} from "next/router";

export default function TopSection(){

    const route = useRouter()
    const { t } = useTranslation("account");
    return(
        <div className="w-full xs:border-b-[0px] border-b-[1px] border-gray-300 pb-10 pt-5 xs:pb-2 xs:pt-3 font-poppins">
        <div className="maincontainer mx-auto">
                <div>
                    <h1 className="text-3xl font-semibold text-dark-blue-2 xs:ml-3 xs:text-2xl">{t("Personal Account")}</h1>
                </div>
                {route.pathname !== '/account' && (
                <div>
                    <Link href="/account">
                    <p className="text-sm mt-4 text-dark-blue-2 opacity-75 xs:ml-3 hidden xs:block">{'<-'} {t("Account Settings")} </p>
                    </Link>
                </div>
                )}
        </div>
        </div>
    )
}
