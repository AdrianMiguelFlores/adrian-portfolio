"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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
    <section id="milestones" className="py-12 mt-6 w-full font-sans bg-transparent">
      <div className="mb-10 space-y-3 px-2">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase">
          Journey & <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-400 via-purple-500 to-purple-600 pr-4">Milestones</span>
        </h2>
        <p className="text-slate-400 max-w-2xl text-lg font-medium tracking-tight opacity-80">
          Academic progression and professional certifications.
        </p>
      </div>

      <div className="relative">
        <div className="relative bg-white/5 backdrop-blur-3xl border border-white/15 rounded-4xl overflow-hidden shadow-2xl">
          
          <div className="flex items-center p-4 border-b border-white/10 bg-white/5 relative z-20">
            <div className="flex gap-1 p-1 bg-black/40 backdrop-blur-2xl rounded-xl border border-white/10 shadow-inner">
              {Object.keys(data).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-5 py-1.5 rounded-lg text-sm font-bold capitalize transition-colors duration-300 ${
                    activeTab === tab ? "text-white" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTabGlow"
                      className="absolute inset-0 bg-purple-600/30 border border-purple-500/40 rounded-lg shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                      transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                    />
                  )}
                  <span className="relative z-10">{tab}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="p-5 md:p-8 max-h-125 overflow-y-auto custom-scrollbar relative z-20">
            <div className="relative border-l border-white/15 ml-6 space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="space-y-6"
                >
                  {data[activeTab].map((item, index) => (
                    <div key={`${activeTab}-${index}`} className="relative pl-12 group/item">
                      
                      <div className="absolute -left-6.75 top-1/2 -translate-y-1/2 z-20">
                        <div className="w-13 h-13 relative rounded-2xl bg-[#111] border border-white/20 p-2.5 shadow-2xl transition-all duration-400 group-hover/item:border-purple-400/60 group-hover/item:scale-110">
                          <Image 
                            src={item.logo} 
                            alt={item.org} 
                            width={52}
                            height={52}
                            className="w-full h-full object-contain brightness-125"
                          />
                        </div>
                      </div>

                      <div className="relative p-4 md:p-5 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-2xl transition-all duration-400 group-hover/item:bg-white/10 group-hover/item:border-white/30 group-hover/item:-translate-y-1.5 overflow-hidden shadow-2xl">
                        
                        <div className="absolute inset-0 translate-x-[-150%] group-hover/item:translate-x-[150%] transition-transform duration-1000 ease-in-out bg-linear-to-r from-transparent via-white/20 to-transparent pointer-events-none z-20" />
                        
                        <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-400 z-30" />
                        
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_50%)] opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-3 z-10">
                          <div className="space-y-0.5">
                            <h3 className="text-xl font-extrabold text-white tracking-tight">
                              {item.title}
                            </h3>
                            <p className="text-slate-300 font-bold text-sm">
                              {item.org}
                            </p>
                          </div>
                          
                          <div className="shrink-0">
                            <span className="inline-block px-3.5 py-1 text-[10px] font-black uppercase tracking-wider rounded-full bg-white/10 text-purple-300 border border-white/10 backdrop-blur-md transition-all group-hover/item:border-purple-500/40 group-hover/item:text-white">
                              {item.date}
                            </span>
                          </div>
                        </div>

                        <div className="absolute inset-x-4 bottom-0 h-px bg-linear-to-r from-transparent via-purple-500 to-transparent scale-x-0 group-hover/item:scale-x-100 transition-transform duration-700 ease-out shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MilestonesSection;