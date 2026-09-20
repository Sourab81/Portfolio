import project1 from "../assets/projects/project1.jpeg";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.jpeg";
import eNest from "../assets/projects/eNest.png";

export const HERO_CONTENT =
  "I am a passionate MERN Stack Developer with a strong ability to build robust, scalable, and user-centric web applications. I specialize in front-end technologies like React, HTML, CSS, and JavaScript, and back-end development using Node.js, Express.js, and MongoDB. With a focus on clean architecture and performance, my goal is to create innovative solutions that enhance user experience and support business growth.";

export const ABOUT_TEXT =
  "I am a dedicated and versatile Full Stack MERN Developer with a strong passion for building efficient, scalable, and user-friendly web applications. Over time, I have gained hands-on experience with technologies such as React, Node.js, Express.js, MongoDB, MySQL, and version control systems like Git and GitHub. What began as a simple curiosity about how digital systems work has grown into a career where I constantly learn, evolve, and take on new challenges with enthusiasm.";

export const ABOUT_TEXT1 =
  "I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality, impactful solutions. Beyond coding, I stay active, explore new and emerging technologies, and contribute to open-source projects whenever possible. My goal is to continuously refine my skills while creating meaningful products that improve user experiences and support business growth.";

export const STATS = [
  { label: "Projects Completed", value: 15 },
  { label: "Technologies", value: 12 },
  { label: "Years of Coding", value: 2 },
  { label: "GitHub Contributions", value: 800 },
];

export const PROJECTS = [
  {
    title: "eNest – Service Center Management System",
    featured: true,
    image: eNest,
    description:
      "Enterprise service center management application handling customer ledger, inventory, expenses, transactions, and accounts. Includes a Cash Deposit workflow and role-based authentication backed by secure REST APIs and optimized database queries.",
    technologies: ["Next.js", "React.js", "PHP (CodeIgniter)", "MySQL"],
    liveUrl: "https://enest-iota.vercel.app/",
    githubUrl: "https://github.com/Sourab81/Transaction-Management-Software",
    demoCredentials: { email: "sajal@business.com", password: "112233" },
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
    title: "Wonderlust – Travel Booking App",
    image: project1,
    description:
      "A full-stack travel booking platform that allows users to explore destinations, view packages, and make seamless travel reservations.",
    technologies: ["HTML", "Tailwind CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    liveUrl: "https://wonderlust-booking-app.onrender.com/listings",
    githubUrl: "",
  },
  {
    title: "Authentication App",
    image: project3,
    description:
      "An authentication app that allows users to securely sign up, log in, and reset their password, ensuring safe access to protected resources.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "bcrypt", "JWT", "Node.js", "Express.js", "MongoDB"],
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

export const CONTACT = {
  address: "Bhopal, India",
  phoneNo: "+91 7898404836",
  email: "malviyasourabh81@gmail.com",
};
