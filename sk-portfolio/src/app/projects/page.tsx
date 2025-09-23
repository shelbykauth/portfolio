import Image from "next/image";
import ProjectCard from "./project-card";

export default function Projects() {
  return (
    <>
      <h1 className="text-5xl">Projects</h1>
      <p className="text-lg">{"Here's a list of my projects!"}</p>
      <div className="flex flex-col gap-4 items-stretch">
        <ProjectCard
          side="left"
          title="Alpha"
          description=""
          imageUrl=""
          projectUrl=""
        />
        <ProjectCard
          side="right"
          title="Beta"
          description=""
          imageUrl=""
          projectUrl=""
        />
        <ProjectCard
          side="left"
          title="Gamma"
          description=""
          imageUrl=""
          projectUrl=""
        />
        <ProjectCard
          side="right"
          title="Delta"
          description=""
          imageUrl=""
          projectUrl=""
        />
      </div>
    </>
  );
}
