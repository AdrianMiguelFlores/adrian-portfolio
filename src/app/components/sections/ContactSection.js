import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { contactLinks } from "@/app/data";
import GlassCard from "@/app/components/ui/GlassCard";

const icons = {
  LinkedIn: Linkedin,
  GitHub: Github,
  Email: Mail,
  Facebook: ArrowUpRight,
};

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24">
      <GlassCard className="p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Let&apos;s <span className="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/60">
              Open to internships, project collaboration, and software engineering conversations.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {contactLinks.map((link) => {
              const Icon = icons[link.name] || ArrowUpRight;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition duration-300 hover:border-violet-400/40 hover:bg-white/[0.08]"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-black/30 text-violet-300">
                      <Icon size={19} />
                    </span>
                    <span>
                      <span className="block font-bold tracking-tight text-white">{link.name}</span>
                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">{link.label}</span>
                    </span>
                  </span>
                  <ArrowUpRight size={17} className="text-white/40 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                </a>
              );
            })}
          </div>
        </div>
      </GlassCard>
    </section>
  );
}
