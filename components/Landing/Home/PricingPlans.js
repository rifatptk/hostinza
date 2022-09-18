import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { usePlansQuery } from "../../../data/plans";
export default function PricingPlans() {
  const { t } = useTranslation("common");
  const { data: dataList } = usePlansQuery();

  return (
    <div className="bg-light-gray w-full h-auto pt-24 pb-36">
      <div className="container w-full items-center mx-auto">
        <p className="text-gray-500 text-lg font-normal text-center font-poppins">
          {t("Pricing Plans")}
        </p>
        <h3 className="text-blue-content text-2xl md:text-4xl font-bold text-center font-poppins">
          <span className="text-black">{t("SELECT")}</span> {t("BEST PLAN")}
        </h3>
        <div className="flex flex-wrap align-middle justify-center gap-8 w-full mt-20">
          {/* Plan Cards */}
          {dataList?.map((_plan, idx) => {
            return (
              <div
                className="w-full max-w-[350px] flex flex-col align-middle justify-between shadow-contact-card p-10 rounded-xl"
                key={idx}
              >
                <div className="w-32 h-32 relative mx-auto">
                  <Image
                    src={"/images/servers-1.png"}
                    layout="fill"
                    alt="ContactInfoIcon"
                    width={"128px"}
                    height={"128px"}
                  />
                </div>
                <p className="text-base text-gray-500 font-semibold text-center mt-7 mb-1">
                  {_plan?.description}
                </p>
                <h4 className="text-gray-600 text-2xl font-bold text-center">
                  {_plan?.title}
                </h4>
                <p className="text-base text-gray-500 font-semibold text-start mt-2 mb-1">
                  {t("from")}
                </p>
                <p className="mt-2 flex flex-row justify-center mx-auto text-blue-content font-montserrat">
                  <span className="font-bold text-xl self-start">$</span> &nbsp;
                  <span className="font-extrabold text-6xl">
                    {_plan?.plan?.price}
                  </span>{" "}
                  &nbsp;
                  <span className="font-bold self-end">{t("/month")}</span>
                </p>
                <div
                  className="mt-3"
                  dangerouslySetInnerHTML={{
                    __html: _plan?.detailed_description,
                  }}
                />

                <Link href={"/vps-hosting"}>
                  <button className="w-fit text-sm md:text-lg text-white py-3 px-5 md:px-10 bg-light-blue rounded-full mx-auto mt-5 font-normal">
                    {t("View all")}
                  </button>
                </Link>
              </div>
            );
          })}

          {/* Plan Card 2 */}
          {/* <div className="w-full max-w-[350px] flex flex-col align-middle justify-between shadow-contact-card p-10 rounded-xl">
            <div className="w-32 h-32 relative mx-auto">
              <Image
                src={"/images/servers-2.png"}
                layout="fill"
                alt="ContactInfoIcon"
              />
            </div>
            <p className="text-base text-gray-500 font-semibold text-center mt-7 mb-1">
              Cloud VDS
            </p>
            <h4 className="text-black text-2xl font-bold text-center">
              Virtual Dedicated Servers
            </h4>
            <p className="text-base text-gray-500 font-semibold text-start mt-2 mb-1">
              from
            </p>
            <p className="mt-2 flex flex-row justify-center mx-auto text-blue-content font-montserrat">
              <span className="font-bold text-xl self-start">$</span> &nbsp;
              <span className="font-extrabold text-6xl">50</span> &nbsp;
              <span className="font-bold self-end">/month</span>
            </p>
            <p className="text-black font-normal text-start mt-3">
              Up to 96 GB RAM and dedicated resources provisioned instantly.
            </p>
            <Link href={"/vds-hosting"}>
              <button className="w-fit text-sm md:text-lg text-white py-3 px-5 md:px-10 bg-light-blue rounded-full mx-auto mt-5 font-normal">
                View all
              </button>
            </Link>
          </div> */}

          {/* Plan Card 3 */}
          {/* <div className="w-full max-w-[350px] flex flex-col align-middle justify-between shadow-contact-card p-10 rounded-xl">
            <div className="w-32 h-32 relative mx-auto">
              <Image
                src={"/images/servers-3.png"}
                layout="fill"
                alt="ContactInfoIcon"
              />
            </div>
            <p className="text-base text-gray-500 font-semibold text-center mt-7 mb-1">
              Bare Metal
            </p>
            <h4 className="text-black text-2xl font-bold text-center">
              Dedicated Servers
            </h4>
            <p className="text-base text-gray-500 font-semibold text-start mt-2 mb-1">
              from
            </p>
            <p className="mt-2 flex flex-row justify-center mx-auto text-blue-content font-montserrat">
              <span className="font-bold text-xl self-start">$</span> &nbsp;
              <span className="font-extrabold text-6xl">170</span> &nbsp;
              <span className="font-bold self-end">/month</span>
            </p>
            <p className="text-black font-normal text-start mt-3">
              Bare metal servers with individual configuration and full control.
            </p>
            <Link href={"/ds-hosting"}>
              <button className="w-fit text-sm md:text-lg text-white py-3 px-5 md:px-10 bg-light-blue rounded-full mx-auto mt-5 font-normal">
                View all
              </button>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}
