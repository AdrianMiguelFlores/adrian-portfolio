"use client";

import { useEffect, useState, useRef } from "react";
import { FileText, ChevronRight } from "lucide-react";
import { profile, heroData } from "../../data";

const HeroSection = () => {
  const [text, setText] = useState("");
  const fullText = heroData.role;
  const [index, setIndex] = useState(0);
  
  const cardRef = useRef(null);
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText.charAt(index));
        setIndex(index + 1);
      }, 75);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setGlowPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden bg-transparent">
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-3 sm:mb-4 md:mb-6 leading-[1.1] text-white pt-8 sm:pt-10 md:pt-12">
          I&apos;m <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-400 via-purple-500 to-purple-600 drop-shadow-[0_0_25px_rgba(168,85,247,0.4)] pr-2 sm:pr-4">
            {profile.name}
          </span>
        </h1>
        
        <div className="h-7 sm:h-8 md:h-10 mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-sm sm:text-2xl md:text-3xl lg:text-4xl font-medium text-slate-400 tracking-tight">
            {text}
            <span className="ml-1 inline-block w-0.5 sm:w-1 h-5 sm:h-6 md:h-8 bg-purple-500 animate-pulse" />
            <span className="text-slate-500 mx-2 text-lg sm:text-2xl md:text-3xl font-light">@</span>
            <span className="text-white font-semibold">{heroData.school}</span>
          </h2>
        </div>

        <div 
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="relative group max-w-2xl mb-16 cursor-default"
        >
            <div 
              className="absolute inset-0 z-0 transition-opacity duration-500 rounded-[2.5rem] pointer-events-none"
              style={{
                opacity: isHovering ? 0.7 : 0,
                background: `radial-gradient(400px circle at ${glowPos.x}px ${glowPos.y}px,rgba(168,85,247,0.25),transparent 70%)`,
              }}
            />

            <div className="absolute -inset-1 bg-linear-to-r from-purple-500/10 to-purple-500/10 rounded-[2.5rem] blur-2xl opacity-40" />
            
            <div className="relative p-6 sm:p-8 md:p-10 lg:p-12 rounded-[2.5rem] border border-white/20 bg-white/5 backdrop-blur-3xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent opacity-50" />
              
              <p className="relative text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed md:leading-relaxed font-medium italic">
              &quot;{heroData.quote}&quot;
              </p>
            </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-2 bg-linear-to-r from-purple-500/20 to-purple-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition duration-700" />
          
          <a 
            href={heroData.resumeUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative flex items-center gap-3 sm:gap-4 px-8 sm:px-12 md:px-14 py-3 sm:py-4 md:py-5 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl text-white font-bold text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] transition-all duration-500 hover:bg-white/10 hover:border-white/30 hover:scale-[1.03] active:scale-95 overflow-hidden group shadow-[0_10px_40px_-15px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            
            <FileText size={16} className="sm:size-4 md:size-[18px] text-purple-400 group-hover:scale-110 transition-transform duration-300" />
            <span className="relative hidden sm:inline">View My Resume</span>
            <span className="relative sm:hidden">Resume</span>
            <ChevronRight size={16} className="sm:size-4 md:size-[18px] text-slate-500 group-hover:text-white transition-all group-hover:translate-x-1.5" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;