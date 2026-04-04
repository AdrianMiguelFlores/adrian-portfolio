"use client";
import Image from "next/image";

const skills = [
  { name: "Python", icon: "/skills-icons/py.svg" },
  { name: "Java", icon: "/skills-icons/java.svg" },
  { name: "Flask", icon: "/skills-icons/flask.svg" },
  { name: "HTML", icon: "/skills-icons/html.svg" },
  { name: "CSS", icon: "/skills-icons/css.svg" },
  { name: "SQLite", icon: "/skills-icons/sqlite.svg" },
  { name: "PostgreSQL", icon: "/skills-icons/postgres.svg" },
  { name: "Tailwind", icon: "/skills-icons/tailwind.svg" },
  { name: "Bootstrap", icon: "/skills-icons/bootstrap.svg" },
];

const TechStackSection = () => {
  return (
    <section id="tech-stack" className="py-20 mt-10 w-full font-sans bg-transparent">
      <div className="mb-12 space-y-4 px-4 md:px-2">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase">
          Tech <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-400 via-purple-500 to-purple-600">Stack</span>
        </h2>
        <p className="text-slate-400 max-w-2xl text-lg font-medium tracking-tight opacity-80">
          The collection of technologies I use to design and build modern web applications.
        </p>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-9 gap-2.5 sm:gap-4 w-full px-3 md:px-0">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group relative aspect-square w-full flex flex-col items-center justify-center rounded-2xl md:rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl transition-all duration-500 ease-out overflow-hidden hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-2 shadow-2xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_70%)] pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-2">
              <div className="relative w-[55%] h-[55%] sm:w-14 sm:h-14 flex items-center justify-center rounded-xl md:rounded-2xl bg-black/40 border border-white/10 transition-all duration-500 
                              text-slate-500 lg:opacity-60 
                              group-hover:grayscale-0 group-hover:opacity-100 group-hover:border-purple-500/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]
                              lg:group-hover:-translate-y-3">
                
                <div className="absolute inset-0 bg-blue-500/5 opacity-100 lg:opacity-40 group-hover:opacity-0 transition-opacity rounded-xl md:rounded-2xl" />

                <div className="relative w-[60%] h-[60%]">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    fill
                    className="object-contain brightness-110"
                  />
                </div>
              </div>

              <span className="text-[10px] xs:text-[11px] md:text-[8px] lg:text-[10px] font-black uppercase tracking-tight xs:tracking-wider
                               text-slate-400 lg:opacity-0 lg:translate-y-4 
                               transition-all duration-500 
                               mt-2 lg:mt-0 lg:absolute lg:bottom-5
                               group-hover:opacity-100 group-hover:translate-y-0 group-hover:text-purple-300
                               w-full text-center px-1 break-words leading-none">
                {skill.name}
              </span>
            </div>

            <div className="absolute inset-x-6 bottom-0 h-px bg-linear-to-r from-transparent via-purple-500/50 to-transparent 
                            scale-x-50 lg:scale-x-0 group-hover:scale-x-100 
                            transition-transform duration-700" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackSection;