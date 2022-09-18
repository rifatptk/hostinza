import React, { Fragment,useState } from "react";
import { Transition, Menu } from "@headlessui/react";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { btnAction,getEndpointKey,endpointAction } from "../../../../data/apps";
import Spinner from "../../Utils/Loader/Preloader";
import  { useSWRConfig } from 'swr'
import { useRouter } from "next/router";
import { showToast } from "../../../../utils/helpers";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ActionMenu({Id,tablehead,clickone,clicktwo,domain}) {
    const router = useRouter()
    const {mutate} =useSWRConfig()
    const [submitloading,setSubmitLoading]=useState(false)

    async function ActionBtn(type){
      try{
        if(!submitloading){
          setSubmitLoading(true)
          const data = await endpointAction({
            type:type,
            domain:domain,
            id:Id,
            stack_id:router?.query.id
          })

          if(data){
            showToast(type+" action is successful",'success')
            mutate(getEndpointKey({id:1}))
            setSubmitLoading(false)
          }
        }

      }catch(result){
          showToast(result?.response?.data?.message,'error')
          setSubmitLoading(false)
      }
    }
  return (
    <>
    <Spinner loading={submitloading}/>
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
                {btnAction?.map((item,index) => {
                    return(
                    <Menu.Item key={item?.key}>
                      {({ active }) => (
                        <a
                          className={classNames(
                            active ? "bg-gray-200 text-gray-900" : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          <FontAwesomeIcon
                                className={`my-auto ${item.class} mr-2`}
                                color="black"
                                icon={item.icon}
                            />
                          {item?.name}
                        </a>
                      )}
                    </Menu.Item>
                    )
                })}
                
            </>
            ) : (
              <>
              {btnAction?.map((item,index) => {
                    return(
                    <Menu.Item key={index}>
                      {({ active }) => (
                        <a
                          onClick={()=>ActionBtn(item?.key)}
                          className={classNames(
                            active ? "bg-gray-200 cursor-pointer text-gray-900" : `${index == 3 ? 'text-red-500' : 'text-gray-700'}`,
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          <FontAwesomeIcon
                                className={`my-auto ${item.class} mr-2`}
                                color="black"
                                icon={item.icon}
                            />
                          {item?.name}
                        </a>
                      )}
                    </Menu.Item>
                    )
                })}
              </>
            )}
            
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
    </>
  );
}
