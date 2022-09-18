import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SidebarLink from "./SidebarLink";

export default function Sidebar() {
  return (
    <div className={`lg:w-[260px] xl:w-[280px] w-[280px] md:w-[220px] py-2 sticky xs:hidden sm:hidden md:block`}>
      <ul className="px-1 py-1">
        <div className="relative py-1">
          <div className="absolute top-[10.5px] left-2">
            <FontAwesomeIcon icon={faSearch} className="text-dark-blue-2 opacity-80" />
          </div>
          <input
            placeholder="Search"
            className="text-dark-blue-2 opacity-80 pl-8 text-sm placeholder:text-gray-600 transition w-[100%] px-2 py-2 rounded-[5px] bg-transparent outline-none border-[1px] border-dark-blue-2"
          />
        </div>
        <SidebarLink text="Commerce" />
        <SidebarLink text="Logging" />
        <SidebarLink text="Databases" />
        <SidebarLink text="CMS" />
        <SidebarLink text="Monitoring" />
        <SidebarLink text="DevTools" />
        <SidebarLink text="Messaging" />
        <SidebarLink text="Code Repository" />
      </ul>
    </div>
  );
}
