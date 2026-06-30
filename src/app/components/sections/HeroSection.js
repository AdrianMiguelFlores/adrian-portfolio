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
    <section className="relative w-full min-h-[70vh] flex items-center justify-center py-6 sm:py-14 md:py-16 px-4 sm:px-6 overflow-hidden bg-transparent">
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center px-4 sm:px-8">
        
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/[0.03] backdrop-blur-md mb-3 sm:mb-5 md:mb-6 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
          <span className="w-1 h-1 rounded-full bg-purple-500 animate-ping" />
          <span className="text-[9px] font-black uppercase tracking-[0.25em] text-purple-300/90">Available For Opportunities</span>
        </div>

        <h1 className="text-6xl leading-[1.15] sm:text-7xl md:text-8xl font-black tracking-tighter mb-2 sm:mb-4 text-white max-w-4xl whitespace-normal break-words">
          <span className="font-black tracking-tighter mr-2 sm:mr-4 inline">I&apos;m</span>{" "}
          <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-300 via-purple-500 to-purple-600 drop-shadow-[0_0_30px_rgba(168,85,247,0.35)] px-1 py-1 sm:py-3 inline pb-3">
            {profile.name}
          </span>
        </h1>
        
        <div className="h-8 sm:h-8 mb-6 sm:mb-10 flex items-center justify-center">
          <h2 className="text-base sm:text-xl md:text-2xl font-bold text-slate-400 tracking-tight flex items-center justify-center flex-wrap gap-y-1 max-w-2xl">
            <span className="text-slate-200">{text}</span>
            <span className="ml-1 inline-block w-0.5 h-4 sm:h-5 bg-purple-500 animate-pulse" />
            <span className="text-purple-500/50 mx-2 text-sm sm:text-lg font-light">@</span>
            <span className="text-purple-300/90 font-black">{heroData.school}</span>
          </h2>
        </div>

        <div 
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="relative group max-w-2xl mb-8 sm:mb-12 cursor-default w-full transition-all duration-500 hover:scale-[1.01]"
        >
            <div 
              className="absolute inset-0 z-0 transition-opacity duration-500 rounded-[2rem] pointer-events-none"
              style={{
                opacity: isHovering ? 1 : 0,
                background: `radial-gradient(350px circle at ${glowPos.x}px ${glowPos.y}px, rgba(168,85,247,0.2), transparent 75%)`,
              }}
            />

            <div className="absolute -inset-1 bg-linear-to-r from-purple-600/10 to-indigo-600/10 rounded-[2rem] blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            
            <div className="relative p-5 sm:p-8 rounded-[2rem] 
                        bg-white/[0.02] backdrop-blur-xl shadow-[0_12px_40px_0_rgba(0,0,0,0.6)]
                        border border-white/[0.12] border-b-white/[0.03] border-r-white/[0.03]
                        before:absolute before:inset-0 before:pointer-events-none
                        before:bg-gradient-to-br before:from-white/[0.05] before:via-transparent before:to-transparent
                        after:absolute after:inset-0 after:pointer-events-none
                        after:shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),inset_0_-1px_6px_rgba(0,0,0,0.5)]
                        overflow-hidden text-center">
              
              <p className="relative z-10 text-xs sm:text-base md:text-lg lg:text-xl text-purple-100/80 leading-relaxed font-medium italic tracking-wide">
                &quot;{heroData.quote}&quot;
              </p>
            </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-2 bg-linear-to-r from-purple-500/20 to-purple-700/20 rounded-full blur-xl opacity-40 group-hover:opacity-100 transition duration-700" />
          
          <a 
            href={heroData.resumeUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative flex items-center gap-2.5 px-8 sm:px-10 py-3 sm:py-3.5 rounded-full border border-purple-500/30 bg-purple-950/20 hover:bg-purple-900/30 backdrop-blur-xl text-white font-black text-[10px] sm:text-xs uppercase tracking-[0.2em] transition-all duration-500 hover:border-purple-400/40 hover:scale-[1.02] active:scale-95 overflow-hidden group shadow-[0_15px_40px_-15px_rgba(168,85,247,0.3)]"
          >
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-purple-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            
            <FileText size={14} className="text-purple-400 group-hover:scale-110 transition-transform duration-300" />
            <span className="relative hidden sm:inline">View My Resume</span>
            <span className="relative sm:hidden">Resume</span>
            <ChevronRight size={14} className="text-purple-400/60 group-hover:text-white transition-all group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;