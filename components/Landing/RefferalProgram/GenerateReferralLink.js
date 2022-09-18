import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faXmark } from "@fortawesome/free-solid-svg-icons";
import useTranslation from "next-translate/useTranslation";

export default function GenerateReferralLink() {
  const { t } = useTranslation("common");

  const [checkedTerms, setCheckedTerms] = useState(false);
  const [showLinkModal, setShowLinkModal] = useState(false);

  return (
    <>
      <div className="bg-light-gray w-full h-auto py-24">
        <div className="container w-full items-center mx-auto">
          <div className="flex flex-col w-full align-middle">
            <p className="text-gray-500 text-lg font-normal text-center font-poppins">
              {t("Get Code")}
            </p>
            <h3 className="text-blue-content text-2xl md:text-4xl font-bold text-center font-poppins uppercase">
              <span className="text-black">{t("Generate")}</span>{" "}
              {t("Referral Link")}
            </h3>
            <div className="mt-10 flex flex-col align-middle w-full p-5 md:p-10">
              <div
                className={`w-full cursor-pointer h-24 flex rounded-xl ${
                  checkedTerms
                    ? "bg-light-blue text-white"
                    : "bg-white border text-black"
                }`}
                onClick={() => setCheckedTerms(!checkedTerms)}
              >
                <p className="text-xl font-bold text-center m-auto">
                  {checkedTerms
                    ? "You have ACCEPTED the Terms of Services!"
                    : "Click here to accept the Terms of Services"}
                </p>
              </div>
              <div className="mt-10 flex flex-col lg:flex-row w-full p-5 md:p-16 bg-gradient-to-l from-dark-blue to-light-blue rounded-xl">
                <div className="w-full lg:w-[50%]">
                  <p className="text-2xl md:text-4xl text-white font-normal">
                    {t("Give your friends")}
                  </p>
                  <h3 className="text-4xl md:text-7xl font-bold text-white mt-5">
                    {t("$100 GET $35")}
                  </h3>
                  <button
                    className="w-fit text-sm md:text-lg text-blue-content py-3 px-5 md:px-10 bg-white rounded-full mt-10"
                    onClick={() => setShowLinkModal(true)}
                  >
                    {t("Generate")}
                  </button>
                </div>
                <div className="w-full lg:w-[50%]">
                  <div className="w-[70%] md:w-[60%] h-64 relative mx-auto">
                    <Image
                      src={"/images/15.png"}
                      layout="fill"
                      alt="RefferalImage"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showLinkModal ? (
        <div className="fixed top-0 left-0 bg-[rgba(0,0,0,0.7)] w-full min-h-[100vh] z-[999]">
          <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-auto md:min-w-[50%] lg:min-w-[40%] bg-black">
            <button
              className="block ml-auto mr-3 mt-3"
              onClick={() => setShowLinkModal(false)}
            >
              <FontAwesomeIcon
                className="text-white w-[20px] top-5 right-5"
                icon={faXmark}
              />
            </button>
            <hr className="h-[1px] bg-fd-lightGray w-full mt-2"></hr>
            <div className="w-fit p-1 border-2 border-fd-light-blue rounded-[50%] mx-auto mt-10">
              <div className="p-3 bg-fd-light-blue w-fit rounded-[50%] bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="#2e3f8f"
                  width={"20px"}
                  height="20px"
                >
                  <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                </svg>
              </div>
            </div>
            <h3 className="text-white text-2xl font-bold text-center mt-5">
              {t("Generated Successfully!")}
            </h3>
            <div className="bg-white w-[90%] mx-auto py-2 rounded-xl mt-5 mb-10 flex flex-row align-middle justify-between px-2">
              <p className="text-lg font-normal text-center text-blue-content">
                https://www.hostinza.com/refferal/user123
              </p>
              <FontAwesomeIcon
                className="my-auto cursor-pointer"
                color="black"
                icon={faCopy}
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
