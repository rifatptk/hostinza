import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

export default function ImportGitRepo({ cardImg, cardName }) {
  const { t } = useTranslation("common");

  return (
    <Link href="/new/clone">
      <div className=" relative lg:!w-[12.8rem] md:!w-[20.5rem] nextImage-cover bg-white rounded-lg border hover:border-white ">
        <Image
          className="rounded-t-lg"
          layout="responsive"
          src={cardImg}
          width="400"
          height="280"
          alt=""
        />
        <div className="px-2 py-1 gap-1 flex flex-row items-center">
          <div>
            <Image
              className="rounded-t-lg !w-[1px] !h-[1px] "
              width="25"
              height="25"
              src={"/images/github.png"}
              alt=""
            />
          </div>
          <h5 className="mb-2 sm:text-[0.9rem] text-[0.7rem] font-poppins font-semibold tracking-tight text-gray-900 ">
            {cardName}
          </h5>
        </div>

        {/* hover arrow */}
        <div className="imagesArrow absolute inset-0 h-full w-full imagesArrow  flex items-center justify-center text-center mx-auto">
          <div className="bg-gray-800 flex rounded-full justify-center items-center w-8 h-8">
            <FontAwesomeIcon
              className="text-white"
              icon={faArrowRight}
              alt="footerFacebook"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
