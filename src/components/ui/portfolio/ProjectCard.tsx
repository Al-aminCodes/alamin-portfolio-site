import Link from "next/link";
import {
  ArrowUpRight,
  ExternalLink,
  GitBranch,
  Globe,
  Dumbbell,
  Layers3,
  Wrench,
  ShoppingBasket,
  Code2,
  CheckCircle2,
} from "lucide-react";

import type { Project } from "@/app/projects/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const projectIcons = {
  globe: Globe,
  dumbbell: Dumbbell,
  layers: Layers3,
  wrench: Wrench,
  "shopping-basket": ShoppingBasket,
  "code-2": Code2,
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const ProjectIcon = projectIcons[project.icon];

  return (
    <Card className="group overflow-hidden rounded-2xl border-white/[0.08] bg-[#191D19] text-white transition duration-300 hover:-translate-y-1 hover:border-lime-400/30">
      <CardContent className="p-0">
        {/* Visual preview */}
        <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-lime-400/15 via-emerald-500/5 to-transparent sm:h-60">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:32px_32px]" />

          <span className="absolute left-5 top-5 font-mono text-sm text-zinc-500">
            /{project.number}
          </span>

          <div className="relative flex size-28 items-center justify-center rounded-3xl border border-lime-400/20 bg-[#101310]/80 shadow-xl transition duration-500 group-hover:scale-110">
            <ProjectIcon className="size-12 text-lime-400" strokeWidth={1.4} />
          </div>

          <Badge className="absolute bottom-5 right-5 border border-white/10 bg-black/40 text-zinc-200 hover:bg-black/40">
            {project.category}
          </Badge>
        </div>

        {/* Project information */}
        <div className="p-6 sm:p-8">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
            <Badge
              variant="outline"
              className="border-lime-400/20 bg-lime-400/5 text-lime-300"
            >
              {project.status}
            </Badge>

            <span className="text-xs text-zinc-500">
              {project.technologies.length} technologies
            </span>
          </div>

          <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>

          <p className="mt-2 text-sm font-medium text-lime-400">
            {project.tagline}
          </p>

          <p className="mt-4 text-sm leading-7 text-zinc-400">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <Badge
                key={technology}
                variant="outline"
                className="border-white/10 bg-white/[0.03] text-xs font-normal text-zinc-300"
              >
                {technology}
              </Badge>
            ))}
          </div>

          {/* Key features */}
          <div className="mt-7 border-t border-white/[0.07] pt-5">
            <h4 className="mb-4 text-sm font-semibold text-zinc-200">
              Key features
            </h4>

            <ul className="space-y-3">
              {project.features.slice(0, 4).map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm leading-6 text-zinc-400"
                >
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-lime-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {project.features.length > 4 && (
              <p className="mt-3 text-xs text-zinc-500">
                +{project.features.length - 4} more features
              </p>
            )}
          </div>

          {/* Links */}
          {(project.github || project.demo) && (
            <div className="mt-7 flex flex-wrap gap-3 border-t border-white/[0.07] pt-5">
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-transparent px-3 py-2 text-sm font-medium text-zinc-200 transition hover:bg-white/10 hover:text-white"
                >
                  <GitBranch className="mr-2 size-4" />
                  Source Code
                  <ExternalLink className="ml-2 size-3" />
                </Link>
              )}

              {project.demo && (
                <Link
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-lime-400 px-3 py-2 text-sm font-medium text-black transition hover:bg-lime-300"
                >
                  <Globe className="mr-2 size-4" />
                  Live Demo
                  <ArrowUpRight className="ml-1 size-4" />
                </Link>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
