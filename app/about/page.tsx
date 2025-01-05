import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <main className="bg-[#0C1423]">
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white">Om meg</h1>
        <em className=" text-white mt-4 block">
          Det jeg setter mest pris på ved Kim, er hans genuine engasjement for å
          levere verdi til kunden. Han går alltid den ekstra milen for å sikre
          at løsningene ikke bare fungerer, men også er enkle å bruke og
          tilpasset kundens behov. - Chat GPT
        </em>
        <h2 className="text-2xl font-bold text-neutral-200 mt-8">Bakgrunn</h2>
        <p className=" text-white mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
          praesentium laborum eligendi iusto officia debitis ex adipisci omnis
          earum, tenetur sapiente. Corporis eveniet nisi blanditiis minus
          doloremque maiores exercitationem aperiam. Saepe quaerat animi sed
          dignissimos. Laborum est hic dicta a! Maxime alias delectus repellat
          sunt ex pariatur laboriosam accusantium soluta recusandae, labore
          sequi, doloremque amet, maiores harum ratione porro exercitationem!
          Aperiam distinctio aspernatur optio. Iusto, doloribus. Molestias aut
          asperiores impedit, sunt eligendi, vitae tempore nemo iste neque porro
          eum sit dolores voluptatibus distinctio delectus sint eaque? Quasi at
          exercitationem ipsum. Labore dolores ipsam voluptatibus vero,
          voluptate reiciendis perspiciatis praesentium. Corporis et assumenda
          eum a ducimus, ratione atque magnam soluta mollitia tenetur,
          perspiciatis pariatur suscipit quas harum porro id esse quis. Iste
          quia cumque cupiditate tenetur delectus hic? Dolorem, totam quibusdam
          cupiditate quae nesciunt similique hic voluptatibus dolorum porro
          excepturi ab tenetur eum pariatur magni voluptas quia reprehenderit,
        </p>
        <h2 className="text-2xl font-bold text-neutral-200 mt-8">
          Teknologier
        </h2>
        <p className=" text-white mt-2">
          Jeg har jobbet med en rekke prosjekter, både for kunder og egne ideer.
        </p>
        <h2 className="text-2xl font-bold text-neutral-200 mt-8">Privat</h2>
        <p className=" text-white mt-2">
          Jeg har jobbet med en rekke prosjekter, både for kunder og egne ideer.
        </p>
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
