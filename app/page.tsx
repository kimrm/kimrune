import Link from "next/link";
import Hero from "./components/Hero";
import Projects from "./components/projects/Projects";
import Image from "next/image";
import ModalContainer from "./components/modalContainer/ModalContainer";

export default function Home() {
  return (
    <main className="bg-[#0C1423] relative">
      <Hero />

      <section
        id="projects"
        className="py-32 px-8 flex flex-col  space-y-40 max-w-7xl mx-auto bg-about "
      >
        <div>
          <h1 className="text-4xl font-bold mb-4">At Your Service</h1>
          <div className="flex justify-left">
            <div className="w-1/2">
              <p className="max-w-prose">
                Jeg er en full-stack utvikler og IT-konsulent som lager
                nettsider og spesialsydde applikasjoner, eller hjelper deg med
                IT-relaterte utfordringer.
              </p>
              <p className="max-w-prose mt-4">
                Med over 20 års erfaring innen IT-bransjen, har jeg jobbet med
                alt fra enkle nettsider til store komplekse applikasjoner. Jeg
                har erfaring med en rekke teknologier, og holder meg oppdatert
                på det siste innen utvikling og design.
              </p>
              <p className="max-w-prose mt-4 mb-4">
                Jeg har jobbet med alt fra små enkeltmannsforetak til store
                internasjonale selskaper, og har erfaring med alt fra
                prosjektledelse og rådgivning til utvikling og design.
              </p>
              <Link
                href="/about"
                className="underline hover:text-neutral-300 hover:bg-neutral-900"
              >
                Les mer om meg og min bakgrunn
              </Link>
            </div>
            <div className="w-1/2 h-96 relative">
              <div className="bg-[#0b121f] absolute border-neutral-800 top-0 z-20 left-0 border rounded-md p-8 h-96 w-96 rotate-2 shadow-2xl shadow-black">
                <div className="relative">
                  <Image
                    src="/profile2.jpeg"
                    width={384}
                    height={384}
                    alt="Bilde av Kim Rune Møller"
                    className="-rotate-1"
                  />
                </div>
              </div>
              <div className="bg-[#080c15] absolute top-0 left-20 z-10 border-neutral-800 border rounded-md p-8 h-96 w-96 -rotate-2 shadow-2xl shadow-black">
                <div className="relative">
                  <Image
                    src="/profile2.jpeg"
                    width={384}
                    height={384}
                    alt="Bilde av Kim Rune Møller"
                    className="-rotate-1"
                  />
                </div>
              </div>
              <div className="bg-[#05070c] absolute top-0 left-40 z-0 border-neutral-800 border rounded-md p-8 h-96 w-96 rotate-6 shadow-2xl shadow-black">
                <div className="relative">
                  <Image
                    src="/profile2.jpeg"
                    width={384}
                    height={384}
                    alt="Bilde av Kim Rune Møller"
                    className="-rotate-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Utvalgte prosjekter</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Projects />
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="py-24 px-8 mt-12  max-w-7xl mx-auto bg-slate-900 rounded-sm text-center leading-relaxed"
      >
        <h1 className="text-4xl font-bold mb-4">Vil du samarbeide med meg?</h1>
        <p className="max-w-prose mt-4 mx-auto">
          Vil du samarbeide med meg? Besøk meg på LinkedIn, GitHub eller{" "}
          <Link
            href="/contact"
            className="bg-yellow-50 text-neutral-900 px-1 whitespace-nowrap"
          >
            via kontaktskjema
          </Link>
          , så tar vi en prat. Les mer om meg og min bakgrunn og hvilke
          teknologier jeg holder på meg på{" "}
          <Link
            href="/about"
            className="bg-yellow-50 text-neutral-900 px-1 whitespace-nowrap"
          >
            om meg siden
          </Link>
          . Se flere prosjekter jeg har jobbet med på{" "}
          <Link
            href="/projects"
            className="bg-yellow-50 text-neutral-900 px-1 whitespace-nowrap"
          >
            prosjekter siden
          </Link>
          .
        </p>
      </section>
      <ModalContainer />
    </main>
  );
}
