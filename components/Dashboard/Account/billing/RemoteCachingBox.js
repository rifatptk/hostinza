import React from "react";
import useTranslation from "next-translate/useTranslation";

export default function RemoteCachingBox() {
    const { t } = useTranslation("common");
  return (
    <div className="w-[100%] border-[1px] border-dark-blue-2 my-6    rounded-md  ">
      <div className={`w-full py-1 font-poppins relative px-6 xs:px-3`}>
        <div className=" py-2">
          <h5 className="text-dark-blue-2 text-lg font-semibold py-2">
            Remote Caching
          </h5>
          <p className="text-dark-blue-2 text-md opacity-70 pb-2 pt-1">
            {t("Allows you to share a cache of artifacts to optimize speed")}.
          </p>
        </div>
        <div className=" w-full border-[1px] rounded-md border-dark-blue-2 flex align-middle justify-between  px-3 py-2 ">
          <div>
            <p className="font-semibold text-sm text-dark-blue-2">
              Remote Caching
            </p>
            <p className="font-light text-xs text-dark-blue-2 mt-1">
              Remote caching {t("allows you to share a single cache across multiple machines")}.
            </p>
          </div>
          <div className="self-center">
            <label
              htmlFor="default-toggle"
              className="inline-flex relative items-center cursor-pointer"
            >
              <input
                type="checkbox"
                value=""
                id="default-toggle"
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:bg-light-blue  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-light-blue"></div>
            </label>
          </div>
        </div>
      </div>
      <div className=" w-full border-t-[1px] border-dark-blue-2 mt-3  px-6 py-4 ">
        <p className="text-sm text-dark-blue-2 font-medium self-center">
          {t("Learn more about")}{" "}
          <span className="text-link-color">
            <a>Remote Caching</a>
          </span>
        </p>
      </div>
    </div>
  );
}
