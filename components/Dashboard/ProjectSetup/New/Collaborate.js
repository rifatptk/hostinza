import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import useTranslation from "next-translate/useTranslation";

export default function MyModal() {
  const { t } = useTranslation("common");
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
     <link
        rel="stylesheet"
        href="https://unpkg.com/flowbite@1.5.1/dist/flowbite.min.css"
      />
      <div className=" flex items-center justify-center">
        <button
          data-tooltip-target="tooltip-animation"
          type="button"
          className="text-white bg-[#1141d3]] hover:bg-blue-800 flex gap-2  border-slate-300 border-2  focus:ring-1 focus:outline-none focus:ring-blue-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          data-modal-toggle="authentication-modal"
          onClick={openModal}
        >
          <svg
            data-testid="geist-icon"
            fill="none"
            height="20"
            shapeRendering="geometricPrecision"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            width="20"
          >
            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="8.5" cy="7" r="4"></circle>
            <path d="M20 8v6"></path>
            <path d="M23 11h-6"></path>
          </svg>
          {t("Collaborate with a Team")}
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0  overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-transparent text-left align-middle shadow-xl transition-all">
                <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                  <div className="relative bg-slate-700 rounded-lg shadow">
                    <button
                      onClick={closeModal}
                      type="button"
                      className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
                      data-modal-toggle="authentication-modal"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">{t("Close modal")}</span>
                    </button>
                    <div className="py-6 px-6 lg:px-8">
                      <h3 className="mb-2 text-[1.4rem] font-medium text-white">
                        {t("Collaborate with a Team")}
                      </h3>
                      <p className="text-white text-[0.8rem]">
                        {t("Collaborate with others and take advantage of increased build concurrency, performance analytics, security features, and more")}  
                        {t("To get started, name your new team:")}
                  
                      </p>
                      <form className="space-y-6 mt-4" action="#">
                        <div>
                          <label
                            htmlFor="teamName"
                            className="block mb-2 text-sm font-medium text-white"
                          >
                            {t("Team Name")}
                          </label>
                          <input
                            type="text"
                            name="teamName"
                            id="teamName"
                            className="bg-gray-50  text-gray-900 text-sm rounded-lg focus:outline-[#1141d3]  block w-full p-2.5"
                            required
                          />
                        </div>
                        <div>
                          <h5 className="text-white text-[1rem] mx-1 mb-1 font-medium">
                            {t(
                              "Continuing will start a 14-day Pro plan trial."
                            )}
                          </h5>
                          <p className="text-white text-[0.7rem] mx-1 ">
                            {t(
                              "Creating a new team will not affect your Personal Account (Hobby) or any of its projects."
                            )}
                          </p>
                          <a href="#">
                            <span className="text-white text-[0.7rem] mx-[0.35rem] mt-1 underline">
                              {t("Learn More")}
                            </span>
                          </a>
                        </div>
                        <div className="flex">
                          <button
                          onClick={closeModal}
                            data-modal-toggle="authentication-modal"
                            className="w-full text-white  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                          >
                            {t("Cancel")}
                          </button>
                          <button className="w-full text-white focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            {t("Save")}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
