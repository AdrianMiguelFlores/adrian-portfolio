export const profile = {
  name: "Adrian Miguel Flores",
  shortName: "Adrian Flores",
  role: "Computer Science Student",
  school: "FEU Tech",
  bio: "Focused on problem solving through software, I enjoy the challenge of turning abstract logic into practical solutions.",
  resumeUrl: "/AdrianMiguel_Flores_Resume.pdf",
  email: "adrianmiguelflores512@gmail.com",
  location: "Based in the Philippines",
};

export const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Contact", href: "#contact", isButton: true },
];

export const projects = [
  {
    id: 1,
    title: "Flask Bites",
    description: "A full-stack food ordering system focused on seamless state management and relational data integrity.",
    fullDescription: "Flask Bites is an e-commerce platform for food services. It features a dynamic menu, real-time cart calculations, and a secure checkout flow while keeping backend data consistent across sessions.",
    features: [
      "Structured menu and order management powered by PostgreSQL.",
      "Persistent session-based cart with no login required.",
      "Responsive, mobile-first interface built with Bootstrap.",
      "Argon2 password hashing for safer credential storage.",
    ],
    challenge: "Designing a schema that reliably bridges users, orders, and menu items while maintaining data integrity.",
    solution: "I implemented a dedicated order items junction table to track quantities and snapshot historical pricing, keeping checkout totals accurate even when menu prices change.",
    image: "/flask-bites.png",
    techStack: ["Flask", "Python", "Bootstrap", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/flask-bites",
    liveUrl: "#",
  },
  {
    id: 2,
    title: "Boot Blog",
    description: "A content management platform featuring authentication and threaded commenting.",
    fullDescription: "Boot Blog is a scalable blogging engine designed to handle user-generated content safely. It implements modern web security practices and provides a focused interface for reading and community interaction.",
    features: [
      "Admin-only dashboard for full blog post CRUD.",
      "Authenticated commenting for each post.",
      "Unique default avatars for every commenter.",
      "Lightweight SQLite architecture for fast local persistence.",
    ],
    challenge: "Mapping users, posts, and comments cleanly while preserving ownership and data integrity.",
    solution: "I used SQLAlchemy relationship patterns to create predictable parent-child data flow between users, posts, and comment threads.",
    image: "/boot-blog.png",
    techStack: ["Flask", "Python", "Bootstrap", "SQLite"],
    githubUrl: "https://github.com/yourusername/boot-blog",
    liveUrl: "#",
  },
  {
    id: 3,
    title: "CineLog",
    description: "A movie tracking app integrating external APIs for real-time metadata.",
    fullDescription: "CineLog helps users catalog their viewing history by fetching movie metadata from external databases and organizing ratings in a personalized dashboard.",
    features: [
      "TMDB API integration for movie metadata and posters.",
      "Dynamic ranking logic based on user scores.",
      "CRUD interface for ratings and reviews.",
      "Data transformation layer for clean SQLite records.",
      "Search-to-selection workflow for faster collection building.",
    ],
    challenge: "Keeping movie rankings accurate every time ratings changed.",
    solution: "I implemented a sorting loop in the home route that recalculates rankings, updates SQLite records, and commits the latest order on each view.",
    image: "/cinelog.png",
    techStack: ["Flask", "Python", "Bootstrap", "SQLite"],
    githubUrl: "https://github.com/yourusername/cinelog",
    liveUrl: "#",
  },
  {
    id: 4,
    title: "Turtle Crossing",
    description: "A Python arcade game built with modular object-oriented code.",
    fullDescription: "Turtle Crossing is a 2D Python game that uses the Turtle module for movement, collision detection, and progressive difficulty.",
    features: [
      "Object-oriented modules for player, traffic, and scoreboard behavior.",
      "Custom collision detection for player and vehicle interactions.",
      "Difficulty scaling as the level progresses.",
      "Keyboard event handling for responsive movement.",
    ],
    challenge: "Managing multiple game objects inside one execution loop without making the code hard to extend.",
    solution: "I separated the player, car manager, and scoreboard into their own classes so each responsibility could evolve independently.",
    image: "/turtle-crossing.png",
    techStack: ["Python", "Turtle Graphics"],
    githubUrl: "https://github.com/yourusername/turtle-crossing",
    liveUrl: "#",
  },
];

export const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: "/skills-icons/py.svg" },
      { name: "Java", icon: "/skills-icons/java.svg" },
      { name: "C++", icon: "/skills-icons/c++.svg" },
      { name: "PHP", icon: "/skills-icons/php.svg" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: "/skills-icons/html.svg" },
      { name: "CSS", icon: "/skills-icons/css.svg" },
      { name: "Tailwind", icon: "/skills-icons/tailwind.svg" },
      { name: "Bootstrap", icon: "/skills-icons/bootstrap.svg" },
    ],
  },
  {
    title: "Backend & Data",
    skills: [
      { name: "Flask", icon: "/skills-icons/flask.svg" },
      { name: "PostgreSQL", icon: "/skills-icons/postgres.svg" },
      { name: "SQLite", icon: "/skills-icons/sqlite.svg" },
      { name: "MySQL", icon: "/skills-icons/mysql.svg" },
    ],
  },
];

export const milestones = {
  education: [
    {
      title: "BS Computer Science, Software Engineering",
      org: "FEU Institute of Technology",
      date: "2022 - Present",
      logo: "/milestones-icons/FEUTECH.png",
    },
  ],
  certifications: [
    {
      title: "PMI Project Management Ready",
      org: "Project Management Institute",
      date: "2025",
      logo: "/milestones-icons/pmi-project-management-ready.png",
    },
    {
      title: "Introduction to Cybersecurity",
      org: "Cisco",
      date: "2025",
      logo: "/milestones-icons/intro-cybersecurity.png",
    },
    {
      title: "Junior Cybersecurity Analyst Career Path",
      org: "Cisco",
      date: "2025",
      logo: "/milestones-icons/junior-cybersec-analyst.png",
    },
    {
      title: "CCNA: Introduction to Networks",
      org: "Cisco",
      date: "2024",
      logo: "/milestones-icons/intro-networks.png",
    },
    {
      title: "IT Specialist - Python",
      org: "Certiport",
      date: "2024",
      logo: "/milestones-icons/its-python.png",
    },
  ],
};

export const contactLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/adrian-flores/", label: "Professional" },
  { name: "GitHub", href: "https://github.com/AMF112", label: "Codebase" },
  { name: "Email", href: "mailto:adrianmiguelflores512@gmail.com", label: "Direct Contact" },
  { name: "Facebook", href: "https://www.facebook.com/adrian.flres", label: "Social" },
];
