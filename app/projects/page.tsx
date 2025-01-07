import React from "react";
import Card from "../components/Card";
import Link from "next/link";

export default function page() {
  return (
    <main className="bg-[#0C1423]">
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white">Prosjekter</h2>
        <p className=" text-white mt-4">
          Jeg har jobbet med en rekke prosjekter, både for kunder og egne ideer.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 bg-about">
          <Card title="Denne websiden">
            <p className="my-4 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
              dolores unde, beatae dolore ratione sed deleniti eum, omnis iste
              quos illum totam molestiae quisquam eius perspiciatis vero magnam
              ipsum! Quibusdam?
            </p>
            <a
              href="/about"
              className="underline hover:text-neutral-300 hover:bg-neutral-900"
            >
              Les om teknologien bak denne siden
            </a>
          </Card>
          <Card title="Denne websiden">
            <p className="my-4 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
              dolores unde, beatae dolore ratione sed deleniti eum, omnis iste
              quos illum totam molestiae quisquam eius perspiciatis vero magnam
              ipsum! Quibusdam?
            </p>
            <a
              href="/about"
              className="underline hover:text-neutral-300 hover:bg-neutral-900"
            >
              Les om teknologien bak denne siden
            </a>
          </Card>
          <Card title="Denne websiden">
            <p className="my-4 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
              dolores unde, beatae dolore ratione sed deleniti eum, omnis iste
              quos illum totam molestiae quisquam eius perspiciatis vero magnam
              ipsum! Quibusdam?
            </p>
            <a
              href="/about"
              className="underline hover:text-neutral-300 hover:bg-neutral-900"
            >
              Les om teknologien bak denne siden
            </a>
          </Card>
          <Card title="Denne websiden">
            <p className="my-4 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
              dolores unde, beatae dolore ratione sed deleniti eum, omnis iste
              quos illum totam molestiae quisquam eius perspiciatis vero magnam
              ipsum! Quibusdam?
            </p>
            <a
              href="/about"
              className="underline hover:text-neutral-300 hover:bg-neutral-900"
            >
              Les om teknologien bak denne siden
            </a>
          </Card>
          <Card title="Denne websiden">
            <p className="my-4 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
              dolores unde, beatae dolore ratione sed deleniti eum, omnis iste
              quos illum totam molestiae quisquam eius perspiciatis vero magnam
              ipsum! Quibusdam?
            </p>
            <a
              href="/about"
              className="underline hover:text-neutral-300 hover:bg-neutral-900"
            >
              Les om teknologien bak denne siden
            </a>
          </Card>
          <Card title="Denne websiden">
            <p className="my-4 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
              dolores unde, beatae dolore ratione sed deleniti eum, omnis iste
              quos illum totam molestiae quisquam eius perspiciatis vero magnam
              ipsum! Quibusdam?
            </p>
            <a
              href="/about"
              className="underline hover:text-neutral-300 hover:bg-neutral-900"
            >
              Les om teknologien bak denne siden
            </a>
          </Card>
          <Card title="Denne websiden">
            <p className="my-4 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
              dolores unde, beatae dolore ratione sed deleniti eum, omnis iste
              quos illum totam molestiae quisquam eius perspiciatis vero magnam
              ipsum! Quibusdam?
            </p>
            <a
              href="/about"
              className="underline hover:text-neutral-300 hover:bg-neutral-900"
            >
              Les om teknologien bak denne siden
            </a>
          </Card>
          <Card title="Denne websiden">
            <p className="my-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
              dolores unde, beatae dolore ratione sed deleniti eum, omnis iste
              quos illum totam molestiae quisquam eius perspiciatis vero magnam
              ipsum! Quibusdam?
            </p>
            <a
              href="/about"
              className="underline hover:text-neutral-300 hover:bg-neutral-900"
            >
              Les om teknologien bak denne siden
            </a>
          </Card>
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
          for å diskutere ditt nye prosjekt eller hjemmesider.
        </p>
      </section>
    </main>
  );
}
