import React from "react";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link'

export default function CartDomain({ domain }) {
  return (
    <>
      <div className="m-3 flex flex-col justify-center border rounded-xl shadow-sm bg-[#f8f8ff] p-5 mt-24">
        <div className="flex justify-between mb-5">
          <div className="flex flex-col">
            <span className="text-[1.4rem] text-[#0f3dbe] font-semibold underline">
              {domain}
            </span>
            <span className="text-[0.9rem] mt-2 text-gray-600">
              Manage Woocommerce Host
            </span>
          </div>
          <div>
            <span className="text-[1.2rem]">$99.85</span>
          </div>
        </div>

        <div className="flex justify-between flex-wrap items-center">
          <span className="text-gray-700">{domain}</span>
          <span className="flex gap-2 items-center">
            $30.33
            <FontAwesomeIcon icon={faTrashAlt} className="text-red-600 mb-1" />
          </span>
        </div>

        <div className="flex justify-between flex-wrap items-center mt-5">
          <span className="text-gray-700">{domain}</span>
          <span className="flex gap-2 items-center">
            $30.33
            <FontAwesomeIcon icon={faTrashAlt} className="text-red-600 mb-1" />
          </span>
        </div>
      </div>

      <div className="m-3 flex flex-col justify-center border rounded-xl shadow-sm bg-[#f8f8ff] p-5 mt-2">
        <div className="flex justify-between">
          <span className="font-medium text-gray-800">Total VAT excluded</span>
          <span>$100.00</span>
        </div>
        <div className="flex justify-between mt-2 pb-4">
          <span className="font-medium text-gray-700">VAT 22%</span>
          <span>$22.00</span>
        </div>
        <div className="flex justify-between mt-2 border-t-[1px] py-3">
          <span className="font-medium text-gray-700">Total VAT exluded:</span>
          <span>$122.00</span>
        </div>
      </div>

    </>
  );
}
