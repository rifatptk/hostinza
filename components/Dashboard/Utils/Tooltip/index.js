import React from "react";
import { useDelayUnmount } from "../../../../utils/useDelayUnmount";


const mountedStyle = { animation: "inAnimation 250ms ease-in" };
const unmountedStyle = {
  animation: "outAnimation 270ms ease-out",
  animationFillMode: "forwards"
};


export default function Tooltip({ state, setstate ,classNames,text}) {

    const showDiv = useDelayUnmount(state,250);

  return (
    <>
      {showDiv && (
          <div
            style={state ? mountedStyle : unmountedStyle}
            role="tooltip"
            className={`z-20 transition duration-150 ease-in-out shadow-lg bg-dark-blue-2 px-3 py-1 rounded-md ${classNames}`}
          >
            <p className="text-sm text-white pb-1">
             {text}
            </p>
          </div>
      )}
    </>
  );
}
