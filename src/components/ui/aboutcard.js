import React from "react";

const AboutCard = ({ icon: Icon, title }) => {
  return (
    <div
      className="border border-zinc-200 tracking-wide rounded-xl p-5 cursor-pointer hover:shadow-md hover:border-gray-400 hover:shadow-gray-300 bg-white"
    >
      <div className="flex items-center justify-center h-12 w-12 bg-gray-100 rounded-full">
        <Icon className="h-6 w-6 text-gray-500" />
      </div>
      <div className="text-gray-700 text-sm md:text-base mt-4 font-semibold">
        {title}
      </div>
    </div>
  );
};

export default AboutCard;
