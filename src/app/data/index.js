export const profile = {
  name: "Adrian Miguel Flores",
  shortName: "Adrian Flores",
  role: "Computer Science Student",
  school: "FEU Tech",
  bio: "Focused on problem solving through software, I enjoy the challenge of turning abstract logic into practical solutions.",
  resumeUrl: "/assets/resume/AdrianMiguel_Flores_Resume.pdf",
  email: "adrianmiguelflores512@gmail.com",
  location: "Based in the Philippines",
};

export const brandName = "Adrian";
export const brandFullName = "Adrian Flores";

export const heroData = {
  role: "Computer Science Student",
  school: "FEU Tech",
  quote:
    "Focused on problem solving through software, I enjoy the challenge of turning abstract logic into practical solutions.",
  resumeUrl: profile.resumeUrl,
};

export const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Contact", href: "#contact", isButton: true },
];

export const footerNavLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Milestones", href: "#milestones" },
  { label: "Tech Stack", href: "#tech-stack" },
];

export const footerDescription =
  "Aspiring Software Engineer focused on building high-performance web applications and bridging the gap between design and code.";

export const footerResource = {
  label: "View Resume",
  subLabel: "PDF",
  url: profile.resumeUrl,
};

export const footerCopyright = "ADRIAN FLORES | ALL RIGHTS RESERVED";

export const projects = [
  {
    id: 1,
    title: "Flask Bites",
    description:
      "A full-stack food ordering system focusing on seamless state management and relational data integrity.",
    fullDescription:
      "Flask Bites is an e-commerce platform for food services. It features a dynamic menu, real-time cart calculations, and a secure checkout flow. The project focuses on creating a frictionless user experience while keeping backend data consistent across sessions.",
    features: [
      "Structured menu and order management powered by a robust PostgreSQL backbone",
      "Seamless shopping experience via a persistent session-based cart—no login required",
      "Fully responsive, mobile-first interface built with Bootstrap for smooth browsing on any device",
      "Privacy-first security using Argon2 to ensure user passwords are salted and hashed safely",
    ],
    challenge:
      "Designing a schema that could reliably bridge the Many-to-Many relationship between Users and Menu items while maintaining data integrity.",
    solution:
      "I implemented a dedicated 'Order Items' junction table in PostgreSQL to track quantities and snapshot historical pricing, ensuring checkout totals stay accurate even if menu prices change later.",
    image: "/assets/projects/flask-bites.png",
    techStack: ["Flask", "Python", "Bootstrap", "PostgreSQL"],
  },
  {
    id: 2,
    title: "Boot Blog",
    description: "A content management platform featuring user authentication and threaded commenting systems.",
    fullDescription:
      "Boot Blog is a scalable blogging engine designed to handle user-generated content safely. It implements modern web security practices and provides a clean, focused interface for long-form reading and community interaction.",
    features: [
      "Admin-only dashboard for managing the full lifecycle of blog posts (CRUD).",
      "Logged-in users can provide feedback by commenting to each blog post.",
      "Personalized identity layer that assigns unique default avatars to every commenter.",
      "Lightweight SQLite architecture for a fast, responsive, and low-overhead database.",
    ],
    challenge:
      "The challenge was mapping complex database relationships, specifically ensuring users properly 'owned' their comments while maintaining data integrity across the entire application.",
    solution:
      "I solved this by mastering SQLAlchemy relationship patterns. I implemented explicit child-parent mapping using Mapped[List['Child']] = relationship(), creating a predictable data flow between users, posts, and threads.",
    image: "/assets/projects/boot-blog.png",
    techStack: ["Flask", "Python", "Bootstrap", "SQLite"],
  },
  {
    id: 3,
    title: "CineLog",
    description:
      "A movie tracking application integrating external APIs for real-time data synchronization.",
    fullDescription:
      "CineLog allows movie enthusiasts to catalog their viewing history. By fetching data from external movie databases, it provides users with up-to-date information, and ratings in a personalized dashboard.",
    features: [
      "Integrated TMDB API for automated movie metadata and poster retrieval.",
      "Dynamic ranking logic that reorders the collection based on user scores.",
      "Custom CRUD interface for managing personal ratings and reviews.",
      "Data transformation layer to clean and map raw API responses to SQLite.",
      "Search-to-selection workflow for rapid collection building.",
    ],
    challenge:
      "Creating a logic that automatically recalculates and persists movie rankings based on user ratings every time the library is viewed.",
    solution:
      "Implemented a dynamic sorting loop in the home route that iterates through the collection, updates the ranking integers in SQLite, and commits the changes to ensure the leaderboard is always accurate.",
    image: "/assets/projects/cinelog.png",
    techStack: ["Flask", "Python", "Bootstrap", "SQLite"],
  },
  {
    id: 4,
    title: "Turtle Crossing",
    description: "A game built using the Turtle module in Python.",
    fullDescription:
      "Turtle Crossing is a 2D game that demonstrates the power of modular code. It utilizes Python's turtle module to form shapes, movements, and collision detection between objects.",
    features: [
      "Modular architecture using OOP to manage distinct behaviors for the player, traffic, and game state.",
      "Custom collision detection logic if the player hits an object.",
      "Difficulty scaling where vehicle speeds increases as the level progresses.",
      "Real-time event handling to ensure responsive keyboard inputs and fluid character movement.",
    ],
    challenge:
      "Managing the increasing complexity of game objects like the player, moving traffic, and the scoreboard within a single execution loop.",
    solution:
      "Created separate files for each classes (player, car manager, and scoreboard), allowing each to scale its own independently.",
    image: "/assets/projects/turtle-crossing.png",
    techStack: ["Python", "Turtle Graphics"],
  },
];

export const techSkills = [
  { name: "HTML", icon: "/assets/skills/html.svg" },
  { name: "CSS", icon: "/assets/skills/css.svg" },
  { name: "JavaScript", icon: "/assets/skills/javascript.svg" },
  { name: "Vue", icon: "/assets/skills/vue.svg" },
  { name: "Pinia", icon: "/assets/skills/pinia.svg" },
  { name: "Bootstrap", icon: "/assets/skills/bootstrap.svg" },
  { name: "Flask", icon: "/assets/skills/flask.svg" },
  { name: "Python", icon: "/assets/skills/py.svg" },
  { name: "Java", icon: "/assets/skills/java.svg" },
  { name: "SQLite", icon: "/assets/skills/sqlite.svg" },
  { name: "MySQL", icon: "/assets/skills/mysql.svg" },
  { name: "PostgreSQL", icon: "/assets/skills/postgres.svg" },
  { name: "Git", icon: "/assets/skills/git.svg" },
  { name: "GitHub", icon: "/assets/skills/github.svg" },
];

export const milestones = {
  education: [
    {
      title: "BS Computer Science, Software Engineering",
      org: "FEU Institute of Technology",
      date: "2022 - Present",
      logo: "/assets/milestones/FEUTECH.png",
    },
  ],
  certifications: [
    {
      title: "PMI Project Management Ready™",
      org: "Project Management Institute",
      date: "2025",
      logo: "/assets/milestones/pmi-project-management-ready.png",
    },
    {
      title: "Introduction to Cybersecurity",
      org: "Cisco",
      date: "2025",
      logo: "/assets/milestones/intro-cybersecurity.png",
    },
    {
      title: "Junior Cybersecurity Analyst Career Path",
      org: "Cisco",
      date: "2025",
      logo: "/assets/milestones/junior-cybersec-analyst.png",
    },
    {
      title: "CCNA: Introduction to Networks",
      org: "Cisco",
      date: "2024",
      logo: "/assets/milestones/intro-networks.png",
    },
    {
      title: "IT Specialist - Python",
      org: "Certiport",
      date: "2024",
      logo: "/assets/milestones/its-python.png",
    },
  ],
};

export const contactSocials = [
  {
    name: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    link: "https://www.linkedin.com/in/aidsflores/",
    colorClasses: "text-[#0A66C2] lg:text-slate-500 lg:group-hover:text-[#0A66C2]",
    label: "Professional",
  },
  {
    name: "GitHub",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
    link: "https://github.com/AdrianMiguelFlores",
    colorClasses: "text-white lg:text-slate-500 lg:group-hover:text-white",
    label: "Codebase",
  },
  {
    name: "Gmail",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.573l8.073-6.08c1.618-1.214 3.927-.059 3.927 1.964z" />
      </svg>
    ),
    link: "mailto:adrianmiguelflores512@gmail.com",
    colorClasses: "text-[#EA4335] lg:text-slate-500 lg:group-hover:text-[#EA4335]",
    label: "Email Me",
  },
  {
    name: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    link: "https://www.facebook.com/aidsflres",
    colorClasses: "text-[#1877F2] lg:text-slate-500 lg:group-hover:text-[#1877F2]",
    label: "Social",
  },
];
