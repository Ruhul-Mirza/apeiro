import React, { useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Stats from "../../components/ui/stats";
import bg from "../../image/bgimage.png";
import { NavLink } from "react-router-dom";
import {
  LightBulbIcon,
  ShieldExclamationIcon,
  UserGroupIcon,
  TrophyIcon
} from "@heroicons/react/24/outline";

const CompanyOverView = () => {
  return (
    <div className="overflow-hidden min-h-screen">
      <div className="relative mb-auto flex w-screen flex-col overflow-hidden pt-40 pb-20"  data-aos="fade-down"
      
      data-aos-duration="1300">
        {/* dotimage */}
        <div
          className="absolute top-0 right-0 bottom-0 left-0 bg-cover bg-bottom bg-no-repeat"
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
        {/* content */}
        <div className="relative z-10 mx-auto flex max-w-[689px] flex-col items-center gap-8 text-center px-5">
          <div className="max-w-[295px] sm:max-w-[492px] md:max-w-[689px]">
            <h2 className="font-semibold text-3xl text-neutral-900 tracking-tight sm:mx-auto sm:text-4xl sm:tracking-tight md:max-w-[689px] md:text-5xl md:leading-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>

            <p
              className="mx-auto max-w-[405px] mt-7 text-neutral-600 
              sm:max-w-[560px] 
              md:max-w-[652px] md:text-lg md:leading-7"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, tempore. Rerum rem incidunt quas
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap gap-3 md:flex-nowrap">
              <button className="inline-flex w-full items-center justify-center gap-1 bg-black text-white rounded-full border border-neutral-900 px-10 py-3 text-center text-base font-medium leading-6">
                <NavLink to="/about">About Us</NavLink>
              </button>
              <button className="relative inline-flex hover:bg-gray-200 w-full items-center justify-center gap-1 whitespace-nowrap rounded-full border-2 border-gray-200 bg-white px-5 py-3 text-base font-medium text-gray-600 leading-6 transition-all duration-100 ease-in-out">
                <svg fill="none" viewBox="0 0 20 20" width="20" height="20">
                  <path
                    stroke="currentColor"
                    d="M8.709 14.155a4.793 4.793 0 0 1 5.412-6.55m-5.412 6.55a4.793 4.793 0 0 0 6.31 2.54c.1-.044.21-.06.317-.042l2.213.37c.18.03.337-.127.307-.307l-.371-2.21a.566.566 0 0 1 .041-.316 4.793 4.793 0 0 0-3.405-6.586m-5.412 6.55a5.845 5.845 0 0 1-2.682-.461.689.689 0 0 0-.385-.05l-2.695.45a.324.324 0 0 1-.373-.373l.452-2.69a.689.689 0 0 0-.05-.386 5.835 5.835 0 0 1 9.482-6.435 5.808 5.808 0 0 1 1.663 3.395"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.25"
                  ></path>
                </svg>
                <NavLink to="/contact">Talk to founders</NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
      <CompanyAccordion />
      <CoreValueCard />
      <Stats />
    </div>
  );
};

function CompanyAccordion() {
  const [selectedKeys, setSelectedKeys] = useState(["1"]);
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="px-5 py-14 sm:px-16 bg-gray-50"   data-aos="fade-up"
    
    data-aos-duration="1300">
      <Accordion
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          subtitle={
            <span className="mt-0.5 text-medium xs:block hidden text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reiciendis, ullam.
            </span>
          }
          indicator={
            <span
              aria-hidden="true"
              className="text-gray-600 font-semibold text-xl transition-transform rotate-0"
            >
              <Icon />
            </span>
          }
          title={<span className="text-xl font-semibold">Our Mission</span>}
          className="text-gray-600"
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          subtitle={
            <span className="mt-0.5 text-medium xs:block hidden text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reiciendis, ullam.
            </span>
          }
          indicator={
            <span
              aria-hidden="true"
              className="text-gray-600 font-semibold text-xl transition-transform rotate-0"
            >
              <Icon />
            </span>
          }
          title={
            <span className="mt-2 block text-xl font-semibold">Our Vision</span>
          }
          className="text-gray-600"
        >
          {defaultContent}
        </AccordionItem>
      </Accordion>
    </div>
  );
}

const Icon = () => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
    >
      <path
        d="M15.5 19l-7-7 7-7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      ></path>
    </svg>
  );
};
export default CompanyOverView;

const CoreValueCard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Our Core Values
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12"   data-aos="zoom-in-up"
      
      data-aos-duration="1300">
          {/* Innovation */}
          <div className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 transition-all duration-300 hover:bg-white/10 hover:transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-indigo-500/10 rounded-xl">
                <LightBulbIcon className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white ml-4">
                Innovation
              </h3>
            </div>
            <p className="text-slate-300 leading-relaxed">
              We embrace a culture of continuous innovation, fostering
              creativity and leveraging advanced technologies to stay at the
              forefront of industry evolution.
            </p>
          </div>

          {/* Empowerment */}
          <div className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 transition-all duration-300 hover:bg-white/10 hover:transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-purple-500/10 rounded-xl">
                <UserGroupIcon className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white ml-4">
                Empowerment
              </h3>
            </div>
            <p className="text-slate-300 leading-relaxed">
              We empower our employees to excel, encouraging autonomy, personal
              growth, and a sense of ownership in their roles for collective
              success.
            </p>
          </div>

          {/* Integrity */}
          <div className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 transition-all duration-300 hover:bg-white/10 hover:transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-cyan-500/10 rounded-xl">
                <ShieldExclamationIcon className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white ml-4">
                Integrity
              </h3>
            </div>
            <p className="text-slate-300 leading-relaxed">
              We uphold the highest standards of integrity in all our
              interactions, ensuring transparency, honesty, and ethical conduct
              in every aspect of our business.
            </p>
          </div>

          {/* Collaboration */}
          <div className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 transition-all duration-300 hover:bg-white/10 hover:transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-rose-500/10 rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8 text-rose-400"
                >
                  <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                  <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                  <path d="m21 3 1 11h-2" />
                  <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                  <path d="M3 4h8" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white ml-4">
                Collaboration
              </h3>
            </div>
            <p className="text-slate-300 leading-relaxed">
              We believe in the power of collaboration, internally and
              externally, fostering teamwork and partnerships to achieve shared
              goals and mutual success.
            </p>
          </div>

          {/* Excellence - Full Width */}
          <div className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 transition-all duration-300 hover:bg-white/10 hover:transform hover:-translate-y-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-amber-500/10 rounded-xl">
                <TrophyIcon className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white ml-4">
                Excellence
              </h3>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Our commitment to excellence is unwavering. We strive for the
              highest quality in our work, processes, and client interactions,
              setting benchmarks for industry standards.
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-slate-300 text-lg">
            You have better things to do than worry about your business.{" "}
            <NavLink
              to="/contact"
              className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
            >
              Let's Discuss your Project
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

// function CoreValue() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
//         <div className="text-center mb-20">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
//             Our Core Values
//           </h2>
//           <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           {/* Innovation */}
//           <div className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 transition-all duration-300 hover:bg-white/10 hover:transform hover:-translate-y-1">
//             <div className="flex items-center mb-4">
//               <div className="p-3 bg-indigo-500/10 rounded-xl">
//                 <LightBulbIcon className="w-8 h-8 text-indigo-400" />
//               </div>
//               <h3 className="text-2xl font-semibold text-white ml-4">
//                 Innovation
//               </h3>
//             </div>
//             <p className="text-slate-300 leading-relaxed">
//               We embrace a culture of continuous innovation, fostering
//               creativity and leveraging advanced technologies to stay at the
//               forefront of industry evolution.
//             </p>
//           </div>

//           {/* Empowerment */}
//           <div className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 transition-all duration-300 hover:bg-white/10 hover:transform hover:-translate-y-1">
//             <div className="flex items-center mb-4">
//               <div className="p-3 bg-purple-500/10 rounded-xl">
//                 <UserGroupIcon className="w-8 h-8 text-purple-400" />
//               </div>
//               <h3 className="text-2xl font-semibold text-white ml-4">
//                 Empowerment
//               </h3>
//             </div>
//             <p className="text-slate-300 leading-relaxed">
//               We empower our employees to excel, encouraging autonomy, personal
//               growth, and a sense of ownership in their roles for collective
//               success.
//             </p>
//           </div>

//           {/* Integrity */}
//           <div className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 transition-all duration-300 hover:bg-white/10 hover:transform hover:-translate-y-1">
//             <div className="flex items-center mb-4">
//               <div className="p-3 bg-cyan-500/10 rounded-xl">
//                 <ShieldExclamationIcon className="w-8 h-8 text-cyan-400" />
//               </div>
//               <h3 className="text-2xl font-semibold text-white ml-4">
//                 Integrity
//               </h3>
//             </div>
//             <p className="text-slate-300 leading-relaxed">
//               We uphold the highest standards of integrity in all our
//               interactions, ensuring transparency, honesty, and ethical conduct
//               in every aspect of our business.
//             </p>
//           </div>

//           {/* Collaboration */}
//           <div className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 transition-all duration-300 hover:bg-white/10 hover:transform hover:-translate-y-1">
//             <div className="flex items-center mb-4">
//               <div className="p-3 bg-rose-500/10 rounded-xl">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="w-8 h-8 text-rose-400"
//                 >
//                   <path d="m11 17 2 2a1 1 0 1 0 3-3" />
//                   <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
//                   <path d="m21 3 1 11h-2" />
//                   <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
//                   <path d="M3 4h8" />
//                 </svg>
//               </div>
//               <h3 className="text-2xl font-semibold text-white ml-4">
//                 Collaboration
//               </h3>
//             </div>
//             <p className="text-slate-300 leading-relaxed">
//               We believe in the power of collaboration, internally and
//               externally, fostering teamwork and partnerships to achieve shared
//               goals and mutual success.
//             </p>
//           </div>

//           {/* Excellence - Full Width */}
//           <div className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 transition-all duration-300 hover:bg-white/10 hover:transform hover:-translate-y-1 md:col-span-2">
//             <div className="flex items-center mb-4">
//               <div className="p-3 bg-amber-500/10 rounded-xl">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={1.5}
//                   stroke="currentColor"
//                   className="w-8 h-8 text-amber-400"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
//                   />
//                 </svg>
//               </div>
//               <h3 className="text-2xl font-semibold text-white ml-4">
//                 Excellence
//               </h3>
//             </div>
//             <p className="text-slate-300 leading-relaxed">
//               Our commitment to excellence is unwavering. We strive for the
//               highest quality in our work, processes, and client interactions,
//               setting benchmarks for industry standards.
//             </p>
//           </div>
//         </div>

//         <div className="text-center mt-16">
//           <p className="text-slate-300 text-lg">
//             You have better things to do than worry about your business.{" "}
//             <NavLink
//               to="/contact"
//               className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
//             >
//               Let's Discuss your Project
//             </NavLink>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
