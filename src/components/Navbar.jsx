import { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const iconLinks = [
  { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/sourabh-malviya-a54519352/", label: "LinkedIn" },
  { icon: <FaGithub />, url: "https://github.com/Sourab81", label: "GitHub" },
  { icon: <FaInstagram />, url: "https://www.instagram.com/_sourabh_.1111/", label: "Instagram" },
  { icon: <FaSquareXTwitter />, url: "https://x.com/SourabhMal89915", label: "Twitter" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const iconVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 500 } },
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="relative sticky top-0 z-40 mt-6 mb-20 flex items-center justify-between rounded-2xl border border-neutral-800/80 bg-neutral-950/70 px-6 py-4 backdrop-blur-md"
    >
      <a href="#home" aria-label="Go to home">
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="block text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent cursor-pointer"
        >
          SM
        </motion.span>
      </a>

      <div className="hidden items-center gap-8 md:flex">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-neutral-300 transition-colors duration-200 hover:text-cyan-300"
          >
            {link.label}
          </a>
        ))}
      </div>

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

      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        className="text-3xl text-neutral-300 transition hover:text-cyan-300 md:hidden"
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 right-0 top-full mt-2 flex flex-col gap-4 rounded-2xl border border-neutral-800 bg-neutral-950/95 p-6 backdrop-blur-md md:hidden"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg text-neutral-200 transition hover:text-cyan-300"
            >
              {link.label}
            </a>
          ))}
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
