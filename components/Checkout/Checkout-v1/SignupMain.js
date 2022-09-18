import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarth,
  faEnvelope,
  faHome,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import CheckoutHero from "./CheckoutHero";

export default function SignupMain({clickCheckout, clickCheckoutBack}) {
  const { t } = useTranslation("common");
  return (
    <>
      <div className="bg-white w-full h-auto ">
        <div className="container w-full items-center mx-auto">
          <div className="flex justify-center align-middle w-full h-full py-20">
            <div className="w-full md:w-[60%] h-fit flex flex-col align-middle  rounded-md m-auto shadow-contact-card p-5 md:p-10">
              <h2 className='text-blue-content text-[1.5rem] font-semibold text-center'>
                {t("Owner Details")}
              </h2>
              <div className="flex flex-wrap align-middle justify-between w-full mx-auto mt-5 gap-5">
                <div className="w-full md:w-[48%] h-fit px-3 md:px-5  rounded-xl border border-black-100 flex justify-between">
                  <input
                    className="w-[90%] bg-white text-black outline-none leading-relaxed h-12 md:h-14 text-sm md:text-base rounded-xl"
                    placeholder="Full Name"
                    type={"text"}
                  />
                  <FontAwesomeIcon
                    className="my-auto text-gray-500"
                    icon={faUser}
                  />
                </div>
                <div className="w-full md:w-[48%] h-fit px-3 md:px-5  rounded-xl border border-black-100 flex justify-between">
                  <input
                    className="bg-white text-black outline-none leading-relaxed h-12 md:h-14 text-sm md:text-base rounded-xl"
                    placeholder="Username"
                    type={"text"}
                  />
                  <FontAwesomeIcon
                    className="my-auto text-gray-500"
                    icon={faUser}
                  />
                </div>
                <div className="w-full md:w-[48%] h-fit px-3 md:px-5  rounded-xl border border-black-100 flex justify-between">
                  <input
                    className="bg-white text-black outline-none leading-relaxed h-12 md:h-14 text-sm md:text-base rounded-xl"
                    placeholder="Email"
                    type={"email"}
                  />
                  <FontAwesomeIcon
                    className="my-auto text-gray-500"
                    icon={faEnvelope}
                  />
                </div>
                <div className="w-full md:w-[48%] h-fit px-3 md:px-5  rounded-xl border border-black-100 flex justify-between">
                  <input
                    className="bg-white text-black outline-none leading-relaxed h-12 md:h-14 text-sm md:text-base rounded-xl"
                    placeholder="Phone"
                    type={"number"}
                  />
                  <FontAwesomeIcon
                    className="my-auto text-gray-500"
                    icon={faPhone}
                  />
                </div>
                <div className="w-full h-fit px-3 md:px-5 rounded-xl border border-black-100 flex justify-between relative">
                  <input
                    className="bg-white text-black outline-none leading-relaxed h-12 md:h-14 text-sm md:text-base rounded-xl"
                    placeholder="Country"
                    type={"text"}
                  />
                  <FontAwesomeIcon
                    className="z-[0] absolute my-auto top-[35%] right-[5%] text-gray-500"
                    icon={faEarth}
                  />
                </div>
                <div className="w-full md:w-[48%] h-fit px-3 md:px-5  rounded-xl border border-black-100 flex justify-between">
                  <input
                    className="bg-white text-black outline-none leading-relaxed h-12 md:h-14 text-sm md:text-base rounded-xl"
                    placeholder="Address"
                    type={"text"}
                  />
                  <FontAwesomeIcon
                    className="my-auto text-gray-500"
                    icon={faHome}
                  />
                </div>
                <div className="w-full md:w-[48%] h-fit px-3 md:px-5  rounded-xl border border-black-100 flex justify-between relative">
                  <input
                    className="bg-white text-black outline-none leading-relaxed h-12 md:h-14 text-sm md:text-base rounded-xl"
                    placeholder="City"
                    type={"text"}
                  />
                </div>
                <div className="w-full md:w-[48%] h-fit px-3 md:px-5  rounded-xl border border-black-100 flex justify-between">
                  <input
                    className="bg-white text-black outline-none leading-relaxed h-12 md:h-14 text-sm md:text-base rounded-xl"
                    placeholder="State"
                    type={"text"}
                  />
                </div>
                <div className="w-full md:w-[48%] h-fit px-3 md:px-5  rounded-xl border border-black-100 flex justify-between">
                  <input
                    className="bg-white text-black outline-none leading-relaxed h-12 md:h-14 text-sm md:text-base rounded-xl"
                    placeholder="Zip Code"
                    type={"number"}
                  />
                </div>
                <div className="flex flex-wrap align-middle justify-between w-full mx-auto mt-5 gap-3 md:gap-5">
                  <div className="w-full">
                <h2 className='text-blue-content text-[1.5rem] font-semibold text-center mb-2'>Billing Details</h2>
                    <input
                      className="w-full bg-white border border-black-100 outline-none leading-relaxed h-12 md:h-14 rounded-xl text-sm md:text-base px-3 md:px-5  mt-1 md:mt-3"
                      placeholder="Your name"
                      type={"text"}
                    />
                  </div>
                  <div className="w-full">
           
                    <input
                      className="w-full bg-white border border-black-100 outline-none leading-relaxed h-12 md:h-14 rounded-xl text-sm md:text-base px-3 md:px-5  mt-1 md:mt-3"
                      placeholder="Address"
                      type={"text"}
                    />
                  </div>
                  <div className="w-full md:w-[48%]">
         
                    <input
                      className="w-full bg-white border border-black-100 outline-none leading-relaxed h-12 md:h-14 rounded-xl text-sm md:text-base px-3 md:px-5  mt-1 md:mt-3"
                      placeholder="City"
                      type={"text"}
                    />
                  </div>
                  <div className="w-full md:w-[48%]">
               
                    <input
                      className="w-full bg-white border border-black-100 outline-none leading-relaxed h-12 md:h-14 rounded-xl text-sm md:text-base px-3 md:px-5  mt-1 md:mt-3"
                      placeholder="Zip Code"
                      type={"number"}
                    />
                  </div>
                  <div className="w-full">
             
                    <div className="w-full mt-1 md:mt-3 h-fit text-sm md:text-base px-3 md:px-5  rounded-xl border border-black-100 flex justify-between relative">
                      <input
                        className="bg-white text-black outline-none leading-relaxed h-12 md:h-14 text-sm md:text-base rounded-xl"
                        placeholder="Country"
                        type={"text"}
                      />
                      <FontAwesomeIcon
                        className="z-[0] absolute my-auto top-[35%] right-[5%] text-gray-500"
                        icon={faEarth}
                      />
                    </div>
                  </div>
                </div>
                <p className="w-full mt-5 text-xs md:text-sm text-gray-500 leading-normal">
                  {t(
                    "The data you provide now will help us deliver, develope and promote our products. Placing an order indicates your consent to having your data  used by our company. Please read your data protection rights"
                  )}{" "}
                  <a className="font-bold text-light-blue cursor-pointer">
                    {t("here.")}
                  </a>
                </p>
                <button onClick={clickCheckout} className="w-full text-sm md:text-lg text-white py-3 px-5 md:px-10 bg-light-blue border-2 border-light-blue rounded-lg mx-auto mt-5 font-normal">
                  {t("Confirm")}
                </button>
                <button onClick={clickCheckoutBack} className="w-full text-sm md:text-lg text-light-blue py-3 px-5 md:px-10 border-2 border-light-blue rounded-lg mx-auto  font-normal">
                  {t("← Go Back")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
