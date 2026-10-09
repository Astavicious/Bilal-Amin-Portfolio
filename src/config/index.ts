import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Bilal Amin",
    specialty: "Data Science & AI Engineer",
    summary:
      "MSc Data Science & AI student at Saarland University, Research Assistant in Software Engineering and Web Development HiWi at EuroComCenter, interested in AI-assisted software engineering, HCI and web development.",
    email: "write2bilalamin@gmail.com",
    location: "Saarbrücken, Germany",
    resumeUrl: "/Bilal-Amin-CV.pdf",
  },

  education: [
    {
      institution: "Saarland University",
      degree: "M.Sc. Data Science and Artificial Intelligence",
      startDate: "Apr 2024",
      endDate: "Present",
      location: "Saarbrücken, Germany",
      grade: "1.9 (German grading system)",
    },
    {
      institution: "University of Bergen",
      degree: "Erasmus+ Exchange Semester in Computer Science",
      startDate: "Jan 2026",
      endDate: "Jun 2026",
      location: "Bergen, Norway",
      detail: "Exchange semester completed as part of the master's programme.",
    },
    {
      institution: "National University of Sciences & Technology",
      degree: "B.E. Mechatronics Engineering (Computer Science)",
      startDate: "Sep 2019",
      endDate: "Sep 2023",
      location: "Islamabad, Pakistan",
      grade: "1.7 (German grading system)",
    },
  ],

  certifications: [
    {
      name: "Machine Learning Specialization",
      provider: "Andrew Ng",
    },
    {
      name: "Google Data Analytics Professional Certificate",
      provider: "Google",
      status: "In progress — 8 of 12",
    },
    {
      name: "Python for Data Science, AI & Development",
      provider: "IBM",
    },
    {
      name: "CS50's Introduction to Artificial Intelligence with Python",
      provider: "Harvard University",
    },
  ],

  experience: [
    {
      company: "Chair of Software Engineering, Saarland University",
      position: "Research Assistant (HiWi) — Software Engineering",
      startDate: "Oct 2026",
      endDate: "Present",
      location: "Saarbrücken, Germany",
      summary: [
        "Work with Qingqing Dong on AI-assisted software engineering and model-driven systems engineering research.",
        "Research focus includes model merging, semantic merge-conflict detection, and feature-based merge recommendations.",
        "Support research on software evolution and intelligent methods for software and model-based systems.",
      ],
    },
    {
      company: "EuroComCenter, Saarland University",
      position: "Student Assistant (HiWi) — Web Development",
      startDate: "Sep 2026",
      endDate: "Present",
      location: "Saarbrücken, Germany",
      summary: [
        "Maintain and improve the EuroComCenter web platform, focusing on usability, multilingual content, and website structure.",
        "Review the implementation, fix technical and user-interface issues, and manage CMS-based content and digital media.",
        "Work with the project team to translate requirements into practical technical and design improvements.",
      ],
    },
    {
      company: "Max Planck Institute for Informatics (MPI)",
      position: "Working Student — Internet Architecture Group",
      startDate: "Oct 2024",
      endDate: "Mar 2025",
      location: "Saarbrücken, Germany",
      summary: [
        "Designed an automated framework to evaluate congestion-control algorithms in NS-3 under varied network conditions.",
        "Created a dashboard for comparing throughput, delay, packet loss and other simulation metrics.",
        "Developed system tests and performance metrics, then analysed results to identify optimisation opportunities.",
      ],
    },
    {
      company: "Convergent Business Technologies",
      position: "Data Analyst",
      startDate: "Oct 2023",
      endDate: "Mar 2024",
      location: "Islamabad, Pakistan",
      summary: [
        "Built reproducible Python and SQL workflows to manipulate, analyse and present data.",
        "Completed CS50 training activities and produced dashboards based on the course work.",
      ],
    },
    {
      company: "CureMD",
      position: "Web Development Intern",
      startDate: "Jun 2023",
      endDate: "Aug 2023",
      location: "Lahore, Pakistan",
      summary: [
        "Designed accessible user interfaces with HTML, CSS and JavaScript.",
        "Developed APIs with the .NET framework to support data integration and internal tools.",
      ],
    },
    {
      company: "STEP — Space Technology Education and Popularization",
      position: "Technical Intern",
      startDate: "Aug 2021",
      endDate: "Oct 2021",
      location: "Islamabad, Pakistan",
      summary: [
        "Led hands-on Scratch workshops that introduced programming fundamentals to underprivileged students.",
        "Created educational material that translated complex technology concepts into accessible lessons.",
      ],
    },
  ],

  projects: [
    {
      name: "AI-Assisted Dafny Code Generation and Verification",
      status: "Completed research prototype",
      summary:
        "A Python/Codex prototype for generating Dafny from English requirements and repairing it with verifier feedback. All six saved runs across three scenarios verified within three attempts; the two prompt profiles tied. Requirement coverage was reviewed separately.",
      technologies: [
        "Python",
        "Codex SDK",
        "Dafny",
        "Formal Verification",
        "Prompt Engineering",
      ],
      image: "/dafny-pipeline.png",
      linkCaseStudy: "/projects/verified-dafny",
      linkSource: "https://github.com/Astavicious/Entry-Task",
      linkSourceLabel: "View repository",
    },
    {
      name: "GermanLyft — AI-Powered German Learning Platform",
      summary:
        "A full-stack AI-powered German learning platform designed primarily for CEFR A1–A2 learners. GermanLyft combines an interactive AI tutor with grammar explanations, sentence correction, exercises, conversation practice, quizzes, user accounts, and Anki deck importing.",
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "Python",
        "Flask",
        "Groq API",
        "SQLite",
      ],
      image: "/project-rag.png",
      linkSource: "https://github.com/Astavicious/GermanLyft",
      linkSourceLabel: "GitHub",
      linkPreview: "https://german-lyft.vercel.app",
    },
    {
      name: "Stroke Risk Prediction",
      summary:
        "A machine-learning workflow for assessing stroke risk from patient data. The project covers preprocessing, exploratory analysis, model training and evaluation, and achieved 85% accuracy.",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
      linkSource: "https://github.com/Astavicious/Stroke-prediction",
      linkSourceLabel: "GitHub",
      image: "/project-stroke.png",
    },

    {
      name: "Network Simulation Analytics",
      summary:
        "An automated NS-3 evaluation framework for congestion-control algorithms, supported by system tests and a dashboard for comparing throughput, delay, packet loss and performance across scenarios.",
      technologies: [
        "Python",
        "NS-3",
        "Automated Testing",
        "Data Visualization",
      ],
      image: "/project-network.png",
      linkSource: "https://github.com/Astavicious/NS3-Learning",
      linkSourceLabel: "NS-3 notes",
    },

    {
      name: "MarketPulse HCI Project",
      summary:
        "A responsive website designed around human-computer interaction principles, including consistency, feedback, visibility, mapping and constraints, with emphasis on accessible information architecture.",
      technologies: ["HTML", "CSS", "JavaScript", "Figma", "HCI"],
      image: "/project-marketpulse.png",
      linkPreview: "https://marketpulsehelp.wixsite.com/marketpulse-1",
    },

    {
      name: "Algorithm Practice Library",
      summary:
        "A public collection of Python solutions for data-structure and algorithm problems, covering arrays, strings, hash maps, two pointers and common interview problem-solving patterns.",
      technologies: [
        "Python",
        "Algorithms",
        "Data Structures",
        "Problem Solving",
      ],
      image: "/project-algorithms.png",
      linkSource: "https://github.com/Astavicious/Coding",
      linkSourceLabel: "View repository",
    },
  ],

  skills: [
    {
      category: "Programming",
      items: [
        "Python",
        "JavaScript",
        "TypeScript",
        "SQL",
        "HTML",
        "CSS",
        "C++",
        "C#",
        "Java",
        "Dafny",
      ],
    },
    {
      category: "Machine Learning & AI",
      items: [
        "Scikit-learn",
        "Large Language Models",
        "Prompt Engineering",
        "AI-Assisted Software Engineering",
        "Formal Verification",
        "Retrieval-Augmented Generation",
      ],
    },
    {
      category: "LLM & Web Frameworks",
      items: [
        "LangChain",
        "Ollama",
        "ChromaDB",
        "Codex SDK",
        "FastAPI",
        "Flask",
        "Streamlit",
        "ReactJS",
      ],
    },
    {
      category: "Data & Visualization",
      items: ["Pandas", "NumPy", "Matplotlib", "Tableau", "Jupyter"],
    },
    {
      category: "Tools & Platforms",
      items: ["GitHub", "GitHub Actions", "VS Code", "Figma", "Canva", "Wix"],
    },
    {
      category: "Selected Coursework",
      items: [
        "Neural Networks",
        "Generative AI",
        "High-Level Computer Vision",
        "Machine Translation",
        "Attacks Against ML Models",
        "Human-Computer Interaction",
        "Data Networks",
      ],
    },
  ],

  hackathons: [],

  about: {
    description: `
I am an MSc Data Science and Artificial Intelligence student at Saarland University and completed an Erasmus+ exchange semester in Computer Science at the University of Bergen. I currently work as a Research Assistant (HiWi) at the Chair of Software Engineering and as a Student Assistant (HiWi) in Web Development at EuroComCenter.

My research focus includes AI-assisted software engineering, model-driven systems engineering, model merging, semantic merge-conflict detection, and feature-based merge recommendations. At EuroComCenter, I work on usability, multilingual content, CMS maintenance, and website structure. Previously, I worked in the Internet Architecture Group at the Max Planck Institute for Informatics.

I am interested in AI, HCI, UI/UX design, and web development. My projects include LLM applications and a completed Dafny generation-and-verification prototype, where I explored prompt comparison and verifier-guided repair.
    `,
    image: "/bilal-amin.jpg",
  },
};

export const SITE_CONFIG: SiteConfig = {
  title: `${SITE_CONTENT.hero.name} — ${SITE_CONTENT.hero.specialty}`,
  author: SITE_CONTENT.hero.name,
  description: SITE_CONTENT.hero.summary,
  lang: "en",
  siteLogo: "/bilal-amin.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "Education", href: "#education" },
    { text: "Skills", href: "#skills" },
    { text: "About", href: "#about" },
    { text: "Contact", href: "#contact" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/aminbilal/" },
    { text: "GitHub", href: "https://github.com/Astavicious" },
    { text: "LeetCode", href: "https://leetcode.com/u/write2bilalamin/" },
  ],
  canonicalURL: "https://bilal-amin-portfolio-eight.vercel.app/",
};
