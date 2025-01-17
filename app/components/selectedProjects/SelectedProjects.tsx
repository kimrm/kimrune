import React from "react";
import Projects from "../projects/Projects";

export default function SelectedProjects() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Utvalgte prosjekter</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Projects />
      </div>
    </div>
  );
}
