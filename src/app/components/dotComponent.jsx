"use client";
import {useState} from "react";


const dotComponent = ({color, activeImage, setActiveImage, relatedImage}) => {
    
return (

    <div
      onClick={() => setActiveImage(relatedImage)}
      style={{ backgroundColor: color }}
      className={`cursor-pointer w-10 h-10 rounded-full ${
        activeImage === relatedImage ? "border-3" : ""
      }`}
    ></div>
  );

};

export default dotComponent;
