import {
  faBriefcase,
  faCartShopping,
  faChain,
  faCircleQuestion,
  faDollar,
  faFile,
  faHeadset,
  faLock,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

export const siteSettings = {
  name: "Hostinza",
  description:
    "Hostinza, Share processes and data securely on a need to know basis without the need for reconciliation it combines a permissione.",
  logo: {
    url: "/images/logo.png",
    alt: "hostinza-next.vercel.app",
    href: "/",
    width: 800,
    height: 600,
  },

  defaultLanguage: "en",
  currencyCode: "USD",

  author: {
    name: "",
    websiteUrl: "",
    address: ``,
    phone: "",
    social: [],
  },

  headerMenuItems: [
    [
      {
        href: "/about-us",
        label: "About Us",
        icon: faBriefcase,
      },
      {
        href: "/referral-program",
        label: "Affiliate",
        icon: faChain,
      },
      {
        href: "/cart",
        label: "Cart",
        icon: faCartShopping,
      },
    ],
    [
      {
        href: "/checkout",
        label: "Check Out",
        icon: faWallet,
      },
      {
        href: "/faq",
        label: "FAQ",
        icon: faCircleQuestion,
      },
      {
        href: "/about-us",
        label: "Pricing",
        icon: faDollar,
      },
    ],
    [
      {
        href: "/privacy",
        label: "Privacy",
        icon: faLock,
      },
      {
        href: "/support",
        label: "Support",
        icon: faHeadset,
      },
      {
        href: "/terms",
        label: "Terms",
        icon: faFile,
      },
    ],
  ],

  companyMenuItems: [
    [
      {
        href: "/about-us",
        label: "About Us",
        icon: faBriefcase,
      },
      {
        href: "/our-team",
        label: "Our Team",
        icon: faChain,
      },
      {
        href: "/career",
        label: "Career",
        icon: faCartShopping,
      },
    ],
    [
      {
        href: "/news",
        label: "News",
        icon: faWallet,
      },
      {
        href: "/sla",
        label: "SLA",
        icon: faCircleQuestion,
      },
      {
        href: "/contact",
        label: "Contact",
        icon: faDollar,
      },
    ],
  ],
};
