import project1 from "../assets/projects/project1.jpeg";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.jpeg";
import eNest from "../assets/projects/eNest.png";

// ---------------------------------------------------------------------------
// Hero & About
// ---------------------------------------------------------------------------
export const HERO_CONTENT =
  "I am a Full Stack Web Developer currently interning at Webangel Technologies LLP, where I build enterprise-grade applications with React, Next.js, PHP CodeIgniter, and MySQL. I enjoy bridging robust backend APIs with polished, responsive frontends — and I am always looking for the next problem worth solving.";

export const ABOUT_TEXT =
  "I am a Full Stack Web Developer with hands-on internship experience at Webangel Technologies LLP (Mar 2026 – Aug 2026), where I built and maintained the eNest Transaction Management System — an enterprise service-center management application with role-based workflows, REST APIs, and optimized SQL queries. My primary stack spans React, Next.js, PHP (CodeIgniter), Node.js / Express, MySQL, and MongoDB.";

export const ABOUT_TEXT1 =
  "I thrive when collaborating directly on client requirements and enjoy the mix of frontend finesse and backend engineering. Outside of work I sharpen my problem-solving skills on LeetCode and GeeksforGeeks (300+ DSA problems solved), explore emerging technologies, and keep pushing for cleaner code and better user experiences.";

// ---------------------------------------------------------------------------
// Stats  (only verifiable numbers)
// TECH_COUNT is used by About.jsx to display technologies count dynamically
// ---------------------------------------------------------------------------
export const TECH_COUNT = 20; // count of distinct skills listed in Technologies.jsx

export const STATS = [
  { label: "DSA Problems Solved", value: 300, suffix: "+" },
  { label: "Internship", value: 1, suffix: " (6 mo)" },
  { label: "Projects Built", value: 4, suffix: "" },
  { label: "Technologies", value: TECH_COUNT, suffix: "+" },
];

// ---------------------------------------------------------------------------
// Demo credentials (moved out of JSX)
// ---------------------------------------------------------------------------
export const DEMO_CREDENTIALS = {
  email: "sajal@business.com",
  password: "112233",
  note: "Demo account – read-only data",
};

// ---------------------------------------------------------------------------
// Experience
// ---------------------------------------------------------------------------
export const EXPERIENCE = [
  {
    role: "Web Development Intern",
    company: "Webangel Technologies LLP",
    period: "Mar 2026 – Aug 2026",
    technologies: [
      "Next.js",
      "React.js",
      "PHP (CodeIgniter)",
      "MySQL",
      "REST APIs",
    ],
    bullets: [
      "Built and maintained the eNest Transaction Management System, an enterprise service-center management application.",
      "Developed customer, inventory, transaction, expense, and accounts modules.",
      "Implemented role-based workflows and permission-based access control.",
      "Integrated the React / Next.js frontend with PHP CodeIgniter REST APIs.",
      "Optimized SQL queries and improved API response performance.",
      "Worked directly on client requirements and fixed production bugs.",
    ],
    projectLink: "#projects",
    projectLinkLabel: "View eNest project",
  },
];

// ---------------------------------------------------------------------------
// Education
// ---------------------------------------------------------------------------
export const EDUCATION = [
  {
    degree: "B.Tech – Computer Science & Engineering",
    institution: "BITS College, Bhopal",
    period: "2022 – 2026",
    detail: "CGPA 7.4",
  },
  {
    degree: "Data Science for Everyone",
    institution: "Reliance Foundation Skilling Academy",
    period: "2024",
    detail: "180 hrs",
  },
];

// ---------------------------------------------------------------------------
// Achievements
// ---------------------------------------------------------------------------
export const ACHIEVEMENTS = [
  "Solved 300+ DSA problems on LeetCode and GeeksforGeeks.",
];

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------
export const PROJECTS = [
  {
    title: "eNest – Service Center Management System",
    featured: true,
    image: eNest,
    description:
      "Enterprise service-center management application handling customer ledger, inventory, expenses, transactions, and accounts. Includes a Cash Deposit workflow and role-based authentication backed by secure REST APIs and optimized database queries.",
    technologies: ["Next.js", "React.js", "PHP (CodeIgniter)", "MySQL"],
    liveUrl: "https://enest-iota.vercel.app/",
    githubUrl: "https://github.com/Sourab81/Transaction-Management-Software",
    demoCredentials: DEMO_CREDENTIALS,
    modules: [
      "Customers",
      "Transactions",
      "Inventory",
      "Expenses",
      "Accounts",
      "Role-based Access",
      "Cash Deposit",
    ],
  },
  {
    title: "WonderGo – Travel Booking App",
    image: project1,
    description:
      "A full-stack travel booking platform that allows users to explore destinations, view packages, and make seamless travel reservations.",
    technologies: [
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    liveUrl: "https://wonderlust-booking-app.onrender.com/listings",
    githubUrl: "",
  },
  {
    title: "Recipe Search App",
    image: null,
    description:
      "A React-based recipe discovery app that fetches recipes from a public API, lets users search by keyword or ingredient, and displays nutritional details with a clean card layout.",
    technologies: ["React", "JavaScript", "REST API", "CSS"],
    liveUrl: "",
    githubUrl: "",
  },
  {
    title: "Authentication System",
    image: project3,
    description:
      "A full-stack authentication app with secure sign-up, login, JWT-based session management, and password reset flow, demonstrating real-world auth patterns for production apps.",
    technologies: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "bcrypt",
      "JWT",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    liveUrl: "",
    githubUrl: "",
  },
  {
    title: "File Arranger Automation Tool",
    image: project2,
    description:
      "A Python automation utility that scans a folder and auto-sorts files into categorized subfolders (images, documents, videos, archives, code) using os and shutil, keeping directories clean and clutter-free.",
    technologies: ["Python", "Automation", "os", "shutil"],
    liveUrl: "",
    githubUrl: "",
  },
];

// ---------------------------------------------------------------------------
// Contact
// ---------------------------------------------------------------------------
export const CONTACT = {
  address: "Bhopal, India",
  phoneNo: "+91 7898404836",
  email: "malviyasourabh81@gmail.com",
};
