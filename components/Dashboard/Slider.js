import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import useTranslation from "next-translate/useTranslation";

export default function Slider({open,setOpen}) {
  const { t } = useTranslation("common");
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none  inset-y-0 bottom-0 top-0 w-[full] flex ">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="-translate-y-full"
                enterTo="-translate-y-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="-translate-y-0"
                leaveTo="-translate-y-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-full bg-[#fafafa]">
                 
                  <div className="flex h-full flex-col overflow-y-scroll bg-white  shadow-xl">
                   
                    <div className="w-full">
                      <Link href="/feedback">
                        <p className="border-b-[1px] border-gray-300 p-3.5 text-center w-full text-xl text-dark-blue-2 opacity-90">{t("FeedBack")}</p>
                      </Link>
                      <Link href="/docs">
                        <p className="border-b-[1px] border-gray-300 p-3.5 text-center w-full text-xl text-dark-blue-2 opacity-90">{t("Docs")}</p>
                      </Link>
                      <Link href="/support">
                        <p className="border-b-[1px] border-gray-300 p-3.5 text-center w-full text-xl text-dark-blue-2 opacity-90">{t("Support")}</p>
                      </Link>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}