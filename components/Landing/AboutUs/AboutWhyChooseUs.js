import React from "react";
import Image from "next/image";

const AboutWhyChooseUs = () => {
  return (
    <>
      <div className="container py-10">
        <div className="text-center w-full">
          <h3 className="text-[18px] text-[#1868DD] font-light">
            Why Choose Us
          </h3>
          <h1 className="text-[#061027] text-[24px] md:text-[42px] font-bold md:leading-[55px] leading-tight py-4 text-center">
            We ensure best features <br /> for our clients
          </h1>
          <p className="text-[16px] font-light text-[#70747E]">
            We are ensuring the best insurance for our clients for their better{" "}
            <br /> security and also for their better future
          </p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 lg:mt-12 mt-6">
          <div className="flex flex-col items-center justify-center lg:w-[80%]">
            <div className="flex flex-row items-center justify-center lg:py-5 lg:pr-5 py-2 pr-2 hover:cursor-pointer lg:hover:shadow-md lg:pl-5 lg:-ml-5 rounded-lg">
              <div className="bg-[#1868DD] lg:text-[28px] text-[18px] mr-4 text-white font-semibold flex items-center lg:w-[60px] lg:h-[52px] w-[40px] h-[40px] justify-center shadow-lg rounded-md">
                1
              </div>
              <div className="w-full h-auto">
                <h3 className="lg:text-[18px] text-[14px] lg:mb-1">Lorem ipsum</h3>
                <p className="text-[#70747E] lg:text-[14px] text-[12px] font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  Quisquam dolore mque veritatis perspiciatis labore debitis
                  minima.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center lg:py-5 lg:pr-5 py-2 pr-2 hover:cursor-pointer lg:hover:shadow-md lg:pl-5 lg:-ml-5 rounded-lg">
              <div className="bg-[#5959CE] lg:text-[28px] text-[18px] mr-4 text-white font-semibold flex items-center lg:w-[60px] lg:h-[52px] w-[40px] h-[40px] justify-center shadow-lg rounded-md">
                2
              </div>
              <div className="w-full h-auto">
                <h3 className="lg:text-[18px] text-[14px] lg:mb-1">Lorem ipsum</h3>
                <p className="text-[#70747E] lg:text-[14px] text-[12px] font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  Quisquam dolore mque veritatis perspiciatis labore debitis
                  minima.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center lg:py-5 lg:pr-5 py-2 pr-2 hover:cursor-pointer lg:hover:shadow-md lg:pl-5 lg:-ml-5 rounded-lg">
              <div className="bg-[#0989C9] lg:text-[28px] text-[18px] mr-4 text-white font-semibold flex items-center lg:w-[60px] lg:h-[52px] w-[40px] h-[40px] justify-center shadow-lg rounded-md">
                3
              </div>
              <div className="w-full h-auto">
                <h3 className="lg:text-[18px] text-[14px] lg:mb-1">Lorem ipsum</h3>
                <p className="text-[#70747E] lg:text-[14px] text-[12px] font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  Quisquam dolore mque veritatis perspiciatis labore debitis
                  minima.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center lg:py-5 lg:pr-5 py-2 pr-2 hover:cursor-pointer lg:hover:shadow-md lg:pl-5 lg:-ml-5 rounded-lg">
              <div className="bg-[#FF9900] lg:text-[28px] text-[18px] mr-4 text-white font-semibold flex items-center lg:w-[60px] lg:h-[52px] w-[40px] h-[40px] justify-center shadow-lg rounded-md">
                4
              </div>
              <div className="w-full h-auto">
                <h3 className="lg:text-[18px] text-[14px] lg:mb-1">Lorem ipsum</h3>
                <p className="text-[#70747E] lg:text-[14px] text-[12px] font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  Quisquam dolore mque veritatis perspiciatis labore debitis
                  minima.
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src={"/images/MaskGroup2.png"}
              width={100}
              height={100}
              layout="responsive"
              alt="Group Photo in About section"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutWhyChooseUs;
