import React from "react";
import ChooseServerMain from "../../components/Checkout/Checkout-v1/ChooseServer/ChooseServerMain";
import Layout from "../../components/Landing/Layout";
import { parseContextCookie } from "../../utils/parse-cookie";

export const getServerSideProps = async (context) => {
  const cookies = parseContextCookie(context?.req?.headers?.cookie);
  if (!cookies?.token) {
    return { redirect: { destination: '/'+context.locale+"/login-redirect?url="+context.resolvedUrl, permanent: false } };
  }
  return {
    props: {
      cookies: parseContextCookie(context?.ctx?.req),
    },
  };
};

export default function index() {
  return (
    <>
      <ChooseServerMain />
    </>
  );
}
index.Layout = Layout;
