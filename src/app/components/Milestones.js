"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Award, Calendar } from "lucide-react";

const MilestonesSection = () => {
  const [activeTab, setActiveTab] = useState("education");

  const data = {
    education: [
      {
        title: "BS Computer Science, Software Engineering",
        org: "FEU Institute of Technology",
        date: "2022 - Present",
        logo: "/milestones-icons/FEUTECH.png",
      },
    ],
    certifications: [
      {
        title: "PMI Project Management Ready™",
        org: "Project Management Institute",
        date: "2025",
        logo: "/milestones-icons/pmi-project-management-ready.png",
      },
      {
        title: "Introduction to Cybersecurity",
        org: "Cisco",
        date: "2025",
        logo: "/milestones-icons/intro-cybersecurity.png",
      },
      {
        title: "Junior Cybersecurity Analyst Career Path",
        org: "Cisco",
        date: "2025",
        logo: "/milestones-icons/junior-cybersec-analyst.png",
      },
      {
        title: "CCNA: Introduction to Networks",
        org: "Cisco",
        date: "2024",
        logo: "/milestones-icons/intro-networks.png",
      },
      {
        title: "IT Specialist - Python",
        org: "Certiport",
        date: "2024",
        logo: "/milestones-icons/its-python.png",
      },
    ],
  };

  return (
    <section id="milestones" className="py-20 mt-10 w-full font-sans">
      <div className="mb-10 space-y-3">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase leading-none">
          Journey & <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-400 via-purple-500 to-purple-600">Milestones</span>
        </h2>
        <p className="text-slate-400 text-lg font-medium tracking-tight opacity-70">
          Academic progression and professional certifications.
        </p>
      </div>

      <div className="relative">
        <div className="relative bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl">
          
          {/* Compressed Tab Switcher */}
          <div className="flex items-center p-5 border-b border-white/5 bg-white/[0.01]">
            <div className="flex gap-1 p-1 bg-black/40 backdrop-blur-2xl rounded-xl border border-white/10">
              {Object.keys(data).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-5 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
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
                    {tab === 'education' ? <GraduationCap size={13} /> : <Award size={13} />}
                    {tab}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="p-5 md:p-8 max-h-[500px] overflow-y-auto custom-scrollbar relative">
            {/* Ultra-subtle Timeline Line */}
            <div className="absolute left-[2.85rem] md:left-[3.85rem] top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white/5 to-transparent z-10 hidden md:block" />

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
                    <div key={`${activeTab}-${index}`} className="group/item relative flex items-center gap-5 md:gap-7 md:pl-2">
                      
                      {/* Tighter Icon Container */}
                      <div className="shrink-0 w-11 h-11 md:w-14 md:h-14 relative rounded-xl bg-black border border-white/10 p-2 shadow-2xl transition-all duration-500 group-hover/item:border-purple-500/50 group-hover/item:scale-105 z-30">
                        <Image 
                          src={item.logo} 
                          alt={item.org} 
                          fill 
                          className="object-contain p-2 brightness-110" 
                        />
                      </div>

                      {/* Tighter Info Card */}
                      <div className="flex-1 relative p-4 md:p-5 rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-3xl transition-all duration-500 group-hover/item:bg-white/[0.04] group-hover/item:border-white/10 overflow-hidden">
                        <div className="relative flex items-center justify-between gap-3 z-10">
                          <div className="space-y-0.5">
                            <h3 className="text-base md:text-lg font-black text-white tracking-tight group-hover/item:text-purple-300 transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-slate-500 font-bold text-[9px] uppercase tracking-[0.15em]">
                              {item.org}
                            </p>
                          </div>
                          
                          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/5 shrink-0">
                            <Calendar size={11} className="text-purple-400" />
                            <span className="text-[9px] font-black text-white uppercase tracking-tighter">{item.date}</span>
                          </div>
                        </div>

                        {/* Mobile Date Overlay */}
                        <div className="sm:hidden mt-2 flex items-center gap-1.5 text-[8px] font-black text-slate-500 uppercase tracking-widest">
                            <Calendar size={10} /> {item.date}
                        </div>

                        {/* Bottom Glow */}
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