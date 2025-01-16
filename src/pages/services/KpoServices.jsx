import { React, useState } from "react"
import { KPOSERVICES } from "../../lib/utils";

import { KpoServicesHeading } from "./ServicesHeading";
import { ServiceCard } from "./Card";

const KpoServices = () => {
  
  return (
    <div className="bg-gray-50 bg-opacity-75">
      <KpoServicesHeading />
      <div className="container relative mx-auto px-4 pb-1 overflow-x-hidden">
        <div className="mt-8 mb-24 grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
          {KPOSERVICES.map((service,index) => (
            <ServiceCard
              key={service.key}
              icon={service.icon}
              title={service.title}
              description={service.description}
              guideLink={service.guideLink}
              color={service.color}
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
    </div>
  );
};

export default KpoServices;
