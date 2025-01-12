import Card from "../Card";
import Link from "next/link";

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
        <Card key={project.id} title={project.title} image={project.image}>
          <p className="mb-4">{project.description}</p>
          <Link
            href={`/projects/${project.slug}`}
            className="underline hover:text-neutral-300 hover:bg-neutral-900"
          >
            Les om teknologien bak denne siden
          </Link>
        </Card>
      ))}
    </>
  );
}
