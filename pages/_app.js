import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { SSRKeycloakProvider, SSRCookies } from "@react-keycloak/ssr";
import cookie from "cookie";
import * as React from "react";
import { useState} from "react";
import AuthContext from "../utils/auth-context";

const Noop = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps, cookies }) {


  const Layout = (Component).Layout || Noop;
  const [user, setUser] = useState({});
  const value = { user, setUser };

  const keycloakCfg = {
    url: process.env.NEXT_PUBLIC_AUTH_URL,
    realm: process.env.NEXT_PUBLIC_AUTH_REALM,
    clientId: process.env.NEXT_PUBLIC_AUTH_CLIENT_ID,
  };
  return (
    <>
        <AuthContext.Provider value={value}>
          <SSRKeycloakProvider
            keycloakConfig={keycloakCfg}
            persistor={SSRCookies(cookies)}
          >
            <Layout {...pageProps}>
              <Component {...pageProps} />
            </Layout>
          </SSRKeycloakProvider>
        </AuthContext.Provider>
    </>
  );
}
function parseCookies(req) {
  if (!req || !req.headers) {
    return {};
  }
  return cookie.parse(req.headers.cookie || "");
}

export async function getStaticProps(context) {
  return {
    props: {
      cookies: parseCookies(context?.ctx?.req),
    },
  };
}
export default MyApp;
