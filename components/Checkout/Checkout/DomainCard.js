import React from "react";
import useTranslation from "next-translate/useTranslation";

const DomainCard = (props) => {
  const { t } = useTranslation("common");

  const domainName = props.domainName || "myDomain.com";
  const domainInfo =
    props.domainInfo ||
    "Register the right domain and protect your identity online.";
  const domainPrice = props.domainPrice || "$450.50";
  const renewalPrice = props.renewalPrice || "$27.99";
  const badge = props.badge || false;
  const domainTags = props.domainTags;

  return (
    <div>
      {/* Domain Card 1 */}
      <div className="w-full flex flex-wrap md:flex-nowrap md:gap-10 align-middle justify-between p-5 rounded-xl border bg-light-gray hover:bg-gray-100 cursor-pointer mt-5">
        <div className="w-full md:w-fit flex flex-col md:flex-row gap-2 md:gap-5">
          <input
            className="w-5 h-5 my-auto hidden"
            type={"radio"}
            name="checkDomainReg"
          />
          <div className="flex flex-col align-top my-auto">
            <p className="text-xl md:text-2xl font-normal text-black">
              {t(domainName)}
            </p>
            <p className="text-sm font-normal text-gray-500 mb-2">{t(domainInfo)}</p>{" "}
            <div className="flex flex-wrap align-middle gap-2 w-fit text-xs  text-gray-500 mt-2">
              {domainTags && Object.keys(domainTags).map((key) => (
                <span
                  key={domainTags[key]}
                  className="px-2 py-1 bg-gray-200 rounded-md"
                >
                  {t(domainTags[key])}
                </span>
              ))}

            </div>
          </div>
        </div>
        <div className="my-auto flex flex-col align-middle md:align-bottom h-auto w-full md:w-auto mt-5 md:mt-0 flex-shrink-0">
          <p className="text-xl md:text-2xl font-semibold text-black mt-5 md:mt-1 ml-auto mr-auto md:mr-0">
            {t(domainPrice)}{" "}
          </p>
          <p className="text-sm font-normal mt-1 ml-auto mr-auto md:mr-0 text-gray-500">
            <span className="mr-2">{t("+VAT/1st year,")}</span>
            {t(`For renewal ${renewalPrice}  + VAT`)}
          </p>
          {badge && (
            <p className="w-fit ml-auto mr-auto md:mr-0 px-3 py-0 mt-1 rounded-full text-xs font-normal text-white bg-gradient-to-r from-green-600 to-green-300">
              {t("Special Offer")}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DomainCard;
