import Link from "./components/UI/Link";
import Hero from "./components/Hero";
import SelectedProjects from "./components/selectedProjects/SelectedProjects";
import AboutTeaser from "./components/aboutTeaser/AboutTeaser";

export default function Home() {
  return (
    <main className="bg-[#0C1423] relative">
      <Hero />
      <section
        id="projects"
        className="py-32 px-8 flex flex-col space-y-40 max-w-7xl mx-auto bg-about "
      >
        <AboutTeaser />
        <SelectedProjects />
      </section>
      <section
        id="contact"
        className="py-24 px-8 mt-12  max-w-7xl mx-auto bg-slate-900 rounded-sm text-center"
      >
        <h1 className="text-4xl font-bold mb-4">Vil du samarbeide med meg?</h1>
        <p className="max-w-prose mt-4 mx-auto text-lg">
          Besøk meg på LinkedIn, GitHub eller{" "}
          <Link href="/contact">via kontaktskjema</Link>, så tar vi en prat. Les
          mer om meg og min bakgrunn og hvilke teknologier jeg holder på meg på{" "}
          <Link href="/about">om meg siden</Link>. Se flere prosjekter jeg har
          jobbet med på <Link href="/projects">prosjekter siden</Link>.
        </p>
      </section>
    </main>
  );
}
