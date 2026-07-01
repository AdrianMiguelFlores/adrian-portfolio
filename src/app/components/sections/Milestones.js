"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Award } from "lucide-react";
import { milestones as milestonesData } from "../../data";

const MilestonesSection = () => {
  const [activeTab, setActiveTab] = useState("education");

  const data = milestonesData;

  return (
    <section id="milestones" className="py-16 md:py-20 lg:py-24 mt-10 w-full font-sans">
      <div className="mb-12 md:mb-16 space-y-3">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white uppercase leading-tight">
          Journey & <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-400 via-purple-500 to-purple-600">Milestones</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base md:text-lg lg:text-xl font-medium tracking-tight opacity-70 leading-relaxed">
          Academic progression and professional certifications.
        </p>
      </div>

      <div className="flex items-center mb-16">
        <div className="flex gap-1.5 p-1.5 bg-white/[0.04] backdrop-blur-2xl rounded-2xl border border-white/[0.15] border-b-white/[0.08] border-r-white/[0.08] shadow-[0_24px_50px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.1)] relative before:absolute before:inset-0 before:pointer-events-none before:bg-gradient-to-b before:from-white/[0.04] before:to-transparent before:rounded-2xl">
          {Object.keys(data).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-4 sm:px-6 py-2 rounded-xl text-[10px] sm:text-xs font-black uppercase tracking-[0.15em] transition-all duration-300 ${
                activeTab === tab ? "text-white" : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]"
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTabGlassGlow"
                  className="absolute inset-0 bg-purple-950/[0.40] backdrop-blur-xl backdrop-saturate-150 border border-purple-600/35 border-t-purple-500/50 rounded-xl shadow-[inset_0_1px_1px_rgba(168,85,247,0.2),inset_0_-1px_1px_rgba(0,0,0,0.3),0_0_10px_rgba(168,85,247,0.25)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30, mass: 0.8 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {tab === 'education' ? <GraduationCap size={13} className="text-purple-400" /> : <Award size={13} className="text-purple-400" />}
                {tab}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="relative max-w-5xl">
        <div className="absolute left-[15px] md:left-[25%] top-2 bottom-2 w-[2px] -translate-x-1/2 bg-white/[0.12] pointer-events-none z-10" />

        <div className="space-y-0 relative z-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="space-y-0"
            >
              {data[activeTab].map((item, index) => (
                <div
                  key={`${activeTab}-${index}`}
                  className="group/item relative flex flex-col md:flex-row md:items-start justify-between gap-3 md:gap-0 pb-16 last:pb-0 pl-11 md:pl-0"
                >
                  <div className="md:w-[23%] shrink-0 flex flex-col items-start md:items-end justify-start gap-1 md:text-right pt-1 md:pt-4 md:pr-10">
                    <span className="text-base sm:text-lg md:text-xl font-black text-slate-300 tracking-wide transition-colors duration-300 group-hover/item:text-purple-400">
                      {item.date}
                    </span>
                    <p className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                      {item.org}
                    </p>
                  </div>

                  <div className="absolute left-[15px] md:left-[25%] top-[26px] md:top-6 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center pointer-events-none">
                    <div className="relative w-2.5 h-2.5 rounded-full bg-neutral-950 border-2 border-white/40 group-hover/item:border-purple-400 group-hover/item:bg-purple-500 transition-all duration-300 group-hover/item:scale-125 shadow-[0_0_8px_rgba(0,0,0,0.8)] pointer-events-auto" />
                  </div>

                  <div className="flex-1 flex items-start gap-5 sm:gap-7 min-w-0 pl-4 md:pl-16 pt-2 md:pt-1.5">
                    <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 relative rounded-2xl bg-white/[0.02] backdrop-blur-md border border-white/[0.10] p-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-500 group-hover/item:border-purple-500/40 group-hover/item:bg-white/[0.04] group-hover/item:shadow-[0_12px_40px_rgba(168,85,247,0.15)]">
                      <Image
                        src={item.logo}
                        alt={item.org}
                        fill
                        className="object-contain p-2 brightness-110 group-hover/item:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="flex-1 min-w-0 pt-2 md:pt-3">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white tracking-tight leading-snug group-hover/item:text-purple-300 transition-colors duration-300">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default MilestonesSection;