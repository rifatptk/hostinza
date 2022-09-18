import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import useTranslation from "next-translate/useTranslation";

export default function NetworkMap() {
  const { t } = useTranslation("common");

  return (
    <div>
      <div className="hidden lg:block py-16 w-full">
        <div className="w-[85%] h-[450px] mx-auto relative">
          <Image src={"/images/map.png"} layout="fill" alt="NetworkMap" />
          <div className="location-Saudi">
            <div className="location-button">
              <div className="location-button-outer"></div>
              <div className="location-button-inner"></div>
            </div>
            <div className="message">{t("Saudi Arabia")}</div>
          </div>
          <div className="location-brazil">
            <div className="location-button">
              <div className="location-button-outer"></div>
              <div className="location-button-inner"></div>
            </div>
            <div className="message">{t("Brazil")}</div>
          </div>
          <div className="location-usa">
            <div className="location-button">
              <div className="location-button-outer"></div>
              <div className="location-button-inner"></div>
            </div>
            <div className="message">{t("United States of America")}</div>
          </div>
          <div className="location-russia">
            <div className="location-button">
              <div className="location-button-outer"></div>
              <div className="location-button-inner"></div>
            </div>
            <div className="message">{t("Russia")}</div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-wrap align-middle justify-evenly gap-5 lg:hidden p-5">
        <div className="w-full max-w-[320px] flex flex-col p-5">
          <h4 className="text-xl font-bold leading-relaxed text-black my-2">
            {t("South Carolina Data Center")}
          </h4>
          <p className="text-base text-black my-2">
            {t("4708 Ocello Street,")}
            <br />
            {t("California")}
            <br />
            {t("USA")}
          </p>
        </div>
        <div className="w-full max-w-[320px] flex flex-col p-5">
          <h4 className="text-xl font-bold leading-relaxed text-black my-2">
            {t("South Carolina Data Center")}
          </h4>
          <p className="text-base text-black my-2">
            {t("4708 Ocello Street,")}
            <br />
            {t("California")}
            <br />
            {t("USA")}
          </p>
        </div>
        <div className="w-full max-w-[320px] flex flex-col p-5">
          <h4 className="text-xl font-bold leading-relaxed text-black my-2">
            {t("South Carolina Data Center")}
          </h4>
          <p className="text-base text-black my-2">
            {t("4708 Ocello Street,")}
            <br />
            {t("California")}
            <br />
            {t("USA")}
          </p>
        </div>
        <div className="w-full max-w-[320px] flex flex-col p-5">
          <h4 className="text-xl font-bold leading-relaxed text-black my-2">
            {t("South Carolina Data Center")}
          </h4>
          <p className="text-base text-black my-2">
            {t("4708 Ocello Street,")}
            <br />
            {t("California")}
            <br />
            {t("USA")}
          </p>
        </div>
      </div>
    </div>
  );
}
