"use client";
import Image from "next/image";
import ProjectModal from "./ProjectModal";
import { useState } from "react";
import { ExternalLink } from "lucide-react";

const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      title: "Flask Bites",
      description: "A food ordering web app where users can browse items, manage a cart, and complete checkout.",
      image: "/flask-bites.png",
      techStack: ["Flask", "Python", "Bootstrap", "PostgreSQL"],
    },
    {
      id: 2,
      title: "Boot Blog",
      description: "A blogging platform where users can read posts and leave comments.",
      image: "/boot-blog.png",
      techStack: ["Flask", "Python", "Bootstrap", "SQLite"],
    },
    {
      id: 3,
      title: "CineLog",
      description: "A web app for searching movies and keeping track of personal rankings.",
      image: "/cinelog.png",
      techStack: ["Flask", "Python", "Bootstrap", "SQLite"],
    },
    {
      id: 4,
      title: "Turtle Crossing",
      description: "A 2D game where a turtle must cross the road while avoiding traffic.",
      image: "/turtle-crossing.png",
      techStack: ["Python"],
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const handleNextProject = () => {
    const currentIndex = projects.findIndex((p) => p.id === selectedProject);
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex].id);
  };

  const handlePrevProject = () => {
    const currentIndex = projects.findIndex((p) => p.id === selectedProject);
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[prevIndex].id);
  };

  return (
    <section id="projects" className="py-20 mt-10 w-full font-sans">
      <div className="space-y-4 mb-12 px-2">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase">
          Featured <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-400 via-purple-500 to-purple-600">Projects</span>
        </h2>
        <p className="text-slate-400 max-w-2xl text-lg font-medium tracking-tight opacity-80">
          A collection of my projects ranging from full-stack web apps to smaller builds.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => setSelectedProject(project.id)}
            className="group relative flex flex-col h-full text-left rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl transition-all duration-700 overflow-hidden shadow-2xl hover:bg-white/8 hover:border-white/20 hover:-translate-y-1 active:scale-[0.98]"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent z-20" />
            
            <div className="relative w-full aspect-video overflow-hidden rounded-t-3xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority={project.id <= 2}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent z-10" />
              <div className="absolute top-4 right-4 p-2 rounded-xl bg-black/40 border border-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                <ExternalLink size={16} className="text-purple-400" />
              </div>
            </div>

            <div className="p-6 flex flex-col grow relative border-t border-white/10">
              <h3 className="text-xl font-black text-white mb-2 tracking-tight group-hover:text-purple-400 transition-colors duration-500">
                {project.title}
              </h3>
              <p className="text-sm font-medium text-slate-400 mb-6 line-clamp-2 leading-relaxed tracking-tight">
                {project.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-1">
                {project.techStack.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 text-xs rounded-full bg-purple-500/20 text-purple-200 border border-purple-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="absolute inset-x-8 bottom-0 h-px bg-linear-to-r from-transparent via-purple-500/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
          </button>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={projects.find((p) => p.id === selectedProject)}
          onClose={() => setSelectedProject(null)}
          onNext={handleNextProject}
          onPrev={handlePrevProject}
        />
      )}
    </section>
  );
};

export default ProjectSection;