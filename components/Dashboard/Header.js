import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";
import {
  faBarsStaggered,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useTranslation from "next-translate/useTranslation";
import Slider from "./Slider";
import { AvatarMenu } from "./Utils/Menu";
import AuthContext from "../../utils/auth-context";
import { getUser } from "../../utils/auth";


export default function Header() {
    const { t } = useTranslation("common");
    const { user,setUser } = useContext(AuthContext);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setUser(getUser());
    },[setUser]);   

    return (
        <div className="w-full bg-[#FFFFFF]">
          <Slider open={open} setOpen={setOpen} />
          {/* MAIN HEADER  */}
          <div className="mx-auto maincontainer py-1 px-1 font-poppins xs:px-2">
            <div className="flex align-middle justify-between">
              <div className="flex align-middle justify-center py-2 mt-1">
                <Link href="/">
                    <div className="w-8 cursor-pointer rounded-full bg-black h-8"></div>
                </Link>
                <div>
                  <p className=" text-dark-blue-2 text-2xl mx-4 opacity-25"> / </p>
                </div>
                <div className="flex align-middle justify-center">
                  <div className="w-8 rounded-full homeHeroGradient h-8 mr-2"></div>
                  <p className=" text-dark-blue-2 lowercase mt-1 text-[0.9rem] font-semibold ">{user?.username}</p>
                  {/* <div className="flex align-middle justify-center flex-col ml-5 p-0">
                            <FontAwesomeIcon icon={faAngleUp} className='text-dark-blue-2 text-[12px]'/>
                            <FontAwesomeIcon icon={faAngleDown} className='text-dark-blue-2 text-[12px]'/>
                            </div> */}
                </div>
              </div>
              <div className="p-2 relative">
                <div className="sm:hidden md:hidden lg:hidden xl:hidden">
                  <FontAwesomeIcon
                    icon={faBarsStaggered}
                    className="text-dark-blue-2 text-2xl mt-1"
                    onClick={() => setOpen(!open)}
                  />
                </div>
                <ul className="sm:flex md:flex lg:flex xl:flex justify-around p-2 align-middle hidden">
                  <Link href="/feedback">
                    <li className="px-2 py-[2px] mx-2 transition ease-in-out rounded-md  duration-300 cursor-pointer hover:-translate-y-1 text-gray-500 hover:text-dark-blue-2">
                      {t("Feedback")}
                    </li>
                  </Link>
                  <Link href="/docs">
                    <li className="px-2 py-[2px] mx-2 transition ease-in-out duration-300 hover:-translate-y-1 text-gray-500 hover:text-dark-blue-2 cursor-pointer">
                      {t("Docs")}
                    </li>
                  </Link>
                  <Link href="/support">
                    <li className="px-2 py-[2px] mx-2 transition ease-in-out duration-300 hover:-translate-y-1 text-gray-500 hover:text-dark-blue-2 cursor-pointer">
                      {t("Support")}
                    </li>
                  </Link>
                  <AvatarMenu />
                  {/* <li className="w-8 rounded-full homeHeroGradient h-8 ml-3 cursor-pointer"></li> */}
                </ul>
              </div>
            </div>
          </div>
    </div>
      )
}
