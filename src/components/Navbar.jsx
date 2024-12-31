import React, { useState } from "react";
import largeScreen from "../image/Final.jpg";
import smallScreen from "../image/Final_logo__1_-removebg-preview.png"
import { Bars3Icon } from "@heroicons/react/24/outline";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  DropdownSection,
} from "@nextui-org/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <header className="w-full top-0 left-0 fixed pt-5 px-5 z-[900]">
      <div className="py-1.5 pr-2.5 pl-3 flex justify-between  bg-white items-center rounded-full max-w-[984px] mx-auto border-zinc-200 border">
        <div className="icon flex items-center">
          {/* Fixed FontAwesomeIcon usage */}
          <span className="sm:hidden items-center flex">
            <Dropdown>
              <DropdownTrigger>
                <Bars3Icon className="text-lg h-6 w-6 mx-1 text-zinc-600" />
              </DropdownTrigger>
              <DropdownMenu variant="light" aria-label="Static Actions">
                <DropdownSection showDivider>
                  <DropdownItem key="home" className="border-none">
                    Home
                  </DropdownItem>
                </DropdownSection>
                <DropdownSection showDivider title="Menu">
                  <DropdownItem key="about" className="border-none">
                    About
                  </DropdownItem>
                  <DropdownItem key="whoweare" className="border-none">
                    Who We Are
                  </DropdownItem>
                  <DropdownItem key="goals" className="border-none">
                    Our Goals
                  </DropdownItem>
                </DropdownSection>

                <DropdownItem key="services" className="border-none">
                  Services
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </span>
          <img src={smallScreen} alt="Company Logo" width={30} className="xs:hidden block mx-2"/>
          <img src={largeScreen} alt="Company Logo" width={160} className="mx-1 hidden xs:block" />
        </div>
        <div className="space-x-7 hidden sm:block ">
          <span className="cursor-pointer">Home</span>
          <span className="cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {/* Dropdown logic fixed */}
            <Dropdown isOpen={isOpen} onOpenChange={setIsOpen}>
              <DropdownTrigger>
                <span variant="light">Open Menu</span>
              </DropdownTrigger>
              <DropdownMenu variant="light" aria-label="Static Actions">
                <DropdownItem key="new" className="border-none">
                  New file
                </DropdownItem>
                <DropdownItem key="copy" className="border-none">
                  Copy link
                </DropdownItem>
                <DropdownItem key="edit" className="border-none">
                  Edit file
                </DropdownItem>
                <DropdownItem
                  key="delete"
                  className="text-danger"
                  color="danger"
                >
                  Delete file
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </span>
          <span className="cursor-pointer">Services</span>
        </div>
        <button className="border min-w-fit px-3 py-2 rounded-full shadow-sm border-zinc-200 text-sm font-medium">
          Reach Us
        </button>
      </div>
    </header>
  );
};

export default Navbar;
