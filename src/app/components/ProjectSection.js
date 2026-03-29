"use client";
import Image from "next/image";
import ProjectModal from "./ProjectModal";
import { useState, useRef, useEffect } from "react";
import { ExternalLink, LayoutGrid, X, Terminal } from "lucide-react";

const ProjectSection = () => {
  const projects = [
      {
        id: 1,
        title: "Flask Bites",
        description: "A full-stack food ordering system focusing on seamless state management and relational data integrity.",
        fullDescription: "Flask Bites is an e-commerce platform for food services. It features a dynamic menu, real-time cart calculations, and a secure checkout flow. The project focuses on creating a frictionless user experience while keeping backend data consistent across sessions.",
        features: [
          "Structured menu and order management powered by a robust PostgreSQL backbone",
          "Seamless shopping experience via a persistent session-based cart—no login required",
          "Fully responsive, mobile-first interface built with Bootstrap for smooth browsing on any device",
          "Privacy-first security using Argon2 to ensure user passwords are salted and hashed safely"
        ],
        challenge: "Designing a schema that could reliably bridge the Many-to-Many relationship between Users and Menu items while maintaining data integrity.",
        solution: "I implemented a dedicated 'Order Items' junction table in PostgreSQL to track quantities and snapshot historical pricing, ensuring checkout totals stay accurate even if menu prices change later.",
        image: "/flask-bites.png",
        techStack: ["Flask", "Python", "Bootstrap", "PostgreSQL"],
        githubUrl: "https://github.com/yourusername/flask-bites",
        liveUrl: "#"
      },
      {
        id: 2,
        title: "Boot Blog",
        description: "A content management platform featuring user authentication and threaded commenting systems.",
        fullDescription: "Boot Blog is a scalable blogging engine designed to handle user-generated content safely. It implements modern web security practices and provides a clean, focused interface for long-form reading and community interaction.",
        features: [
          "Admin-only dashboard for managing the full lifecycle of blog posts (CRUD).",
          "Logged-in users can provide feedback by commenting to each blog post.",
          "Personalized identity layer that assigns unique default avatars to every commenter.",
          "Lightweight SQLite architecture for a fast, responsive, and low-overhead database."
        ],
        challenge: "The challenge was mapping complex database relationships, specifically ensuring users properly 'owned' their comments while maintaining data integrity across the entire application.",
        solution: "I solved this by mastering SQLAlchemy relationship patterns. I implemented explicit child-parent mapping using Mapped[List['Child']] = relationship(), creating a predictable data flow between users, posts, and threads.",
        image: "/boot-blog.png",
        techStack: ["Flask", "Python", "Bootstrap", "SQLite"],
        githubUrl: "https://github.com/yourusername/boot-blog",
        liveUrl: "#"
      },
      {
        id: 3,
        title: "CineLog",
        description: "A movie tracking application integrating external APIs for real-time data synchronization.",
        fullDescription: "CineLog allows movie enthusiasts to catalog their viewing history. By fetching data from external movie databases, it provides users with up-to-date information, and ratings in a personalized dashboard.",
        features: [
          "Integrated TMDB API for automated movie metadata and poster retrieval.",
          "Dynamic ranking logic that reorders the collection based on user scores.",
          "Custom CRUD interface for managing personal ratings and reviews.",
          "Data transformation layer to clean and map raw API responses to SQLite.",
          "Search-to-selection workflow for rapid collection building."
        ],
        challenge: "Creating a logic that automatically recalculates and persists movie rankings based on user ratings every time the library is viewed.",
        solution: "Implemented a dynamic sorting loop in the home route that iterates through the collection, updates the ranking integers in SQLite, and commits the changes to ensure the leaderboard is always accurate.",
        image: "/cinelog.png",
        techStack: ["Flask", "Python", "Bootstrap", "SQLite"],
        githubUrl: "https://github.com/yourusername/cinelog",
        liveUrl: "#"
      },
      {
        id: 4,
        title: "Turtle Crossing",
        description: "A game built using the Turtle module in Python.",
        fullDescription: "Turtle Crossing is a 2D game that demonstrates the power of modular code. It utilizes Python's turtle module to form shapes, movements, and collision detection between objects.",
        features: [
          "Modular architecture using OOP to manage distinct behaviors for the player, traffic, and game state.",
          "Custom collision detection logic if the player hits an object.",
          "Difficulty scaling where vehicle speeds increases as the level progresses.",
          "Real-time event handling to ensure responsive keyboard inputs and fluid character movement."
        ],
        challenge: "Managing the increasing complexity of game objects like the player, moving traffic, and the scoreboard within a single execution loop.",
        solution: "Created separate files for each classes (player, car manager, and scoreboard), allowing each to scale its own independently.",
        image: "/turtle-crossing.png",
        techStack: ["Python", "Turtle Graphics"],
        githubUrl: "https://github.com/yourusername/turtle-crossing",
        liveUrl: "#"
      }
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const [showAllModal, setShowAllModal] = useState(false);
  const archiveOverlayRef = useRef();

  const featuredProjects = projects.slice(0, 3);

  const handleNextProject = () => {
    const currentIndex = projects.findIndex((p) => p.id === selectedProject);
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex].id);
  };

  const handlePrevProject = () => {
    const currentIndex = projects.findIndex((p) => p.id === selectedProject);
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[prevIndex].id);
  };

  useEffect(() => {
    if (showAllModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [showAllModal]);

  const ProjectCard = ({ project, isSmall = false }) => (
    <button
      onClick={() => setSelectedProject(project.id)}
      className={`group relative flex flex-col text-left rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-3xl transition-all duration-500 overflow-hidden shadow-2xl hover:bg-white/[0.07] hover:border-purple-500/30 hover:-translate-y-2 active:scale-[0.98] ${isSmall ? 'h-[380px]' : 'h-[420px]'}`}
    >
      <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent z-20" />
      
      <div className={`relative w-full overflow-hidden ${isSmall ? 'h-40' : 'h-48'}`}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-111"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent z-10 opacity-60" />
        <div className="absolute top-4 right-4 p-2.5 rounded-xl bg-black/60 border border-white/10 backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 translate-y-2 group-hover:translate-y-0">
          <ExternalLink size={18} className="text-purple-400" />
        </div>
      </div>

      <div className="p-6 flex flex-col grow relative border-t border-white/5">
        <div className="flex items-center gap-2 mb-2">
          <div className="h-1.5 w-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
          <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors duration-300">
            {project.title}
          </h3>
        </div>
        <p className="text-xs font-normal text-slate-400 mb-4 line-clamp-2 opacity-80 leading-relaxed">
          {project.description}
        </p>
        
        {/* Updated: All tags are now visible */}
        <div className="mt-auto flex flex-wrap gap-1.5">
          {project.techStack.map((tag, idx) => (
            <span key={idx} className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest rounded-lg bg-purple-500/10 text-purple-300 border border-purple-500/20">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="absolute inset-x-12 bottom-0 h-[2px] bg-linear-to-r from-transparent via-purple-500/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </button>
  );

  return (
    <section id="projects" className="py-20 mt-10 w-full font-sans">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 px-2">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase">
            Featured <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-400 via-purple-500 to-purple-600">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-xl text-lg font-medium tracking-tight opacity-80">
            A selection of my recent work. Click to view technical details and challenges.
          </p>
        </div>
        
        <div className="flex justify-center md:justify-end">
          <button 
            onClick={() => setShowAllModal(true)}
            className="group flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/[0.07] md:bg-white/5 border border-purple-500/30 md:border-white/10 backdrop-blur-xl text-white font-bold text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-purple-500/20 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] active:scale-95 shadow-xl md:shadow-none"
          >
            <LayoutGrid size={16} className="text-purple-400 group-hover:rotate-12 transition-transform duration-500" />
            Show All Projects
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {showAllModal && (
        <div 
          ref={archiveOverlayRef}
          className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-6 lg:p-12 animate-in fade-in duration-300 bg-slate-950/90 backdrop-blur-2xl"
          onClick={(e) => {
            if (archiveOverlayRef.current === e.target) setShowAllModal(false);
          }}
        >
          <div className="relative bg-white/[0.03] border border-white/10 rounded-[2rem] md:rounded-[3rem] max-w-7xl w-full h-[95vh] md:h-[90vh] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-3xl flex flex-col animate-in zoom-in-95 duration-500">
            
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent z-50" />
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-10 bg-[url('https://grainy-linears.vercel.app/noise.svg')]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.05),transparent_60%)] pointer-events-none z-10" />

            <div className="p-8 border-b border-white/10 flex items-center justify-between relative z-20 bg-black/10">
              <div className="space-y-1.5">
                <div className="flex items-center gap-3 text-purple-400">
                  <Terminal size={12} className="opacity-80" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-70">Projects</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter leading-none">Complete Project Registry</h3>
              </div>
              <button 
                onClick={() => setShowAllModal(false)}
                className="p-3.5 rounded-2xl bg-black/40 border border-white/10 text-slate-400 hover:text-white hover:border-purple-500/50 transition-all active:scale-90 group/close"
              >
                <X size={20} className="group-hover/close:rotate-90 transition-transform duration-500" />
              </button>
            </div>
            
            <div className="grow overflow-y-auto px-6 py-10 md:px-10 md:py-12 custom-scrollbar relative z-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-16">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} isSmall={true} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedProject && (
        <ProjectModal
          project={projects.find((p) => p.id === selectedProject)}
          onClose={() => setSelectedProject(null)}
          onNext={handleNextProject}
          onPrev={handlePrevProject}
        />
      )}

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { 
          background: rgba(168, 85, 247, 0.2); 
          border-radius: 10px; 
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(168, 85, 247, 0.4);
        }
      `}</style>
    </section>
  );
};

export default ProjectSection;