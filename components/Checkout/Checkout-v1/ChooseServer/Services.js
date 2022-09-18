import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faArrowDown,
  faCartShopping,
  faCheck,
  faCircleInfo,
  faDollar,
  faFile,
  faPercent,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  const [showDomainReg, setShowDomainReg] = useState(true);
  const [showHostingPlans, setShowHostingPlans] = useState(true);
  const [showWebsitePlans, setShowWebsitePlans] = useState(true);
  const [showOnlineShop, setShowOnlineShop] = useState(true);

  return (
    <div className="w-full flex flex-col align-top mt-20">
      <link
        rel="stylesheet"
        href="https://unpkg.com/flowbite@1.5.1/dist/flowbite.min.css"
      />

      {/* Domain Registration */}
      <div className="flex flex-row  justify-start items-center gap-3 mb-5 ml-1">
        <span className="px-3 py-1 text-[0.9rem] font-semibold">WWW</span>
        <button
          className="px-3 py-1 w-fit border rounded-md border-black-100 text-gray-600 font-bold"
          onClick={() => setShowDomainReg(!showDomainReg)}
        >
          {showDomainReg ? "-" : "+"}
        </button>
        <p className="my-auto text-lg md:text-xl font-medium text-black uppercase">
          Domain Registration
        </p>
      </div>
      <fieldset
        id="checkDomainReg"
        className={showDomainReg ? "block" : "hidden"}
      >
        <div
          className=" p-3 bg-white rounded-lg"
          id="web-hosting"
          role="tabpanel"
          aria-labelledby="hosting"
        >
          <ul className="grid gap-6 w-full ">
            {/* domain */}
            <li>
              <input
                type="radio"
                id="domain-reg"
                name="hosting"
                value="domain-reg"
                className="hidden peer"
              />
              <label
                htmlFor="domain-reg"
                className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
              >
                <div className="block">
                  <h1 className="w-full text-[1.3rem] font-semibold">Domain</h1>
                  <p className="text-[0.8rem] pb-4">
                    Register the right domain and protect your identity online.
                  </p>
                  <span className="text-[0.7rem] !pt-2">
                    <strong className="text-[1.2rem]">$38.99</strong> + VAT/1st
                    year
                  </span>
                  <div className="mt-5 flex flex-wrap">
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      DOMAIN
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      SWITE WEBSITE
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      DNS/REDIRECT
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      DNS/REDIRECT
                    </span>
                  </div>
                </div>
              </label>
            </li>
            {/* domain with email */}
            <li>
              <input
                type="radio"
                id="domain-email"
                name="hosting"
                value="domain-email"
                className="hidden peer"
              />
              <label
                htmlFor="domain-email"
                className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
              >
                <div className="block">
                  <h1 className="w-full text-[1.3rem] font-semibold">
                    Domain With Email
                  </h1>
                  <p className="text-[0.8rem] pb-4">
                    Choose and protect your domain name. Professional and
                    distinctive email.
                  </p>
                  <span className="text-[0.7rem] !pt-2">
                    <strong className="text-[1.2rem]">$55.99</strong> + VAT/1st
                    year
                  </span>
                  <div className="mt-5 flex flex-wrap">
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      DOMAIN
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      SWITE WEBSITE
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      DNS/REDIRECT
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      WEBMAIL
                    </span>
                  </div>
                </div>
              </label>
            </li>
          </ul>
        </div>
      </fieldset>

      {/* Hosting Plans */}
      <div className="flex flex-row  justify-start items-center gap-3 my-5 ml-1">
        <span className="px-3 py-1 text-[1.4rem]">
          <FontAwesomeIcon icon={faDollar} />
        </span>
        <button
          className="px-3 py-1 w-fit border rounded-md border-black-100 text-gray-600 font-bold"
          onClick={() => setShowHostingPlans(!showHostingPlans)}
        >
          {showHostingPlans ? "-" : "+"}
        </button>
        <p className="my-auto text-lg md:text-xl font-medium text-black uppercase">
          Hosting Plans
        </p>
      </div>
      <fieldset
        id="checkDomainReg"
        className={showHostingPlans ? "block" : "hidden"}
      >
        <div
          className=" p-3 bg-white rounded-lg"
          id="web-hosting"
          role="tabpanel"
          aria-labelledby="hosting"
        >
          <ul className="grid gap-6 w-full ">
            {/* basic hosting */}
            <li>
              <input
                type="radio"
                id="basic-hosting"
                name="hosting"
                value="basic-hosting"
                className="hidden peer"
              />
              <label
                htmlFor="basic-hosting"
                className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
              >
                <div className="block">
                  <h1 className="w-full text-[1.3rem] font-semibold">
                    Basic Hosting
                  </h1>
                  <p className="text-[0.8rem] pb-4">
                    Basic solution with extensive freedom to customize. You add
                    the services you need!
                  </p>
                  <span className="text-[0.7rem] !pt-2">
                    <strong className="text-[1.2rem]">$38.99</strong> + VAT/1st
                    year
                  </span>
                  <div className="mt-5 flex flex-wrap">
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      DOMAIN
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      DV SSL
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      UNLIMITED WEB SPACE
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      BACKUPS
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      FASTER WEBSITE
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      5 X 1GB EMAILS
                    </span>
                  </div>
                </div>
              </label>
            </li>
            {/* Easy Hosting */}
            <li>
              <input
                type="radio"
                id="easy-hosting"
                name="hosting"
                value="easy-hosting"
                className="hidden peer"
              />
              <label
                htmlFor="easy-hosting"
                className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
              >
                <div className="block">
                  <h1 className="w-full text-[1.3rem] font-semibold">
                    Easy Hosting
                  </h1>
                  <p className="text-[0.8rem] pb-4">
                    Start creating your website now, with Database and unlimited
                    email accounts.
                  </p>
                  <span className="text-[0.7rem] !pt-2">
                    <strong className="text-[1.2rem]">$55.99</strong> + VAT/1st
                    year
                  </span>
                  <div className="mt-5 flex flex-wrap">
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      DOMAIN
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      DV SSL
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      UNLIMITED WEB SPACE
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      BACKUPS
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      FASTER WEBSITE
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      5 MYSQL DATABASES + BACKUP
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      OVER 200 FREE APPS
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      UNLIMITED 1GB EMAIL ACCOUNTS
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      10 GIGAMAILS
                    </span>
                  </div>
                </div>
              </label>
            </li>
            {/* Advance Hosting */}
            <li>
              <input
                type="radio"
                id="advance-hosting"
                name="hosting"
                value="advance-hosting"
                className="hidden peer"
              />
              <label
                htmlFor="advance-hosting"
                className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
              >
                <div className="block">
                  <h1 className="w-full text-[1.3rem] font-semibold">
                    Advance Hosting
                  </h1>
                  <p className="text-[0.8rem] pb-4">
                    All the benefits of Easy Hosting with more space for your
                    professional email.
                  </p>
                  <span className="text-[0.7rem] !pt-2">
                    <strong className="text-[1.2rem]">$70.99</strong> + VAT/1st
                    year
                  </span>
                  <div className="mt-5 flex flex-wrap">
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      DOMAIN
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      DV SSL
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      UNLIMITED WEB SPACE
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      BACKUPS
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      FASTER WEBSITE
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      5 MYSQL DATABASES + BACKUP
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      OVER 200 FREE APPS
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      UNLIMITED 1GB EMAIL ACCOUNTS
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      20 GIGAMAILS
                    </span>
                  </div>
                </div>
              </label>
            </li>
            {/* Professional Hosting */}
            <li>
              <input
                type="radio"
                id="professional-hosting"
                name="hosting"
                value="professional-hosting"
                className="hidden peer"
              />
              <label
                htmlFor="professional-hosting"
                className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
              >
                <div className="block">
                  <h1 className="w-full text-[1.3rem] font-semibold">
                    Professional Hosting
                  </h1>
                  <p className="text-[0.8rem] pb-4">
                    The professional web space: comprehensive solution with 10
                    PEC domain email accounts.
                  </p>
                  <span className="text-[0.7rem] !pt-2">
                    <strong className="text-[1.2rem]">$101.99</strong> + VAT/1st
                    year
                  </span>
                  <div className="mt-5 flex flex-wrap">
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      DOMAIN
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      DV SSL
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      UNLIMITED WEB SPACE
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      BACKUPS
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      FASTER WEBSITE
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      5 MYSQL DATABASES + BACKUP
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      OVER 200 FREE APPS
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      UNLIMITED 1GB EMAIL ACCOUNTS
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      30 GIGAMAILS
                    </span>
                  </div>
                </div>
              </label>
            </li>
          </ul>
        </div>
      </fieldset>

      {/* Website */}
      <div className="flex flex-row items-center justify-start gap-3 my-5 ml-0.5">
        <span className="px-3 py-1 text-[1.1rem]">
          <FontAwesomeIcon icon={faDesktop} />
        </span>
        <button
          className="px-3 py-1 w-fit border rounded-md border-black-100 text-gray-600 font-bold"
          onClick={() => setShowWebsitePlans(!showWebsitePlans)}
        >
          {showWebsitePlans ? "-" : "+"}
        </button>
        <p className="my-auto text-lg md:text-xl font-medium text-black uppercase">
          Website
        </p>
      </div>
      <fieldset
        id="checkDomainReg"
        className={showWebsitePlans ? "block" : "hidden"}
      >
        <div
          className="p-3 bg-white rounded-lg dark:bg-gray-800"
          id="website-builders"
          role="tabpanel"
          aria-labelledby="website-builders-tab"
        >
          <ul className="grid gap-6 w-full ">
            {/* SuperSite Easy */}
            <li>
              <input
                type="radio"
                id="super-easy-hosting"
                name="hosting"
                value="super-easy-hosting"
                className="hidden peer"
              />
              <label
                htmlFor="super-easy-hosting"
                className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
              >
                <div className="block">
                  <h1 className="w-full text-[1.3rem] font-semibold">
                    SuperSite Easy
                  </h1>
                  <p className="text-[0.8rem] pb-4">
                    Choose the theme, upload content and create your website,
                    even from your phone.
                  </p>
                  <span className="text-[0.7rem] !pt-2">
                    <strong className="text-[1.2rem]">$49.99</strong> + VAT/1st
                    year
                  </span>
                  <div className="mt-5 flex flex-wrap">
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      DOMAIN
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      DV SSL
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      BLOG
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      CUSTOMIZABLE DESIGN
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      PREEXISTING THEMES
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      OPTIMIZED FOR MOBILE DEVICES
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      SEO
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      CREATION WIZARD
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      5 X 1GB EMAILS
                    </span>
                  </div>
                </div>
              </label>
            </li>
            {/* wordpress hosting */}
            <li>
              <input
                type="radio"
                id="wordpress-hosting"
                name="hosting"
                value="wordpress-hosting"
                className="hidden peer"
              />
              <label
                htmlFor="wordpress-hosting"
                className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
              >
                <div className="block">
                  <h1 className="w-full text-[1.3rem] font-semibold">
                    Wordpress Hosting
                  </h1>
                  <p className="text-[0.8rem] pb-4">
                    Basic solution for creating, configuring and updating your
                    website yourself with Wordpress.
                  </p>
                  <span className="text-[0.7rem] !pt-2">
                    <strong className="text-[1.2rem]">$33.99</strong> + VAT/1st
                    year
                  </span>
                  <div className="mt-5 flex flex-wrap">
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      DOMAIN
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      DV SSL
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      UNLIMITED WEB SPACE
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      BACKUP EVERY 7 DAYS
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      FASTER WEBSITE
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      1 MYSQL DATABASES + BACKUP
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      MALWARE DETECTION
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      5 X 1GB EMAILS
                    </span>
                  </div>
                </div>
              </label>
            </li>
          </ul>
        </div>
      </fieldset>

      {/* Online Shop */}
      <div className="flex flex-row align-middle justify-start gap-3 my-5 ml-0.5">
        <span className="px-3 py-1 text-[1.15rem]">
          <FontAwesomeIcon icon={faCartShopping} />
        </span>
        <button
          className="px-3 py-1 w-fit border rounded-md border-black-100 text-gray-600 font-bold"
          onClick={() => setShowOnlineShop(!showOnlineShop)}
        >
          {showOnlineShop ? "-" : "+"}
        </button>
        <p className="my-auto text-lg md:text-xl font-medium text-black uppercase">
          Online Shop
        </p>
      </div>
      <fieldset
        id="checkDomainReg"
        className={showOnlineShop ? "block" : "hidden"}
      >
        <div
          className="p-3 bg-white rounded-lg dark:bg-gray-800"
          id="website-builders"
          role="tabpanel"
          aria-labelledby="website-builders-tab"
        >
          <ul className="grid gap-6 w-full ">
            {/* supersite pro */}
            <li>
              <input
                type="radio"
                id="super-site-pro-hosting"
                name="hosting"
                value="super-site-pro-hosting"
                className="hidden peer"
              />
              <label
                htmlFor="super-site-pro-hosting"
                className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
              >
                <div className="block">
                  <h1 className="w-full text-[1.3rem] font-semibold">
                    SuperSite Professional
                  </h1>
                  <p className="text-[0.8rem] pb-4">
                    The most comprehensive version of SuperSite with
                    multilingual website and e-commerce form.
                  </p>
                  <span className="text-[0.7rem] !pt-2">
                    <strong className="text-[1.2rem]">$99.99</strong> + VAT/1st
                    year
                  </span>
                  <div className="mt-5 flex flex-wrap">
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      DOMAIN
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      DV SSL
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      BLOG
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      CUSTOMIZABLE DESIGN
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      PREEXISTING THEMES
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      OPTIMIZED FOR MOBILE DEVICES
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      ADVANCED FEATURES
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      E-COMMERCE 1000 PRODUCTS
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      BOOKING ONLINE
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      CREATION WIZARD
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      MULTILINGUAL WEBSITE
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      5 X 1GB EMAILS
                    </span>
                  </div>
                </div>
              </label>
            </li>
            {/* Managed WooCommerce Hosting */}
            <li>
              <input
                type="radio"
                id="woocomm-hosting"
                name="hosting"
                value="woocomm-hosting"
                className="hidden peer"
              />
              <label
                htmlFor="woocomm-hosting"
                className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
              >
                <div className="block">
                  <h1 className="w-full text-[1.3rem] font-semibold">
                    Managed WooCommerce Hosting
                  </h1>
                  <p className="text-[0.8rem] pb-4">
                    Top performance for your professional website, with all the
                    benefits of a managed service
                  </p>
                  <span className="text-[0.7rem] !pt-2">
                    <strong className="text-[1.2rem]">$70.99</strong> + VAT/1st
                    year
                  </span>
                  <div className="mt-5 flex flex-wrap">
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      DOMAIN
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      DV SSL
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      UNLIMITED WEB SPACE
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      BACKUP EVERY 7 DAYS
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      FASTER WEBSITE
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      1 MYSQL DATABASES + BACKUP
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      AUTOMATIC UPDATES
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      OPTIMIZED PLATFORM
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      STAGING
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      UNLIMITED E-COMMERCE
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      ORDER MONITORING
                    </span>
                    <span className="bg-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-2 rounded">
                      UNLIMITED 1GB EMAIL ACCOUNTS
                    </span>
                  </div>
                </div>
              </label>
            </li>
          </ul>
        </div>
      </fieldset>
    </div>
  );
}
