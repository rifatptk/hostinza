import React, { useState } from "react";
import PurchaseModal from "./PurchaseModal";

export default function DomainCard({domainName, extension, price,ids, upperNameO,upperPriceO}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        id={ids}
        className="flex relative justify-between py-6 cursor-pointer border p-3 rounded-md duration-300 ease-in-out transition "
      >
        <button
          onClick={() => setIsOpen(true)}
          className="absolute z-[4] bg-none outline-none border-none w-full top-0 left-0 h-full"
        ></button>
        <h1 className="text-[0.9rem] font-normal text-gray-800 cursor-pointer !truncate !overflow-hidden !whitespace-nowrap">
          {domainName}
          {extension}
        </h1>
        <span className="price text-[0.9rem] font-normal text-[#1141d3] cursor-pointer">
          {price}
        </span>
        {isOpen && (
          <PurchaseModal
            upperName={upperNameO}
            upperPrice={upperPriceO}
            closeModal={setIsOpen}
          />
        )}
      </div>
    </>
  );
}
