import React from "react";
import { BackgroundLines } from "./ui/background-lines";

export function BackgroundLinesDemo() {
  return (
    (<BackgroundLines className="flex items-center h-screen justify-center bg-gray-50 w-full flex-col px-4">
      <h2
        className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-3xl md:text-5xl lg:text-7xl font-sans py-2 md:py-5 p-1 relative z-20 font-bold tracking-tight">
        The Ultimate Destination <br /> of Research.
      </h2>
      <p
        className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        Get the best advices from our experts, including expert artists,
        painters, marathon enthusiasts and RDX, totally free.
      </p>
    </BackgroundLines>)
  );
}
