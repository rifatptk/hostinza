import React, { useState } from "react";
import { PaymentModel } from "./Model";
import useTranslation from "next-translate/useTranslation";

export default function PaymentBox() {

    const { t } = useTranslation("common");
    const [state,setstate] = useState(false)

  return (
    <div className="w-[100%] border-[1px] border-dark-blue-2 my-6    rounded-md  ">
        <PaymentModel state={state} setstate={setstate}/>
      <div className={`w-full py-1 font-poppins relative px-6`}>
        <div className=" py-2">
          <h5 className="text-dark-blue-2 text-lg font-semibold py-2">
            {t("Payment Method")}
          </h5>
          <p className="text-dark-blue-2 text-md opacity-70 pb-2 pt-1">
          {t("You have not yet added any cards, Click the button below to add one")}
          </p>
        </div>
      </div>
      <div className=" w-full border-t-[1px] border-dark-blue-2 mt-3  px-6 py-4 flex align-middle justify-between xs:flex-col xs:mx-auto">
        <p className="text-sm text-dark-blue-2 font-medium self-center xs:text-center">
        {t("At most, three credit cards, debit cards or prepaid cards can be added")}
        </p>
        <button onClick={() => setstate(true)} className="bg-dark-blue-2 py-[7px] w-[140px] border-[2px] border-dark-blue-2 hover:scale-[1.03] hover:shadow-sm hover:bg-transparent group text-dark-blue-2 text-sm  rounded  transition duration-200 mr-2 xs:mx-auto xs:my-2 xs:w-[180px]">
          <span className="text-white  ml-2  text-sm mx-auto group-hover:text-dark-blue-2">
          {t("Add New Card")}
          </span>
        </button>
      </div>
    </div>
  );
}
