import WorldMap from "../../components/ui/world-map";
import { motion } from "motion/react";
import smallScreen from "../../image/smallscreen.png";
import { ChevronRightIcon, UserCircleIcon } from "@heroicons/react/24/outline";

export default function AboutPage() {
  return (
    <>
      <AboutUs />
      <OurTeam/>
    </>
  );
}
function AboutUs() {
  return (
    <div className=" pt-40 pb-20 dark:bg-black w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-semibold tracking-wider text-lg md:text-2xl m-2 mb-8 uppercase dark:text-gray-300 inline-block text-neutral-400 border-b-3 pb-1 border-neutral-300">
          About Us
        </p>
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          Apeiro{" "}
          <span className="text-neutral-400">
            {"Research".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          Break free from traditional boundaries. Work from anywhere, at the
          comfort of your own studio apartment. Perfect for Nomads and
          Travellers.
        </p>
      </div>
      <WorldMap
        dots={[
          {
            start: {
              lat: 64.2008,
              lng: -149.4937,
            }, // Alaska (Fairbanks)
            end: {
              lat: 34.0522,
              lng: -118.2437,
            }, // Los Angeles
          },
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
          },
          {
            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
          },
        ]}
      />
    </div>
  );
}

const OurTeam = () => {
 
  const aboutCards = [
    {
      name: "David Forren",
      role: "Founder / CEO",
      color:"blue",
    },
    {
      name: "Jane Doe",
      role: "Product Manager",
      color:"red",
    },
    {
      name: "John Smith",
      role: "Software Engineer",
      color:"orange",
    },
    {
      name: "Emily White",
      role: "Designer",
      color:"pink",
    },
    {
      name: "Michael Brown",
      role: "Marketing Lead",
      color:"purple",
    },
    {
      name: "Sophia Black",
      role: "Data Analyst",
      color:"green",
    },
  ];
  return (
    <>
      <div className="px-4 py-8 lg:px-16">
        <div className="bg-gray-50 p-6 md:p-10 rounded-xl">
          <div className="flex items-center gap-2 md:gap-3">
            <img src={smallScreen} width={30} alt="Apeiro research" />
            <span className="text-xl md:text-2xl text-warning-500 font-semibold">
              |
            </span>
            <span className="text-2xl md:3xl font-semibold">Our Team</span>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 mt-10 items-start lg:items-center">
            <div className="flex flex-col w-full lg:w-1/2 mt-8 lg:mt-0">
              <h2 className="text-xl md:text-3xl font-bold">
                Unlock Insights with Our Expertise
              </h2>
              <p className="text-gray-600 text-sm md:text-base mt-3">
                Our expert team ensures comprehensive data research and
                professional insights to help you succeed. Join us to experience
                unparalleled quality and support.
              </p>
              <div>
                <button className="mt-5 tracking-wide flex items-center gap-2 px-5 py-3 rounded-full text-white bg-black/90 hover:bg-black/100 font-bold">
                  <a href="#">We're Hiring!</a>
                  <ChevronRightIcon className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Card Section */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 w-full lg:w-1/2">
              {aboutCards.map((aboutCard, index) => (
                <AboutCard
                  key={index}
                  role={aboutCard.role}
                  name={aboutCard.name}
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
      
    </>
  );
};

const AboutCard = ({ name, role,color }) => {
  const cardthemes ={
    pink:"hover:border-pink-400",
    blue:"hover:border-blue-400",
    orange:"hover:border-orange-400",
    red:"hover:border-red-400",
    green:"hover:border-green-400",
    purple:"hover:border-purple-400"
  }
  return (
    <div className={`border border-zinc-200 tracking-wide rounded-xl p-5 cursor-pointer  bg-white ${cardthemes[color]}`}>
      <div className="flex gap-6">

      <div className="flex items-center justify-center h-12 w-12 bg-gray-100 rounded-full">
        <UserCircleIcon className="h-6 w-6 text-gray-500" />
      </div>
      <div className="flex flex-col">
      <div className="text-gray-700 text-sm md:text-base font-semibold">
        {name}
      </div>
      <div className="text-gray-500 text-xs">
        {role}
      </div>
      </div>
      </div>
      
    </div>
  );
};
