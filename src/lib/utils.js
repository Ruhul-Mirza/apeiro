

import { clsx } from "clsx";
import {  BriefcaseBusiness, Building, ChartColumnBig, Check, Database, FilePlus, FileSearch2, FileText, Globe, Lightbulb, Linkedin, ListOrdered, Logs, Mail, MailCheck, PieChart, PlusCircle, RefreshCcw, Search, Server, User, UserRoundPlus, UsersRound, Volume2 } from "lucide-react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const KPOSERVICES = [
  {
    icon: Mail,
    title: "Email List Building",
    detailPath: "/kpo-services/email-list-building",
    description: "Targeted lists. Quality leads. Maximum impact.",
    key: "email-list",
    color: "red",
  },
  {
    icon: PlusCircle,
    title: "Data Append",
    detailPath: "/kpo-services/data-append",
    description: "Enhance accuracy. Fill gaps. Boost insights.",
    key: "data-append",
    color: "orange",
  },
  {
    icon: RefreshCcw,
    title: "Data Refresh",
    detailPath: "/kpo-services/data-refresh",
    description: "Update. Verify. Stay current.",
    key: "data-refresh",
    color: "green",
  },
  {
    icon: Database,
    title: "Customize B2B Database",
    detailPath: "/kpo-services/customize-b2b-database",
    description: "Tailored data. Better targeting. Greater results",
    key: "customize-b2b",
    color: "blue",
  },
  {
    icon: Building,
    title: "DataBase Building",
    detailPath: "/kpo-services/database-building",
    description: "Accurate data. Smart solutions. Stronger connections.",
    key: "database-building",
    color: "pink",
  },
  {
    icon: FileSearch2,
    detailPath: "/kpo-services/content-research",
    title: "Content Research",
    description: "Insights-driven. Well-crafted. Engaging content.",
    key: "content-research",
    color: "purple",
  },
  {
    icon: Linkedin,
    title: "LinkedIn Data Search",
    detailPath: "/kpo-services/linkedin-data-search",
    description: "Targeted profiles. Relevant connections. Precise insights.",
    key: "linkedin-data",
    color: "blue",
  },
  {
    icon: Volume2,
    title: "Lead generation",
    detailPath: "/kpo-services/lead-generation",
    description:
      "Qualified leads. Stronger opportunities. Greater conversions.",
    key: "lead-generation",
    color: "emerald",
  },
  {
    icon: Server,
    title: "Online-Offline Data entry Services",
    detailPath: "/kpo-services/online-offline-data",
    description:
      "Fast, accurate, and reliable data input for seamless operations.",
    key: "online-offline",
    color: "blue",
  },
  {
    icon: Check,
    title: "Data-Validation",
    detailPath: "/kpo-services/data-validation",
    description: "Ensure accuracy. Eliminate errors. Strengthen decisions.",
    key: "data-validation",
    color: "orange",
  },
  {
    icon: PieChart,
    title: "Data-Mining",
    detailPath: "/kpo-services/data-mining",
    description:
      "Extract valuable insights. Uncover patterns. Drive informed decisions.",
    key: "data-mining",
    color: "maroon",
  },
  {
    icon: Globe,
    title: "Web-Research",
    detailPath: "/kpo-services/web-research",
    description: "Optimize content, design, and user experience.",
    key: "web-research",
    color: "green",
  },
  {
    icon: Logs,
    title: "List-Research",
    detailPath: "/kpo-services/list-research",
    description:
      "Gathers data on trends, competitors, SEO, content, UX, and design to enhance the site",
    key: "list-research",
    color: "pink",
  },
  {
    icon: MailCheck,
    title: "B2B-Email",
    detailPath: "/kpo-services/b2b-email",
    description: "Connecting businesses through impactful emails",
    key: "b2b-email",
    color: "indigo",
  },
];

export const RPOSERVICES = [
  {
    icon: ListOrdered,
    title: "Number Gathering",
    detailPath: "/rpo-services/number-gathering",
    description: "Expertly gathering numbers for informed decisions.",
    key: "number-gathering",
    color: "red",
  },
  {
    icon: Lightbulb,
    title: "Talent Mapping",
    detailPath: "/rpo-services/talent-mapping",
    description: "Strategically mapping talent for the right fit.",
    key: "talent-mapping",
    color: "green",
  },
  {
    icon: Search,
    title: "Talent Sourcing",
    detailPath: "/rpo-services/talent-sourcing",
    description: "Connecting the right talent with the right opportunity.",
    key: "talent-sourcing",
    color: "indigo",
  },
  {
    icon: ChartColumnBig,
    title: "Talent Insight & Intelligence",
    detailPath: "/rpo-services/talent-insight",
    description: "Unlocking talent insights for smarter decisions.",
    key: "talent-insight",
    color: "orange",
  },
  {
    icon: UsersRound,
    title: "Diversity Hiring",
    detailPath: "/rpo-services/diversity-hiring",
    description: "Fostering diverse teams for stronger innovation.",
    key: "diversity-hiring",
    color: "blue",
  },
  {
    icon: BriefcaseBusiness,
    title: "Executive Search Support",
    detailPath: "/rpo-services/executive-search-support",
    description: "Empowering executive search with tailored support.",
    key: "executive-search-support",
    color: "pink",
  },
  {
    icon: UserRoundPlus,
    title: "Talent Pipeline",
    detailPath: "/rpo-services/talent-pipeline",
    description: "Building a pipeline of top-tier talent for future success.",
    key: "talent-pipeline",
    color: "maroon",
  },
  {
    icon: FileText,
    title: "Recruitment Services",
    detailPath: "/rpo-services/recruitment-services",
    description: "Connecting the right talent with the right opportunities.",
    key: "recruitment-services",
    color: "emerald",
  },
  {
    icon: FilePlus,
    title: "Talent Pooling",
    detailPath: "/rpo-services/talent-pooling",
    description: "Creating a pool of top talent for future growth.",
    key: "talent-pooling",
    color: "purple",
  },
  {
    icon: User,
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
