/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import Link from "next/dist/client/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { siteSettings } from "../../config/site-setting";
import {
  faBars,
  faBriefcase,
  faCartShopping,
  faChain,
  faCircleQuestion,
  faDollarSign,
  faEnvelope,
  faFile,
  faHeadset,
  faKey,
  faLock,
  faPhone,
  faWallet,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../utils/auth-context";
import useTranslation from "next-translate/useTranslation";
import AuthBtn from "./AuthBtn";
import { useKeycloak } from "@react-keycloak/ssr";
import { isAuthenticated } from "../../utils/auth";
import { removeToken } from "../../utils/auth";
import Image from "next/image";

const productNavs = [
  {
    href: "/about-us",
    title: "About Us",
    desc: "Know about us.",
    icon: faBriefcase,
    svg: (
      <svg
        className="w-[48px] h-[48px]"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 48 48"
      >
        <polygon
          className="fill-[#89c2ff]"
          points="2.8,35.1 24.3,47.5 45.7,35.2 38.3,30.9 24.3,39.4 10,31 "
        />
        <polygon
          className="fill-[#007bfc] stroke-[#007bfc]"
          points="45.7,19.9 45.7,26.6 24.3,38.9 2.8,26.5 2.8,19.9 24.3,31.9 "
        />
        <polygon
          className="fill-[#007bfc] stroke-white"
          points="8.3,16.5 2.8,19.6 24.3,32 45.7,19.7 40,16.4 23.8,25.5 "
        />
        <polygon
          className="stroke-[#007bfc] fill-white"
          points="2.3,12.8 23.8,25.2 45.2,12.9 23.8,0.5 "
        />
        <path
          className="fill-[#007bfc] stroke-[#007bfc]"
          d="M23.9,7.6l5.7,3.4l2.1,1.2c0.1,0,0.1,0.1,0.1,0.2l-0.1,0.1L24,16.9
	c-0.1,0-0.2,0.1-0.3,0.1c-0.1,0-0.2,0-0.3-0.1l-7.7-4.4c-0.1,0-0.1-0.1-0.1-0.2l0.1-0.1L23.9,7.6z"
        />
        <path
          className="fill-[#007bfc] stroke-[#007bfc]"
          d="M37.6,13.1L37.6,13.1c0.1,0.2,0.4,0.4,0.8,0.5l0,0c0.8,0.1,1.6-0.3,1.3-0.8l0,0
	c-0.1-0.2-0.4-0.4-0.8-0.5l0,0C38.1,12.2,37.4,12.6,37.6,13.1z"
        />
        <path
          className="fill-[#007bfc] stroke-[#007bfc]"
          d="M7.5,13.1L7.5,13.1c0.1,0.2,0.4,0.4,0.8,0.5l0,0c0.8,0.1,1.6-0.3,1.3-0.8l0,0
	c-0.1-0.2-0.4-0.4-0.8-0.5l0,0C8,12.2,7.3,12.6,7.5,13.1z"
        />
        <path
          className="fill-[#007bfc] stroke-[#007bfc]"
          d="M22.7,21.5L22.7,21.5c0.1,0.2,0.4,0.4,0.8,0.5l0,0c0.8,0.1,1.6-0.3,1.3-0.8l0,0
	c-0.1-0.2-0.4-0.4-0.8-0.5l0,0C23.2,20.6,22.5,21,22.7,21.5z"
        />
        <path
          className="fill-[#007bfc] stroke-[#007bfc]"
          d="M22.7,4.2L22.7,4.2c0.1,0.2,0.4,0.4,0.8,0.5l0,0c0.8,0.1,1.6-0.3,1.3-0.8l0,0
	c-0.1-0.2-0.4-0.4-0.8-0.5l0,0C23.2,3.3,22.5,3.7,22.7,4.2z"
        />
      </svg>
    ),
  },
  {
    href: "/referral-program",
    title: "Affiliate",
    desc: "Affiliate & refferal program.",
    icon: faChain,
    svg: (
      <svg
        className="w-[48px] h-[48px]"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 48 48"
        alt="Vultr control panel"
      >
        <path
          className="stroke-[#007bfc] fill-white stroke-1-5"
          d="M29.3,10l1.7,7.1l-8.8-0.3l1.1,4.7 M26.9,11.4l-0.2,0.2l2.2-2.1l3.7,1.2"
        />
        <polygon
          className="fill-[#75b8ff]"
          points="0.5,33.7 24.5,47.1 47.3,33.8 39,28.8 24.5,36.8 10.1,28.7"
        />
        <path
          className="fill-[#007bfc] stroke-[#007bfc]"
          d="M0.5,24.2l24,13.4l22.9-13.4c-0.1-0.1-6.9-4.2-7-4.2c0,0-11,6.1-15.8,8.9c0,0-16-9-16-9C8.5,19.9,0.6,24.1,0.5,24.2z"
        />
        <polygon
          className="stroke-[#007bfc] fill-white"
          points="0.7,14.6 24.5,28.4 47.5,14.7 24.5,0.9 "
        />
        <g>
          <path
            className="fill-[#007bfc]"
            d="M12.2,13.8c0.6,0.3,0.5,0.9-0.2,1.3c-0.7,0.4-1.6,0.4-2.2,0.1c-0.6-0.3-0.5-0.9,0.2-1.3S11.6,13.4,12.2,13.8z"
          />
          <path
            className="fill-[#007bfc]"
            d="M15.5,11.8c0.6,0.3,0.5,0.9-0.2,1.3c-0.7,0.4-1.6,0.4-2.2,0.1s-0.5-0.9,0.2-1.3C14,11.5,15,11.5,15.5,11.8z"
          />
          <path
            className="fill-[#007bfc]"
            d="M18.9,9.8c0.6,0.3,0.5,0.9-0.2,1.3c-0.7,0.4-1.6,0.4-2.2,0.1c-0.6-0.3-0.5-0.9,0.2-1.3C17.4,9.6,18.4,9.5,18.9,9.8z"
          />
        </g>
      </svg>
    ),
  },
  {
    href: "/cart",
    title: "Cart",
    desc: "Go to your cart page.",
    icon: faCartShopping,
    svg: (
      <svg
        className="w-[48px] h-[48px]"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 48 48"
        alt="Have questions? Reach out to us."
      >
        <polygon
          className="fill-[#75b8ff]"
          points="24,46.2 0.5,33.4 9.3,28.7 24,35.9 38.4,28.7 47.5,33.6 "
        />
        <polygon
          className="fill-[#007bfc] stroke-[#007bfc]"
          points="24,36.9 0.5,24.1 8.8,19.7 25.6,29.3 40.5,20.5 47.5,24.3 "
        />
        <line
          className="fill-[#007bfc] stroke-[#007bfc] stroke-1-5"
          x1="26.3"
          y1="7.2"
          x2="37.4"
          y2="13.6"
        />
        <line
          className="fill-[#007bfc] stroke-[#007bfc] stroke-1-5"
          x1={23}
          y1="9.1"
          x2="34.1"
          y2="15.5"
        />
        <g>
          <line
            className="stroke-[#007bfc] fill-white"
            x1="40.3"
            y1="20.5"
            x2="39.4"
            y2="18.7"
          />
          <line
            className="stroke-[#007bfc] fill-white"
            x1="18.2"
            y1="6.5"
            x2="15.1"
            y2={6}
          />
          <polyline
            className="stroke-[#007bfc] fill-white"
            points="18.2,6.5 16,7.9 26.6,1.8 47.5,13.9 36.9,20.1"
          />
          <polyline
            className="stroke-[#007bfc] fill-white"
            points="25.7,29 40.2,20.6 20.6,17.3"
          />
          <polyline
            className="stroke-[#007bfc] fill-white"
            points="20.6,17.3 15,6.1 0.5,14.4"
          />
          <polyline
            className="stroke-[#007bfc] fill-white"
            points="0.5,14.4 13.1,21.7 25.7,29"
          />
          <line
            className="stroke-[#007bfc] fill-white"
            x1="5.8"
            y1="13.8"
            x2="17.8"
            y2="15.8"
          />
          <line
            className="stroke-[#007bfc] fill-white"
            x1="26.9"
            y1={26}
            x2="23.5"
            y2="19.1"
          />
        </g>
      </svg>
    ),
  },
  {
    href: "/checkout",
    title: "Check Out",
    desc: "Check out now.",
    icon: faWallet,
    svg: (
      <svg
        className="w-[48px] h-[48px]"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 48 48"
      >
        <polygon
          className="fill-[#75b8ff]"
          points="2.8,35.1 24.3,47.5 45.7,35.2 38.3,30.9 24.3,39.4 10,31 "
        />
        <polygon
          className="fill-[#007bfc] stroke-[#007bfc]"
          points="45.7,19.9 45.7,26.6 24.3,38.9 2.8,26.5 2.8,19.9 24.3,31.9 "
        />
        <polygon
          className="fill-[#007bfc] stroke-[#eee]"
          points="8.3,16.5 2.8,19.6 24.3,32 45.7,19.7 40,16.4 23.8,25.5 "
        />
        <polygon
          className="stroke-[#007bfc] fill-white"
          points="2.3,12.8 23.8,25.2 45.2,12.9 23.8,0.5 "
        />
        <path
          className="fill-[#007bfc] stroke-[#007bfc]"
          d="M23.9,7.6l5.7,3.4l2.1,1.2c0.1,0,0.1,0.1,0.1,0.2l-0.1,0.1L24,16.9
	c-0.1,0-0.2,0.1-0.3,0.1c-0.1,0-0.2,0-0.3-0.1l-7.7-4.4c-0.1,0-0.1-0.1-0.1-0.2l0.1-0.1L23.9,7.6z"
        />
        <path
          className="fill-[#007bfc] stroke-[#007bfc]"
          d="M37.6,13.1L37.6,13.1c0.1,0.2,0.4,0.4,0.8,0.5l0,0c0.8,0.1,1.6-0.3,1.3-0.8l0,0
	c-0.1-0.2-0.4-0.4-0.8-0.5l0,0C38.1,12.2,37.4,12.6,37.6,13.1z"
        />
        <path
          className="fill-[#007bfc] stroke-[#007bfc]"
          d="M7.5,13.1L7.5,13.1c0.1,0.2,0.4,0.4,0.8,0.5l0,0c0.8,0.1,1.6-0.3,1.3-0.8l0,0
	c-0.1-0.2-0.4-0.4-0.8-0.5l0,0C8,12.2,7.3,12.6,7.5,13.1z"
        />
        <path
          className="fill-[#007bfc] stroke-[#007bfc]"
          d="M22.7,21.5L22.7,21.5c0.1,0.2,0.4,0.4,0.8,0.5l0,0c0.8,0.1,1.6-0.3,1.3-0.8l0,0
	c-0.1-0.2-0.4-0.4-0.8-0.5l0,0C23.2,20.6,22.5,21,22.7,21.5z"
        />
        <path
          className="fill-[#007bfc] stroke-[#007bfc]"
          d="M22.7,4.2L22.7,4.2c0.1,0.2,0.4,0.4,0.8,0.5l0,0c0.8,0.1,1.6-0.3,1.3-0.8l0,0
	c-0.1-0.2-0.4-0.4-0.8-0.5l0,0C23.2,3.3,22.5,3.7,22.7,4.2z"
        />
      </svg>
    ),
  },
  {
    href: "/faq",
    title: "FAQ",
    desc: "FAQ.",
    icon: faCircleQuestion,
    svg: (
      <svg
        className="w-[48px] h-[48px]"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 48 48"
      >
        <polygon
          className="fill-[#75b8ff]"
          points="2.8,35.1 24.3,47.5 45.7,35.2 38.3,30.9 24.3,39.4 10,31 "
        />
        <polygon
          className="fill-[#007bfc] stroke-[#007bfc]"
          points="45.7,19.9 45.7,26.6 24.3,38.9 2.8,26.5 2.8,19.9 24.3,31.9 "
        />
        <polygon
          className="fill-[#007bfc] stroke-[#ddd]"
          points="8.3,16.5 2.8,19.6 24.3,32 45.7,19.7 40,16.4 23.8,25.5 "
        />
        <polygon
          className="stroke-[#007bfc] fill-white"
          points="2.3,12.8 23.8,25.2 45.2,12.9 23.8,0.5 "
        />
        <path
          className="fill-[#007bfc] stroke-[#007bfc]"
          d="M23.9,7.6l5.7,3.4l2.1,1.2c0.1,0,0.1,0.1,0.1,0.2l-0.1,0.1L24,16.9
	c-0.1,0-0.2,0.1-0.3,0.1c-0.1,0-0.2,0-0.3-0.1l-7.7-4.4c-0.1,0-0.1-0.1-0.1-0.2l0.1-0.1L23.9,7.6z"
        />
        <path
          className="fill-[#007bfc] stroke-[#007bfc]"
          d="M37.6,13.1L37.6,13.1c0.1,0.2,0.4,0.4,0.8,0.5l0,0c0.8,0.1,1.6-0.3,1.3-0.8l0,0
	c-0.1-0.2-0.4-0.4-0.8-0.5l0,0C38.1,12.2,37.4,12.6,37.6,13.1z"
        />
        <path
          className="fill-[#007bfc] stroke-[#007bfc]"
          d="M7.5,13.1L7.5,13.1c0.1,0.2,0.4,0.4,0.8,0.5l0,0c0.8,0.1,1.6-0.3,1.3-0.8l0,0
	c-0.1-0.2-0.4-0.4-0.8-0.5l0,0C8,12.2,7.3,12.6,7.5,13.1z"
        />
        <path
          className="fill-[#007bfc] stroke-[#007bfc]"
          d="M22.7,21.5L22.7,21.5c0.1,0.2,0.4,0.4,0.8,0.5l0,0c0.8,0.1,1.6-0.3,1.3-0.8l0,0
	c-0.1-0.2-0.4-0.4-0.8-0.5l0,0C23.2,20.6,22.5,21,22.7,21.5z"
        />
        <path
          className="fill-[#007bfc] stroke-[#007bfc]"
          d="M22.7,4.2L22.7,4.2c0.1,0.2,0.4,0.4,0.8,0.5l0,0c0.8,0.1,1.6-0.3,1.3-0.8l0,0
	c-0.1-0.2-0.4-0.4-0.8-0.5l0,0C23.2,3.3,22.5,3.7,22.7,4.2z"
        />
      </svg>
    ),
  },
  {
    href: "/about-us",
    title: "Pricing",
    desc: "Know about us.",
    icon: faDollarSign,
    svg: (
      <svg
        className="w-[48px] h-[48px]"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 48 48"
        alt="About Us"
      >
        <polygon
          className="fill-[#75b8ff]"
          points="3,35.4 24,47.5 45,35.4 36.6,30.5 24,38.2 11.6,30.4 "
        />
        <polygon
          className="fill-[#007bfc] stroke-[#007bfc]"
          points="3,30.8 24,43 45,30.8 36.6,26 36.5,29.9 23.4,37.1 11.5,29.7 11.3,26 "
        />
        <g>
          <polyline
            className="stroke-[#007bfc] fill-white"
            points="11.5,7.6 11.5,29.7 23.5,36.8 36.4,29.7 36.4,7.6"
          />
          <g>
            <polygon
              className="stroke-[#007bfc] fill-white"
              points="23.5,14.8 11.5,7.6 24.1,0.5 36.4,7.6"
            />
          </g>
        </g>
        <g>
          <polygon
            className="fill-[#007bfc]"
            points="29.4,15.2 26.2,17 26.2,21 29.4,19.1 29.4,15.2"
          />
          <polygon
            className="fill-[#007bfc]"
            points="33.9,12.7 30.8,14.5 30.8,18.5 34,16.6 34,12.7"
          />
          <polygon
            className="fill-[#007bfc]"
            points="29.4,21.5 26.2,23.4 26.2,27.3 29.4,25.5 29.4,21.5"
          />
          <polygon
            className="fill-[#007bfc]"
            points="33.9,19 30.8,20.9 30.8,24.8 34,23 34,19"
          />
        </g>
        <line
          className="fill-white stroke-[#007bfc]"
          x1="23.5"
          y1="14.8"
          x2="23.5"
          y2="36.4"
        />
      </svg>
    ),
  },
  {
    href: "/privacy",
    title: "Privacy",
    desc: "Privacy & policy.",
    icon: faLock,
    svg: (
      <svg
        className="w-[48px] h-[48px]"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 48 48"
        alt="Have questions? Reach out to us."
      >
        <polygon
          className="fill-[#75b8ff]"
          points="24,46.2 0.5,33.4 9.3,28.7 24,35.9 38.4,28.7 47.5,33.6 "
        />
        <polygon
          className="fill-[#007bfc] stroke-[#007bfc]"
          points="24,36.9 0.5,24.1 8.8,19.7 25.6,29.3 40.5,20.5 47.5,24.3 "
        />
        <line
          className="fill-[#007bfc] stroke-[#007bfc] stroke-1-5"
          x1="26.3"
          y1="7.2"
          x2="37.4"
          y2="13.6"
        />
        <line
          className="fill-[#007bfc] stroke-[#007bfc] stroke-1-5"
          x1={23}
          y1="9.1"
          x2="34.1"
          y2="15.5"
        />
        <g>
          <line
            className="stroke-[#007bfc] fill-white"
            x1="40.3"
            y1="20.5"
            x2="39.4"
            y2="18.7"
          />
          <line
            className="stroke-[#007bfc] fill-white"
            x1="18.2"
            y1="6.5"
            x2="15.1"
            y2={6}
          />
          <polyline
            className="stroke-[#007bfc] fill-white"
            points="18.2,6.5 16,7.9 26.6,1.8 47.5,13.9 36.9,20.1"
          />
          <polyline
            className="stroke-[#007bfc] fill-white"
            points="25.7,29 40.2,20.6 20.6,17.3"
          />
          <polyline
            className="stroke-[#007bfc] fill-white"
            points="20.6,17.3 15,6.1 0.5,14.4"
          />
          <polyline
            className="stroke-[#007bfc] fill-white"
            points="0.5,14.4 13.1,21.7 25.7,29"
          />
          <line
            className="stroke-[#007bfc] fill-white"
            x1="5.8"
            y1="13.8"
            x2="17.8"
            y2="15.8"
          />
          <line
            className="stroke-[#007bfc] fill-white"
            x1="26.9"
            y1={26}
            x2="23.5"
            y2="19.1"
          />
        </g>
      </svg>
    ),
  },
  {
    href: "/support",
    title: "Support",
    desc: "Get instant support 24/7.",
    icon: faHeadset,
    svg: (
      <svg
        className="w-[48px] h-[48px]"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 48 48"
      >
        <polygon
          className="fill-[#75b8ff]"
          points="2.8,35.1 24.3,47.5 45.7,35.2 38.3,30.9 24.3,39.4 10,31 "
        />
        <polygon
          className="fill-[#007bfc] stroke-[#007bfc]"
          points="45.7,19.9 45.7,26.6 24.3,38.9 2.8,26.5 2.8,19.9 24.3,31.9 "
        />
        <polygon
          className="fill-[#007bfc] stroke-[#ddd]"
          points="8.3,16.5 2.8,19.6 24.3,32 45.7,19.7 40,16.4 23.8,25.5 "
        />
        <polygon
          className="stroke-[#007bfc] fill-white"
          points="2.3,12.8 23.8,25.2 45.2,12.9 23.8,0.5 "
        />
        <path
          className="fill-[#007bfc] stroke-[#007bfc]"
          d="M23.9,7.6l5.7,3.4l2.1,1.2c0.1,0,0.1,0.1,0.1,0.2l-0.1,0.1L24,16.9
	c-0.1,0-0.2,0.1-0.3,0.1c-0.1,0-0.2,0-0.3-0.1l-7.7-4.4c-0.1,0-0.1-0.1-0.1-0.2l0.1-0.1L23.9,7.6z"
        />
        <path
          className="fill-[#007bfc] stroke-[#007bfc]"
          d="M37.6,13.1L37.6,13.1c0.1,0.2,0.4,0.4,0.8,0.5l0,0c0.8,0.1,1.6-0.3,1.3-0.8l0,0
	c-0.1-0.2-0.4-0.4-0.8-0.5l0,0C38.1,12.2,37.4,12.6,37.6,13.1z"
        />
        <path
          className="fill-[#007bfc] stroke-[#007bfc]"
          d="M7.5,13.1L7.5,13.1c0.1,0.2,0.4,0.4,0.8,0.5l0,0c0.8,0.1,1.6-0.3,1.3-0.8l0,0
	c-0.1-0.2-0.4-0.4-0.8-0.5l0,0C8,12.2,7.3,12.6,7.5,13.1z"
        />
        <path
          className="fill-[#007bfc] stroke-[#007bfc]"
          d="M22.7,21.5L22.7,21.5c0.1,0.2,0.4,0.4,0.8,0.5l0,0c0.8,0.1,1.6-0.3,1.3-0.8l0,0
	c-0.1-0.2-0.4-0.4-0.8-0.5l0,0C23.2,20.6,22.5,21,22.7,21.5z"
        />
        <path
          className="fill-[#007bfc] stroke-[#007bfc]"
          d="M22.7,4.2L22.7,4.2c0.1,0.2,0.4,0.4,0.8,0.5l0,0c0.8,0.1,1.6-0.3,1.3-0.8l0,0
	c-0.1-0.2-0.4-0.4-0.8-0.5l0,0C23.2,3.3,22.5,3.7,22.7,4.2z"
        />
      </svg>
    ),
  },
  {
    href: "/terms",
    title: "Terms",
    desc: "Terms & conditions.",
    icon: faFile,
    svg: (
      <svg
        className="w-[48px] h-[48px]"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 48 48"
        alt="About Us"
      >
        <polygon
          className="fill-[#75b8ff]"
          points="3,35.4 24,47.5 45,35.4 36.6,30.5 24,38.2 11.6,30.4 "
        />
        <polygon
          className="fill-[#007bfc] stroke-[#007bfc]"
          points="3,30.8 24,43 45,30.8 36.6,26 36.5,29.9 23.4,37.1 11.5,29.7 11.3,26 "
        />
        <g>
          <polyline
            className="stroke-[#007bfc] fill-white"
            points="11.5,7.6 11.5,29.7 23.5,36.8 36.4,29.7 36.4,7.6"
          />
          <g>
            <polygon
              className="stroke-[#007bfc] fill-white"
              points="23.5,14.8 11.5,7.6 24.1,0.5 36.4,7.6"
            />
          </g>
        </g>
        <g>
          <polygon
            className="fill-[#007bfc]"
            points="29.4,15.2 26.2,17 26.2,21 29.4,19.1 29.4,15.2"
          />
          <polygon
            className="fill-[#007bfc]"
            points="33.9,12.7 30.8,14.5 30.8,18.5 34,16.6 34,12.7"
          />
          <polygon
            className="fill-[#007bfc]"
            points="29.4,21.5 26.2,23.4 26.2,27.3 29.4,25.5 29.4,21.5"
          />
          <polygon
            className="fill-[#007bfc]"
            points="33.9,19 30.8,20.9 30.8,24.8 34,23 34,19"
          />
        </g>
        <line
          className="fill-white stroke-[#007bfc]"
          x1="23.5"
          y1="14.8"
          x2="23.5"
          y2="36.4"
        />
      </svg>
    ),
  },
];

const companyNavs = [
  {
    href: "",
    title: "Optimized Cloud",
    desc: "Optimized cloud without the noisy neighbours.",
    icon: faEnvelope,
    svg: (
      <svg
        className="h-[48px] w-[48px]"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 48 48"
      >
        <polygon
          className="fill-[#007bfc]"
          points="1.5,34.6 24,47.5 46.5,34.6 38,29.8 24,37.6 10.1,29.7			"
        />
        <polygon
          className="fill-[#cadefe] stroke-[#b2b9ce]"
          points="46.5,26.2 24,39.1 1.5,26.1 1.5,19.2 9.1,19.2 24,27.7 39.2,19.2 46.5,19.2		"
        />
        <polygon
          className="fill-[#007bfc] stroke-[#007bfc]"
          points="1.5,19.2 24,31.9 46.5,19.2 41.8,16.4 24,26.3 6.3,16.3"
        />
        <polygon
          className="stroke-[#007bfc] fill-white"
          points="1.5,13.4 24,26.3 46.4,13.4 24,0.5"
        />
        <path
          className="fill-[#007bfc]"
          d="M22.1,10.8c-0.1-0.6-0.4-1.1-1-1.4c-0.9-0.5-1.8-0.7-2.8-0.7c-0.5,0-1,0.1-1.5,0.2c-1,0.4-1.7,1-1.7,1.8c0,0.9,1,1.7,2.5,2c1.2,0.2,2.4-0.1,3.5-0.6C21.7,11.8,22.1,11.3,22.1,10.8z"
        />
        <path
          className="fill-[#007bfc]"
          d="M32.5,10.8c-0.1-0.6-0.4-1.1-1-1.4c-0.9-0.5-1.8-0.7-2.8-0.7c-0.5,0-1,0.1-1.5,0.2c-1,0.4-1.6,1-1.6,1.8c0,0.9,1,1.7,2.5,2c1.2,0.2,2.4-0.1,3.5-0.6C32,11.8,32.4,11.3,32.5,10.8z"
        />
        <path
          className="fill-[#007bfc]"
          d="M28.7,17.3c-0.1-0.6-0.4-1.1-1-1.4c-0.9-0.4-1.8-0.7-2.8-0.6c-0.5,0-1,0.1-1.6,0.2c-1,0.4-1.6,1-1.6,1.8c0,0.9,1,1.7,2.5,2c1.2,0.2,2.4-0.1,3.5-0.6C28.3,18.4,28.6,17.9,28.7,17.3z"
        />
        <polyline
          className="fill-[#007bfc]"
          points="19.7,10.6 29.1,10.6 25.4,17.2"
        />
      </svg>
    ),
  },
  {
    href: "",
    title: "Bare Metal",
    desc: "Dedicated servers with no virtualization.",
    icon: faHeadset,
    svg: (
      <svg
        className="w-[48px] h-[48px]"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 48 48"
        alt="Have questions? Reach out to us."
      >
        <polygon
          className="fill-[#75b8ff]"
          points="24,46.2 0.5,33.4 9.3,28.7 24,35.9 38.4,28.7 47.5,33.6 "
        />
        <polygon
          className="fill-[#007bfc] stroke-[#007bfc]"
          points="24,36.9 0.5,24.1 8.8,19.7 25.6,29.3 40.5,20.5 47.5,24.3 "
        />
        <line
          className="fill-[#007bfc] stroke-[#007bfc] stroke-1-5"
          x1="26.3"
          y1="7.2"
          x2="37.4"
          y2="13.6"
        />
        <line
          className="fill-[#007bfc] stroke-[#007bfc] stroke-1-5"
          x1={23}
          y1="9.1"
          x2="34.1"
          y2="15.5"
        />
        <g>
          <line
            className="stroke-[#007bfc] fill-white"
            x1="40.3"
            y1="20.5"
            x2="39.4"
            y2="18.7"
          />
          <line
            className="stroke-[#007bfc] fill-white"
            x1="18.2"
            y1="6.5"
            x2="15.1"
            y2={6}
          />
          <polyline
            className="stroke-[#007bfc] fill-white"
            points="18.2,6.5 16,7.9 26.6,1.8 47.5,13.9 36.9,20.1"
          />
          <polyline
            className="stroke-[#007bfc] fill-white"
            points="25.7,29 40.2,20.6 20.6,17.3"
          />
          <polyline
            className="stroke-[#007bfc] fill-white"
            points="20.6,17.3 15,6.1 0.5,14.4"
          />
          <polyline
            className="stroke-[#007bfc] fill-white"
            points="0.5,14.4 13.1,21.7 25.7,29"
          />
          <line
            className="stroke-[#007bfc] fill-white"
            x1="5.8"
            y1="13.8"
            x2="17.8"
            y2="15.8"
          />
          <line
            className="stroke-[#007bfc] fill-white"
            x1="26.9"
            y1={26}
            x2="23.5"
            y2="19.1"
          />
        </g>
      </svg>
    ),
  },
  {
    href: "",
    title: "Cloud Coumpute",
    desc: "VMs with fractional NVIDIA GPUs",
    icon: faKey,
    svg: (
      <svg
        className="w-[48px] h-[48px]"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        alt="cloud compute"
        viewBox="0 0 48 48"
      >
        <polygon
          className="fill-[#007bfc]"
          points="17.6,7.3 24.5,11.3 31.4,7.3 24.5,3.3"
        />
        <polygon
          className="fill-[#007bfc]"
          points="17.6,17.1 24.5,21.1 31.4,17.2 24.5,13.2"
        />
        <polygon
          className="fill-[#007bfc]"
          points="26.2,12.2 33.1,16.2 39.9,12.2 33.1,8.3"
        />
        <polygon
          className="fill-[#007bfc]"
          points="9.1,12.2 16,16.2 22.8,12.2 16,8.3"
        />
        <polygon
          className="fill-[#75b8ff]"
          points="3.5,35.7 24.5,47.4 44.5,35.7 37.2,31.3 24.5,38.4 11.9,31.3"
        />
        <path
          className="fill-[#007bfc] stroke-[#007bfc]"
          d="M3.5,28.2l21,11.7l20-11.7c-0.1-0.1-6-3.7-6.1-3.7c0,0-9.6,5.3-13.9,7.8c0,0-14-7.9-14-7.9C10.5,24.5,3.5,28.2,3.5,28.2z"
        />
        <polyline
          className="stroke-[#007bfc] fill-white"
          points="44.5,12.8 44.5,20.3 24.5,32.2 3.5,20.2 3.5,12.8"
        />
        <polygon
          className="stroke-[#007bfc] fill-white"
          points="3.8,12.6 24.5,24.5 44.5,12.6 24.5,0.6"
        />
      </svg>
    ),
  },
  {
    href: "",
    title: "Load Balancers",
    desc: "Horizantal scaling, simplified.",
    icon: faPhone,
    svg: (
      <svg
        className="w-[48px] h-[48px]"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        alt="careers at vultr"
        viewBox="0 0 48 48"
      >
        <path
          className="fill-[#75b8ff]"
          d="M22.4,47.1L4.1,37.2c-2-1.1-2-2.9,0-4L10,30c0,0-0.7,2-0.3,2.8c1.5,3.1,12.1,7.3,12.1,7.3c2.8,0.4,3.3,0.3,4.9-0.1c0,0,10.3-5.7,11.3-6.7s0.2-3.1,0.2-3.1l5.7,3.1c2,1.1,2,2.9,0,4l-18.2,9.7C24.7,47.6,23.4,47.6,22.4,47.1z"
        />
        <path
          className="fill-[#007bfc] stroke-[#007bfc]"
          d="M22.4,40.4L4.1,30.5c-2-1.1-2-2.9,0-4l5.5-3c0,0-0.4,1.9,0.3,2.5c2.3,1.8,11.7,6.7,11.7,6.7c2.8,0.4,3.4,0.5,4.9,0.1c0,0,10.3-5.7,11.3-6.7s0.5-2.4,0.5-2.4l5.4,2.9c2,1.1,2,2.9,0,4l-18.2,9.7C24.7,41,23.4,41,22.4,40.4z"
        />
        <path
          id="Kształt_8_kopia_19_"
          className="fill-[#007bfc]"
          d="M30.4,26.4c0,0.1-0.1,0.1-0.2,0.1l-1.8-0.3c-0.1,0-0.1-0.1-0.1-0.2l-1.8-10.4l-2.9-1.7c-0.1,0,1.2-0.3,2.4-1c0.8-0.5,1.8-0.7,1.8-0.6l-0.3,2.9l3.7,7.8c0,0.1,0,0.2,0,0.3l-0.7,2.9C30.5,26.3,30.5,26.3,30.4,26.4z"
        />
        <path
          className="stroke-[#007bfc] fill-white"
          d="M19.5,11.7c-5.5,1.9-9.5,6.9-9.7,13c0,0.1,0.1,1.2,0.7,1.5l10.7,6.4c1,0.6,4.6,0.5,5.8-0.2l10.4-6c0.6-0.3,0.9-0.8,0.9-1.2h0c0-6.3-4.1-11.7-9.8-13.5"
        />
        <circle
          className="stroke-[#007bfc] fill-white"
          cx="24.1"
          cy="6.9"
          r="6.4"
        />
      </svg>
    ),
  },
];

export default function Header() {
  const { t, lang } = useTranslation("common");
  const { keycloak } = useKeycloak();

  const router = useRouter();
  // const [showHead, setShowHead] = useState(true);
  const [scroll, setScroll] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [showMobilePages, setShowMobilePages] = useState(false);
  const [loggedIn, setIsLoggedIn] = useState(false);
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1023) {
        setToggle(false);
      }
    });
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  });

  useEffect(() => {
    if (isAuthenticated()) {
      setIsLoggedIn(true);
    }
  }, []);
  function loginUser() {
    if (keycloak) {
      window.location.href = keycloak.createLoginUrl({
        redirectUri:
          window.location.origin +
          "/" +
          lang +
          "/dashboard/redirect?url=" +
          (router.query.url ? router.query.url : ""),
        locale: lang ? lang : "en",
      });
    }
  }
  function logoutUser() {
    if (typeof window !== "undefined") {
      if (keycloak) {
        removeToken();
        setUser({});
        window.location.href = keycloak.createLogoutUrl({
          redirectUri: window.location.origin + "/" + lang,
        });
      }
    }
  }

  return (
    <div>
      {/* Navbar */}
      <div
        className={`w-full fixed  z-10  min-h-[12vh] border-gray-300 ${
          scroll || router.pathname !== "/"
            ? "bg-dark-blue shadow"
            : `"bg-transparent"}`
        }`}
      >
        <div className="container mx-auto w-full">
          <div className="flex items-center justify-between align-middle w-full ">
            <Link href="/">
              <Image
                width={100}
                height={70}
                className="w-[100px] py-3"
                src="/images/logo.png"
                alt="Logo"
              />
            </Link>
            <div className="flex flex-1 align-middle justify-center">
              {toggle === false ? (
                <button
                  className="navToggleBtn"
                  onClick={() => setToggle(true)}
                >
                  <FontAwesomeIcon icon={faBars} />
                </button>
              ) : null}
              <ul className="navMenu">
                <li className="nav-item p-2 mx-5">
                  <Link href="/">
                    <a
                      className={`nav-link text-white p-0 text-base ${
                        router.pathname === "/"
                          ? "font-bold underline underline-offset-8 text-lg"
                          : null
                      }`}
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li className="group nav-item px-2 mx-5">
                  <div className="inline-block text-left py-2 relative">
                    <div>
                      <button
                        type="button"
                        // hover:text-lg
                        className="inline-flex justify-center w-full shadow-base px-4 py-5 bg-transparent text-base font-medium text-white focus:outline-none"
                        id="menu-button"
                      >
                        {t("Products")}
                        <svg
                          className="-mr-1 ml-2 h-5 w-5 my-auto"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>

                    {/* Dropdown for Pages */}

                    <div
                      className="hidden mt-2 group-hover:grid gap-1 grid-cols-2 p-2 text-black absolute -left-20 w-[600px] rounded-lg shadow-lg bg-white focus:outline-none"
                      id="menu-dropdown"
                    >
                      <div className="w-4 h-4 rotate-45 absolute -top-1 left-[175px] z-1  bg-white"></div>

                      {productNavs.map((itm) => (
                        <Link href={itm.href} key={itm.title}>
                          <div className="p-5  relative z-2 rounded-lg hover:bg-gray-100 text-gray-500 flex space-x-5 items-center">
                            {itm.svg}
                            <div>
                              <p className="font-bold  mb-1">{itm.title}</p>
                              <p className="text-xs ">{itm.desc}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
                <li className="nav-item p-2 mx-5">
                  <Link href="/marketplace">
                    <a
                      className={`nav-link text-white p-0 text-base ${
                        router.pathname === "/marketplace"
                          ? "font-bold underline underline-offset-8 text-lg"
                          : null
                      }`}
                    >
                      {t("Marketplace")}
                    </a>
                  </Link>
                </li>
                <li className="nav-item p-2 mx-5">
                  <Link href="/about-us">
                    <a
                      className={`nav-link text-white p-0 text-base ${
                        router.pathname === "/about-us"
                          ? "font-bold underline underline-offset-8 text-lg"
                          : null
                      }`}
                    >
                      {t("Pricing")}
                    </a>
                  </Link>
                </li>
                {/* company */}

                <li className="group nav-item px-2 mx-5">
                  <div className="inline-block text-left py-2 relative">
                    <div>
                      <button
                        type="button"
                        // hover:text-lg
                        className="inline-flex justify-center w-full shadow-base px-4 py-5 bg-transparent text-base font-medium text-white focus:outline-none"
                        id="menu-button"
                      >
                        {t("Company")}
                        <svg
                          className="-mr-1 ml-2 h-5 w-5 my-auto"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>

                    {/* Dropdown for company */}
                    <div
                      className="hidden mt-2 group-hover:grid gap-1 grid-cols-2 p-2 text-black absolute -right-20 w-[600px] rounded-lg shadow-lg bg-white focus:outline-none"
                      id="menu-dropdown"
                    >
                      <div className="w-4 h-4 rotate-45 absolute -top-1 right-[95px] z-1  bg-white"></div>

                      {companyNavs.map((itm) => (
                        <Link href={itm.href} key={itm.title}>
                          <div className="p-5  relative z-2 rounded-lg hover:bg-gray-100 text-gray-500 flex space-x-5 items-center">
                            {itm.svg}

                            <div>
                              <p className="font-bold  mb-1">{itm.title}</p>
                              <p className="text-xs ">{itm.desc}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
                <li className="nav-item p-2 mx-5">
                  <Link href="/contact">
                    <a
                      className={`nav-link text-white p-0 text-base ${
                        router.pathname === "/contact"
                          ? "font-bold underline underline-offset-8 text-lg"
                          : null
                      }`}
                    >
                      {t("Contact")}
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:mr-14">
              <AuthBtn authenticated={loggedIn} setUser={() => setUser({})} />
            </div>
          </div>
        </div>
        {toggle ? (
          <div className="navModal">
            <button onClick={() => setToggle(false)}>
              <FontAwesomeIcon
                className="text-white w-[20px] top-5 right-5 absolute"
                icon={faXmark}
              />
            </button>
            <ul className="navModalMenu">
              <li className="nav-item p-2 mx-5">
                <Link href="/">
                  <a
                    onClick={() => setToggle(false)}
                    className={`nav-link text-white p-0 text-base ${
                      router.pathname === "/"
                        ? "font-bold underline underline-offset-8 text-lg"
                        : null
                    }`}
                  >
                    {t("Home")}
                  </a>
                </Link>
              </li>
              <li
                className="nav-item p-2 mx-5 w-[90%]"
                onClick={() => setShowMobilePages(!showMobilePages)}
              >
                <div className="inline-block text-left w-full">
                  <div>
                    <button
                      type="button"
                      className="inline-flex w-full shadow-base bg-transparent text-sm font-medium text-white focus:outline-none"
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                    >
                      {t("Products")}
                      <svg
                        className="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  {/* Dropdown for Pages */}
                  {showMobilePages ? (
                    <div
                      className="mt-2 origin-bottom-right w-full rounded-md shadow-lg bg-white ring-1 focus:outline-none"
                      id="menu-dropdown"
                    >
                      <div className="flex flex-col align-middle w-full p-5">
                        <div className="flex flex-col align-middle justify-between">
                          {siteSettings?.headerMenuItems.map((parent, j) => {
                            return (
                              <div key={j}>
                                {parent.map((item, i) => {
                                  return (
                                    <Link href={item.href} key={i}>
                                      <p className="flex align-middle gap-2 text-black text-base font-normal h-14 w-full border-b-[0.5px] border-black-100">
                                        <FontAwesomeIcon
                                          className="my-auto"
                                          color="black"
                                          icon={item.icon}
                                        />
                                        <span className="my-auto">
                                          {t(item.label)}
                                        </span>
                                      </p>
                                    </Link>
                                  );
                                })}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              </li>
              <li className="nav-item p-2 mx-5">
                <Link href="/marketplace">
                  <a
                    onClick={() => setToggle(false)}
                    className={`nav-link text-white p-0 text-base ${
                      router.pathname === "/marketplace"
                        ? "font-bold underline underline-offset-8 text-lg"
                        : null
                    }`}
                  >
                    {t("Marketplace")}
                  </a>
                </Link>
              </li>
              <li className="nav-item p-2 mx-5">
                <Link href="/about-us">
                  <a
                    onClick={() => setToggle(false)}
                    className={`nav-link text-white p-0 text-base ${
                      router.pathname === "/about-us"
                        ? "font-bold underline underline-offset-8 text-lg"
                        : null
                    }`}
                  >
                    {t("Pricing")}
                  </a>
                </Link>
              </li>
              <li className="nav-item p-2 mx-5">
                <Link href="/contact">
                  <a
                    onClick={() => setToggle(false)}
                    className={`nav-link text-white p-0 text-base ${
                      router.pathname === "/contact"
                        ? "font-bold underline underline-offset-8 text-lg"
                        : null
                    }`}
                  >
                    {t("Contact")}
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}
