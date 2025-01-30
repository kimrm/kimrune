import React from "react";
import Link from "next/link";
import AboutStack from "./AboutStack";
import Heading from "../components/UI/Heading";
import Paragraphs from "../components/UI/Paragraphs";

export default function page() {
  return (
    <main className="bg-[#0C1423]">
      <section className="px-8 md:max-w-7xl mx-auto py-24">
        <AboutStack />
      </section>
      <section className="bg-[#080E18] min-h-screen">
        <div className="max-w-7xl mx-auto py-24 px-8">
          <Heading type="h1">Om Kim Rune Møller</Heading>
          <Paragraphs>
            <p>
              Jeg er en fullstack-utvikler med over 10 års erfaring fra
              webutvikling. Jeg har jobbet med alt fra enkle bedriftsnettsteder
              til avanserte webapplikasjoner og SaaS-løsninger.
            </p>
            <p>
              Jeg har spesialisert meg på frontend-utvikling med React og
              backend-utvikling med Laravel. Denne kombinasjonen gir en rask
              utviklingsprosess og en sømløs brukeropplevelse.
            </p>
          </Paragraphs>
        </div>
      </section>

      <section
        id="contact"
        className="py-24 px-8 mt-12  max-w-7xl mx-auto bg-slate-900 rounded-sm text-center leading-relaxed"
      >
        <h1 className="text-4xl font-bold mb-4">
          Takk for at du har lest helt hit!
        </h1>
        <p className="max-w-prose mt-4 mx-auto">
          Hva med å ta en prat?{" "}
          <Link
            href="/contact"
            className="bg-yellow-50 text-neutral-900 px-1 whitespace-nowrap"
          >
            Kontakt meg
          </Link>{" "}
          for å diskutere dine nye hjemmesider.
        </p>
      </section>
    </main>
  );
}
