import React from "react";
import StackIcons from "./stackIcons/StackIcons";
import QuickContact from "./quickContact/QuickContact";

export default function Hero() {
  return (
    <div className="h-screen flex flex-col max-h-[1000px] items-center justify-between">
      <div className="h-full flex items-center justify-center">
        <div className="from-[#6B45D5]/20 to-[#D9D9D9]/0 w-2/3 left-0 top-0 absolute z-0 h-[1000px] -rotate-12 -translate-x-60 -translate-y-60 bg-gradient-to-b">
          <div className="bg-static w-full h-full absolute z-0"></div>
        </div>
        <div className="text-center z-10">
          <h1 className="text-6xl font-extrabold">
            Webutvikling og<br></br>IT-konsulenttjenester
          </h1>
          <p className="my-4">
            Jeg lager nettsider og spesialsydde applikasjoner, eller hjelper deg
            med IT-relaterte utfordringer.
          </p>
          <div className="mt-12 flex space-x-4 justify-center">
            <QuickContact />
          </div>
        </div>
      </div>
      <div id="tech-stack" className="px-8 mb-8 w-full">
        <StackIcons />
      </div>
    </div>
  );
}
