import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faCartShopping,
  faCheck,
  faCircleInfo,
  faDollar,
  faFile,
  faPercent,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

import DomainCard from "./DomainCard";

export default function ChooseServer() {
  const { t } = useTranslation("common");

  const [showDomainReg, setShowDomainReg] = useState(true);
  const [showHostingPlan, setShowHostingPlan] = useState(true);
  const [showWebsite, setShowWebsite] = useState(true);
  const [showOnlineShop, setShowOnlineShop] = useState(true);

  return (
    <div className="bg-white w-full h-auto py-20">
      <div className="container w-full items-center mx-auto">
        <p className="text-gray-500 text-lg font-normal text-start font-poppins">
          {t("Choose a service for")}
        </p>
        <h3 className="text-blue-content text-2xl md:text-4xl font-bold text-start font-poppins mt-2">
          {t("myDomain.com")}
        </h3>
        <div className="flex flex-wrap justify-center align-top gap-5">
          <div className="w-full md:w-[77%] flex flex-col align-middle order-2 md:order-1">
            {/* ----------------------------------- Domain registration --------------------------------------- */}
            <div className="w-full flex flex-col align-top mt-20 pb-10 border-b-2 border-gray-100">
              <div className="flex flex-row align-middle justify-between gap-3">
                <div className="flex gap-2">
                  <span className="px-3 py-1 my-auto border border-black-100 text-base h-fit">
                    {t("www")}
                  </span>
                  <p className="my-auto text-lg md:text-xl font-medium text-black uppercase">
                    {t("Domain Registration")}
                  </p>
                </div>
                <button
                  className="px-3 py-1 my-auto border border-black-100 text-base h-fit font-bold"
                  onClick={() => setShowDomainReg(!showDomainReg)}
                >
                  {showDomainReg ? "-" : "+"}
                </button>
              </div>
              <fieldset
                id="checkDomainReg"
                className={showDomainReg ? "block" : "hidden"}
              >
                <DomainCard
                  domainName="Domain"
                  domainInfo="Register the right domain and protect your identity online."
                  domainPrice="$12.99"
                  renewalPrice="$10.99"
                  domainTags={["Domain", "Swift website", "DNS/Redirect"]}
                  badge="true"
                />
                <DomainCard
                  domainName="Domain with Email"
                  domainInfo="Choose and protect your domain name. Professional and distinctive email."
                  domainPrice="$24.99"
                  renewalPrice="$20.75"
                  domainTags={[
                    "Domain",
                    "Swift website",
                    "DNS/Redirect",
                    "Webmail",
                  ]}
                />
              </fieldset>
            </div>
            {/* ----------------------------------- Domain registration --------------------------------------- */}

            {/* ----------------------------------- Hosting Plans --------------------------------------- */}
            <div className="w-full flex flex-col align-top mt-10 pb-10 border-b-2 border-gray-100">
              <div className="flex flex-row align-middle justify-between gap-3">
                <div className="flex gap-2">
                  <span className="px-3 py-1 my-auto border border-black-100 text-base h-fit">
                    <FontAwesomeIcon icon={faDollar} />
                  </span>
                  <p className="my-auto text-lg md:text-xl font-medium text-black uppercase">
                    {t("Hosting Plans")}
                  </p>
                </div>
                <button
                  className="px-3 py-1 my-auto border border-black-100 text-base h-fit font-bold"
                  onClick={() => setShowHostingPlan(!showHostingPlan)}
                >
                  {showHostingPlan ? "-" : "+"}
                </button>
              </div>
              <fieldset
                id="checkHostingPlan"
                className={showHostingPlan ? "block" : "hidden"}
              >
                <DomainCard
                  domainName="Basic Hosting"
                  domainInfo="Register the right domain and protect your identity online."
                  domainPrice="$12.99"
                  renewalPrice="$10.99"
                  domainTags={[
                    "Linux",
                    "Windows",
                    "Linux/windows",
                    "Domain",
                    "Swite Website",
                    "DNS/Redirect",
                  ]}
                  badge={false}
                />

                <DomainCard
                  domainName="Easy Hosting"
                  domainInfo="Start creating your website now, with Database and
                  unlimited email accounts."
                  domainPrice="$14.99"
                  renewalPrice="$11.99"
                  domainTags={[
                    "Linux",
                    "Windows",
                    "Domain",
                    "Swite Website",
                    "DNS/Redirect",
                  ]}
                  badge="true"
                />

                <DomainCard
                  domainName="Advanced Hosting"
                  domainInfo="All the benefits of Easy Hosting with more space for
                  your professional email and 5 PEC domain email accounts."
                  domainPrice="$24.99"
                  renewalPrice="$20.99"
                  domainTags={[
                    "Linux",
                    "Windows",
                    "Domain",
                    "Swite Website",
                    "DNS/Redirect",
                  ]}
                  badge={false}
                />

                <DomainCard
                  domainName="Professional Hosting"
                  domainInfo="The professional web space, comprehensive solution
                  with 10 PEC email accounts."
                  domainPrice="$36.99"
                  renewalPrice="$31.99"
                  domainTags={[
                    "Linux",
                    "Windows",
                    "Linux/windows",
                    "DNS/Redirect",
                  ]}
                  badge={false}
                />
              </fieldset>
            </div>
            {/* ----------------------------------- Hosting Plans --------------------------------------- */}

            {/* ----------------------------------- Website --------------------------------------- */}
            <div className="w-full flex flex-col align-top mt-10 pb-10 border-b-2 border-gray-100">
              <div className="flex flex-row align-middle justify-between gap-3">
                <div className="flex gap-2">
                  <span className="px-3 py-1 my-auto border border-black-100 text-base h-fit">
                    <FontAwesomeIcon icon={faFile} />
                  </span>
                  <p className="my-auto text-lg md:text-xl font-medium text-black uppercase">
                    {t("Website")}
                  </p>
                </div>
                <button
                  className="px-3 py-1 my-auto border border-black-100 text-base h-fit font-bold"
                  onClick={() => setShowWebsite(!showWebsite)}
                >
                  {showWebsite ? "-" : "+"}
                </button>
              </div>
              <fieldset
                id="checkWebsite"
                className={showWebsite ? "block" : "hidden"}
              >
                <DomainCard
                  domainName="Supersite Easy"
                  domainInfo="Choose a theme, enter the content and create your website directly from your phone!"
                  domainPrice="$122.99"
                  renewalPrice="$100.99"
                  domainTags={["Domain", "Swite/website", "DNS/Redirect"]}
                  badge={true}
                />

                <DomainCard
                  domainName="Wordpress Hosting"
                  domainInfo="Wordpress pre-installed to create and manage your site straight away."
                  domainPrice="$99.99"
                  renewalPrice="$89.99"
                  domainTags={["Domain", "Swite/website", "DNS/Redirect"]}
                  badge={false}
                />
              </fieldset>
            </div>
            {/* ----------------------------------- Website --------------------------------------- */}

            {/* ----------------------------------- Online Shop --------------------------------------- */}
            <div className="w-full flex flex-col align-top mt-10 pb-10 border-b-2 border-gray-100">
              <div className="flex flex-row align-middle justify-between gap-3">
                <div className="flex gap-2">
                  <span className="px-3 py-1 my-auto border border-black-100 text-base h-fit">
                    <FontAwesomeIcon icon={faCartShopping} />
                  </span>
                  <p className="my-auto text-lg md:text-xl font-medium text-black uppercase">
                    {t("Online Shop")}
                  </p>
                </div>
                <button
                  className="px-3 py-1 my-auto border border-black-100 text-base h-fit font-bold"
                  onClick={() => setShowOnlineShop(!showOnlineShop)}
                >
                  {showOnlineShop ? "-" : "+"}
                </button>
              </div>
              <fieldset
                id="checkOnlineShop"
                className={showOnlineShop ? "block" : "hidden"}
              >
                <DomainCard
                  domainName="Supersite Professional"
                  domainInfo="The most comprehensive version of the SuperSite with multilingual website and e-commerce form."
                  domainPrice="$450.99"
                  renewalPrice="$300.99"
                  domainTags={["Domain", "Swite/website", "DNS/Redirect"]}
                  badge={true}
                />

                <DomainCard
                  domainName="Managed Woocommerce Hosting"
                  domainInfo="Dedicated platform, optimized for WordPress and WooCommerce for managing online shops of any size."
                  domainPrice="$520.99"
                  renewalPrice="$499.99"
                  domainTags={["Domain", "Swite/website", "DNS/Redirect"]}
                  badge={false}
                />
              </fieldset>
            </div>
            {/* ----------------------------------- Online Shop --------------------------------------- */}

            <div className="w-full my-5">
              <Link href="/search">
                <p className="text-blue-content text-base font-bold cursor-pointer">
                  {t("Go back to domain Search")}
                </p>
              </Link>
            </div>

            <div className="mt-20 w-full border border-black-100 p-5 rounded-xl shadow-contact-card">
              <div className="w-full flex flex-row justify-between align-middle">
                <span className="text-lg md:text-xl font-semibold text-black">
                  <FontAwesomeIcon
                    className="text-sm md:text-base"
                    color="green"
                    icon={faCheck}
                  />{" "}
                  {t(".myDomain.com")}
                </span>
                <span className="text-base md:text-lg font-semibold text-black">
                  {t("$119.50")}
                </span>
              </div>
              <span className="text-xs md:text-sm font-normal ml-0 md:ml-5">
                {t("Managed Woocommerce Hosting")}
              </span>
              <div className="w-full flex flex-row justify-between align-middle my-3">
                <span className="text-base md:text-xl font-semibold text-gray-300 ml-0 md:ml-5">
                  {t(".myDomain.io")}
                </span>
                <span className="text-base md:text-lg font-semibold text-gray-300">
                  {t("$50.25")} &nbsp;
                  <FontAwesomeIcon
                    className="cursor-pointer text-sm md:text-lg"
                    icon={faTrash}
                  />
                </span>
              </div>
              <div className="w-full flex flex-row justify-between align-middle">
                <span className="text-base md:text-xl font-semibold text-gray-300 ml-0 md:ml-5">
                  {t(".myDomain.store")}
                </span>
                <span className="text-base md:text-lg font-semibold text-gray-300">
                  {t("$10.75")} &nbsp;
                  <FontAwesomeIcon
                    className="cursor-pointer text-sm md:text-lg"
                    icon={faTrash}
                  />
                </span>
              </div>
            </div>

            <div className="mt-10 w-full border border-black-100 p-5 rounded-xl shadow-contact-card">
              <div className="w-full flex flex-row justify-between align-middle">
                <span className="text-base md:text-xl font-normal text-black">
                  {t("Total VAT excluded")}
                </span>
                <span className="text-base md:text-lg font-normal text-black">
                  {t("$100.00")}
                </span>
              </div>
              <div className="w-full flex flex-row justify-between align-middle my-2">
                <span className="text-base md:text-xl font-normal text-gray-300">
                  {t("VAT 22%")}
                </span>
                <span className="text-base md:text-lg font-normal text-gray-300">
                  {t("$22.00")}
                </span>
              </div>
              <hr className="h-[1px] border-none bg-gray-300 my-3"></hr>
              <div className="w-full flex flex-row justify-between align-middle">
                <span className="text-base md:text-xl font-normal text-gray-300">
                  {t("Total VAT exluded:")}
                </span>
                <span className="text-base md:text-lg font-normal text-gray-300">
                  {t("$122.00")}
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[18%] flex flex-col align-middle order-1 md:order-2">
            <div className="w-full mx-auto p-5 border border-black-100 rounded-xl mt-12 md:mt-[135px] shadow-contact-card ">
              <p className="text-xs">
                {t("All services include a domain even when you renew.")}
              </p>
              <hr className="h-[1px] border-none bg-gray-300 my-2"></hr>
              <div className="w-full flex flex-row justify-between align-middle">
                <span className="text-xs font-medium text-black w-[65%]">
                  {t(".myDomain.com")}
                </span>
                <span className="text-xs font-medium text-black">
                  {t("$119.50")}
                </span>
              </div>
              <span className="text-[10px] font-normal block mt-1">
                {t("Managed Woocommerce Hosting")}
              </span>
              <div className="w-full flex justify-between align-middle mt-4">
                <FontAwesomeIcon className="my-auto mr-2" icon={faArrowDown} />
                <p className="text-[10px]">
                  {t(
                    "Scroll to the bottom of the page to continue with your order"
                  )}
                </p>
              </div>
            </div>
            <div className="w-full flex justify-between align-middle mx-auto p-5 border border-black-100 rounded-xl mt-5 shadow-contact-card ">
              <FontAwesomeIcon className="my-auto mr-2" icon={faPercent} />
              <p className="text-[10px]">
                <b className="text-[10px]">
                  {t("Do you have a discount code?")}
                </b>
                <p>
                  {t(
                    "Great! Keep it ready to enter in the payment page to get your discount!"
                  )}
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
