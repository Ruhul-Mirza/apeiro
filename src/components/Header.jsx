import React, { useState } from "react";
import largeScreen from "../image/largescreen.png";
import smallScreen from "../image/smallscreen.png";
import { CompanyDropdownItems ,ServicesDropdownItems} from "../lib/utils";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  
  DropdownSection,
} from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import Dropdowns from "./ui/dropdown";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="top-0 fixed pt-5 px-2 w-full z-[900]">
      <div className="py-1.5 px-3 flex shadow-sm justify-between mx-auto w-full max-w-[984px] bg-white/40 backdrop-blur-xl items-center rounded-full border-zinc-200 border">
        {/* Logo and Menu for Small Screens */}
        <div className="icon flex items-center">
          <span className="sm:hidden items-center flex">
            <Dropdown className="mt-4">
              <DropdownTrigger>
                <MenuIcon className="text-lg h-6 w-6 mx-1 text-zinc-600" />
              </DropdownTrigger>
              <DropdownMenu variant="light" aria-label="Static Actions">
                <DropdownSection showDivider>
                  <DropdownItem key="home" href="/" className="border-none">
                    Home
                  </DropdownItem>
                </DropdownSection>
                <DropdownSection showDivider title="Menu">
                  <DropdownItem
                    key="about"
                    href="/about"
                    className="border-none"
                  >
                    About
                  </DropdownItem>
                  <DropdownItem key="whyus" href="/why-us" className="border-none">
                    Why Us
                  </DropdownItem>
                  <DropdownItem key="companyoverview" href="/company-overview" className="border-none">
                    Company OverView
                  </DropdownItem>
                </DropdownSection>
                <DropdownSection title="Services">
                  <DropdownItem
                    key="kpo-services"
                    href="/kpo-services"
                    className="border-none"
                  >
                    Kpo Service
                  </DropdownItem>
                  <DropdownItem key="rpo-services" href="/rpo-services" className="border-none">
                    Rpo Service
                  </DropdownItem>
                </DropdownSection>
              </DropdownMenu>
            </Dropdown>
          </span>
          {/* Logo for Small and Large Screens */}
          <img
            src={smallScreen}
            alt="Company Logo"
            width={30}
            className="xs:hidden block mx-2"
          />
          <img
            src={largeScreen}
            alt="Company Logo"
            width={160}
            className="hidden xs:block mx-1"
          />
        </div>

        {/* Navigation Links for Larger Screens */}
        <div className="space-x-4 hidden sm:flex items-center">
          <span>
            <NavLink
              to=""
              className="cursor-pointer hover:bg-gray-100 px-4 py-2 rounded-3xl text-sm"
            >
              Home
            </NavLink>
          </span>
            <Dropdowns items={CompanyDropdownItems} title="Company" 
            />
          <Dropdowns items={ServicesDropdownItems} title="Services"/>
        </div>

        {/* Button */}
        <button className="border px-4 py-2 rounded-full shadow-sm border-zinc-200 hover:bg-gray-100 text-sm font-medium">

        <NavLink to="/contact"> 

          Reach Us
        </NavLink>
        </button>
      </div>
    </header>
  );
};

export default Header;
