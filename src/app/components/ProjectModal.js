"use client";
import Image from "next/image";
import { X, ChevronRight, ChevronLeft, Maximize2 } from "lucide-react";
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

  return (
    <div 
      ref={overlayRef}
      className="fixed inset-0 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center z-100 p-4 md:p-8 animate-in fade-in duration-300"
      onClick={handleOutsideClick}
    >
      <div 
        key={project.id}
        className="relative bg-white/5 border border-white/10 rounded-[2.5rem] max-w-5xl w-full h-[90vh] lg:h-[80vh] overflow-hidden shadow-2xl backdrop-blur-2xl flex flex-col lg:flex-row animate-in zoom-in-95 duration-500"
        onClick={(e) => e.stopPropagation()}    
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/25 to-transparent z-50" />
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        <button
          onClick={onClose} 
          className="absolute top-6 right-6 z-50 p-3 rounded-2xl bg-black/40 border border-white/10 text-slate-400 hover:text-white hover:border-primary-500/50 transition-all duration-500 backdrop-blur-xl group/close active:scale-90"
        >
          <X size={20} className="group-hover/close:rotate-90 transition-transform duration-500" />
        </button>

        <div className="relative w-full lg:w-[55%] shrink-0 bg-slate-950/40 flex items-center lg:items-start justify-center p-6 md:p-10 lg:pl-14 lg:pr-10 lg:pt-26 border-b lg:border-b-0 lg:border-r border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.12),transparent_70%)] pointer-events-none" />

          <div className="relative w-full max-w-125 lg:max-w-none aspect-video group/imgContainer transition-transform duration-500">
            <div className="absolute -inset-1 bg-primary-500/15 blur-2xl rounded-3xl opacity-0 group-hover/imgContainer:opacity-100 transition-opacity duration-700" />
            
            <div className="relative h-full w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-1000 group-hover/imgContainer:scale-105"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-2xl pointer-events-none z-20" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none z-10" />
            </div>
          </div>

          <div className="absolute bottom-6 lg:bottom-25 left-1/2 -translate-x-1/2 flex gap-4 z-20">
            <button
              onClick={onPrev}
              className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-white backdrop-blur-3xl hover:bg-primary-500/20 hover:border-primary-500/40 transition-all duration-500 active:scale-90 shadow-lg"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={onNext}
              className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-white backdrop-blur-3xl hover:bg-primary-500/20 hover:border-primary-500/40 transition-all duration-500 active:scale-90 shadow-lg"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="w-full grow overflow-hidden flex flex-col relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.04),transparent_70%)] pointer-events-none" />

          <div className="grow overflow-y-auto px-8 md:p-10 lg:px-14 py-10 lg:py-14 custom-scrollbar relative z-10 flex flex-col">
            <div className="flex items-center gap-3 text-primary-400 mb-3">
              <div className="p-2 rounded-lg bg-primary-500/10 border border-primary-500/20">
                <Maximize2 size={12} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-70">Technical Portfolio</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter leading-none mb-6">
              {project.title}
            </h2>

            <div className="space-y-3 mb-10">
              <h3 className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">Overview</h3>
              <p className="text-slate-300 text-base lg:text-lg leading-relaxed font-medium tracking-tight">
                {project.fullDescription || project.description}
              </p>
            </div>

            <div className="mt-auto pt-8 space-y-5">
              <h3 className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-4">
                Technologies
                <span className="grow h-px bg-white/5" />
              </h3>
              
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-[11px] rounded-full bg-primary-500/20 text-primary-200 border border-primary-500/30 shadow-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="p-6 lg:px-14 py-5 border-t border-white/5 flex justify-between items-center opacity-30 relative z-10 bg-white/2">
             <span className="text-white text-[9px] uppercase font-black tracking-[0.3em]">Ref: {project.id.toString().padStart(3, '0')}</span>
             <span className="text-white text-[9px] uppercase font-black tracking-[0.3em]">Adi Flores © 2026</span>
          </div>
        </div>
      </div>
    </div>   
  );
}