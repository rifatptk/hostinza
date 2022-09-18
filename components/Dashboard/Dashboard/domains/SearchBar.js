import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { DomainModal } from "./DomainModal";

export default function SearchBar() {
  const [open, setOpen] = useState(false);
  const [state, setstate] = useState(false);
  function showDomain(e) {
    if (e.target.value !== "" && e.target.value.length > 1) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }
  function ShowModal() {
    setstate(true);
  }
  return (
    <div className="maincontainer mx-auto">
      <div className="flex justify-center w-full mt-20">
        <div>
          <h4 className="mt-2 text-4xl text-center font-medium tracking-tight text-gray-900">
            Find Your Perfect Domain
          </h4>
          <div className="mt-4 flex domain-Searchbar">
            <span>
              <FontAwesomeIcon
                className="text-gray-400 mr-2"
                icon={faMagnifyingGlass}
              />
            </span>
            <input
              className="pb-3"
              onChange={showDomain}
              placeholder={"Search for Domains..."}
            />
          </div>
        </div>
      </div>
      {open && (
        <div className="grid grid-cols-6 mt-20 gap-5">
          <div className="flex items-center ">
            <p>nab.com</p>
            <button
              onClick={ShowModal}
              className="text-indigo-700 font-bold ml-3"
            >
              $300
            </button>
          </div>
          <div className="flex items-center ">
            <p>daz.com</p>
            <button className="text-indigo-700 font-bold ml-3">$300</button>
          </div>
          <div className="flex items-center ">
            <p>ezj.com</p>
            <button className="text-indigo-700 font-bold ml-3">$250</button>
          </div>
          <div className="flex items-center ">
            <p>ada.com</p>
            <button className="text-indigo-700 font-bold ml-3">$200</button>
          </div>
          <div className="flex items-center ">
            <p>zam.com</p>
            <button className="text-indigo-700 font-bold ml-3">$100</button>
          </div>
          <div className="flex items-center ">
            <p>ada.com</p>
            <button className="text-indigo-700 font-bold ml-3">$200</button>
          </div>
        </div>
      )}
      <DomainModal state={true} setstate={setstate} />
    </div>
  );
}
