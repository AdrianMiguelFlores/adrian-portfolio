"use client";
import { ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  const socials = [
    {
      name: "LinkedIn",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      link: "https://www.linkedin.com/in/adi-flores/",
      hoverColor: "group-hover:text-[#0A66C2]",
      label: "Professional",
    },
    {
      name: "GitHub",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
      link: "https://github.com/AMF112",
      hoverColor: "group-hover:text-white",
      label: "Codebase",
    },
    {
      name: "Gmail",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.573l8.073-6.08c1.618-1.214 3.927-.059 3.927 1.964z" />
        </svg>
      ),
      link: "mailto:adrianmiguelflores512@gmail.com",
      hoverColor: "group-hover:text-[#EA4335]",
      label: "Email Me",
    },
    {
      name: "Facebook",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      link: "https://www.facebook.com/grape.pye",
      hoverColor: "group-hover:text-[#1877F2]",
      label: "Social",
    },
  ];

  return (
    <section id="contact" className="py-20 w-full font-sans bg-transparent">
      <div className="mb-12 space-y-4 px-2">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase">
          Let&apos;s <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-400 via-purple-500 to-purple-600">Connect</span>
        </h2>
        <p className="text-slate-400 max-w-2xl text-lg font-medium tracking-tight opacity-80">
          Reach out via any of these platforms.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block h-full"
          >
            <div className="relative h-full p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-[50px] transition-all duration-500 ease-out overflow-hidden shadow-2xl hover:bg-white/8 hover:border-white/20 hover:-translate-y-1.5">
              
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent transition-opacity group-hover:via-white/25" />
              
              <div className="flex items-start justify-between mb-8">
                <div className={`p-3.5 rounded-2xl bg-[#0a0a0a] border border-white/10 text-slate-500 transition-all duration-500 shadow-2xl scale-100 group-hover:scale-110 group-hover:border-purple-500/40 ${social.hoverColor}`}>
                  {social.icon}
                </div>
                <ArrowUpRight size={20} className="text-slate-700 transition-all duration-500 group-hover:text-purple-400 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              
              <div className="space-y-1">
                <h3 className="text-white font-black text-xl tracking-tight">{social.name}</h3>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] transition-colors group-hover:text-purple-300">
                  {social.label}
                </p>
              </div>

              <div className="absolute inset-x-6 bottom-0 h-px bg-linear-to-r from-transparent via-purple-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;