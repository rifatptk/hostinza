import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export function DomainModal({ state, setstate }) {
  // const [open, setOpen] = useState(true)

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
                <div className="bg-black px-4 flex justify-between py-6 sm:p-4 sm:pb-2 border-b-[1px] border-gray-200">
                  <h2 className="text-lg font-semibold text-center  text-white">
                    Nab.guide
                  </h2>
                  <p className="text-gray-100">$50 (1yr)</p>
                </div>
                <div className="bg-white px-5 py-3 ">
                  <p className="text-sm font-light text-justify  text-dark-blue-2">
                  For which team do you want to purchase this domain?
                  </p>
                </div>
                <div className="bg-white px-5  py-3">
                  <label
                    htmlFor="team_name"
                    className="block mb-2 text-sm font-medium text-dark-blue-2 opacity-80 "
                  >
                    Team Name
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
                    Save
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none transition duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setstate(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
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
