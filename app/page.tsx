import Link from "next/link";
import Card from "./components/Card";
import Hero from "./components/Hero";
import StackIcons from "./components/stackIcons/StackIcons";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#0C1423]">
      <Hero />
      <section id="tech-stack" className="py-16 px-8 overflow-hidden">
        <StackIcons />
      </section>
      <section
        id="projects"
        className="py-32 px-8 flex flex-col  space-y-40 max-w-7xl mx-auto bg-about "
      >
        <div>
          <h1 className="text-4xl font-bold mb-4">At Your Service</h1>
          <div className="flex justify-left space-x-24">
            <div>
              <p className="max-w-prose">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt perferendis labore amet eaque ullam explicabo quas
                reprehenderit sunt magni dolorem, aut voluptatibus vero natus
                quisquam iusto officiis doloremque iure non.
              </p>
              <p className="max-w-prose mt-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                dolores unde, beatae dolore ratione sed deleniti eum, omnis iste
                quos illum totam molestiae quisquam eius perspiciatis vero
                magnam ipsum! Quibusdam?
              </p>
              <p className="max-w-prose mt-4 mb-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                dolores unde, beatae dolore ratione sed deleniti eum, omnis iste
                quos illum totam molestiae quisquam eius perspiciatis vero
                magnam ipsum! Quibusdam?
              </p>
              <Link
                href="/about"
                className="underline hover:text-neutral-300 hover:bg-neutral-900"
              >
                Les mer om meg og min bakgrunn
              </Link>
            </div>
            <div className="bg-neutral-950 border-neutral-900 border rounded-md p-8 h-96 w-96 rotate-2 shadow-2xl shadow-black">
              <div className="relative">
                {/* <div className="absolute top-0 -left-5 w-20 h-4 bg-neutral-100 bg-opacity-70 -rotate-45 rounded-tl-lg"></div>
                <div className="absolute top-6 -right-10 w-32 h-4 bg-neutral-100 bg-opacity-70 rotate-45 rounded-bl-lg"></div> */}

                <Image
                  src="/profile2.jpeg"
                  width={384}
                  height={384}
                  alt="Bilde av Kim Rune Møller"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Utvalgte prosjekter</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card title="Denne websiden">
              <p className="my-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                dolores unde, beatae dolore ratione sed deleniti eum, omnis iste
                quos illum totam molestiae quisquam eius perspiciatis vero
                magnam ipsum! Quibusdam?
              </p>
              <Link
                href="/about"
                className="underline hover:text-neutral-300 hover:bg-neutral-900"
              >
                Les om teknologien bak denne siden
              </Link>
            </Card>
            <Card title="Møterom bookingsystem">
              <p className="my-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                dolores unde, beatae dolore ratione sed deleniti eum, omnis iste
                quos illum totam molestiae quisquam eius perspiciatis vero
                magnam ipsum! Quibusdam?
              </p>
              <Link
                href="/about"
                className="underline hover:text-neutral-300 hover:bg-neutral-900"
              >
                Les om teknologien bak denne siden
              </Link>
            </Card>
            <Card title="Hjemmeside Kunnskaps- og Næringsparken Senja">
              <p className="my-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                dolores unde, beatae dolore ratione sed deleniti eum, omnis iste
                quos illum totam molestiae quisquam eius perspiciatis vero
                magnam ipsum! Quibusdam?
              </p>
              <Link
                href="/about"
                className="underline hover:text-neutral-300 hover:bg-neutral-900"
              >
                Les om teknologien bak denne siden
              </Link>
            </Card>
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
    </main>
  );
}
