import React, { useContext, useEffect, useState, useRef } from "react";
import AuthContext from "../../../utils/auth-context";
import { getUser } from "../../../utils/auth";

export default function PurchaseModal({ upperName, upperPrice, closeModal }) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  const [formStep, setFormStep] = useState(0);
  const { user, setUser } = useContext(AuthContext);
  const [addCard, setAddCard] = useState(false);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          // setModal(!modal);
          closeModal(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  useEffect(() => {
    setUser(getUser());
  }, [setUser]);

  function handleClickModalStep1() {
    setFormStep(1);
  }

  function handleClickModalStep2() {
    setFormStep(2);
  }

  const upper = (
    <div className="bg-[#1141d3]  flex justify-between py-2 px-3 rounded-t-md">
      <span className="text-[0.85rem] text-white font-normal">{upperName}</span>
      <span className="text-[0.85rem] text-white font-medium">
        {upperPrice} (1yr)
      </span>
    </div>
  );

  return (
    <>
      {formStep === 0 && (
        <section
          ref={wrapperRef}
          className="block absolute !z-50 bg-white lg:!w-[19rem] md:!w-[15rem] w-[90%] drop-shadow-md rounded-lg"
        >
          {upper}
          <div className="bg-white py-6">
            <div>
              <p className="text-center text-[0.9rem] text-gray-800 px-3">
                For which team do you want to purchase this domain?
              </p>
            </div>
            <div className="flex items-center justify-center py-6">
              <div className="w-6 rounded-full homeHeroGradient h-6 "></div>
              <span className="text-center text-[0.9rem] uppercase text-gray-900 font-semibold px-3">
                {user?.username}
              </span>
            </div>
          </div>
          <div className="flex justify-between bg-white rounded-b-md !z-[100]">
            <button
              onClick={() => closeModal(false)}
              className="text-normal py-2 text-[0.9rem] border-t-[1px] border-r-[1px]  w-full text-gray-500 text-center"
            >
              CANCEL
            </button>
            <button
              onClick={handleClickModalStep1}
              className="text-normal py-2  text-[0.9rem] border-t-[1px] border-l-[1px] w-full text-gray-500 text-center"
            >
              CONTINUE
            </button>
          </div>
        </section>
      )}

      {formStep === 1 && (
        <section
          ref={wrapperRef}
          className="block absolute !z-50 bg-white lg:!w-[19rem] md:!w-[15rem] w-[90%]  drop-shadow-md rounded-lg"
        >
          {upper}
          <div className="bg-white py-6 flex flex-col">
            <div>
              <p className="px-3 text-[0.9rem] text-center">
                Are you sure you want to purchase {upperName} for one year
                under <span className="font-medium"> {user?.username}</span>{" "}
              </p>
            </div>
            <div className="flex mx-auto py-4 items-center gap-2">
              <label htmlFor="renew" className="text-[0.85rem] font-medium">
                Auto renew yearly for $150
              </label>
              <input className="!w-4 !h-4" id="renew" type="checkbox" />
            </div>
          </div>
          <div className="flex justify-between bg-white rounded-b-md !z-[100]">
            <button
              onClick={() => closeModal(false)}
              className="text-normal py-2 text-[0.9rem] border-t-[1px] border-r-[1px]  w-full text-gray-500 text-center"
            >
              CANCEL
            </button>
            <button
              onClick={handleClickModalStep2}
              className="text-normal py-2  text-[0.9rem] border-t-[1px] border-l-[1px] w-full text-gray-500 text-center"
            >
              YES
            </button>
          </div>
        </section>
      )}

      {formStep === 2 && (
        <section className="block absolute !z-50 bg-white lg:!w-[19rem] md:!w-[15rem] w-[90%] drop-shadow-md rounded-lg">
          {upper}
          <div className="bg-white py-6 flex flex-col">
            <div>
              <p className="px-3 text-[0.9rem] text-center">
                We cant find a billing source, please add a payment method.
              </p>
            </div>
          </div>
          <div className="flex justify-between bg-white rounded-b-md !z-[100]">
            <button
              onClick={() => closeModal(false)}
              className="text-normal py-2 text-[0.9rem] border-t-[1px] border-r-[1px]  w-full text-gray-500 text-center"
            >
              CANCEL
            </button>
            <button
              onClick={() => setAddCard(!addCard)}
              className="text-normal py-2  text-[0.9rem] border-t-[1px] border-l-[1px] w-full text-gray-500 text-center"
            >
              ADD CARD
            </button>
          </div>
        </section>
      )}

      <div
        className={
          addCard
            ? "fixed bg-[#01010166] z-[1200] top-0 left-0 right-0 bottom-0"
            : "hidden"
        }
      />

      <div
        className={
          addCard
            ? "bg-white w-[27rem] fixed top-[50%] left-[50%] z-[2200] translate-x-[-50%] shadow-xl rounded-md translate-y-[-50%]"
            : "hidden"
        }
      >
        <div className="py-4 border-b">
          <h1 className="text-[1.7rem] text-center font-semibold">
            ADD a CARD
          </h1>
        </div>
        <form>
          <div className="flex flex-col px-6 py-4">
            <h5 className="text-[0.9rem] text-gray-500 pb-4">
              Add a payment method for
            </h5>
            <div>
              <label className="flex flex-col text-[0.9rem] text-gray-500 font-medium">
                CARD NUMBER
                <span className="flex border px-2 rounded-md items-center mt-2">
                  <svg
                    fill="none"
                    height="18"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="18"
                  >
                    <rect
                      x="1"
                      y="4"
                      width="22"
                      height="16"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M1 10h22"></path>
                  </svg>
                  <input
                    type={"number"}
                    required
                    placeholder="1234 1234 1234 1234"
                    className="text-[0.9rem] text-gray-500 font-normal py-2.5  ml-3 focus:outline-none"
                  ></input>
                </span>
              </label>

              <div className="flex mt-4 gap-2 justify-between">
                <label className="w-[50%] flex flex-col text-[0.9rem] text-gray-500 font-medium">
                  EXPIRES
                  <span className="flex border rounded-md items-center mt-2">
                    <input
                      type={"number"}
                      required
                      placeholder="MM / YY"
                      className="text-[0.9rem] text-gray-500 font-normal py-2.5  ml-3 focus:outline-none"
                    ></input>
                  </span>
                </label>
                <label className="w-[50%] flex flex-col text-[0.9rem] text-gray-500 font-medium">
                  CVC
                  <span className="flex border rounded-md items-center mt-2">
                    <input
                      type={"number"}
                      required
                      placeholder="CVC"
                      className="text-[0.9rem] text-gray-500 font-normal py-2.5  ml-3 focus:outline-none"
                    ></input>
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-4 bg-white rounded-b-md !z-[100]">
            <button
              onClick={() => setAddCard(false)}
              className="text-normal py-5 text-[0.9rem] border-t-[1px] border-r-[1px]  w-full text-gray-500 text-center"
            >
              CANCEL
            </button>
            <button
              type={"submit"}
              className="text-normal py-5  text-[0.9rem] border-t-[1px] border-l-[1px] w-full text-gray-500 text-center"
            >
              CONTINUE
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
