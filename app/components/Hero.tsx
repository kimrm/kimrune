import React from "react";

export default function Hero() {
  return (
    <div className="h-screen flex max-h-[1000px] items-center justify-center">
      <div className="from-[#6B45D5]/20 to-[#D9D9D9]/0 w-2/3 left-0 top-0 absolute z-0 h-[1000px] -rotate-12 -translate-x-60 -translate-y-60 bg-gradient-to-b">
        <div className="bg-static w-full h-full absolute z-0"></div>
      </div>
      <div className="text-center z-10">
        <h2 className="text-xl">Full-stack Utvikler og IT-konsulent</h2>
        <h1 className="text-8xl font-extrabold">Kim Rune Møller</h1>
        <p className="my-4">
          Jeg lager nettsider og spesialsydde applikasjoner, eller hjelper deg
          med IT-relaterte utfordringer.
        </p>
        <div className="mt-12">
          <button className="bg-black px-4 py-2 rounded-3xl hover:bg-gray-800 transition-colors duration-500">
            Kontakt meg
          </button>
        </div>
      </div>
    </div>
  );
}
