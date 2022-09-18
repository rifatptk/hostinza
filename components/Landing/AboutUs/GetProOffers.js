import React from "react";

const GetProOffers = () => {
  return (
    <>
      <div className="container pt-10 md:pb-20 pb-10">
        <div className="bg-[#1868DD] bg-[url('/images/we-offer-bg.png')] bg-no-repeat bg-cover rounded-md p-5 lg:p-16">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center">
            <div className="">
              <h1 className="text-white text-[28px] mb-3 md:text-[40px] font-bold">
                Get our pro offers
              </h1>
              <p className="text-white text-[14px] md:text-[16px] mb-3">
                Create a visual identity for our company,
                <br /> and an overall brand
              </p>
            </div>
            <div className="">
              <div className="flex bg-white pl-4 pr-2 py-2 rounded-md h-[70px]">
                <input
                  type="email"
                  placeholder="Type your email here"
                  className="placeholder:text-xs outline-none flex-1"
                />
                <div className="bg-[#2E364B] duration-300 flex hover:bg-black hover:scale-105 items-center md:text[16px] md:pr-8 md:pl-8 px-3 rounded-md text-[14px] text-white cursor-pointer ">
                  <button>Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetProOffers;
