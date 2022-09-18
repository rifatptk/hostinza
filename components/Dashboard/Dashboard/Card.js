import { faGithub } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
export default function Card({data}) {
  return (
    <Link href={'/dashboard/endpoints/1'}>
      <div className=" xs:w-[95%] w-[100%]  p-5 border-[1px] border-gray-300 rounded-md my-2 hover:scale-[1.02] hover:border-gray-600 cursor-pointer hover:shadow-md transition duration-200">
        <div className="flex align-middle justify-between w-full">
          <div className="flex align-middle justify-center ">
            <div className="w-6 rounded-full homeHeroGradient h-6 mr-2 self-center"></div>
            <div className="">
              <p className="text-dark-blue-2 font-semibold">{data?.name}</p>
              <p className="text-dark-blue-2 text-sm font-light">{data?.allowed_user_envs[0]?.name}</p>
            </div>
          </div>
          <div className="self-center">
            <div className="w-6 rounded-full border-gray-300 border-[1px] h-6"></div>
          </div>
        </div>
        <div className="mt-5">
          <p className="text-dark-blue-2 text-sm font-light">{data?.description}</p>
        </div>
        <div className="mt-5 flex align-middle">
          <p className="text-dark-blue-2 text-sm font-light">15 days ago username </p>
          <FontAwesomeIcon icon={faGithub} className="text-black ml-2 self-center"/>
        </div>
      </div>
    </Link>
  );
}


