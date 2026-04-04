"use client";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full mt-20 border-t border-white/5 bg-slate-950/20 backdrop-blur-md overflow-hidden">
      {/* Structural Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent shadow-[0_0_20px_rgba(168,85,247,0.3)]" />
      
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-6">
            <div className="inline-block group relative px-6 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-2xl transition-all duration-500 hover:border-white/20">
              <span className="relative z-10 text-xl font-black tracking-tighter uppercase text-white">
                Adi <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">Flores</span>
              </span>
              <div className="absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-medium">
              Aspiring Software Engineer focused on building high-performance web applications and bridging the gap between design and code.
            </p>
          </div>

          {/* Navigation & Tech Sections */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="text-white text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Explore</h4>
              <ul className="space-y-2 text-sm text-slate-400 font-bold">
                <li><a href="#projects" className="hover:text-purple-400 transition-colors tracking-tight">Projects</a></li>
                <li><a href="#milestones" className="hover:text-purple-400 transition-colors tracking-tight">Milestones</a></li>
                <li><a href="#tech-stack" className="hover:text-purple-400 transition-colors tracking-tight">Tech Stack</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-white text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Connect</h4>
              <ul className="space-y-2 text-sm text-slate-400 font-bold">
                <li><a href="https://github.com/AMF112" target="_blank" className="hover:text-purple-400 transition-colors tracking-tight">GitHub</a></li>
                <li><a href="https://linkedin.com/in/adi-flores" target="_blank" className="hover:text-purple-400 transition-colors tracking-tight">LinkedIn</a></li>
                <li><a href="https://www.facebook.com/grape.pye" target="_blank" className="hover:text-purple-400 transition-colors tracking-tight">Facebook</a></li>
                <li><a href="mailto:adrianmiguelflores512@gmail.com" target="_blank" className="hover:text-purple-400 transition-colors tracking-tight">Gmail</a></li>
              </ul>
            </div>

            {/* Static Content: Preferred Environment */}
            <div className="space-y-6 col-span-2 sm:col-span-1">
              <h4 className="text-white text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Resources</h4>
              <a 
                href="/AdrianMiguel_Flores_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group/resume flex items-center gap-3 w-fit"
              >
                <div className="relative flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 group-hover/resume:border-purple-500/50 group-hover/resume:bg-purple-500/10">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-4 h-4 text-white/70 group-hover/resume:text-purple-400 transition-colors"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-white uppercase tracking-widest group-hover/resume:text-purple-400 transition-colors">View Resume</span>
                  <span className="text-[8px] font-bold text-slate-500 uppercase tracking-[0.2em]">PDF</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Metadata */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-[9px] font-black uppercase tracking-[0.5em] text-slate-500">
              &copy; <span suppressHydrationWarning>{currentYear}</span> ADI FLORES | ALL RIGHTS RESERVED
            </p>
          </div>
          
          <div className="flex items-center gap-4 text-white/30">
             <span className="text-[8px] font-black uppercase tracking-[0.2em]">Based in PH</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;