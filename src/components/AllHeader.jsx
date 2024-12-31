import { PlusIcon } from "@heroicons/react/24/outline";
import smallScreen from "../image/Final_logo__1_-removebg-preview.png";
import React from "react";

export const WhatWeDoHeader = () => {
  return (
    <div class="flex items-center justify-between sm:flex-row border-b border-zinc-200 py-5 mt-5">
      <span class="text-2xl md:text-3xl font-bold">What We Do?</span>
      <button className="flex justify-between items-center gap-1 py-2 px-2.5 border border-zinc-100 rounded-3xl text-sm font-normal cursor-pointer hover:bg-gray-50/80 bg-gray-50/20">
        <a href="">
          More Services
        </a>
          <PlusIcon className="h-3.5 w-3.5" />
      </button>
    </div>
  );
};

export const AboutUsHeader = () => {
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <img src={smallScreen} width={30} alt="Apeiro research" />
      <span className="text-xl md:text-2xl text-warning-500 font-semibold">
        |
      </span>
      <span className="text-2xl md:3xl font-semibold">About Us</span>
    </div>
  );
};

export const WhyChooseHeader = ()=>{
  return(
    <div className="pt-16 pb-10">
      <h3 className="text-center text-3xl md:text-5xl font-semibold text-gray-200 leading-tight">Why Choose us</h3>
    </div>
    
  )
}