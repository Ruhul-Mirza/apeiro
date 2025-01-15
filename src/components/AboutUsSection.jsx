import React from "react";
import { AboutUsHeader } from "./AllHeader";
import {
  MagnifyingGlassCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { AboutCard } from "./ui/card";

const AboutUsSection = () => {
  const aboutCards = [
    {
      icon: MagnifyingGlassCircleIcon,
      title: "Customized Data Research",
    },
    {
      icon: UserGroupIcon,
      title: "Expert Team Member",
    },
    {
      icon: MagnifyingGlassCircleIcon,
      title: "Detailed Analytics",
    },
    {
      icon: UserGroupIcon,
      title: "Professional Support",
    },
  ];

  return (
    <div className="px-4 py-8 lg:px-16">
      <div className="bg-gray-50 p-6 md:p-10 rounded-xl">
        <AboutUsHeader />
        <div className="flex flex-col lg:flex-row gap-8 mt-10 items-start lg:items-center">
          <div className="flex flex-col w-full lg:w-1/2 mt-8 lg:mt-0">
            <h2 className="text-xl md:text-3xl font-bold">
              Unlock Insights with Our Expertise
            </h2>
            <p className="text-gray-600 text-sm md:text-base mt-3">
              Our expert team ensures comprehensive data research and
              professional insights to help you succeed. Join us to experience
              unparalleled quality and support.
            </p>
            <div>
              <button className="mt-5 tracking-wide flex items-center gap-2 px-5 py-3 rounded-full text-white bg-black/90 hover:bg-black/100 font-bold">
                <a href="#">Know more</a>
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Card Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full lg:w-1/2">
            {aboutCards.map((aboutCard, index) => (
              <AboutCard
                key={index}
                icon={aboutCard.icon}
                title={aboutCard.title}
                className={`transform transition-transform duration-300 hover:-translate-y-1 ${
                  index % 2 === 0 ? "lg:translate-y-4" : "lg:-translate-y-4"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
