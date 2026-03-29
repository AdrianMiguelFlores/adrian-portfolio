"use client";
import Image from "next/image";
import { X, ChevronRight, ChevronLeft, Terminal, Cpu, Zap, Globe, Lightbulb } from "lucide-react";
import { useRef, useEffect } from "react";

export default function ProjectModal({ project, onClose, onNext, onPrev }) {
  const overlayRef = useRef();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  const handleOutsideClick = (e) => {
    if (overlayRef.current === e.target) onClose();
  };

  const GithubIcon = ({ size = 16, className = "" }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );

  return (
    <div 
      ref={overlayRef}
      className="fixed inset-0 bg-slate-950/95 backdrop-blur-2xl flex items-center justify-center z-[100] p-2 md:p-6 lg:p-12 animate-in fade-in duration-300"
      onClick={handleOutsideClick}
    >
      <div 
        key={project.id}
        className="relative bg-white/[0.03] border border-white/10 rounded-[2.5rem] md:rounded-[3rem] max-w-6xl w-full h-[98vh] md:h-[92vh] lg:h-[85vh] overflow-hidden shadow-2xl backdrop-blur-3xl flex flex-col lg:flex-row animate-in zoom-in-95 duration-500"
        onClick={(e) => e.stopPropagation()}    
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent z-50" />
        
        <button
          onClick={onClose} 
          className="absolute top-4 right-4 lg:top-6 lg:right-6 z-50 p-3 rounded-2xl bg-black/60 border border-white/10 text-slate-400 hover:text-white transition-all backdrop-blur-xl group/close active:scale-90"
        >
          <X size={18} className="group-hover/close:rotate-90 transition-transform duration-500" />
        </button>

        <div className="relative w-full lg:w-[42%] shrink-0 bg-black/40 flex flex-col items-center justify-center p-6 md:p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_70%)] pointer-events-none" />

          <div className="relative w-full max-w-[400px] lg:max-w-none aspect-video group/imgContainer">
            <div className="absolute -inset-4 bg-purple-600/20 blur-3xl rounded-full opacity-50 group-hover/imgContainer:opacity-100 transition-opacity duration-700" />
            <div className="relative h-full w-full rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-slate-900">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover transition-transform duration-1000 group-hover/imgContainer:scale-105"
              />
            </div>
          </div>

          <div className="flex gap-4 mt-6 lg:mt-10 z-20">
            <button onClick={onPrev} className="p-3 lg:p-4 rounded-xl lg:rounded-2xl bg-white/5 border border-white/10 text-white backdrop-blur-3xl hover:bg-purple-500/20 transition-all active:scale-90"><ChevronLeft size={20} /></button>
            <button onClick={onNext} className="p-3 lg:p-4 rounded-xl lg:rounded-2xl bg-white/5 border border-white/10 text-white backdrop-blur-3xl hover:bg-purple-500/20 transition-all active:scale-90"><ChevronRight size={20} /></button>
          </div>
        </div>

        <div className="w-full grow overflow-hidden flex flex-col relative">
          <div className="grow overflow-y-auto px-6 py-8 md:px-10 md:py-10 lg:px-12 lg:py-12 custom-scrollbar relative z-10 flex flex-col gap-8 lg:gap-10">
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-purple-400">
                <Terminal size={14} className="opacity-80" />
                <span className="text-[12px] font-black uppercase tracking-[0.4em] opacity-70">Project</span>
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-tight">{project.title}</h2>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-2xl opacity-90">{project.fullDescription || project.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-5">
                <h3 className="text-white text-[11px] font-black uppercase tracking-widest flex items-center gap-2">
                  <Cpu size={14} className="text-purple-400" /> Core Features
                </h3>
                <ul className="space-y-3">
                  {project.features?.map((feature, i) => (
                    <li key={i} className="text-slate-400 text-sm flex gap-3 leading-snug items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500/40 mt-1.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-white text-[11px] font-black uppercase tracking-widest flex items-center gap-2">
                    <Zap size={14} className="text-amber-400" /> The Challenge
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-amber-500/30 pl-4">{project.challenge}</p>
                </div>

                {project.solution && (
                  <div className="space-y-4">
                    <h3 className="text-white text-[11px] font-black uppercase tracking-widest flex items-center gap-2">
                      <Lightbulb size={14} className="text-emerald-400" /> The Solution
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-emerald-500/30 pl-4">{project.solution}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <h3 className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-4">
                Built With
                <span className="grow h-px bg-white/5" />
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-[11px] font-bold rounded-xl bg-white/[0.05] text-purple-200 border border-white/10 backdrop-blur-md">{tag}</span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="px-6 py-6 md:px-12 md:py-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6 relative z-10 bg-white/[0.01]">
             <div className="hidden sm:flex items-center gap-4 opacity-40">
                <span className="text-white text-[9px] uppercase font-black tracking-[0.3em]">REF_ID: {project.id.toString().padStart(3, '0')}</span>
                <div className="w-1 h-1 rounded-full bg-white" />
                <span className="text-white text-[9px] uppercase font-black tracking-[0.3em]">© 2026 FLORES_DEV</span>
             </div>

             <div className="flex items-center gap-3 w-full sm:w-auto">
                {/* {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all active:scale-95">
                    <GithubIcon size={14} /> Source
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-purple-600 border border-purple-500 text-white text-[10px] font-black uppercase tracking-widest hover:bg-purple-500 shadow-lg transition-all active:scale-95">
                    <Globe size={14} /> Live Demo
                  </a>
                )} */}
               
             </div>
          </div>
        </div>
      </div>
    </div>   
  );
}