import Link from 'next/link'
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

export default function SettingsSideBar(){

    const { t } = useTranslation("common");
    const route = useRouter();
    return(
        <aside>
        <div className="w-60 h-full px-1">
            <ul className="relative">
                <div className={route.pathname == "/dashboard/settings" ? 'bg-gray-200 rounded-md' : ''}>
                <Link href={"/dashboard/settings"} >
                    <li className="relative">
                        <a
                            className="flex items-center py-2 px-3 h-10 overflow-hidden text-gray-500 text-ellipsis font-normal whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-200 transition duration-300 ease-in-out"
                            href="#">
                            {t("General")}
                        </a>
                    </li>
                </Link>
                </div>
                <li className="relative">
                    <a
                        className="flex items-center py-2 px-3 h-10 overflow-hidden text-gray-500 text-ellipsis font-normal whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-200 transition duration-300 ease-in-out"
                        href="#">
                        {t("Domains")}
                    </a>
                </li>
                <li className="relative">
                    <a
                        className="flex items-center py-2 px-3 h-10 overflow-hidden text-gray-500 text-ellipsis font-normal whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-200 transition duration-300 ease-in-out"
                        href="#">
                        {t("Integrations")}
                    </a>
                </li>
                <div className={route.pathname == "/dashboard/settings/git" ? 'bg-gray-200 rounded-md' : ''}>
                <Link href={"/dashboard/settings/git"} >
                <li className="relative">
                    <a
                        className="flex items-center py-2 px-3 h-10 overflow-hidden text-gray-500 text-ellipsis font-normal whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-200 transition duration-300 ease-in-out"
                        href="#">
                        Git
                    </a>
                </li>
                </Link>
                </div>
                <li className="relative">
                    <a
                        className="flex items-center py-2 px-3 h-10 overflow-hidden text-gray-500 text-ellipsis font-normal whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-200 transition duration-300 ease-in-out"
                        href="#">
                        Serverless Functions
                    </a>
                </li>
                <div className={route.pathname == "/dashboard/settings/environmentVariable" ? 'bg-gray-200 rounded-md' : ''}>
                <Link href="/dashboard/settings/environmentVariable">
                <li className="relative">
                    <a
                        className="flex items-center py-2 px-3 h-10 overflow-hidden text-gray-500 text-ellipsis font-normal whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-200 transition duration-300 ease-in-out"
                        href="#">
                        {t("Environment Variables")}
                    </a>
                </li>
                </Link>
                </div>
                <li className="relative">
                    <a
                        className="flex items-center py-2 px-3 h-10 overflow-hidden text-gray-500 text-ellipsis font-normal whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-200 transition duration-300 ease-in-out"
                        href="#">
                        {t("Security")}
                    </a>
                </li>
                <li className="relative">
                    <a
                        className="flex items-center py-2 px-3 h-10 overflow-hidden text-gray-500 text-ellipsis font-normal whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-200 transition duration-300 ease-in-out"
                        href="#">
                        {t("Advanced")}
                    </a>
                </li>
            </ul>
        </div>
    </aside>
    )
}