"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, FileText } from "lucide-react";
import { profile } from "@/app/data";
import GlassCard from "@/app/components/ui/GlassCard";
import Button from "@/app/components/ui/Button";

export default function HeroSection() {
  const [text, setText] = useState("");
  const fullText = `${profile.role} @ ${profile.school}`;

  useEffect(() => {
    if (text.length >= fullText.length) return;
    const timeout = setTimeout(() => {
      setText(fullText.slice(0, text.length + 1));
    }, 55);

    return () => clearTimeout(timeout);
  }, [fullText, text]);

  return (
    <section className="relative flex min-h-[78vh] items-center overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute left-1/2 top-16 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <p className="mb-5 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/60 backdrop-blur-xl">
          Portfolio
        </p>

        <h1 className="max-w-5xl text-5xl font-bold leading-[0.96] tracking-tight text-white sm:text-6xl lg:text-8xl">
          I&apos;m{" "}
          <span className="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
            {profile.name}
          </span>
        </h1>

        <div className="mt-6 h-8 text-base font-medium tracking-tight text-white/70 sm:text-2xl">
          {text}
          <span className="ml-1 inline-block h-5 w-px translate-y-1 bg-violet-400 sm:h-7" />
        </div>

        <GlassCard className="mt-10 max-w-2xl px-7 py-6 sm:px-10 sm:py-8" hover={false}>
          <p className="text-base leading-relaxed text-white/75 sm:text-lg">&quot;{profile.bio}&quot;</p>
        </GlassCard>

        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <Button href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" variant="violet">
            <FileText size={16} />
            View My Resume
          </Button>
          <Button href="#projects" variant="glass">
            See Projects
            <ArrowUpRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}
