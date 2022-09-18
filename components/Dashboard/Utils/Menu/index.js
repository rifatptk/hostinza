import React, { Fragment } from "react";
import { Transition, Menu } from "@headlessui/react";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useKeycloak } from "@react-keycloak/ssr";
import { removeToken } from "../../../../utils/auth";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function MenuSelect({ tablehead, clickone, clicktwo }) {
  const { t } = useTranslation("common");
  const arr = ["Add Domain", "Transfer In", "Move Selected", "Delete Selected"];
  const arrtwo = ["View DNS Records & more", "Move", "Delete"];

  return (
    <Menu as="div" className=" inline-block text-left z-20">
      <div>
        <Menu.Button className="">
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            className="text-lg cursor-pointer"
            // className="ml-5 text-dark-blue-2 cursor-pointer"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right fixed right-10 mt-2 px-[4px] py-1 w-56 rounded-md shadow-lg bg-[#FAFAFA] ring-1 ring-black ring-opacity-5 focus:outline-none font-poppins">
          <div className="py-1">
            {tablehead ? (
              <>
                {arr?.map((item, index) => {
                  return (
                    <Menu.Item key={index}>
                      {({ active }) => (
                        <a
                          onClick={
                            item == "Transfer In"
                              ? clickone
                              : item == "Add Domain"
                              ? clicktwo
                              : () => {}
                          }
                          className={classNames(
                            active
                              ? "bg-gray-200 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          {item}
                        </a>
                      )}
                    </Menu.Item>
                  );
                })}
              </>
            ) : (
              <>
                {arrtwo?.map((item, index) => {
                  return (
                    <Menu.Item key={index}>
                      {({ active }) => (
                        <a
                          onClick={
                            item == "Move"
                              ? clickone
                              : item == "Delete"
                              ? clicktwo
                              : () => {}
                          }
                          className={classNames(
                            active
                              ? "bg-gray-200 text-gray-900"
                              : `${
                                  index == 2 ? "text-red-500" : "text-gray-700"
                                }`,
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          {item}
                        </a>
                      )}
                    </Menu.Item>
                  );
                })}
              </>
            )}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export function AvatarMenu() {
  const { t, lang } = useTranslation("common");
  const { keycloak } = useKeycloak();

  function logoutUser() {
    if (keycloak) {
      removeToken();
      window.location.href = keycloak.createLogoutUrl({
        redirectUri: window.location.origin + "/" + lang,
      });
    }
  }

  return (
    <Menu as="div" className="  text-left z-20">
      <div>
        <Menu.Button className="">
          <div className="w-8 rounded-full homeHeroGradient h-8 ml-3 cursor-pointer"></div>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute  right-5 mt-2   w-56 rounded-md shadow-lg bg-[#FAFAFA] ring-1 ring-black ring-opacity-5 focus:outline-none font-poppins">
          <div className="border-gray-300 border-b-[1px] group">
            <div className="py-3 px-4  cursor-pointer">
              <Link href="/profile">
                <p className="text-dark-blue-2 group-hover:opacity-70 transition duration-200">
                  {t("Profile")}
                </p>
              </Link >
            </div>
          </div>
          <div className="py-3 px-4  cursor-pointer group">
            <Link href="/dashboard">
              <p className="text-dark-blue-2 group-hover:opacity-70 transition duration-200">
                {t("Dashboard")}
              </p>
            </Link>
          </div>
          <div className="border-gray-300 border-b-[1px] ">
            <div className="py-3 px-4 fcursor-pointer flex align-middle justify-between group">
              <Link href="/dashboard">
                <p className="self-center text-dark-blue-2 group-hover:opacity-70 transition duration-200">
                  {t("New Team")}{" "}
                </p>
              </Link >
              <p className="self-center text-md text-dark-blue-2 group-hover:opacity-70 transition duration-200">
                +
              </p>
            </div>
            <div className="py-3 px-4  cursor-pointer group">
            <Link href="/settings">
              <p className="text-dark-blue-2 group-hover:opacity-70 transition duration-200">
                {t("Settings")}
              </p>
            </Link>
            </div>
          </div>
          <div className="border-gray-300 border-b-[1px] group">
            <div className="py-3 px-4  cursor-pointer">
              <Link href="/support">
                <p className="text-dark-blue-2 group-hover:opacity-70 transition duration-200">
                  {t("Help & Support")}
                </p>
              </ Link>
            </div>
          </div>
          <div className="border-gray-300 border-b-[1px] group">
            <div className="py-3 px-2 fcursor-pointer flex align-middle justify-between ">
              <p className="self-center text-dark-blue-2 group-hover:opacity-70 transition duration-200">
                Command Menu
              </p>
              <p className="self-center text-md text-dark-blue-2 group-hover:opacity-70 transition duration-200">
                <span className="border-[1px] border-gray-400 py-0.5 px-1 rounded-md text-sm">
                  Ctrl
                </span>{" "}
                <span className="border-[1px] border-gray-400 py-0.5 px-1 rounded-md text-sm">
                  K
                </span>
              </p>
            </div>
          </div>
          <div className="">
            <div
              className="py-3 px-4  cursor-pointer group"
              onClick={() => logoutUser()}
            >
              <p className="text-dark-blue-2 group-hover:opacity-70 transition duration-200">
                {t("Logout")}
              </p>
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
