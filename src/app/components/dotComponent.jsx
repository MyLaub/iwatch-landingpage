"use client";
import {useState} from "react";
import { GoDotFill } from "react-icons/go";

const dotComponent = (color, activeImage, setActiveImage, relatedImage) => {
    
return (
  <div
    onClick={() => setActiveImage(relatedImage)}
    style={{backgroundColor: `var(--${color})`}}
    className={`cursor-pointer w-10 h-10 rounded-full
                ${activeImage === relatedImage ? "border-[3px] border-white" : ""}`}
  />
);

};

export default dotComponent;
