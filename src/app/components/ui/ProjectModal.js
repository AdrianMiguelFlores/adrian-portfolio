"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ExternalLink, Github, Lightbulb, X, Zap } from "lucide-react";
import Badge from "./Badge";
import Button from "./Button";
import GlassCard from "./GlassCard";

export default function ProjectModal({ project, onClose, onNext, onPrev }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[110] flex items-center justify-center bg-[#080812]/90 p-4 backdrop-blur-xl"
      onClick={(event) => {
        if (event.target === overlayRef.current) onClose();
      }}
    >
      <GlassCard className="grid max-h-[92vh] w-full max-w-6xl overflow-hidden p-0 lg:grid-cols-[0.9fr_1.1fr]" hover={false}>
        <button onClick={onClose} className="absolute right-4 top-4 z-20 rounded-full border border-white/10 bg-black/40 p-3 text-white/70 backdrop-blur-md transition hover:text-white" aria-label="Close project details">
          <X size={18} />
        </button>

        <div className="relative min-h-64 border-b border-white/10 bg-black/30 lg:border-b-0 lg:border-r">
          <Image src={project.image} alt={`${project.title} project preview`} fill priority sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080812] via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 flex gap-3">
            <button onClick={onPrev} className="rounded-full border border-white/10 bg-black/40 p-3 text-white backdrop-blur-md transition hover:bg-violet-500/20" aria-label="Previous project">
              <ChevronLeft size={18} />
            </button>
            <button onClick={onNext} className="rounded-full border border-white/10 bg-black/40 p-3 text-white backdrop-blur-md transition hover:bg-violet-500/20" aria-label="Next project">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="custom-scrollbar overflow-y-auto p-6 sm:p-8 lg:max-h-[92vh]">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-300">Project</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-white">{project.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">{project.fullDescription || project.description}</p>

          <div className="mt-7 flex flex-wrap gap-2">
            {project.techStack.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <GlassCard className="p-5" hover={false}>
              <h3 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-white">
                <Zap size={16} className="text-amber-300" />
                Challenge
              </h3>
              <p className="text-sm leading-relaxed text-white/60">{project.challenge}</p>
            </GlassCard>

            <GlassCard className="p-5" hover={false}>
              <h3 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-white">
                <Lightbulb size={16} className="text-emerald-300" />
                Solution
              </h3>
              <p className="text-sm leading-relaxed text-white/60">{project.solution}</p>
            </GlassCard>
          </div>

          <div className="mt-8">
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">Core Features</h3>
            <ul className="mt-4 space-y-3">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm leading-relaxed text-white/60">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {project.githubUrl && (
              <Button href={project.githubUrl} target="_blank" rel="noopener noreferrer" variant="glass">
                <Github size={16} />
                GitHub
              </Button>
            )}
            {project.liveUrl && project.liveUrl !== "#" && (
              <Button href={project.liveUrl} target="_blank" rel="noopener noreferrer" variant="violet">
                <ExternalLink size={16} />
                Live Demo
              </Button>
            )}
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
