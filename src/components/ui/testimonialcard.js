import {  UserIcon } from "@heroicons/react/24/outline";
import React from "react";

const TestimonialCard = ({ quote,name, isActive }) => (
  <div
    className={`bg-white flex h-full sm:gap-6 justify-between flex-col w-[348px] sm:w-[518px] lg:w-[674px] mx-5 lg:mx-6 gap-2 pr-10 pt-10 pb-6 pl-10 sm:pb-10 sm:pl-12 lg:pl-14 rounded-2xl relative border border-zinc-200 ${
      !isActive ? "opacity-50" : ""
    }`}
  >
    <p className="text-md leading-snug text-zinc-700">
      {quote}&rdquo;
    </p>
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-0 items-start sm:items-center justify-between w-full">
      <div className="flex flex-row gap-3 items-center">
        <div className="flex w-full rounded-lg overflow-hidden">
          <button className="p-1.5 rounded-full bg-slate-200">

          <UserIcon className="h-5 w-5"/>
          </button>
        </div>
        <div className="text-md font-semibold capitalize">
          <p className="text-zinc-700">{name}</p>
        </div>
      </div>
      <a
        href="#"
        className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-sm px-3 py-2 rounded-2xl w-full sm:w-auto"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="w-full sm:w-auto">
        Know More
        </button>
      </a>
    </div>
    <span className="left-3 lg:left-6 top-8 absolute">
      <svg
        width="22"
        height="20"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.88 10.61V19.36H0.13V9.98L4.68 0.249998H9.16L5.1 10.61H8.88ZM21.2 10.61V19.36H12.45V9.98L17 0.249998H21.48L17.42 10.61H21.2Z"
          fill="#E4E4E7"
        />
      </svg>
    </span>
  </div>
);

export default TestimonialCard;
