import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, useReducedMotion } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const iconLinks = [
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/sourabh-malviya-a54519352/",
    label: "LinkedIn",
  },
  {
    icon: <FaGithub />,
    url: "https://github.com/Sourab81",
    label: "GitHub",
  },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/_sourabh_.1111/",
    label: "Instagram",
  },
  {
    icon: <FaSquareXTwitter />,
    url: "https://x.com/SourabhMal89915",
    label: "Twitter",
  },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.href.replace("#", ""));

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const shouldReduceMotion = useReducedMotion();

  // Active-section highlighting via IntersectionObserver
  useEffect(() => {
    const observers = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const containerVariants = shouldReduceMotion
    ? {}
    : {
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
      };

  const iconVariants = shouldReduceMotion
    ? {}
    : {
        hidden: { y: -50, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: { type: "spring", stiffness: 500 },
        },
      };

  return (
    <motion.nav
      initial={shouldReduceMotion ? false : { y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="sticky top-0 z-40 mt-6 mb-20 flex items-center justify-between rounded-2xl border border-neutral-800/80 bg-neutral-950/70 px-6 py-4 backdrop-blur-md"
    >
      <a href="#home" aria-label="Go to home">
        <motion.span
          initial={shouldReduceMotion ? false : { scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="block text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent cursor-pointer"
        >
          SM
        </motion.span>
      </a>

      {/* Desktop nav links */}
      <div className="hidden items-center gap-6 md:flex">
        {NAV_LINKS.map((link) => {
          const sectionId = link.href.replace("#", "");
          const isActive = activeSection === sectionId;
          return (
            <a
              key={link.href}
              href={link.href}
              aria-current={isActive ? "page" : undefined}
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? "text-cyan-300"
                  : "text-neutral-300 hover:text-cyan-300"
              }`}
            >
              {link.label}
            </a>
          );
        })}
      </div>

      {/* Social icons */}
      <motion.div
        className="hidden items-center justify-center gap-5 text-2xl md:flex"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {iconLinks.map((item, index) => (
          <motion.a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            variants={iconVariants}
            whileHover={{ scale: 1.3, color: "#00bcd4" }}
            whileTap={{ scale: 0.9 }}
            className="transition-colors duration-200"
          >
            {item.icon}
          </motion.a>
        ))}
      </motion.div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        className="text-3xl text-neutral-300 transition hover:text-cyan-300 md:hidden"
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 right-0 top-full mt-2 flex flex-col gap-4 rounded-2xl border border-neutral-800 bg-neutral-950/95 p-6 backdrop-blur-md md:hidden"
        >
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                aria-current={isActive ? "page" : undefined}
                className={`text-lg transition ${
                  isActive ? "text-cyan-300" : "text-neutral-200 hover:text-cyan-300"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <div className="mt-2 flex items-center gap-5 border-t border-neutral-800 pt-4 text-2xl">
            {iconLinks.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="transition hover:scale-110 hover:text-cyan-300"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
