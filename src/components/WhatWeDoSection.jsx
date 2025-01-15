import { WhatWeDoHeader } from "./AllHeader";
import { ServiceCard } from "../pages/services/Card";
import { Tabs, Tab } from "@nextui-org/tabs";
import { KPOSERVICES,BPOSERVICES } from "../lib/utils";

const KpoCards = [
  "email-list",
  "data-append",
  "data-refresh",
  "customize-b2b",
  "database-building",
  "content-research",
];
const BpoCards = [
  "email-list",
  "data-append",
  "data-refresh",
  "customize-b2b",
  "database-building",
  "content-research",
];

export function WhatWeDoSection() {
  return (
    
      <div className="container relative mx-auto px-4 pb-1">
        <WhatWeDoHeader />
        <div className="flex w-full flex-col">
          <Tabs aria-label="Options">
            <Tab key="kpo-services" title="Kpo-Services">
              <div className="mt-8 mb-24 grid grid-cols-1 md:grid-cols-2 gap-6">
                {KPOSERVICES.map((service, index) => {
                  const isCardAllowed = KpoCards.includes(service.key);
                  if (!isCardAllowed) return null;

                  return (
                    <ServiceCard
                      key={index}
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                      color={service.color}
                      className={`transform transition-transform duration-300 hover:-translate-y-1 ${
                        index % 3 === 0
                          ? "lg:translate-y-4"
                          : index % 3 === 1
                          ? "lg:translate-y-0"
                          : "lg:-translate-y-4"
                      }`}
                    />
                  );
                })}
              </div>
            </Tab>
            <Tab key="kbpo-services" title="Bpo-Services">
              <div className="mt-8 mb-24 grid grid-cols-1 md:grid-cols-2 gap-6">
                {BPOSERVICES.map((service, index) => {
                  const isCardAllowed = BpoCards.includes(service.key);
                  if (!isCardAllowed) return null;

                  return (
                    <ServiceCard
                      key={index}
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                      color={service.color}
                      className={`transform transition-transform duration-300 hover:-translate-y-1 ${
                        index % 3 === 0
                          ? "lg:translate-y-4"
                          : index % 3 === 1
                          ? "lg:translate-y-0"
                          : "lg:-translate-y-4"
                      }`}
                    />
                  );
                })}
              </div>
            </Tab>
          </Tabs>
         
        </div>
      </div>
    
  );
}
