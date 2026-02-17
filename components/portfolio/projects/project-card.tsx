"use client";

import * as React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { LinkCircle02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { Project } from "@/types/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isOpen, setIsOpen] = React.useState(project.isExpanded ?? false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="font-geist-sans"
    >
      <CollapsibleTrigger className="w-full cursor-pointer text-left">
        <div className="flex w-full items-center justify-between gap-3">
          <div className="flex min-w-0 flex-1 items-center gap-3">
            {project.logo && (
              <div className="shrink-0">
                <img
                  src={project.logo}
                  alt={`${project.title} logo`}
                  className="h-6 w-6"
                />
              </div>
            )}
            <div className="min-w-0 flex-1">
              <h3 className="truncate text-foreground">{project.title}</h3>
            </div>
          </div>
          <div className="shrink-0">
            <Tooltip>
              <TooltipTrigger
                render={
                  <a
                    className="relative flex size-6 shrink-0 items-center justify-center text-muted-foreground transition-colors after:absolute after:-inset-2 hover:text-foreground"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`Open ${project.title} project link`}
                  >
                    <HugeiconsIcon
                      icon={LinkCircle02Icon}
                      strokeWidth={2}
                      className="size-4"
                    />
                    <span className="sr-only">Open Project Link</span>
                  </a>
                }
              />
              <TooltipContent className="font-geist-sans">
                <p>Open Project Link</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="group h-(--collapsible-panel-height) overflow-hidden duration-300 data-ending-style:h-0 data-ending-style:animate-fade-out data-starting-style:h-0 data-starting-style:animate-fade-in">
        <div className="my-3 space-y-4 duration-300">
          {project.description && (
            <p className="text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          )}
          {project.skills && project.skills.length > 0 && (
            <ul className="flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <li
                  key={skill}
                  className={cn(
                    "inline-flex items-center rounded-md px-2 py-0.5 font-geist-mono text-xs",
                    "border bg-muted text-muted-foreground",
                    "transition-colors hover:bg-muted/80"
                  )}
                >
                  {skill}
                </li>
              ))}
            </ul>
          )}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
