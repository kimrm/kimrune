import Card from "../Card";
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
  const res = await fetch("http://localhost/api/v1/projects/featured", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${process.env.BACKEND_TOKEN}`
    }
  });
  const data: ProjectData = await res.json();
  return data;
}

export default async function Projects() {
  const data = await fetchProjects();
  return (
    <>
      {data.data.map((project) => (
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
    </>
  );
}
