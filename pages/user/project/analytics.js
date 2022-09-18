import React from "react";
import ProjectLayout from "../../../components/Dashboard/Project/ProjectLayout";

import { parseContextCookie } from "../../../utils/parse-cookie";

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

export default function analytics() {
  return (
    <>
      <div className="p-24">
        <h1>Page under development</h1>
      </div>
    </>
  );
}
analytics.Layout = ProjectLayout;
