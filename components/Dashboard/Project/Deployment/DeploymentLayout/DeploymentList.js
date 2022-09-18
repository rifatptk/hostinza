import React from "react";
import { Popover } from '@headlessui/react'

export default function DeploymentList() {
  return (

    <div className="flex bg-white sm:!flex-row flex-col flex-wrap sm:!justify-between !justify-start px-4 py-4 border-2 rounded-md">
      <div className="flex sm:flex-row flex-col  sm:!gap-14 gap-4 sm:!items-center items-start">
        <div className="flex flex-col">
          <a href="#">
            <span className="text-[0.9rem] text-black font-semibold">
              project-2das2-hostinza.app
            </span>
          </a>
          <span className="text-[0.9rem] text-gray-600 font-medium">
            Production (Current)
          </span>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-2 items-baseline">
            <span className="bg-green-400 w-2.5 h-2.5 text-[0.9rem] rounded-[50%]"></span>
            <span className="text-[0.9rem] text-black font-semibold">
              Ready
            </span>
          </div>
          <span className="text-[0.9rem] text-gray-600 font-medium">
            1m 10s
          </span>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-2 items-center">
            <svg
              data-testid="geist-icon"
              fill="none"
              height="16"
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="16"
            >
              <path d="M6 3v12"></path>
              <circle cx="18" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path d="M18 9a9 9 0 01-9 9"></path>
            </svg>
            <span className="text-[0.9rem] text-black font-semibold">Main</span>
          </div>
          <span className="text-[0.9rem] text-gray-600 font-medium">
            Commit
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between sm:!pt-0 pt-4 sm:!mt-0 mt-5 sm:!border-0 border-t-[1px]  gap-4">
        <span className="text-[0.9rem] text-gray-600 font-medium">7d ago by user</span>
        <svg height="18" viewBox="0 0 14 14" width="18">
          <path
            d="M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z"
            fillRule="nonzero"
          ></path>
        </svg>
        <Popover className="relative mt-2 sm:!block hidden">
      <Popover.Button className="focus:!outline-none">
      <svg  data-testid="geist-icon" fill="none" height="18" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" width="18" ><circle cx="12" cy="12" r="1" fill="currentColor"></circle><circle cx="12" cy="5" r="1" ></circle><circle cx="12" cy="19" r="1" ></circle></svg>
      </Popover.Button>

      <Popover.Panel className="absolute w-[13rem] right-0 drop-shadow-lg z-10">
        <div className="flex p-2 rounded-md  bg-white flex-col">
          <a className="text-[0.9rem] hover:bg-gray-100 cursor-pointer py-2 px-3 rounded-md" >Promote to Production</a>
          <a className="text-[0.9rem] hover:bg-gray-100 cursor-pointer py-2 px-3 rounded-md" >Redeploy</a>
          <a className="text-[0.9rem] hover:bg-gray-100 cursor-pointer py-2 px-3 rounded-md" >Inspect Deployment</a>
          <a className="text-[0.9rem] hover:bg-gray-100 cursor-pointer py-2 px-3 rounded-md" >View Source</a>
          <a className="text-[0.9rem] hover:bg-gray-100 cursor-pointer py-2 px-3 rounded-md" >Copy URL</a>
          <a className="text-[0.9rem] hover:bg-gray-100 cursor-pointer py-2 px-3 rounded-md" >Assign Domain</a>
          <a className="text-[0.9rem] hover:bg-gray-100 cursor-pointer py-2 px-3 rounded-md" >Visit</a>
      
        </div>
      </Popover.Panel>
    </Popover>
      </div>
    </div>

  );
}
