import React from "react";
import Image from "next/image";

const OurMission = () => {
  return (
    <>
      <div className="container py-10">
        <div className="grid md:grid-cols-2 grid-cols-1 lg:mt-12 mt-6">
          <div className="md:w-[80%]">
            <Image
              src={"/images/Group1966.png"}
              width={60}
              height={60}
              layout="responsive"
              alt="Our Mission image"
            />
          </div>
          <div className="flex flex-col justify-center w-full">
            <h1 className="text-[#252C2E] text-[42px] font-bold text-center md:text-start">
              Our Mission
            </h1>
            <p className="text-[#495263] text-[18px] mt-2 leading-relaxed font-light">
              At the heart of everything we create is deep integration of
              design,experience,function,simplicity and efficiency. Visual image
              believes taht this is only possible when we act as partners to pur
              clients not vendors
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurMission;
