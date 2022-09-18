import React, { useState } from "react";
import { useKeycloak } from "@react-keycloak/ssr";
import useTranslation from "next-translate/useTranslation";
import { removeToken } from "../../utils/auth";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { AvatarMenu } from "../Dashboard/Utils/Menu";

export default function AuthBtn({ authenticated, setUser }) {
  const router = useRouter();
  const { keycloak } = useKeycloak();
  const { t, lang } = useTranslation("common");

  const [showDropdown, setShowDropdown] = useState(false);

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
    if (keycloak) {
      removeToken();
      setUser({});
      window.location.href = keycloak.createLogoutUrl({
        redirectUri: window.location.origin + "/" + lang,
      });
    }
  }

  return authenticated ? (
    <AvatarMenu />
  ) : (
    <div className="flex flex-row items-center justify-end">
      <div
        onClick={() => loginUser()}
        className="color-white cursor-pointer hover:opacity-90"
      >
        {/* <TbUserCircle color="white" size={32} /> */}
        <FontAwesomeIcon
          icon={faCircleUser}
          color="white"
          className="text-3xl"
        />
      </div>
    </div>
  );
}
