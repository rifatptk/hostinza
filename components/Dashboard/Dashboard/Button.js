import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Button({onClick,icon, className,iconclassname,textclassname,text }) {
    return (
        <button onClick={onClick} className={className}>
            <div className="align-middle justify-center flex py-0 ">
           <FontAwesomeIcon icon={icon} className={iconclassname}/>
           <p className={textclassname}>{text}</p>
            </div>
        </button>
    );
}