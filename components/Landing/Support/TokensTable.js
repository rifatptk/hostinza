import React from 'react';
import useTranslation from "next-translate/useTranslation";


export default function TokensTable() {
  const { t } = useTranslation("common");

  return (
    <div className='bg-light-gray w-full h-auto py-24'>
        <div className='container w-full items-center mx-auto'>
            <div className='flex flex-col w-full align-middle'>
                <p className='text-gray-500 text-lg font-normal text-center font-poppins'>{t("Tokens Status")}</p>
                <h3 className='text-blue-content text-2xl md:text-4xl font-bold text-center font-poppins uppercase mt-2'>
                    <span className='text-black'>{t("All")}</span> {t("Generated Tokens")}
                </h3>
            </div>
            <div className='flex justify-center align-middle py-10 px-5'>
                {/* Table */}
                <div className="flex flex-col w-[85%] mx-auto mt-[20px] tokensTable">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden rounded-xl border border-black-100">
                                <table className="min-w-full text-center">
                                    <thead className="border-b border-fd-blue">
                                        <tr className='rounded-10'>
                                            <th scope="col" className="font-semibold text-lg text-black border-r border-fd-light-blue py-2">
                                                {t("Sr. No")}
                                            </th>
                                            <th scope="col" className="font-semibold text-lg text-black border-r border-fd-light-blue py-2">
                                                {t("Token Name")}
                                            </th>
                                            <th scope="col" className="font-semibold text-lg text-black border-r py-2">
                                                {t("Reply")}
                                            </th>
                                            <th scope="col" className="font-semibold text-lg text-black py-2">
                                                {t("Status")}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className='rounded-bl-10'>
                                        <tr className='h-12'></tr>
                                        <tr>
                                            <td className="text-base text-black font-normal whitespace-nowrap border-t border-r py-2">1</td>
                                            <td className="text-base text-black font-normal whitespace-nowrap border-t border-r py-2">{t("Issue with Domain")}</td>
                                            <td className="text-base text-black font-normal whitespace-nowrap border-t border-r py-2">{t("No")}</td>
                                            <td className="text-base text-black font-normal whitespace-nowrap border-t py-2">{t("Pending")}</td>
                                        </tr>
                                        <tr>
                                            <td className="text-base text-black font-normal whitespace-nowrap border-t border-r py-2">2</td>
                                            <td className="text-base text-black font-normal whitespace-nowrap border-t border-r py-2">{t("Help with cPanel")}</td>
                                            <td className="text-base text-black font-normal whitespace-nowrap border-t border-r py-2">{t("No")}</td>
                                            <td className="text-base text-black font-normal whitespace-nowrap border-t py-2">{t("Pending")}</td>
                                        </tr>
                                        <tr>
                                            <td className="text-base text-black font-normal whitespace-nowrap border-t border-r py-2">3</td>
                                            <td className="text-base text-black font-normal whitespace-nowrap border-t border-r py-2">{"Issue with Hosting"}</td>
                                            <td className="text-base text-black font-normal whitespace-nowrap border-t border-r py-2">{t("Yes")}</td>
                                            <td className="text-base text-black font-normal whitespace-nowrap border-t py-2">{t("Active")}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
