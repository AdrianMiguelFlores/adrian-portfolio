"use client";

import Link from "next/link";
import { navLinks } from "@/app/data";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/5 backdrop-blur-md">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold tracking-tight text-white transition hover:text-violet-200" aria-label="Adrian Flores home">
          Adrian<span className="text-violet-400">.</span>
        </Link>

        <div className="flex items-center gap-5 sm:gap-7">
          {navLinks.map((link) =>
            link.isButton ? (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-violet-500 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-violet-400 transition hover:bg-violet-500 hover:text-white"
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="hidden text-[11px] font-bold uppercase tracking-[0.18em] text-white/60 transition hover:text-white md:inline-flex"
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      </nav>
    </header>
  );
}
