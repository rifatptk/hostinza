import React, { useContext, useEffect } from "react";
import Image from "next/image";
import AuthContext from "../../../../utils/auth-context";
import { getUser } from "../../../../utils/auth";

export default function MarketplaceHeader() {
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    setUser(getUser());
  }, [setUser]);

  return (
    <div className="flex justify-between gap-3 px-8 items-center flex-wrap border-b-[1px]">
      <div className="w-[20%]">
        <Image
          className="w-[70px] md:w-[100px] py-3 order-1"
          width="90"
          height="60"
          src={"/images/logo.png"}
          alt="Logo"
        />
      </div>
      {/* serach bar */}
      <div className=" lg:!w-[50%] md:!w-full w-full lg:!order-2 md:order-3 order-3 sm:!mb-0 !mb-2 ">
        <form className="flex">
          <input
            type="search"
            className="py-2 px-2 text-gray-700 text-[0.9rem] font-medium w-full focus:!ring-0 rounded-l-lg  border-r-0"
            placeholder="What app are you looking for?"
          ></input>
          <button className="bg-blue-content px-4 rounded-r-lg">
            <span>
              <svg
                className="fill-white"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path d="M15.8906 14.6531L12.0969 10.8594C12.025 10.7875 11.9313 10.75 11.8313 10.75H11.4187C12.4031 9.60938 13 8.125 13 6.5C13 2.90937 10.0906 0 6.5 0C2.90937 0 0 2.90937 0 6.5C0 10.0906 2.90937 13 6.5 13C8.125 13 9.60938 12.4031 10.75 11.4187V11.8313C10.75 11.9313 10.7906 12.025 10.8594 12.0969L14.6531 15.8906C14.8 16.0375 15.0375 16.0375 15.1844 15.8906L15.8906 15.1844C16.0375 15.0375 16.0375 14.8 15.8906 14.6531ZM6.5 11.5C3.7375 11.5 1.5 9.2625 1.5 6.5C1.5 3.7375 3.7375 1.5 6.5 1.5C9.2625 1.5 11.5 3.7375 11.5 6.5C11.5 9.2625 9.2625 11.5 6.5 11.5Z"></path>
              </svg>
            </span>
          </button>
        </form>
      </div>


      <div className="w-[25%]  flex justify-end items-center gap-5 lg:!order-3 sm:!order-2 order-2">
        <a
          href="#"
          className="text-gray-500 text-[1.1rem] hover:text-[#1141d3] font-medium"
        >
          Orders
        </a>
        <div className="flex items-center justify-center py-6">
          <div className="w-8 rounded-full homeHeroGradient h-8 "></div>
          <span className="text-[1rem] text-[#1141d3]  uppercase font-semibold px-3">
            {user?.username}
          </span>
        </div>
      </div>
    </div>
  );
}
