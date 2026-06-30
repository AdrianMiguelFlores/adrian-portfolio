"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Award, Calendar } from "lucide-react";
import { milestones as milestonesData } from "../../data";

const MilestonesSection = () => {
  const [activeTab, setActiveTab] = useState("education");

  const data = milestonesData;

  return (
    <section id="milestones" className="py-16 md:py-20 lg:py-24 mt-10 w-full font-sans">
      <div className="mb-8 md:mb-10 lg:mb-12 space-y-2.5 md:space-y-3 lg:space-y-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white uppercase leading-tight">
          Journey & <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-400 via-purple-500 to-purple-600">Milestones</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base md:text-lg lg:text-xl font-medium tracking-tight opacity-70 leading-relaxed">
          Academic progression and professional certifications.
        </p>
      </div>

      <div className="relative">
        <div className="relative bg-white/[0.03] backdrop-blur-xl rounded-[2rem] overflow-hidden border border-white/[0.15] border-b-white/[0.05] border-r-white/[0.05] shadow-[0_12px_40px_0_rgba(0,0,0,0.5)] before:absolute before:inset-0 before:pointer-events-none before:bg-gradient-to-br before:from-white/[0.08] before:via-transparent before:to-transparent after:absolute after:inset-0 after:pointer-events-none after:shadow-[inset_0_1px_2px_rgba(255,255,255,0.15),inset_0_-1px_8px_rgba(0,0,0,0.6)]">
          
          <div className="flex items-center p-3 sm:p-4 md:p-5 border-b border-white/5 bg-white/[0.01]">
            <div className="flex gap-1 p-1 bg-black/40 backdrop-blur-2xl rounded-xl border border-white/10">
              {Object.keys(data).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-3 sm:px-4 md:px-5 py-1.5 rounded-lg text-[9px] sm:text-[10px] md:text-xs font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] transition-all duration-300 ${
                    activeTab === tab ? "text-white" : "text-slate-500 hover:text-slate-300"
                  }`}
                >
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTabGlow"
                      className="absolute inset-0 bg-purple-500/20 border border-purple-500/30 rounded-lg"
                      transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {tab === 'education' ? <GraduationCap size={12} className="sm:size-[13px]" /> : <Award size={12} className="sm:size-[13px]" />}
                    {tab}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 sm:p-5 md:p-8 max-h-[500px] overflow-y-auto custom-scrollbar relative">
            <div className="absolute left-[2.35rem] sm:left-[2.85rem] md:left-[3.85rem] top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white/5 to-transparent z-10 hidden md:block" />

            <div className="space-y-4 relative z-20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.15 }}
                  className="space-y-3"
                >
                  {data[activeTab].map((item, index) => (
                    <div key={`${activeTab}-${index}`} className="group/item relative flex items-start gap-3 sm:gap-4 md:gap-5 lg:gap-7 md:pl-2">
                      
                      <div className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 md:w-14 md:h-14 relative rounded-lg sm:rounded-xl bg-black border border-white/10 p-2 shadow-2xl transition-all duration-500 group-hover/item:border-purple-500/50 group-hover/item:scale-105 z-30">
                        <Image 
                          src={item.logo} 
                          alt={item.org} 
                          fill 
                          className="object-contain p-1.5 sm:p-2 brightness-110" 
                        />
                      </div>

                      <div className="flex-1 relative p-3 sm:p-4 md:p-5 rounded-xl md:rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-3xl transition-all duration-500 group-hover/item:bg-white/[0.04] group-hover/item:border-white/10 overflow-hidden">
                        <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 z-10">
                          <div className="space-y-0.5">
                            <h3 className="text-sm sm:text-base md:text-lg font-black text-white tracking-tight group-hover/item:text-purple-300 transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-slate-500 font-bold text-[8px] sm:text-[9px] uppercase tracking-[0.1em] sm:tracking-[0.15em]">
                              {item.org}
                            </p>
                          </div>
                          
                          <div className="hidden sm:flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-md bg-white/5 border border-white/5 shrink-0">
                            <Calendar size={10} className="sm:size-[11px] text-purple-400" />
                            <span className="text-[8px] sm:text-[9px] font-black text-white uppercase tracking-tighter">{item.date}</span>
                          </div>
                        </div>

                        <div className="sm:hidden mt-1.5 flex items-center gap-1.5 text-[7px] sm:text-[8px] font-black text-slate-500 uppercase tracking-widest">
                            <Calendar size={9} className="sm:size-[10px]" /> {item.date}
                        </div>

                        <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-purple-500/30 to-transparent scale-x-0 group-hover/item:scale-x-100 transition-transform duration-500" />
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { 
          background: rgba(168, 85, 247, 0.1); 
          border-radius: 10px; 
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(168, 85, 247, 0.3);
        }
      `}</style>
    </section>
  );
};

export default MilestonesSection;