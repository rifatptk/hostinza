import Image from "next/image";
import React from "react";

export default function ExploreLocations() {
  return (
    <div className="bg-white w-full h-auto pt-24 pb-20 md:pb-28">
      <div className="container w-full items-center mx-auto">
        <div className="flex flex-col w-full align-middle">
          <h1 className="text-[22px] text-center md:text-[42px] text-[#15095E] font-bold">
            Develop locally, deploy globally®
          </h1>
          <p className="md:mb-5 md:mt-3 text-center px-10 text-sm md:text-[16px] text-[#6E727D] font-light">
            25 worldwide locations
          </p>
          <div className="hidden lg:block mt-16 w-full">
            <div className="w-[85%] h-[450px] mx-auto relative">
              <Image src={"/images/map.png"} layout="fill" alt="NetworkMap" />
              <div className="location-Saudi">
                <div className="location-button">
                  <div className="location-button-outer"></div>
                  <div className="location-button-inner"></div>
                </div>
                <div className="message">Saudi Arabia</div>
              </div>
              <div className="location-brazil">
                <div className="location-button">
                  <div className="location-button-outer"></div>
                  <div className="location-button-inner"></div>
                </div>
                <div className="message">Brazil</div>
              </div>
              <div className="location-usa">
                <div className="location-button">
                  <div className="location-button-outer"></div>
                  <div className="location-button-inner"></div>
                </div>
                <div className="message">United States of America</div>
              </div>
              <div className="location-russia">
                <div className="location-button">
                  <div className="location-button-outer"></div>
                  <div className="location-button-inner"></div>
                </div>
                <div className="message">Russia</div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-wrap align-middle justify-evenly gap-5 lg:hidden p-5">
            <div className="w-full max-w-[320px] flex flex-col p-5">
              <h4 className="text-xl font-bold leading-relaxed text-black my-2">
                South Carolina Data Center
              </h4>
              <p className="text-base text-black my-2">
                4708 Ocello Street,
                <br />
                California
                <br />
                USA
              </p>
            </div>
            <div className="w-full max-w-[320px] flex flex-col p-5">
              <h4 className="text-xl font-bold leading-relaxed text-black my-2">
                South Carolina Data Center
              </h4>
              <p className="text-base text-black my-2">
                4708 Ocello Street,
                <br />
                California
                <br />
                USA
              </p>
            </div>
            <div className="w-full max-w-[320px] flex flex-col p-5">
              <h4 className="text-xl font-bold leading-relaxed text-black my-2">
                South Carolina Data Center
              </h4>
              <p className="text-base text-black my-2">
                4708 Ocello Street,
                <br />
                California
                <br />
                USA
              </p>
            </div>
            <div className="w-full max-w-[320px] flex flex-col p-5">
              <h4 className="text-xl font-bold leading-relaxed text-black my-2">
                South Carolina Data Center
              </h4>
              <p className="text-base text-black my-2">
                4708 Ocello Street,
                <br />
                California
                <br />
                USA
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <button className="bg-[#1868DD] text-white rounded-md p-2 px-4 font-light hover:scale-105 duration-300">
          Explore Locations
        </button>
      </div>
    </div>
  );
}
