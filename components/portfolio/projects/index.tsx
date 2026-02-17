import ProjectCard from "./project-card";
import { PROJECTS } from "@/features/portfolio/projects";
import { Separator } from "@/components/ui/separator";

export default function Projects() {
  if (!PROJECTS || PROJECTS.length === 0) {
    return (
      <section className="mt-20 space-y-7 font-geist-sans">
        <div>
          <h2 className="text-lg font-medium">Projects</h2>
        </div>
        <p className="text-sm text-muted-foreground">No projects available.</p>
      </section>
    );
  }

  return (
    <section className="mt-20 space-y-7">
      <div>
        <h2 className="font-geist-pixel-square">Projects</h2>
      </div>
      <div className="space-y-0">
        {PROJECTS.map((project, index) => (
          <div key={`${project.id}-${index}`}>
            <ProjectCard project={project} />
            {index < PROJECTS.length - 1 && <Separator className="my-4" />}
          </div>
        ))}
      </div>
    </section>
  );
}
