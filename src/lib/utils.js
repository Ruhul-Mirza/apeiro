import {
  EnvelopeIcon,
  PlusCircleIcon,
  CircleStackIcon,
  BuildingOfficeIcon,
  ArrowPathIcon,
  DocumentMagnifyingGlassIcon,
  SpeakerWaveIcon,
  ServerStackIcon,
  CheckIcon,
  ChartPieIcon,
  GlobeAltIcon,
  QueueListIcon,
  NumberedListIcon,
  LightBulbIcon,
  MagnifyingGlassIcon,
  ChartBarIcon,
  UsersIcon,
  BriefcaseIcon,
  UserPlusIcon,
  ClipboardDocumentListIcon,
  UserIcon,
  DocumentPlusIcon,
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
    detailPath: "/kpo-services/email-list-building",
    description: "Targeted lists. Quality leads. Maximum impact.",
    key: "email-list",
    color: "red",
  },
  {
    icon: PlusCircleIcon,
    title: "Data Append",
    detailPath: "/kpo-services/data-append",
    description: "Enhance accuracy. Fill gaps. Boost insights.",
    key: "data-append",
    color: "orange",
  },
  {
    icon: ArrowPathIcon,
    title: "Data Refresh",
    detailPath: "/kpo-services/data-refresh",
    description: "Update. Verify. Stay current.",
    key: "data-refresh",
    color: "green",
  },
  {
    icon: CircleStackIcon,
    title: "Customize B2B Database",
    detailPath: "/kpo-services/customize-b2b-database",
    description: "Tailored data. Better targeting. Greater results",
    key: "customize-b2b",
    color: "blue",
  },
  {
    icon: BuildingOfficeIcon,
    title: "DataBase Building",
    detailPath: "/kpo-services/database-building",
    description: "Accurate data. Smart solutions. Stronger connections.",
    key: "database-building",
    color: "pink",
  },
  {
    icon: DocumentMagnifyingGlassIcon,
    detailPath: "/kpo-services/content-research",
    title: "Content Research",
    description: "Insights-driven. Well-crafted. Engaging content.",
    key: "content-research",
    color: "purple",
  },
  {
    icon: EnvelopeIcon,
    title: "LinkedIn Data Search",
    detailPath: "/kpo-services/linkedin-data-search",
    description: "Targeted profiles. Relevant connections. Precise insights.",
    key: "linkedin-data",
    color: "yellow",
  },
  {
    icon: SpeakerWaveIcon,
    title: "Lead generation",
    detailPath: "/kpo-services/lead-generation",
    description:
      "Qualified leads. Stronger opportunities. Greater conversions.",
    key: "lead-generation",
    color: "emerald",
  },
  {
    icon: ServerStackIcon,
    title: "Online-Offline Data entry Services",
    detailPath: "/kpo-services/online-offline-data",
    description:
      "Fast, accurate, and reliable data input for seamless operations.",
    key: "online-offline",
    color: "blue",
  },
  {
    icon: CheckIcon,
    title: "Data-Validation",
    detailPath: "/kpo-services/data-validation",
    description: "Ensure accuracy. Eliminate errors. Strengthen decisions.",
    key: "data-validation",
    color: "orange",
  },
  {
    icon: ChartPieIcon,
    title: "Data-Mining",
    detailPath: "/kpo-services/data-mining",
    description:
      "Extract valuable insights. Uncover patterns. Drive informed decisions.",
    key: "data-mining",
    color: "maroon",
  },
  {
    icon: GlobeAltIcon,
    title: "Web-Research",
    detailPath: "/kpo-services/web-research",
    description: "Optimize content, design, and user experience.",
    key: "web-research",
    color: "green",
  },
  {
    icon: QueueListIcon,
    title: "List-Research",
    detailPath: "/kpo-services/list-research",
    description:
      "Gathers data on trends, competitors, SEO, content, UX, and design to enhance the site",
    key: "list-research",
    color: "pink",
  },
  {
    icon: EnvelopeIcon,
    title: "B2B-Email",
    detailPath: "/kpo-services/b2b-email",
    description: "Connecting businesses through impactful emails",
    key: "b2b-email",
    color: "indigo",
  },
];

export const RPOSERVICES = [
  {
    icon: NumberedListIcon,
    title: "Number Gathering",
    detailPath: "/rpo-services/number-gathering",
    description: "Expertly gathering numbers for informed decisions.",
    key: "number-gathering",
    color: "red",
  },
  {
    icon: LightBulbIcon,
    title: "Talent Mapping",
    detailPath: "/rpo-services/talent-mapping",
    description: "Strategically mapping talent for the right fit.",
    key: "talent-mapping",
    color: "green",
  },
  {
    icon: MagnifyingGlassIcon,
    title: "Talent Sourcing",
    detailPath: "/rpo-services/talent-sourcing",
    description: "Connecting the right talent with the right opportunity.",
    key: "talent-sourcing",
    color: "indigo",
  },
  {
    icon: ChartBarIcon,
    title: "Talent Insight & Intelligence",
    detailPath: "/rpo-services/talent-insight",
    description: "Unlocking talent insights for smarter decisions.",
    key: "talent-insight",
    color: "orange",
  },
  {
    icon: UsersIcon,
    title: "Diversity Hiring",
    detailPath: "/rpo-services/diversity-hiring",
    description: "Fostering diverse teams for stronger innovation.",
    key: "diversity-hiring",
    color: "blue",
  },
  {
    icon: BriefcaseIcon,
    title: "Executive Search Support",
    detailPath: "/rpo-services/executive-search-support",
    description: "Empowering executive search with tailored support.",
    key: "executive-search-support",
    color: "pink",
  },
  {
    icon: UserPlusIcon,
    title: "Talent Pipeline",
    detailPath: "/rpo-services/talent-pipeline",
    description: "Building a pipeline of top-tier talent for future success.",
    key: "talent-pipeline",
    color: "maroon",
  },
  {
    icon: ClipboardDocumentListIcon,
    title: "Recruitment Services",
    detailPath: "/rpo-services/recruitment-services",
    description: "Connecting the right talent with the right opportunities.",
    key: "recruitment-services",
    color: "emerald",
  },
  {
    icon: DocumentPlusIcon,
    title: "Talent Pooling",
    detailPath: "/rpo-services/talent-pooling",
    description: "Creating a pool of top talent for future growth.",
    key: "talent-pooling",
    color: "purple",
  },
  {
    icon: UserIcon,
    title: "Admin Support",
    detailPath: "/rpo-services/admin-support",
    description: "Efficient admin support to streamline your operations.",
    key: "admin-support",
    color: "red",
  },
];
export const CompanyDropdownItems = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Why Us",
    href: "/why-us",
  },
  {
    title: "Company Overview",
    href: "/company-overview",
  },
];

export const ServicesDropdownItems = [
  {
    title: "KPO Service",
    href: "/kpo-services",
  },
  {
    title: "RPO Service",
    href: "/rpo-services",
  },
];

export const serviceDetails = {
  // KPO-Services
  "email-list-building": {
    title: "Email List Building",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    points: [
      { content: " Detailed explanation of how we build email lists." },
      { content: " Quality assurance and data cleaning processes." },
      {
        content: " Customization options to match your specific needs.",
      },
    ],
  },
  "data-append": {
    title: "Data Append",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    points: [
      { content: " Detailed explanation of how we build email lists." },
      { content: " Quality assurance and data cleaning processes." },
      {
        content: " Customization options to match your specific needs.",
      },
    ],
  },
  "data-refresh": {
    title: "Data Refresh",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    points: [
      { content: " Detailed explanation of how we build email lists." },
      { content: " Quality assurance and data cleaning processes." },
      {
        content: " Customization options to match your specific needs.",
      },
    ],
  },
  "customize-b2b-database": {
    title: "Customize B2B Database",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    points: [
      { content: " Detailed explanation of how we build email lists." },
      { content: " Quality assurance and data cleaning processes." },
      {
        content: " Customization options to match your specific needs.",
      },
    ],
  },
  "database-building": {
    title: "DataBase Building",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    points: [
      { content: " Detailed explanation of how we build email lists." },
      { content: " Quality assurance and data cleaning processes." },
      {
        content: " Customization options to match your specific needs.",
      },
    ],
  },
  "content-research": {
    title: "Content Research",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    points: [
      { content: " Detailed explanation of how we build email lists." },
      { content: " Quality assurance and data cleaning processes." },
      {
        content: " Customization options to match your specific needs.",
      },
    ],
  },
  "linkedin-data-search": {
    title: "Linked Data Search",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    points: [
      { content: " Detailed explanation of how we build email lists." },
      { content: " Quality assurance and data cleaning processes." },
      {
        content: " Customization options to match your specific needs.",
      },
    ],
  },
  "lead-generation": {
    title: "Lead Generation",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    points: [
      { content: " Detailed explanation of how we build email lists." },
      { content: " Quality assurance and data cleaning processes." },
      {
        content: " Customization options to match your specific needs.",
      },
    ],
  },

  "online-offline-data": {
    title: "Online-Offline Data entry Services",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    points: [
      { content: " Detailed explanation of how we build email lists." },
      { content: " Quality assurance and data cleaning processes." },
      {
        content: " Customization options to match your specific needs.",
      },
    ],
  },
  "data-validation": {
    title: "Data Validation",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    points: [
      { content: " Detailed explanation of how we build email lists." },
      { content: " Quality assurance and data cleaning processes." },
      {
        content: " Customization options to match your specific needs.",
      },
    ],
  },
  "data-mining": {
    title: "Data Mining",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    points: [
      { content: " Detailed explanation of how we build email lists." },
      { content: " Quality assurance and data cleaning processes." },
      {
        content: " Customization options to match your specific needs.",
      },
    ],
  },
  "web-research": {
    title: "Web-Research",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    points: [
      { content: " Detailed explanation of how we build email lists." },
      { content: " Quality assurance and data cleaning processes." },
      {
        content: " Customization options to match your specific needs.",
      },
    ],
  },
  "list-research": {
    title: "List-Research",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    points: [
      { content: " Detailed explanation of how we build email lists." },
      { content: " Quality assurance and data cleaning processes." },
      {
        content: " Customization options to match your specific needs.",
      },
    ],
  },
  "b2b-email": {
    title: "B2B-Email",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    points: [
      { content: " Detailed explanation of how we build email lists." },
      { content: " Quality assurance and data cleaning processes." },
      {
        content: " Customization options to match your specific needs.",
      },
    ],
  },

  // RPO Service
  "number-gathering": {
    title: "Number Gathering",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    points: [
      { content: " Detailed explanation of how we build email lists." },
      { content: " Quality assurance and data cleaning processes." },
      {
        content: " Customization options to match your specific needs.",
      },
    ],
  },
  "talent-mapping": {
    title: "Talent Mapping",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    points: [
      { content: " Detailed explanation of how we build email lists." },
      { content: " Quality assurance and data cleaning processes." },
      {
        content: " Customization options to match your specific needs.",
      },
    ],
  },
  "talent-sourcing": {
    title: "Talent Sourcing",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    points: [
      { content: " Detailed explanation of how we build email lists." },
      { content: " Quality assurance and data cleaning processes." },
      {
        content: " Customization options to match your specific needs.",
      },
    ],
  },
  "talent-insight": {
    title: "Talent Insight",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    points: [
      { content: " Detailed explanation of how we build email lists." },
      { content: " Quality assurance and data cleaning processes." },
      {
        content: " Customization options to match your specific needs.",
      },
    ],
  },
  "diversity-hiring": {
    title: "Diversity Hiring",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    points: [
      { content: " Detailed explanation of how we build email lists." },
      { content: " Quality assurance and data cleaning processes." },
      {
        content: " Customization options to match your specific needs.",
      },
    ],
  },
  "executive-search-support": {
    title: "Execution Search Support",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    points: [
      { content: " Detailed explanation of how we build email lists." },
      { content: " Quality assurance and data cleaning processes." },
      {
        content: " Customization options to match your specific needs.",
      },
    ],
  },
  "talent-pipeline": {
    title: "Talent Pipeline",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    points: [
      { content: " Detailed explanation of how we build email lists." },
      { content: " Quality assurance and data cleaning processes." },
      {
        content: " Customization options to match your specific needs.",
      },
    ],
  },
  "recruitment-services": {
    title: "Recruitment Services",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    points: [
      { content: " Detailed explanation of how we build email lists." },
      { content: " Quality assurance and data cleaning processes." },
      {
        content: " Customization options to match your specific needs.",
      },
    ],
  },
  "talent-pooling": {
    title: "Talent Pooling",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    points: [
      { content: " Detailed explanation of how we build email lists." },
      { content: " Quality assurance and data cleaning processes." },
      {
        content: " Customization options to match your specific needs.",
      },
    ],
  },
  "admin-support": {
    title: "Admin Support",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    points: [
      { content: " Detailed explanation of how we build email lists." },
      { content: " Quality assurance and data cleaning processes." },
      {
        content: " Customization options to match your specific needs.",
      },
    ],
  },
};
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
