import {
  EnvelopeIcon,
  PlusCircleIcon,
  CircleStackIcon,
  BuildingOfficeIcon,
  ArrowPathIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {  ServiceCard } from "./ui/servicecard";
import { WhatWeDoHeader } from "./AllHeader";

const services = [
  {
    icon: EnvelopeIcon,
    title: "Email List Building",
    description:
      "Enterprise-grade infrastructure with worldwide availability and scalability.",
  },
  {
    icon: PlusCircleIcon,
    title: "Data Append",
    description:
      "Seamlessly connect with your existing tools and workflows through our robust API.",
  },
  {
    icon: ArrowPathIcon,
    title: "Data Refresh",
    description:
      "Foster collaboration across departments with our intuitive team features.",
  },
  {
    icon: CircleStackIcon,
    title: "Customize B2B Database",
    description:
      "Tailored approaches that align with your business objectives and brand identity.",
  },
  {
    icon: BuildingOfficeIcon,
    title: "DataBase Building",
    description:
      "Accelerate your project timeline with our optimized deployment pipeline.",
  },
  {
    icon: DocumentMagnifyingGlassIcon,
    title: "Content Research",
    description:
      "Stay ahead with cutting-edge features and continuous platform improvements.",
  },
];

export function WhatWeDoSection() {
  return (
    <>
    <div className="container relative mx-auto px-4 pb-1">
    <WhatWeDoHeader/>
      <div className='mt-8 mb-24 grid grid-cols-1 md:grid-cols-2 gap-6'>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            className={`transform transition-transform duration-300 hover:-translate-y-1 ${
              index % 3 === 0
                ? "lg:translate-y-4"
                : index % 3 === 1
                ? "lg:translate-y-0"
                : "lg:-translate-y-4"
            }`}
          />
        ))}
      </div>
      
    </div>
    </>
  );
}
