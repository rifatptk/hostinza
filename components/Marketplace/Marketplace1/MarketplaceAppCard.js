import React from "react";
import Image from "next/image";
import Link from "next/dist/client/link";

export default function MarketplaceAppCard({ appTitle, image, rating, href }) {
 

  const handleHeart = () => {
    const elements = document.querySelectorAll(".heart");
    elements.forEach((x) => x.classList.toggle("!fill-red-600"));
  };

  return (
    <Link   href={href}>
      <div className="bg-white rounded-md border-[1px] cursor-pointer">
        <div className="flex flex-col">
          <div>
            <Image
              className="w-full rounded-t-md"
              layout="responsive"
              height="170"
              width="300"
              src={image}
              alt="app preview"
            />
          </div>
          <div className="py-3 pl-2">
            <h2 className="font-medium">{appTitle}</h2>
            <div className="flex items-center gap-1 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1792 1792"
                width="15"
                height="15"
              >
                <path
                  fill="#1141d3"
                  d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                ></path>
              </svg>
              <span className="text-[0.9rem] text-[#1141d3] font-semibold">
                {rating}
              </span>
            </div>
          </div>
          <div className="flex justify-between px-3 border-t-[1px] py-2 items-center">
            <svg
              onClick={handleHeart}
              className="heart fill-gray-300"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14.4469 1.95625C12.7344 0.496875 10.1875 0.759375 8.61561 2.38125L7.99999 3.01562L7.38436 2.38125C5.81561 0.759375 3.26561 0.496875 1.55311 1.95625C-0.409388 3.63125 -0.512513 6.6375 1.24374 8.45312L7.29061 14.6969C7.68124 15.1 8.31561 15.1 8.70624 14.6969L14.7531 8.45312C16.5125 6.6375 16.4094 3.63125 14.4469 1.95625Z"></path>
            </svg>
            <span className="font-medium text-[#1141d3]">Install</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
