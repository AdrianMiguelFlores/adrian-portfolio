"use client";

import Image from "next/image";
import { useState } from "react";
import { ExternalLink, Github, LayoutGrid, X } from "lucide-react";
import { projects } from "@/app/data";
import Badge from "@/app/components/ui/Badge";
import Button from "@/app/components/ui/Button";
import GlassCard from "@/app/components/ui/GlassCard";
import ProjectModal from "@/app/components/ui/ProjectModal";

export default function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const featuredProjects = projects.slice(0, 3);

  const nextProject = () => {
    const index = projects.findIndex((project) => project.id === selectedProject.id);
    setSelectedProject(projects[(index + 1) % projects.length]);
  };

  const previousProject = () => {
    const index = projects.findIndex((project) => project.id === selectedProject.id);
    setSelectedProject(projects[(index - 1 + projects.length) % projects.length]);
  };

  return (
    <section id="projects" className="scroll-mt-24">
      <SectionHeader
        title="Featured"
        accent="Projects"
        description="Selected work with the technical tradeoffs, constraints, and implementation details recruiters usually look for."
      >
        <Button type="button" variant="glass" onClick={() => setShowAll(true)}>
          <LayoutGrid size={16} />
          Show All
        </Button>
      </SectionHeader>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={() => setSelectedProject(project)} />
        ))}
      </div>

      {showAll && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#080812]/90 p-4 backdrop-blur-xl" onClick={() => setShowAll(false)}>
          <GlassCard className="max-h-[88vh] w-full max-w-6xl p-5 sm:p-7" hover={false} onClick={(event) => event.stopPropagation()}>
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-300">Projects</p>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">Complete Project Registry</h3>
              </div>
              <button className="rounded-full border border-white/10 bg-white/10 p-3 text-white/70 transition hover:text-white" onClick={() => setShowAll(false)} aria-label="Close project registry">
                <X size={18} />
              </button>
            </div>
            <div className="custom-scrollbar grid max-h-[68vh] gap-5 overflow-y-auto pr-1 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} onOpen={() => setSelectedProject(project)} compact />
              ))}
            </div>
          </GlassCard>
        </div>
      )}

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} onNext={nextProject} onPrev={previousProject} />
      )}
    </section>
  );
}

function SectionHeader({ title, accent, description, children }) {
  return (
    <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
      <div>
        <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
          {title} <span className="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">{accent}</span>
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60">{description}</p>
      </div>
      {children}
    </div>
  );
}

function ProjectCard({ project, onOpen, compact = false }) {
  return (
    <GlassCard as="article" className="group h-full">
      <button type="button" onClick={onOpen} className="block w-full text-left">
        <div className={`relative w-full overflow-hidden ${compact ? "h-36" : "h-48"}`}>
          <Image src={project.image} alt={`${project.title} project preview`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
          <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/50 p-2 text-violet-300 backdrop-blur-md">
            <ExternalLink size={16} />
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-xl font-bold tracking-tight text-white transition group-hover:text-violet-200">{project.title}</h3>
          <p className="mt-3 min-h-[3.5rem] text-sm leading-relaxed text-white/60">{project.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.techStack.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </div>
      </button>

      <div className="flex gap-3 px-5 pb-5">
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-white/70 transition hover:border-violet-400/40 hover:text-white">
            <Github size={14} />
            GitHub
          </a>
        )}
        {project.liveUrl && project.liveUrl !== "#" && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-violet-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-violet-500">
            <ExternalLink size={14} />
            Live
          </a>
        )}
      </div>
    </GlassCard>
  );
}
