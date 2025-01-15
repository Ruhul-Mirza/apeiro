import {
  EnvelopeIcon,
  PlusCircleIcon,
  CircleStackIcon,
  BuildingOfficeIcon,
  ArrowPathIcon,
  DocumentMagnifyingGlassIcon
} from "@heroicons/react/24/outline";

import { clsx } from "clsx";
import { color } from "framer-motion";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const KPOSERVICES = [
  {
    icon: EnvelopeIcon,
    title: "Email List Building",
    guideLink:"https://apeiro-research.hashnode.space/default-guide/data",
    description:
      "Enterprise-grade infrastructure with worldwide availability and scalability.",
      key: "email-list",
      color:"red",
      
  },
  {
    icon: PlusCircleIcon,
    title: "Data Append",
    guideLink:"https://apeiro-research.hashnode.space/default-guide/data",
    description:
      "Seamlessly connect with your existing tools and workflows through our robust API.",
      key: "data-append",
      color:"orange",
      
  },
  {
    icon: ArrowPathIcon,
    title: "Data Refresh",
    guideLink:"https://apeiro-research.hashnode.space/default-guide/data",
    description:
      "Foster collaboration across departments with our intuitive team features.",
      key: "data-refresh",
      color:"green",
      
  },
  {
    icon: CircleStackIcon,
    title: "Customize B2B Database",
    guideLink:"https://apeiro-research.hashnode.space/default-guide/data",
    description:
      "Tailored approaches that align with your business objectives and brand identity.",
      key: "customize-b2b",
      color:"blue",
      
  },
  {
    icon: BuildingOfficeIcon,
    title: "DataBase Building",
    guideLink:"https://apeiro-research.hashnode.space/default-guide/data",
    description:
      "Accelerate your project timeline with our optimized deployment pipeline.",
      key:"database-building",
      color:"pink",
      
  },
  {
    icon: DocumentMagnifyingGlassIcon,
    guideLink:"https://apeiro-research.hashnode.space/default-guide/data",
    title: "Content Research",
    description:
      "Stay ahead with cutting-edge features and continuous platform improvements.",
      key:"content-research",
      color:"purple",
      

  },
  {
    icon: EnvelopeIcon,
    title: "Email List Building",
    guideLink:"https://apeiro-research.hashnode.space/default-guide/data",
    description:
      "Enterprise-grade infrastructure with worldwide availability and scalability.",
      key:"email-list-building",
      color:"yellow",
      
      
  },
  {
    icon: PlusCircleIcon,
    title: "Data Append",
    guideLink:"https://apeiro-research.hashnode.space/default-guide/data",
    description:
      "Seamlessly connect with your existing tools and workflows through our robust API.",
      key:"data-append",
      color:"emerald",
      
  },
  {
    icon: ArrowPathIcon,
    title: "Data Refresh",
    guideLink:"https://apeiro-research.hashnode.space/default-guide/data",
    description:
      "Foster collaboration across departments with our intuitive team features.",
      key:"data-refresh",
      color:"indigo",
      
  },
  {
    icon: CircleStackIcon,
    title: "Customize B2B Database",
    guideLink:"https://apeiro-research.hashnode.space/default-guide/data",
    description:
      "Tailored approaches that align with your business objectives and brand identity.",
      key:"customize-b2b",
      color:"maroon",
      
  },
  {
    icon: BuildingOfficeIcon,
    title: "DataBase Building",
    guideLink:"https://apeiro-research.hashnode.space/default-guide/data",
    description:
      "Accelerate your project timeline with our optimized deployment pipeline.",
      key:"database-building",
      color:"cyan",
      
  },
  
];

export const BPOSERVICES = [
  {
    icon: EnvelopeIcon,
    title: "Email List Building",
    guideLink:"https://apeiro-research.hashnode.space/default-guide/data",
    description:
      "Enterprise-grade infrastructure with worldwide availability and scalability.",
      key: "email-list",
      color:"red",
  },
  {
    icon: PlusCircleIcon,
    title: "Data Append",
    guideLink:"https://apeiro-research.hashnode.space/default-guide/data",
    description:
      "Seamlessly connect with your existing tools and workflows through our robust API.",
      key: "data-append",
      color:"green",
  },
]
export const CompanyDropdownItems =[
{
  title:"About",
  href:"/about"
},
{
  title:"Why Us",
  href:"/why-us"
},
{
  title:"Company Overview",
  href:"/company-overview"
},
]

export const ServicesDropdownItems =[
  {
    title:"KPO Service",
    href:"/kpo-service"
  },
  {
    title:"BPO Service",
    href:"/bpo-service"
  },

  ]
  
// export const WHYCHOOSEDATA = [
//     {
//       icon: <DollarSignIcon className="h-8 w-8 text-gray-500" />,
//       title: "Prioritize Budget",
//       description: "We prioritize your budget by not charging for data that doesn't yield results, reflecting our commitment to providing value."
//     },
//     {
//       icon: <LightBulbIcon className="h-8 w-8 text-gray-500" />,
//       title: "Industry Insights & Proven Strategies",
//       description: "With over a decade of experience, we bring industry insights and proven strategies to optimize results for your data list building."
//     },
//     {
//       icon: <CheckCircleIcon className="h-8 w-8 text-gray-500" />,
//       title: "Verification & Accuracy",
//       description: "Our information and contact lists undergo rigorous verification by experienced compliance and quality teams, ensuring accuracy and relevance."
//     },
//     {
//       icon: <ViewListIcon className="h-8 w-8 text-gray-500" />,
//       title: "Tailored Data Lists",
//       description: "Serving every industry, sector, and business size, we tailor data lists to your specific requirements, covering over 150 countries."
//     },
//     {
//       icon: <GlobeAltIcon className="h-8 w-8 text-gray-500" />,
//       title: "Global Coverage",
//       description: "We offer coverage in over 150 countries, ensuring you get the global data you need."
//     },
//     {
//       icon: <ShieldExclamationIcon className="h-8 w-8 text-gray-500" />,
//       title: "Compliance and Quality",
//       description: "Our lists meet the highest standards of compliance, ensuring quality and regulatory adherence."
//     }
//   ];