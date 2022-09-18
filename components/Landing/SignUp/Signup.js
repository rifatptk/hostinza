import React from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

export default function Signup() {
  const { t } = useTranslation("common");
  return (
    <div className="bg-white w-full h-auto py-20">
      <div className="container w-full mx-auto items-center">
        <div className="flex flex-wrap w-full md:w-[85%] mx-auto align-middle justify-center min-h-screen border border-black-100 shadow-contact-card">
          <div className="flex flex-col w-full md:w-[50%] h-auto align-middle p-5 md:p-10">
            <h2 className="text-xl font-semibold text-center text-blue-content">
              {t("Sign Up for an Account")}
            </h2>
            <p className="text-sm text-black font-normal mt-2">
              {t("Let")}&apos;
              {t(
                "s get you all setup so you can start creating your first onboarding experience"
              )}
            </p>
            <div className="flex flex-wrap align-middle justify-between w-full mx-auto mt-5 p-5 gap-5">
              <div className="w-full md:w-[47%]">
                <label className="text-black text-base font-medium text-start">
                  {t("First Name")}
                </label>
                <input
                  className="w-full bg-white border border-black-100 outline-none leading-relaxed h-12 rounded-xl px-5 shadow-contact-card mt-3"
                  placeholder="Your First name"
                  type={"text"}
                />
              </div>
              <div className="w-full md:w-[47%]">
                <label className="text-black text-base font-medium text-start">
                  {t("Last Name")}
                </label>
                <input
                  className="w-full bg-white border border-black-100 outline-none leading-relaxed h-12 rounded-xl px-5 shadow-contact-card mt-3"
                  placeholder="Your Last name"
                  type={"text"}
                />
              </div>
              <div className="w-full">
                <label className="text-black text-base font-medium text-start">
                  {t("Username")}
                </label>
                <input
                  className="w-full bg-white border border-black-100 outline-none leading-relaxed h-12 rounded-xl px-5 shadow-contact-card mt-3"
                  placeholder="Enter your username"
                  type={"text"}
                />
              </div>
              <div className="w-full">
                <label className="text-black text-base font-medium text-start">
                  {t("Email")}
                </label>
                <input
                  className="w-full bg-white border border-black-100 outline-none leading-relaxed h-12 rounded-xl px-5 shadow-contact-card mt-3"
                  placeholder="Enter your email"
                  type={"email"}
                />
              </div>
              <div className="w-full">
                <label className="text-black text-base font-medium text-start">
                  {t("Password")}
                </label>
                <input
                  className="w-full bg-white border border-black-100 outline-none leading-relaxed h-12 rounded-xl px-5 shadow-contact-card mt-3"
                  placeholder="Enter your password"
                  type={"password"}
                />
              </div>
              <div className="w-full">
                <label className="text-black text-base font-medium text-start">
                  {t("Confirm Password")}
                </label>
                <input
                  className="w-full bg-white border border-black-100 outline-none leading-relaxed h-12 rounded-xl px-5 shadow-contact-card mt-3"
                  placeholder="Enter your password"
                  type={"password"}
                />
              </div>
              <div className="w-full">
                <label className="text-black text-base font-medium text-start">
                  {t("Account Type")}
                </label>
                <fieldset
                  className="flex justify-start align-middle gap-3 mt-2"
                  id="signupAccountType"
                >
                  <div className="flex w-fit align-middle">
                    <input
                      className="my-auto mr-1"
                      type={"radio"}
                      placeholder="Individual"
                      name="signupAccountType"
                    />
                    <label className="text-black text-sm font-normal text-start">
                      {t("Individual")}
                    </label>
                  </div>
                  <div className="flex w-fit align-middle">
                    <input
                      className="my-auto mr-1"
                      type={"radio"}
                      placeholder="Individual"
                      name="signupAccountType"
                    />
                    <label className="text-black text-sm font-normal text-start">
                      {t("Business")}
                    </label>
                  </div>
                </fieldset>
              </div>
              <div className="w-full flex">
                <input className="w-3 h-3 mr-2 my-auto" type={"checkbox"} />
                <label className="text-gray-500 text-sm font-normal text-start">
                  {t("I accept Hostinza")}&apos;s{" "}
                  <a href="#" className="text-blue-content font-bold">
                    {t("Terms")} &#38; {t("Conditions")}
                  </a>
                </label>
              </div>
              <button className="text-white uppercase bg-light-blue w-full text-lg h-12 rounded-xl">
                {t("Sign Up")}
              </button>
            </div>
          </div>
          <div className="hidden md:flex flex-col w-[50%] h-auto align-middle p-5 md:p-10">
            <div className="w-[75%] h-[320px] relative mx-auto mt-auto">
              <Image
                src={"/images/signup.svg"}
                alt="SignUpWallpaper"
                layout="fill"
              />
            </div>
            <p className="font-semibold text-light-blue text-base text-center mt-5">
              {t("Or Sign Up Using")}
            </p>
            <div className="flex flex-wrap justify-center align-middle w-full gap-3 mt-3 mb-auto">
              <div className="w-7 h-7 relative">
                <Image
                  src={"/images/search.png"}
                  alt="SignUpGoogle"
                  layout="fill"
                />
              </div>
              <div className="w-7 h-7 relative">
                <Image
                  src={"/images/facebook.png"}
                  alt="SignUpFacebook"
                  layout="fill"
                />
              </div>
              <div className="w-7 h-7 relative">
                <Image
                  src={"/images/apple.png"}
                  alt="SignUpApple"
                  layout="fill"
                />
              </div>
              <div className="w-7 h-7 relative">
                <Image
                  src={"/images/linkedin.png"}
                  alt="SignUpLinkedIn"
                  layout="fill"
                />
              </div>
              <div className="w-7 h-7 relative">
                <Image
                  src={"/images/twitter.png"}
                  alt="SignUpTwitter"
                  layout="fill"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
