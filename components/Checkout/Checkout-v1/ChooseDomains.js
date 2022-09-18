import React from "react";
import DomainCard from "./DomainCard";
import RecommendedCard from "./RecommendedCard";
import ServerCard from "./ServerCard";
import Link from "next/link";

export default function ChooseDomains({clickCheckout}) {
  return (
    <>
      <div className="sm:!w-[90%] w-[95%] mx-auto">
        {/* CLOUD */}
        <div>
          <ServerCard domainName="mydomain.com" />
        </div>

        <h3 className="text-[1rem] font-medium py-4">
          Protect your brand and improve your visibility by registering other
          additional TLDs:
        </h3>
        <DomainCard domainName="mydomain.com" />
        <DomainCard domainName="mydomain.com" />
        <DomainCard domainName="mydomain.com" />

        <div className="flex sm:!flex-row flex-col justify-between my-10">
          <button className="bg-gray-200 py-2 px-3 text-[0.9rem] sm:!w-[23%] w-[70%] mx-auto text-blue-content font-medium rounded-sm">
            Search and add a new domain
          </button>
        </div>

        <div className="mt-12 flex sm:!flex-row flex-col justify-between">
          <div className="flex sm:!w-[30%] w-full sm:!mb-0 mb-4 flex-col">
            <span className="text-[0.9rem] font-medium text-gray-600">
              Not happy with the result?
            </span>
            <span className="flex items-center gap-2 text-[#1141d3] text-[0.89rem]">
              <svg
                className="fill-[#1141d3]"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path d="M15.8906 14.6531L12.0969 10.8594C12.025 10.7875 11.9313 10.75 11.8313 10.75H11.4187C12.4031 9.60938 13 8.125 13 6.5C13 2.90937 10.0906 0 6.5 0C2.90937 0 0 2.90937 0 6.5C0 10.0906 2.90937 13 6.5 13C8.125 13 9.60938 12.4031 10.75 11.4187V11.8313C10.75 11.9313 10.7906 12.025 10.8594 12.0969L14.6531 15.8906C14.8 16.0375 15.0375 16.0375 15.1844 15.8906L15.8906 15.1844C16.0375 15.0375 16.0375 14.8 15.8906 14.6531ZM6.5 11.5C3.7375 11.5 1.5 9.2625 1.5 6.5C1.5 3.7375 3.7375 1.5 6.5 1.5C9.2625 1.5 11.5 3.7375 11.5 6.5C11.5 9.2625 9.2625 11.5 6.5 11.5Z"></path>
              </svg>
              Search again
            </span>
          </div>
          <div className="flex flex-row sm:!w-[30%] w-full gap-2">
            <button className="py-3 w-full px-3 rounded-md border-2 border-[#1141d3] text-[#1141d3] text-[0.9rem]">
              3 domains selected
            </button>
              <button onClick={clickCheckout} className="py-3 w-full px-3 rounded-md border-2 border-[#1141d3] bg-[#1141d3] text-white text-[0.9rem]">
                Proceed
              </button>
          </div>
        </div>

        <div className="mt-10 pt-10 border-t-[1px]">
          <h3 className="text-[1.3rem] font-medium py-4">
            Your Recommended Domains
          </h3>
          <RecommendedCard domainName="mydomain.com" />
          <RecommendedCard domainName="mydomain.com" />
        </div>
      </div>
    </>
  );
}
