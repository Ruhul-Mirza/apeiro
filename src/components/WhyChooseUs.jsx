import React from 'react';
import { CurrencyDollarIcon, LightBulbIcon, CheckCircleIcon, ClipboardDocumentListIcon, GlobeAltIcon, ShieldExclamationIcon } from '@heroicons/react/24/outline';
import { WhyChooseHeader } from './AllHeader';

// Card data array with Heroicons
const cardData = [
  {
    icon: <CurrencyDollarIcon className="h-8 w-8 text-gray-500" />,
    title: "Prioritize Budget",
    description: "We prioritize your budget by not charging for data that doesn't yield results, reflecting our commitment to providing value."
  },
  {
    icon: <LightBulbIcon className="h-8 w-8 text-gray-500" />,
    title: "Industry Insights & Proven Strategies",
    description: "With over a decade of experience, we bring industry insights and proven strategies to optimize results for your data list building."
  },
  {
    icon: <CheckCircleIcon className="h-8 w-8 text-gray-500" />,
    title: "Verification & Accuracy",
    description: "Our information and contact lists undergo rigorous verification by experienced compliance and quality teams, ensuring accuracy and relevance."
  },
  {
    icon: <ClipboardDocumentListIcon className="h-8 w-8 text-gray-500" />,
    title: "Tailored Data Lists",
    description: "Serving every industry, sector, and business size, we tailor data lists to your specific requirements, covering over 150 countries."
  },
  {
    icon: <GlobeAltIcon className="h-8 w-8 text-gray-500" />,
    title: "Global Coverage",
    description: "We offer coverage in over 150 countries, ensuring you get the global data you need."
  },
  {
    icon: <ShieldExclamationIcon className="h-8 w-8 text-gray-500" />,
    title: "Compliance and Quality",
    description: "Our lists meet the highest standards of compliance, ensuring quality and regulatory adherence."
  }
];

export const ValueCard = ({ icon, title, description }) => {
  return (
    <li className="group rounded-2xl border border-gray-200 p-8 relative">
      <div className="pointer-events-none">
        <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5"
          >
            <defs>
              <pattern
                id=":r0:"
                width="72"
                height="56"
                patternUnits="userSpaceOnUse"
                x="50%"
                y="16"
              >
                <path d="M.5 56V.5H72" fill="none"></path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth="0" fill="url(#:r0:)" />
            <svg x="50%" y="16" className="overflow-visible">
              <rect strokeWidth="0" width="73" height="57" x="0" y="56"></rect>
              <rect strokeWidth="0" width="73" height="57" x="72" y="168"></rect>
            </svg>
          </svg>
        </div>
        <div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100"
          style={{ maskImage: 'radial-gradient(300px at 0px 0px, white, transparent)' }}
        ></div>
        <div
          className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
          style={{ maskImage: 'radial-gradient(300px at 0px 0px, white, transparent)' }}
        >
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70"
          >
            <defs>
              <pattern
                id=":r1:"
                width="72"
                height="56"
                patternUnits="userSpaceOnUse"
                x="50%"
                y="16"
              >
                <path d="M.5 56V.5H72" fill="none"></path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth="0" fill="url(#:r1:)" />
            <svg x="50%" y="16" className="overflow-visible">
              <rect strokeWidth="0" width="73" height="57" x="0" y="56"></rect>
              <rect strokeWidth="0" width="73" height="57" x="72" y="168"></rect>
            </svg>
          </svg>
        </div>
      </div>
      <div className="relative z-10">
        <span>{icon}</span>
        <h3 className="mt-6 font-semibold text-gray-900 tracking-wide leading-6 antialiased">
          {title}
        </h3>
        <p className="mt-2 text-gray-700 tracking-wide leading-6 antialiased">{description}</p>
      </div>
    </li>
  );
};

const WhyChooseUs = () => {
  return (
    <div className='mt-10 mb-20'>
    <WhyChooseHeader/>
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 gap-6">
      {cardData.map((card, index) => (
        <ValueCard
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
        />
      ))}
    </ul>
    </div>
  );
};

export default WhyChooseUs;
