"use client";

import { useState } from "react";
import Image from "next/image";
import { Award, Calendar, GraduationCap } from "lucide-react";
import { milestones } from "@/app/data";
import GlassCard from "@/app/components/ui/GlassCard";

const tabs = [
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "certifications", label: "Certifications", icon: Award },
];

export default function MilestonesSection() {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <section id="milestones" className="scroll-mt-24">
      <div className="mb-10">
        <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
          Journey & <span className="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">Milestones</span>
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60">
          Academic progress and certifications that support my software engineering foundation.
        </p>
      </div>

      <GlassCard className="p-5 sm:p-7">
        <div className="mb-6 flex flex-wrap gap-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] transition ${
                  isActive
                    ? "border-violet-400/50 bg-violet-500/20 text-white"
                    : "border-white/10 bg-white/[0.04] text-white/50 hover:text-white"
                }`}
              >
                <Icon size={14} />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="relative space-y-4">
          <div className="absolute bottom-4 left-6 top-4 hidden w-px bg-gradient-to-b from-transparent via-white/10 to-transparent sm:block" />
          {milestones[activeTab].map((item) => (
            <article key={`${item.title}-${item.date}`} className="relative flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition duration-300 hover:border-violet-400/40 hover:bg-white/[0.08]">
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/30">
                <Image src={item.logo} alt={`${item.org} logo`} fill sizes="48px" className="object-contain p-2" />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="font-bold tracking-tight text-white">{item.title}</h3>
                <p className="mt-1 text-sm font-medium text-white/55">{item.org}</p>
                <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-semibold text-white/55">
                  <Calendar size={13} className="text-violet-300" />
                  {item.date}
                </p>
              </div>
            </article>
          ))}
        </div>
      </GlassCard>
    </section>
  );
}
