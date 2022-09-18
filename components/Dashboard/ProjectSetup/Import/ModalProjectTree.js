import React from "react";
import Script from "next/dist/client/script";
import Image from "next/dist/client/image";

export default function ModalProjectTree({projectImage, projectName, projectBranchName, projectBranchName2nd}) {
  return (
    <ul>
      <Script
        src="https://unpkg.com/flowbite@1.5.1/dist/flowbite.js"
        strategy="beforeInteractive"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/flowbite@1.5.1/dist/flowbite.min.css"
      />

      <li className="px-0">
        <input
          type="radio"
          id="project"
          name="my-project"
          value="project"
          className="hidden peer"
          required
        />
        <label
          htmlFor="project"
          className="inline-flex justify-between items-center p-3 w-full font-medium text-gray-600 bg-white border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 peer-checked:font-semibold  hover:text-gray-600 hover:bg-gray-100"
        >
          <div className="block">
            <div className="w-full text-[0.9rem] ml-2  ">
              {projectName}
            </div>
          </div>
          <Image src={projectImage} alt='project image' width="25" height="25"></Image>
        </label>

        <ul className="ml-8 relative">
          <li className="pl-4 ">
            <input
              type="radio"
              id="project-nested"
              name="my-project"
              value="project-nested"
              className="hidden peer"
              required
            />
            <label
              htmlFor="project-nested"
              className="inline-flex justify-between font-medium items-center p-2.5 w-full text-gray-600 bg-white border border-gray-200  cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 peer-checked:font-semibold hover:text-gray-600 hover:bg-gray-100"
            >
              <div className="block">
                <div className="w-full text-[0.9rem] ml-2">
                  {projectBranchName}
                </div>
              </div>
              <Image src={projectImage} alt='' width="25" height="25"></Image>
            </label>
          </li>
          <li className="pl-4 ">
            <input
              type="radio"
              id="project-nested-2"
              name="my-project"
              value="project-nested-2"
              className="hidden peer"
              required
            />
            <label
              htmlFor="project-nested-2"
              className="inline-flex justify-between font-medium items-center p-2.5 w-full text-gray-600 bg-white border border-gray-200  cursor-pointer peer-checked:border-blue-600 peer-checked:font-semibold peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
            >
              <div className="block">
                <div className="w-full text-[0.9rem] ml-2">
                  {projectBranchName2nd}
                </div>
              </div>
              <Image src={projectImage} alt='' width="25" height="25"></Image>
            </label>
          </li>
        </ul>
      </li>
    </ul>
  );
}
