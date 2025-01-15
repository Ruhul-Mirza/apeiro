import React from "react";

import { Button } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

export default function ServicesHeading() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden pt-12">
      <main className="container mx-auto flex flex-1 flex-col items-center justify-center px-4 sm:px-8">
        <section className="z-20 flex flex-col items-center justify-center gap-4 sm:gap-6">
          {/* Button */}
          <Button
            className="h-9 overflow-hidden border border-default-100 bg-default-50 px-4 py-2 text-sm font-normal text-default-500"
            endContent={
              <Icon
                className="flex-none outline-none [&>path]:stroke-[2]"
                icon="solar:arrow-right-linear"
                width={20}
              />
            }
            radius="full"
            variant="bordered"
          >
            New onboarding experience
          </Button>

          {/* Main Heading */}
          <div className="text-center text-[clamp(32px,8vw,44px)] font-bold leading-tight tracking-tight sm:text-[64px]">
            <div className="bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] bg-clip-text text-transparent">
              Kpo Services
            </div>
          </div>

          {/* Subheading */}
          <p className="max-w-[90%] text-center text-sm font-normal leading-6 text-default-500 sm:max-w-[466px] sm:text-base sm:leading-7">
            Acme makes running global teams simple. HR, Payroll, International
            Employment, contractor management, and more.
          </p>

          {/* Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Button
              className="h-10 w-full max-w-[200px] bg-default-foreground px-4 py-2 text-sm font-medium text-background sm:w-auto"
              radius="full"
            >
              <NavLink to="/contact">Get Started</NavLink>
            </Button>
            <Button
              className="h-10 w-full max-w-[200px] border border-default-100 px-4 py-2 text-sm font-medium sm:w-auto"
              endContent={
                <span className="pointer-events-none flex h-[22px] w-[22px] items-center justify-center rounded-full bg-default-100">
                  <Icon
                    className="text-default-500 [&>path]:stroke-[1.5]"
                    icon="solar:arrow-right-linear"
                    width={16}
                  />
                </span>
              }
              radius="full"
              variant="bordered"
            >
              <NavLink to="/about">Know More</NavLink>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
