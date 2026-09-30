import { FiArrowUp } from "react-icons/fi";

const Footer = () => {
  const links = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="mt-10 border-t border-neutral-800 py-8">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-sm text-neutral-500">
          &copy; {new Date().getFullYear()} Sourabh Malviya. All rights reserved.
        </p>

        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap justify-center gap-6 text-sm text-neutral-400"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-cyan-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#home"
          aria-label="Back to top"
          className="rounded-full border border-neutral-700 p-3 text-neutral-300 transition hover:border-cyan-400 hover:text-cyan-300"
        >
          <FiArrowUp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
