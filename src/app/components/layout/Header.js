"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { brandName, navLinks } from "../../data";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e) => {
    if (!navRef.current || !scrolled) return;
    const { left, top } = navRef.current.getBoundingClientRect();
    navRef.current.style.setProperty("--mouse-x", `${e.clientX - left}px`);
    navRef.current.style.setProperty("--mouse-y", `${e.clientY - top}px`);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-3 sm:p-4 md:p-6 pointer-events-none">
      <nav 
        ref={navRef}
        onMouseMove={handleMouseMove}
        className={`relative flex items-center justify-between px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-700 border pointer-events-auto overflow-hidden group/nav
          ${scrolled 
            ? "w-full max-w-2xl sm:max-w-3xl md:max-w-4xl bg-white/5 backdrop-blur-2xl border-white/10 shadow-2xl shadow-purple-900/10" 
            : "w-full max-w-3xl sm:max-w-5xl md:max-w-6xl bg-transparent border-transparent shadow-none"
          }`}
      >
        {/* Corrected radial-gradient syntax */}
        <div 
          className={`absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-0 group-hover/nav:opacity-100
                     bg-[radial-gradient(400px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(168,85,247,0.15),rgba(255,255,255,0.06)_30%,transparent_60%)]
                     ${scrolled ? "block" : "hidden"}`} 
        />

        <div className="relative z-10">
          <Link
            href="/"
            className="text-lg sm:text-xl md:text-2xl font-black tracking-tighter text-white transition-all hover:scale-105 active:scale-95 group"
          >
            {brandName}<span className="text-purple-500 transition-all duration-500 group-hover:text-purple-400">.</span>
          </Link>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 md:gap-8 relative z-10">
          <ul className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 text-[8px] sm:text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-slate-400">
            {navLinks.filter((link) => !link.isButton).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative transition-all duration-500 hover:text-white group py-2"
                >
                  {link.label}
                  <span className="absolute inset-x-0 -bottom-1 h-8 bg-purple-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <span className="absolute bottom-0 left-1/2 w-0 h-px bg-linear-to-r from-transparent via-purple-500 to-transparent transition-all duration-700 -translate-x-1/2 group-hover:w-full rounded-full" />
                </Link>
              </li>
            ))}
          </ul>

          {navLinks.filter((link) => link.isButton).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-[8px] sm:text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.25em] text-white/90 transition-all duration-700 hover:scale-105 hover:bg-white/8 hover:border-white/20 group overflow-hidden"
            >
              <div className="absolute inset-0 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-500 ease-in-out bg-linear-to-r from-transparent via-purple-500/10 to-transparent pointer-events-none" />
              <span className="relative z-10">{link.label}</span>
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 ring-1 ring-inset ring-purple-500/20" />
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;