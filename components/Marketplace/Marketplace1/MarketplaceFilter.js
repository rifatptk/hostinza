import React, { useState } from "react";

export default function MarketplaceFilter() {
  const [Dropdown, setDropdown] = useState(false);
  const [SortDropdown, setSortDropdown] = useState(false);

  // const handleCategory = () => {
  //   document.getElementById("categorydropdown").classList.toggle("!block");
  // };
  // const handleSort = () => {
  //   document.getElementById("sortdropdown").classList.toggle("!block");
  // };

  // if (typeof window !== "undefined") {
  //   window.onclick = function (event) {
  //     if (!event.target.matches(".dropdownBtn")) {
  //       document.getElementById("categorydropdown").classList.remove("!block");
  //       document.getElementById("sortdropdown").classList.remove("!block");
  //     }
  //   };
  // }

  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/flowbite@1.5.1/dist/flowbite.min.css"
      />
      <div className="flex gap-3 px-8 mx-auto justify-between items-center flex-wrap">
        <div className="flex gap-3 sm:!w-[30%] w-full flex-wrap">
          {/* Category */}
          <div>
            <button
              // onClick={handleCategory}
              onClick={() => setDropdown(!Dropdown)}
              id="category"
              className="dropdownBtn relative border-[1.5px] rounded-md py-2 pl-2 pr-4 text-gray-700 font-medium flex items-center gap-3"
            >
              Category
              <svg
                width="11"
                height="7"
                viewBox="0 0 11 7"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z"></path>
              </svg>
            </button>

            <div className={Dropdown ? "!block" : "!hidden"}>
              <ul
                id={"categorydropdown"}
                className="list-none z-50 absolute cursor-pointer bg-white mt-1  min-w-[12rem] text-left rounded-md border-[1px] drop-shadow-sm text-[0.97rem] font-medium"
              >
                <li className=" pl-4 pr-12 py-3 mx-2 rounded-lg my-1.5  hover:bg-gray-100">
                  Category 1
                </li>
                <li className=" pl-4 pr-12 py-3 mx-2 rounded-lg my-1.5 hover:bg-gray-100">
                  Category 2
                </li>
                <li className=" pl-4 pr-12 py-3 mx-2 rounded-lg my-1.5 hover:bg-gray-100">
                  Category 3
                </li>
                <li className=" pl-4 pr-12 py-3 mx-2 rounded-lg my-1.5 hover:bg-gray-100">
                  Category 4
                </li>
              </ul>
            </div>
          </div>
          {/* Sort by */}
          <div>
            <button
              // onClick={handleSort}
              onClick={() => setSortDropdown(!SortDropdown)}
              id="sort"
              className="dropdownBtn relative border-[1.5px] rounded-md py-2 pl-2 pr-4 text-gray-700 font-medium flex items-center gap-3"
            >
              Sort By
              <svg
                width="11"
                height="7"
                viewBox="0 0 11 7"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z"></path>
              </svg>
            </button>
            <div className={SortDropdown ? "!block" : "!hidden"}>
              <ul
                id="sortdropdown"
                className="list-none z-50 absolute bg-white mt-1 min-w-[15%]  text-left rounded-md border-[1px] drop-shadow-sm text-[0.97rem] font-medium"
              >
                <li className=" pl-4 pr-12 py-3 mx-2 rounded-lg my-1.5  hover:bg-gray-100">
                  Relevance
                </li>
                <li className=" pl-4 pr-12 py-3 mx-2 rounded-lg my-1.5  hover:bg-gray-100">
                  Popular
                </li>
                <li className=" pl-4 pr-12 py-3 mx-2 rounded-lg my-1.5 hover:bg-gray-100">
                  Newest
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="default-toggle"
            className="inline-flex relative items-center cursor-pointer"
          >
            <input
              type="checkbox"
              value=""
              id="default-toggle"
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            <span className="ml-3 font-medium text-gray-900 dark:text-gray-300">
              Pro Service
            </span>
          </label>
        </div>
      </div>
    </>
  );
}
