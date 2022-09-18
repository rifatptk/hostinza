import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

export default function AppOverviewCard() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { appname } = router.query;

  return (
    <div className="flex flex-col sm:!w-[50%] w-full">
      <h1 className="text-[2.5rem] font-semibold text-gray-900 ml-1">{appname}</h1>
      <div >
        <div className="flex items-center gap-1 ml-1 mt-2 mb-10 border-b-[1px] pb-4">
          <span className="text-[0.96rem] text-gray-700 font-semibold">
            Rating
          </span>
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
            5.0
          </span>
        </div>
        <Image src={"/images/magento-new.png"} className="rounded-md" layout="responsive" width="680" height="390" quality={100} alt="" />


        <div className=" mt-4 ">
          <h2 className="text-[1.7rem] font-semibold text-gray-900 py-3">{t("Description")}</h2>
          <p className="text-[0.9rem] font-medium text-gray-700 pr-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dictum dictum elementum. Cras quis neque dui. Proin consequat, odio faucibus tempor euismod, arcu mauris malesuada ligula, ac vestibulum ligula justo in erat. Suspendisse rutrum dapibus est, lobortis viverra urna posuere euismod. Proin tristique laoreet est vel imperdiet. Nam cursus placerat metus. Etiam fermentum iaculis scelerisque</p>
          <br/>
          <p className="text-[0.9rem] font-medium text-gray-700 pr-4">Sed sed sollicitudin orci. In at odio tellus. Ut convallis elit risus, eget tempus leo elementum nec. Praesent lorem augue, faucibus ut rutrum et, pharetra id urna. Maecenas mi leo, gravida eu ante vel, ultricies blandit ante. Aliquam dapibus nisi nec commodo gravida. Cras ac fermentum sem. Aenean tristique arcu eget tellus porta, nec hendrerit magna pretium.</p>

{/* tags */}
          <div className="mt-10">
            <h3 className="text-[1.3rem] font-semibold text-gray-900 py-3">Tags</h3>
            <div className="flex flex-wrap">
          <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-3 py-1 rounded mt-2 ">Wordpress</span>
          <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-3 py-1 rounded mt-2 ">Elementor</span>
          <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-3 py-1 rounded mt-2 ">Woocommerce</span>
          <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-3 py-1 rounded mt-2 ">Magento</span>
          <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-3 py-1 rounded mt-2 ">Blog</span>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
