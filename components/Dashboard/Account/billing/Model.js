import { Fragment, useRef, useState, useContext, useEffect } from "react"; 
import Image from 'next/image';
import { Dialog, Transition } from "@headlessui/react";
import { faFolder,faCircleInfo, faChevronDown, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from "../../Utils/Tooltip";
import useTranslation from "next-translate/useTranslation";
import AuthContext from "../../../../utils/auth-context";
import { getUser } from "../../../../utils/auth";

export function TeamModel({ state, setstate }) {
  // const [open, setOpen] = useState(true)
  const { t } = useTranslation("common");
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={state} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setstate}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4  sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all  sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 py-8 sm:p-6 sm:pb-4 border-b-[1px] border-gray-200">
                  <h2 className="text-2xl font-semibold text-center  text-dark-blue-2">
                  {t("Create Team")}
                  </h2>
                </div>
                <div className="bg-white px-5 py-3 ">
                  <p className="text-sm font-light text-justify  text-dark-blue-2">
                    {t("Collaborate with others and take advantage of increased build concurrency, performance analytics, security features, and more")}  
                    {t("To get started, name your new team:")}
                  </p>
                </div>
                <div className="bg-white px-5  py-3">
                  <label
                    htmlFor="team_name"
                    className="block mb-2 text-sm font-medium text-dark-blue-2 opacity-80 "
                  >
                    {t("Team Name")}
                  </label>
                  <input
                    type="text"
                    id="team_name"
                    className="bg-[#ffffff] border-gray-500 border-[2px] text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-dark-blue-2 text-base font-medium text-white hover:opacity-80 transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-blue-2 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setstate(false)}
                  >
                    {t("Save")}
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none transition duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setstate(false)}
                    ref={cancelButtonRef}
                  >
                    {t("Cancel")}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
export function PaymentModel({ state, setstate }) {
  // const [open, setOpen] = useState(true)
  const { t } = useTranslation("common");
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={state} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setstate}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4  sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all  sm:max-w-lg xs:w-[95%] sm:w-full">
                <div className="bg-white px-4 py-8 sm:p-6 sm:pb-4 border-b-[1px] border-gray-200">
                  <h2 className="text-2xl font-semibold text-center  text-dark-blue-2">
                    {t("Add a Card")}
                  </h2>
                </div>
                <div className="bg-white px-5 py-3 ">
                  <p className="text-sm font-light text-justify  text-dark-blue-2">
                  {t("Add a payment method for")}
                  </p>
                </div>
                <div className="bg-white px-5  py-3">
                  <label
                    htmlFor="team_name"
                    className="block mb-2 text-sm font-medium text-dark-blue-2 opacity-80 "
                  >
                    {t("Card Number")}
                  </label>
                  <input
                    type="text"
                    id="team_name"
                    placeholder={t("Card Number")}
                    className="bg-[#ffffff] border-gray-500 border-[2px] text-gray-900 text-sm rounded-md focus:ring-blue-500 placeholder:text-dark-blue-2 opacity-80 focus:border-blue-500 block w-full p-[8px] dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="flex align-middle justify-between w-full xs:flex-col">
                  <div className="bg-white px-5  py-3 w-[50%] xs:w-[100%]">
                    <label
                      htmlFor="team_name"
                      className="block mb-2 text-sm font-medium text-dark-blue-2 opacity-80 "
                    >
                      {t("Expires")}
                    </label>
                    <input
                      type="text"
                      id="team_name"
                      placeholder={t("Expires")}
                      className="bg-[#ffffff] border-gray-500 border-[2px] text-gray-900 text-sm rounded-md focus:ring-blue-500 placeholder:text-dark-blue-2 opacity-80 focus:border-blue-500 block w-full p-[8px] dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="bg-white px-5  py-3 w-[50%] xs:w-[100%]">
                    <label
                      htmlFor="team_name"
                      className="block mb-2 text-sm font-medium text-dark-blue-2 opacity-80 "
                    >
                      CVC
                    </label>
                    <input
                      type="text"
                      id="team_name"
                      placeholder="CVC"
                      className="bg-[#ffffff] border-gray-500 border-[2px] text-gray-900 text-sm rounded-md focus:ring-blue-500 placeholder:text-dark-blue-2 opacity-80 focus:border-blue-500 block w-full p-[8px] dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-dark-blue-2 text-base font-medium text-white hover:opacity-80 transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-blue-2 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setstate(false)}
                  >
                    {t("Continue")}
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none transition duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setstate(false)}
                    ref={cancelButtonRef}
                  >
                    {t("Cancel")}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
export function AddDomainModel({ state, setstate }) {
  // const [open, setOpen] = useState(true)
  const { t } = useTranslation("common");
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={state} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setstate}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4  sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all  xs:w-[95%] sm:w-[340px] lg:w-[400px] md:w-[350px]">
                <div className="bg-white px-4 py-8 sm:p-6 sm:pb-4 border-b-[1px] border-gray-200">
                  <h2 className="text-2xl font-semibold text-center  text-dark-blue-2">
                    {t("Add Domain")}
                  </h2>
                </div>
                <div className="px-5 py-3">
                  <p className="text-sm text-dark-blue-2 opacity-80 ">
                    {t("Select a project to add your domain to:")}
                  </p>
                </div>
                <div className="px-4 my-2">
                  <div className=" w-full border-[1px] border-gray-600 rounded-sm">
                    <div>
                      <input
                        type={"text"}
                        className={
                          "w-full p-2 border-b-[1px] focus:outline-none rounded-tl-sm rounded-tr-sm border-gray-600 text-sm text-dark-blue-2 opacity-80"
                        }
                        placeholder={"Search for Projects"}
                      />
                    </div>
                    <div className="w-full p-2 min-h-[150px]">
                      <ul>
                        <li className="flex align-middle justify-between  my-2">
                          <p className="text-sm text-dark-blue-2 opacity-75">
                            <span>
                              <FontAwesomeIcon
                                icon={faFolder}
                                className="text-dark-blue-2 opacity-90 mr-2"
                              />
                            </span>{" "}
                            {t("Project Name")}
                          </p>
                          <button className="px-2 rounded-md bg-slate-300 hover:bg-slate-400 transition duration-200">
                            <span className="text-gray-800 text-sm">
                            {t("Select")}
                            </span>
                          </button>
                        </li>
                        <li className="flex align-middle justify-between  my-2">
                          <p className="text-sm text-dark-blue-2 opacity-75">
                            <span>
                              <FontAwesomeIcon
                                icon={faFolder}
                                className="text-dark-blue-2 opacity-90 mr-2"
                              />
                            </span>{" "}
                            {t("Project Name")}
                          </p>
                          <button className="px-2 rounded-md bg-slate-300 hover:bg-slate-400 transition duration-200">
                            <span className="text-gray-800 text-sm">
                            {t("Select")}
                            </span>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="w-full p-2 border-t-[1px] border-gray-500">
                      <p className="text-xs text-dark-blue-2 opacity-75">
                        <span>
                          <FontAwesomeIcon
                            icon={faFolder}
                            className="text-dark-blue-2 opacity-90 mr-2"
                          />
                        </span>
                        You can also{" "}
                        <span className="text-link-color">
                        {t("create a project")} {"->"}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-dark-blue-2 text-base font-medium text-white hover:opacity-80 transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-blue-2 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setstate(false)}
                  >
                    {t("Continue")}
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none transition duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setstate(false)}
                    ref={cancelButtonRef}
                  >
                    {t("Cancel")}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
export function TransferInModel({ state, setstate }) {
  const [open, setOpen] = useState(false)

  const { t } = useTranslation("common");
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={state} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setstate}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4  sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all  xs:w-[95%] sm:w-[340px] lg:w-[400px] md:w-[350px]">
                <div className="bg-white px-4 py-8 sm:p-6 sm:pb-4 border-b-[1px] border-gray-200">
                  <h2 className="text-2xl font-semibold text-center  text-dark-blue-2">
                    {t("Transfer In Domain")}
                  </h2>
                </div>
                
                
                <div className="px-5 py-2">
                  <p className="text-sm text-dark-blue-2 opacity-80 ">
                  {t("Enter the domain you want to transfer in")}{":"}
                  </p>
                </div>

                <div className="px-5 pt-2 pb-12 relative">
                   <input className="w-full my-1 rounded-md border-dark-blue-2 border-[1px] py-1.5 px-2 text-sm mb-1 focus:ring-4 focus:ring-gray-200 transition duration-200 focus:outline-none text-dark-blue-2" type={'text'} placeholder={t("my-external-domain")}/>
                   <div className="relative">
                    <FontAwesomeIcon
                    // onClick={() => setOpen(true)}
                    onMouseEnter={() => setOpen(true)}
                    onMouseLeave={() => setOpen(false)}
                    icon={faCircleInfo} className="absolute top-3.5 right-3 text-dark-blue-2 text-sm opacity-60 cursor-pointer"/>
                   <input className="w-full my-1 rounded-md pr-10 border-dark-blue-2 border-[1px] py-1.5 px-2 text-sm mb-1 focus:ring-4 focus:ring-gray-200 transition duration-200 focus:outline-none text-dark-blue-2" type={'text'} placeholder={t("my-external-domain")}/>
                    <Tooltip classNames={'w-64 absolute right-8 -top-[50px]'} text={'This is the Authorization Code (Also Know as Auth Code) which Provides extra secutity'} state={open} setstate={setOpen}/>
                   </div>

                </div>


                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-dark-blue-2 text-base font-medium text-white hover:opacity-80 transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-blue-2 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setstate(false)}
                  >
                    {t("Transfer In")}
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none transition duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setstate(false)}
                    
                    ref={cancelButtonRef}
                  >
                    {t("Cancel")}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export function DeleteAccountModel({ state, setstate }) {
    
  const { t } = useTranslation("common");
  const cancelButtonRef = useRef(null);
  
  const { user,setUser } = useContext(AuthContext);
  useEffect(() => {
      setUser(getUser());
  },[setUser]);


  return (
    <Transition.Root show={state} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setstate}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4  sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all  xs:w-[95%] sm:w-[400px] lg:w-[500px] md:w-[420px]">
                <div className="bg-white px-4 py-8 sm:p-6 sm:pb-4 border-b-[1px] border-gray-200">
                  <h2 className="text-2xl font-semibold text-center  text-dark-blue-2">
                  {t("Delete Personal Account")} 
                  </h2>
                </div>
                
                
                <div className="px-5 py-2">
                  <p className="text-sm text-dark-blue-2 opacity-80 text-center">
                    {t("Vercel will delete all of your projects, along with all of your deployments, domains, SSL certificates, activity, and all other resources belonging to your Personal Account")}{"."}
                  </p>
                  <p className="text-sm text-dark-blue-2 opacity-80 text-center mt-5">
                    {t("Vercel recommends that you remove Vercel Nameservers from all of your domains")}{"."}
                  </p>

                   <div className="mx-auto py-2 bg-red-500 my-4 rounded-md ">
                      <p className="text-center text-sm text-white font-medium">{t("This action is not reversible")}{". "}{t("Please be certain")}{"."}</p>
                   </div>
                </div>

                <div className="border-t-[1px] border-gray-400 py-2 px-2">
                <div className="bg-white px-2  py-3">
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-dark-blue-2 opacity-80 "
                  >
                    {t("Enter your username")} {user?.username} {t("to continue:")}
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="bg-[#ffffff] border-gray-500 border-[2px] text-gray-900 text-sm rounded-md focus:outline-none focus:ring-4 focus:ring-gray-300 placeholder:text-dark-blue-2 opacity-80  block w-full p-[8px] "
                    required
                  />
                </div>
                <div className="bg-white px-2  py-3">
                  <label
                    htmlFor="verify"
                    className="block mb-2 text-sm font-medium text-dark-blue-2 opacity-80 "
                  >
                    {t("To verify, type delete my personal account below:")}
                  </label>
                  <input
                    type="text"
                    id="verify"
                    className="bg-[#ffffff] border-gray-500 border-[2px] text-gray-900 text-sm rounded-md focus:outline-none focus:ring-4 focus:ring-gray-300 placeholder:text-dark-blue-2 opacity-80  block w-full p-[8px] "
                    required
                  />
                </div>
                </div>

               


                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-blue-2 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setstate(false)}
                  >
                    {t("Delete")}
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none transition duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setstate(false)}
                    
                    ref={cancelButtonRef}
                  >
                    {t("Cancel")}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export function AddIntegrationModel({ state, setstate }) {

  const { t } = useTranslation("common");
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={state} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setstate}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4  sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all  xs:w-[95%] sm:w-[400px] lg:w-[500px] md:w-[420px]">
                <div className="bg-white px-4 py-8 sm:p-6 sm:pb-4 border-b-[1px] border-gray-200">
                  <div className="py-3 mx-auto w-full flex align-middle justify-center">
                  <Image src={'/images/mongoavatar.png'} alt="Mongodb image" width={'60px'} height={'60px'}  className="rounded-full" />
                  </div>
                  <h2 className="text-xl font-medium text-center  text-dark-blue-2 py-2">
                  Add Sitecore OrderCloud
                  </h2>
                </div>
                
                
              

                <div className="border-t-[1px] border-gray-400 py-2 px-2">
                    <p className="p-[12px] text-sm text-dark-blue-2 opacity-80">{t("Select a Vercel Account to add the Integration to:")}</p>
                    <select className="bg-gray-200 border-blue border-[52px] mb-2 text-gray-900 text-sm rounded-md    block mx-auto p-[12px] w-[95%]">
                        <option className="py-1 text-md">Account 1</option>
                    </select>
                </div>

               


                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-dark-blue-2 text-base font-medium text-white hover:opacity-80 transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-blue-2 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setstate(false)}
                  >
                    {t("Continue")}
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none transition duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setstate(false)}
                    
                    ref={cancelButtonRef}
                  >
                    {t("Cancel")}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
export function MoveDomainModel({ state, setstate }) {

  const { t } = useTranslation("common");
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={state} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setstate}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4  sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all  xs:w-[95%] sm:w-[400px] lg:w-[500px] md:w-[420px]">
                <div className="bg-white px-4 py-8 sm:p-6 sm:pb-4 border-b-[1px] border-gray-200">
                   
                  <h2 className="text-xl font-medium text-center  text-dark-blue-2 py-1">{t("Move Domain")}</h2>
                  <p className="text-sm text-center  text-dark-blue-2 opacity-80 py-2">{t("When moving the following Domain, it will be removed from all of the projects it is currently used in")}</p>
                
                  <div className="bg-white px-2  py-3">
                  <label
                    htmlFor="verify"
                    className="block mb-2 text-sm font-medium text-dark-blue-2 opacity-80 "
                  >
                    {t("Move To")}
                  </label>
                  <input
                    type="text"
                    id="verify"
                    className="bg-[#ffffff] border-gray-300 border-[2px] text-gray-900 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 placeholder:text-dark-blue-2 opacity-80  block w-full p-[8px] "
                    required
                  />
                  <p className="text-sm text-start  text-dark-blue-2 opacity-80 py-2 mt-3">{t("The following Domain will be moved and any aliases that are not associated with a project domain will be removed immediately")}</p>
                  <p className="text-sm text-start  text-gray-700 font-medium py-2 mt-4 ml-2">anywebsite.com</p>
                </div>

                </div>
                
                
              
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-dark-blue-2 text-base font-medium text-white hover:opacity-80 transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-blue-2 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setstate(false)}
                  >
                    {t("Continue")}
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none transition duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setstate(false)}
                    
                    ref={cancelButtonRef}
                  >
                    {t("Cancel")}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export function DeleteDomainModel({ state, setstate }) {

  const { t } = useTranslation("common");
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={state} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setstate}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4  sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all  xs:w-[95%] sm:w-[400px] lg:w-[460px] md:w-[420px]">
                <div className="bg-white px-4 py-8 sm:p-6 sm:pb-4 border-b-[1px] border-gray-200">
                   
                  <h2 className="text-xl font-medium text-center  text-dark-blue-2 py-1 mb-3">{t("Delete Domain")}</h2>
                  <p className="text-sm text-start  text-dark-blue-2 opacity-80 py-1">{t("The following domains will be permanently deleted along with related aliases")}</p>
                  <p className="text-sm text-start  text-dark-blue-2 opacity-80 py-1">{t("If you would like to use a domain on another project, consider moving it instead")}</p>
                  <p className="text-sm text-start  text-dark-blue-2 opacity-80 py-2 mt-1"><span>
                    <FontAwesomeIcon 
                    icon={faArrowDown}
                    className="text-dark-blue-2 opacity-80 mr-1"
                    />
                    </span> 1 domain will be deleted</p>

                 
                </div>

                <div className="border-y-[1px] border-gray-300 py-2 px-5">
                    <p className="text-sm text-start text-dark-blue-2 opacity-80 flex align-middle justify-between w-full"><span>any username</span><span>added 50d ago</span></p>
                </div>
                <div className=" py-3 px-5">
                    <p className="text-sm text-start text-gray-600 w-full"><span>{t("No aliases will be deleted")}</span></p>
                </div>
                
                
              
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-blue-2 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setstate(false)}
                  >
                    {t("Delete")}
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none transition duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setstate(false)}
                    
                    ref={cancelButtonRef}
                  >
                    {t("Cancel")}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

