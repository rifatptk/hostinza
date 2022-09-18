import React from "react";
import Image from "next/image";

const AccelerateYourApp = () => {
  return (
    <>
      <div className="container bg-[#15095E]  md:rounded-lg md:mb-32 mb-20">
        <div className="flex flex-col md:flex-row justify-between md:mx-14 md:py-0 py-6">
          <div className="flex flex-col justify-center">
            <h1 className="text-white font-bold text-[22px] md:text-[42px] mb-5">
              Accelerate your application
            </h1>
            <p className="text-sm md:text-[20px] text-white leading-normal font-light">
               compute features 100% SSD and high performance intel vCPUs.{" "}
              <br /> See why all clouds are not crated equally.
            </p>
            <div className="mt-8">
              <button className="bg-white text-[#15095E] rounded-md p-3 hover:scale-105 duration-300 px-7 font-normal">
                Get Started
              </button>
            </div>
          </div>
          <div className="md:relative -top-5 text-right">
            <Image
              src={"/images/Group5731.png"}
              className="absolute"
              alt="Banner"
              width={200}
              height={320}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AccelerateYourApp;
