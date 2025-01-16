import React from "react";
import { AboutUsHeader } from "./AllHeader";
import {
  EyeIcon,
  HandThumbUpIcon,
  MagnifyingGlassCircleIcon,
  PhoneIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { AboutCard } from "./ui/card";
import { color } from "framer-motion";

const AboutUsSection = () => {
  const aboutCards = [
    {
      icon:EyeIcon,
      title: "Mission & Vision",
      color:"red"
    },
    {
      icon: UserGroupIcon,
      title: "Expert Team Member",
      color:"green"
    },
    {
      icon: HandThumbUpIcon,
      title: "Top Collaboration",
      color:"blue"
    },
    {
      icon: PhoneIcon,
      title: "Professional Support",
      color:"pink"
    },
  ];

  return (
    <div className="px-4 py-8 lg:px-16">
      <div className="bg-gray-50 p-6 md:p-10 rounded-xl">
        <AboutUsHeader />
        <div className="flex flex-col lg:flex-row gap-8 mt-10 items-start lg:items-center">
          <div className="flex flex-col w-full lg:w-1/2 mt-8 lg:mt-0">
            <h2 className="text-xl md:text-3xl font-bold mb-5">
            Empowering Business Success with Tailored Solutions.
            </h2>
            <p className="text-gray-600 text-sm md:text-base mt-3">
            At Apeiro Research, we empower businesses by offering a blend of tailored solutions designed for success. With expertise in talent mapping, executive search, recruitment, and KPO services—including data management and B2B data—we provide the tools and insights that drive growth. Our commitment to innovation and efficiency ensures your organization stays ahead in an ever-evolving business landscape. Let us help you unlock potential, streamline processes, and shape a thriving future.
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
                color={aboutCard.color}
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
