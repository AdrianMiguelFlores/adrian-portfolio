import Image from "next/image";
import { skillCategories } from "@/app/data";
import GlassCard from "@/app/components/ui/GlassCard";

export default function TechStackSection() {
  return (
    <section id="tech-stack" className="scroll-mt-24">
      <div className="mb-10">
        <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
          Tech <span className="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">Stack</span>
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60">
          Technologies I use across coursework, full-stack projects, and software engineering practice.
        </p>
      </div>

      <GlassCard className="p-5 sm:p-7">
        <div className="grid gap-6 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-white/70">{category.title}</h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3 transition duration-300 hover:border-violet-400/40 hover:bg-white/[0.08]">
                    <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/30">
                      <Image src={skill.icon} alt={`${skill.name} icon`} width={24} height={24} className="h-6 w-6 object-contain" />
                    </span>
                    <span className="text-sm font-semibold text-white/75 transition group-hover:text-white">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </section>
  );
}
