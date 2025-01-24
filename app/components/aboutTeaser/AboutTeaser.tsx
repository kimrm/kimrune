import React from "react";
import Link from "../UI/Link";
import AnimatedImage from "./AnimatedImage";

export default function AboutTeaser() {
  return (
    <div className="bg-slate-900 rounded-sm p-12 relative">
      <div className="absolute -top-6 -left-6 flex w-1/5 h-50 rounded-full mix-blend-screen border-8 border-slate-900 overflow-hidden   ">
        <AnimatedImage />
      </div>
      <div className="flex flex-col justify-center items-end lg:items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Velkommen til <span className="logo">Kodello</span>!
          </h1>
          <div className="md:text-lg">
            <p className="max-w-prose">
              Hei! Jeg heter Kim Rune Møller, og jeg driver Kodello.
            </p>
            <p className="max-w-prose mt-4">
              Gjennom Kodello driver jeg med utvikling av nettsider, API-er og
              apper for firma over hele landet. Jeg tar også på meg andre
              oppgaver som rådgivning og IT-støtte.
            </p>
            <p className="max-w-prose mt-4 mb-4">
              Jeg har over 20 års erfaring fra IT-bransjen som systemutvikler og
              IT-konsulent.
            </p>
            <Link
              href="/about"
              className="underline hover:text-neutral-300 hover:bg-neutral-900"
            >
              Les mer om meg og min bakgrunn
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
