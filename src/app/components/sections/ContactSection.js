"use client";
import { ArrowUpRight } from "lucide-react";
import { contactSocials } from "../../data";

const ContactSection = () => {
  const socials = contactSocials;

  return (
    <section id="contact" className="py-12 md:py-20 w-full font-sans bg-transparent">
      <div className="mb-12 space-y-4 px-4 md:px-2">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase">
          Let&apos;s <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-400 via-purple-500 to-purple-600">Connect</span>
        </h2>
        <p className="text-slate-400 max-w-2xl text-lg font-medium tracking-tight opacity-80">
          Reach out via any of these platforms.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 px-4 md:px-0">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative"
          >
            <div className="relative h-full p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-3xl transition-all duration-500 ease-out overflow-hidden shadow-2xl hover:bg-white/[0.07] hover:border-white/20 hover:-translate-y-1.5 active:scale-95">
              
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_70%)] pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex items-start justify-between mb-4 md:mb-8">
                <div className={`w-9 h-9 md:w-12 md:h-12 flex items-center justify-center rounded-lg md:rounded-2xl bg-black/40 border border-white/10 transition-all duration-500 group-hover:border-purple-500/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] ${social.colorClasses}`}>
                  <div className="w-5 h-5 md:w-6 md:h-6">
                    {social.icon}
                  </div>
                </div>
                
                <div className="p-1.5 md:p-2 rounded-lg bg-white/5 border border-white/10 opacity-40 group-hover:opacity-100 group-hover:bg-purple-500/10 group-hover:border-purple-500/20 transition-all duration-500">
                  <ArrowUpRight size={14} className="text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
              
              <div className="relative z-10 space-y-1">
                {/* Responsive text sizing */}
                <h3 className="text-white font-black text-base md:text-xl tracking-tight leading-none group-hover:text-purple-100 transition-colors truncate">
                  {social.name}
                </h3>
                <p className="text-slate-500 text-[8px] md:text-[10px] font-black uppercase tracking-[0.15em] md:tracking-[0.25em] transition-colors group-hover:text-purple-400/80">
                  {social.label}
                </p>
              </div>

              <div className="absolute inset-x-8 bottom-0 h-px bg-linear-to-r from-transparent via-purple-500/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;