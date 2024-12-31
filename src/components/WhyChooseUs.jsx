import React from "react";
import { WhyChooseCard,WhyChooseCardItem } from "./ui/whychoosecard";
import {WhyChooseHeader } from "./AllHeader"
import {
    ArrowTrendingUpIcon,
    ViewColumnsIcon,
    ClipboardDocumentIcon,
    DocumentIcon,
    SignatureIcon,
  } from "@heroicons/react/24/solid";

  

export default function WhyChooseUs() {
  return (
    <div className="bg-gradient-to-br from-[#446496] via-[#4a466b] pt-12 pb-16 to-[#000000]">
        <WhyChooseHeader/>
    
    (<WhyChooseCard className="max-w-4xl px-5 mx-auto">
      {items.map((item, i) => (
        <WhyChooseCardItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""} />
      ))}
    </WhyChooseCard>)
    </div>
  );
}
const Skeleton = () => (
  <div
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-400 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
       
    </div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <ArrowTrendingUpIcon className="h-4 w-4 text-gray-900" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    icon: <ViewColumnsIcon className="h-4 w-4 text-gray-900" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <ClipboardDocumentIcon className="h-4 w-4 text-gray-900" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    icon: <DocumentIcon className="h-4 w-4 text-gray-900" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <DocumentIcon className="h-4 w-4 text-gray-900" />,
  },

];
