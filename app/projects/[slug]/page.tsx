import React from "react";
import Image from "next/image";

export default async function ProjectDetailsPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const response = await fetch(`http://localhost/api/v1/projects/${slug}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${process.env.BACKEND_TOKEN}`
    }
  });
  const json = await response.json();
  const project = json.data;

  return (
    <main className="bg-[#0C1423]">
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <article className="relative h-screen max-h-96">
          {project.image && (
            <Image
              src={`/${project.image}`}
              width={1200}
              height={600}
              alt={project.title}
              className="mb-8 rounded-md absolute top-0 left-0 right-0 h-full w-full object-cover z-0"
            />
          )}
          <div className="absolute z-10 bottom-0 left-0 right-0 p-8 bg-[#0C1423] bg-opacity-90 text-white">
            <h1 className="text-2xl mb-2">{project.title}</h1>
            <p className="max-w-prose">{project.description}</p>
          </div>
        </article>
        <article id="article-details" className="mt-8 clear-both">
          <div dangerouslySetInnerHTML={{ __html: project.body }} />
        </article>
      </section>
    </main>
  );
}
