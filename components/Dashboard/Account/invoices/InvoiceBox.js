import React from "react";
import useTranslation from "next-translate/useTranslation";

export default function InvoiceBox() {
  const { t } = useTranslation("common");
  return (
    <div
      className={`w-full  border-[1px] rounded-md border-dark-blue-2 py-2 my-4 min-h-[350px] flex flex-col align-middle justify-center font-poppins relative px-4 `}
    >
      <div className="mx-auto r  w-[100%]">
         <h4 className="text-center font-semibold text-md  text-dark-blue-2 capitalize">{t("No Invoices")}</h4>
         <p className="text-center text-md xs:text-sm text-dark-blue-2 opacity-70">{t("Once you have paid for something on Vercel, invoices will show up here")}</p>
      </div>
    </div>
  );
}
