import {
  faEnvelope,
  faLocationDot,
  faSchool,
  faSquarePhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  faFacebookF,
  faGooglePlusG,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import useTranslation from "next-translate/useTranslation";

import FooterLink from "./FooterLink";
import FooterLinksList from "./FooterData";

const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <div className="bg-footer-gradient">
      <div className="bg-contain h-auto bg-center w-full p-5 md:px-12 md:pt-12">
        <div className="container mx-auto">
          <div className="my-5">
            <Link href={"/"}>
              <span className="font-bold whitespace-nowrap w-[150px] relative">
                <Image
                  src={"/images/logo.png"}
                  layout="fill"
                  alt="logoFooter"
                />
              </span>
            </Link>
          </div>

          <div
            className="h-auto pt-6 lg:flex gap-3 container w-full overflow-x-auto  md:grid grid-cols-2"
            style={{ justifyContent: "space-around" }}
          >
            {FooterLinksList.map((BigItem) => (
              <FooterLink
                key={FooterLinksList[4].groupTitle}
                groupTitle={BigItem.groupTitle}
                groupLinks={BigItem.groupLinks}
              />
            ))}
          </div>
          <hr className="h-[0.5px] bg-white-200 w-full border-none my-10 md:mt-20"></hr>
        </div>
      </div>
      <div className="h-auto flex flex-wrap align-middle justify-evenly gap-5 md:gap-10 px-5 md:p-10">
        <h1 className="text-center text-white h-fit my-auto">
          &copy; {t("2022 Host")} | <strong>{t("Web ")}</strong>{" "}
          <a
            className="text-[#1ba3ff] underline underline-offset-2 cursor-pointer"
            href="https://host-front.vercel.app?up_rollout=true"
          >
            {t("@Noice")}
          </a>
        </h1>
        <div className="w-20 h-10 relative my-auto cursor-pointer">
          <Image src={"/images/logo.png"} layout="fill" alt="logo in footer" />
        </div>
        <div className="flex flex-wrap align-middle justify-center gap-5 h-auto my-auto">
          <Link href="/social1">
            <div className="w-10 md:w-12 h-10 md:h-12 relative border border-white rounded-full p-2 md:p-3 cursor-pointer flex align-middle">
              <FontAwesomeIcon
                className="m-auto text-light-blue hover:text-white hover:scale-105 duration-300"
                icon={faFacebookF}
                alt="footerFacebook"
              />
            </div>
          </Link>
          <Link href="/social1">
            <div className="w-10 md:w-12 h-10 md:h-12 relative border border-white rounded-full p-2 md:p-3 cursor-pointer flex align-middle">
              <FontAwesomeIcon
                className="m-auto text-[#2aa3ef] hover:text-white hover:scale-105 duration-300"
                icon={faTwitter}
                alt="footerFacebook"
              />
            </div>
          </Link>
          <Link href="/social1">
            <div className="w-10 md:w-12 h-10 md:h-12 relative border border-white rounded-full p-2 md:p-3 cursor-pointer flex align-middle">
              <FontAwesomeIcon
                className="m-auto text-[#1178b3] hover:text-white hover:scale-105 duration-300"
                icon={faLinkedinIn}
                alt="footerFacebook"
              />
            </div>
          </Link>
          <Link href="/social1">
            <div className="w-10 md:w-12 h-10 md:h-12 relative border border-white rounded-full p-2 md:p-3 cursor-pointer flex align-middle">
              <FontAwesomeIcon
                className="m-auto text-[#e8715c] hover:text-white hover:scale-105 duration-300"
                icon={faInstagram}
                alt="footerFacebook"
              />
            </div>
          </Link>
          <Link href="/social1">
            <div className="w-10 md:w-12 h-10 md:h-12 relative border border-white rounded-full p-2 md:p-3 cursor-pointer flex align-middle">
              <FontAwesomeIcon
                className="m-auto text-[#dc4a38] hover:text-white hover:scale-105 duration-300"
                icon={faGooglePlusG}
                alt="footerFacebook"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
