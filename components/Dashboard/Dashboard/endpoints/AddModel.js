import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import Loader from "../../Utils/Loader";
import  { useSWRConfig } from 'swr'
import { showToast } from "../../../../utils/helpers";

import { getEndpointKey,addEndpoint } from "../../../../data/apps";
export default function AddModel({ state, setstate }) {
    const {mutate} =useSWRConfig()
    const [submitloading,sutubmitloading] = useState(false)
    const { register, handleSubmit, watch,reset, formState: { errors, } } = useForm();
    const cancelButtonRef = useRef(null);
  
    async function onSubmit(inputs)
    {
        if(!submitloading){
          try{
            sutubmitloading(true)
            const data=await addEndpoint({
                    id:1,
                    app:"testapp2",
                    env:[{
                        name:"DOMAIN",
                        value:inputs.envValue,
                    }]
              })
              console.log(data)
            if(data){
              mutate(getEndpointKey({id:1}))
              showToast('CREATE action successful','success')
              sutubmitloading(false)
              setstate(false)
            }
          }catch(e){
            sutubmitloading(false)
          }
        }
    }

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
  
          <form onSubmit={handleSubmit(onSubmit)} className="fixed z-10 inset-0 overflow-y-auto">
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
                    <h2 className="text-2xl font-semibold text-center  text-gray-500">
                      Add Endpoint
                    </h2>
                  </div>
                  
                  
                  <div className="px-5 py-2">
                    <p className="text-sm text-dark-blue-2 opacity-80 ">
                    Enter the Details:
                    </p>
                  </div>
  
                  <div className="px-5 pt-2 pb-12 relative">
                    {/* <div className="relative">
                        <label>App</label>
                        <input {...register('app')} className="w-full my-1 rounded-md border-dark-blue-2 border-[1px] py-1.5 px-2 text-sm mb-1 focus:ring-4 focus:ring-gray-200 transition duration-200 focus:outline-none text-gray-500" type={'text'} placeholder="app"/>
                    </div>
                    <div className="relative">
                        <label>Env Name</label>
                        <input {...register('envName')} className="w-full my-1 rounded-md pr-10 border-dark-blue-2 border-[1px] py-1.5 px-2 text-sm mb-1 focus:ring-4 focus:ring-gray-200 transition duration-200 focus:outline-none text-gray-500" type={'text'} placeholder="Env Name"/>
                    </div> */}
                    <div className="relative">
                        <label>Endpoint</label>
                        <input {...register('envValue')}  className="w-full my-1 rounded-md pr-10 border-dark-blue-2 border-[1px] py-1.5 px-2 text-sm mb-1 focus:ring-4 focus:ring-gray-200 transition duration-200 focus:outline-none text-gray-500" type={'text'} placeholder="Endpoint"/>
                    </div>
                  </div>
  
  
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-sky-500 text-base font-medium text-white hover:bg-sky-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                        {
                            submitloading?(
                                <Loader/>
                            ):(
                                "submit"
                            )
                        }
                      
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
          </form>
        </Dialog>
      </Transition.Root>
    );
  }
  