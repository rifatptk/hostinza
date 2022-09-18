import React from "react";
import Image from "next/image";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

import DomainCard from "./DomainCard";
import DomainCardBig from "./DomainCardBig";

export default function ChooseDomain() {
  const { t } = useTranslation("common");

  return (
    <div className="bg-white w-full h-auto pt-6 pb-20 md:pb-28">
      <div className="container w-full items-center mx-auto">
        <div className="w-full p-5 flex flex-col align-middle mt-10 rounded-xl border-2 border-gray-400">
          <h3 className="text-3xl font-semibold text-black">
            {t("myDomain.com")}
          </h3>
          <p className="text-sm text-black font-normal mt-1">
            <span className="text-red-700 font-semibold">
              {t("Not available")}
            </span>
            , {t("because it has already been registered by someone else.")}
          </p>
          <div className="w-full my-5 flex flex-wrap justify-between align-middle p-5 rounded-xl border border-gray-400">
            <div className="flex w-fit">
              <div className="w-12 h-12 relative">
                <Image
                  src={"/images/domainTransfer.png"}
                  layout="fill"
                  alt="DomainTransfer"
                />
              </div>
              <div className="ml-3 flex flex-col justify-center">
                <p className="text-sm text-black font-semibold">
                  {t("Do you already own it?")}
                </p>
                <p className="text-xs text-black font-normal m-0">
                  {t(
                    "If the domain already belongs to you, you can transfer it to hostinza.com?"
                  )}
                </p>
              </div>
            </div>
            <button className="w-fit h-fit my-auto text-sm md:text-base text-white py-2 px-6 bg-light-blue rounded-full">
              {t("Transfer")}
            </button>
          </div>
          <div className="w-full flex flex-wrap justify-between align-middle p-5 rounded-xl border border-gray-400">
            <div className="flex w-full md:w-[80%]">
              <div className="w-12 h-12 block relative">
                <Image
                  src={"/images/userDomain.png"}
                  layout="fill"
                  alt="DomainTransfer"
                />
              </div>
              <div className="ml-3 flex flex-col justify-center w-[95%]">
                <p className="text-sm text-black font-semibold">
                  {t("Domain Recovery Service - Brokerage")}
                </p>
                <p className="text-xs text-black font-normal m-0">
                  {t(
                    "If the domain that you wanted is already in use and is of particular importance to you and your online activity, we can still try to buy it. We will get in touch with the current owner on your behalf and negotiate the best possible sale price"
                  )}
                </p>
              </div>
            </div>
            <button className="w-fit h-fit my-auto text-sm md:text-base text-white py-2 px-6 bg-light-blue rounded-full">
              {t("Enquire")}
            </button>
          </div>
        </div>

        <p className="mt-20 text-sm font-normal">
          {t(
            "Protect your brand and improve your visibility by registering other TLDs:"
          )}
        </p>

        <div className="flex flex-col align-middle w-full gap-2 md:gap-2 mt-5">
          <DomainCard
            domainName="travelworld.com"
            domainPrice="$12.99"
            renewalPrice="$7.99"
          />
          <DomainCard
            domainName="travelworld.xing"
            domainPrice="$9.99"
            renewalPrice="$6.99"
          />
          <DomainCard />
        </div>

        {/* --------------------SEARCH COMPONENT--------------------------------- */}
        <div className="hidden w-full md:w-[70%] mx-auto bg-white rounded-full border-[1px] border-gray-300 h-[70px] flex align-middle p-2 searchDomainContainer mt-5 md:mt-10">
          <input
            className="outline-none bg-transparent border-none flex-1 pl-2 md:pl-5 pr-2 w-[60%] md:[70%]"
            placeholder="myDomain.com"
          />
          <Link href="/search">
            <button className="text-base text-white px-3 md:px-10 bg-light-blue rounded-full">
              {t("Search")}
            </button>
          </Link>
        </div>
        {/* --------------------SEARCH COMPONENT--------------------------------- */}

        <div className="flex flex-wrap align-middle justify-end gap-5 mt-10">
          <button className="text-sm md:text-lg text-light-blue py-3 px-5 md:px-10 border border-light-blue rounded-full">
            {t("3 Selected Domains")}
          </button>
          <button className="text-sm md:text-lg text-white py-3 px-5 md:px-10 bg-light-blue rounded-full">
            {t("Proceed")}
          </button>
        </div>

        <div className="flex flex-col align-middle w-full gap-5 md:gap-3 mt-20">
          {/* Domain Card 1 */}
          <DomainCardBig
            domainName="amazonia.org"
            domainPrice="$12.99"
            renewalPrice="$7.99"
          />
          <DomainCardBig
            domainName="amazonia.edu"
            domainPrice="$14.99"
            renewalPrice="$9.99"
          />
          <DomainCardBig />
        </div>
      </div>
    </div>
  );
}
