import React from "react";
import Card from "../components/Card";
import Link from "next/link";
import Image from "next/image";

interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  body: string;
  image: string;
}

interface ProjectData {
  data: Project[];
}

async function fetchProjects() {
  const res = await fetch("http://localhost/api/v1/projects", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${process.env.BACKEND_TOKEN}`
    }
  });
  const data: ProjectData = await res.json();
  return data;
}

export default async function ProjectsPage() {
  const { data } = await fetchProjects();

  return (
    <main className="bg-[#0C1423]">
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white">Prosjekter</h2>
        <p className=" text-white mt-4">
          Jeg har jobbet med en rekke prosjekter, både for kunder og egne ideer.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 bg-about">
          {data.length < 1 && <p>Kommer snart...</p>}
          {data.map((project) => (
            <Card key={project.id}>
              <div className="flex flex-col h-full">
                <Image
                  src={`/${project.image}`}
                  width={400}
                  height={200}
                  alt="knpsenja.no"
                  className="mb-4 w-full h-52 object-cover"
                  loading="lazy"
                />
                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <Link
                  href={`/projects/${project.slug}`}
                  className="underline hover:text-neutral-300 hover:bg-neutral-900 mt-auto"
                >
                  Les om teknologien bak denne siden
                </Link>
              </div>
            </Card>
          ))}
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
