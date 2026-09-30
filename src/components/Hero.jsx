import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import profile from "../assets/projects/profilepic.jpg";
import { HERO_CONTENT } from "../constants/index.js";

const ROLES = [
  "Full Stack Developer",
  "React & Next.js Developer",
  "PHP / CodeIgniter Developer",
  "Backend Engineer",
];

const useTypewriter = (words, typeSpeed = 90, deleteSpeed = 50, pause = 1600) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setText((prev) =>
            deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
          );
        },
        deleting ? deleteSpeed : typeSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause]);

  return text;
};

const Hero = () => {
  const typedRole = useTypewriter(ROLES);
  const shouldReduceMotion = useReducedMotion();

  // When reduced motion is preferred, show first role as static text
  const displayRole = shouldReduceMotion ? ROLES[0] : typedRole;

  return (
    <section id="home" className="scroll-mt-24 border-b border-neutral-900 pb-4 lg:mb-20">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              initial={shouldReduceMotion ? false : { x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pb-6 text-6xl font-bold tracking-tight lg:mt-6 lg:text-8xl font-heading"
            >
              Sourabh{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Malviya
              </span>
            </motion.h1>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center text-3xl tracking-tight text-neutral-300 sm:text-4xl"
            >
              <span className="mr-2 inline-block h-8 w-1 rounded bg-cyan-400 sm:h-10" />
              {displayRole}
              {/* Blink cursor — hidden when reduced motion is preferred */}
              {!shouldReduceMotion && (
                <span className="ml-1 animate-pulse text-cyan-400" aria-hidden="true">
                  |
                </span>
              )}
            </motion.div>

            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-center lg:text-left"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-wrap gap-4 pb-6"
            >
              <a
                href="#projects"
                className="rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-3 font-semibold text-white transition hover:opacity-90"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-neutral-700 px-6 py-3 text-neutral-200 transition hover:border-cyan-400 hover:text-cyan-300"
              >
                Hire Me
              </a>
            </motion.div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.div
              initial={shouldReduceMotion ? false : { x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 opacity-60 blur transition duration-300" />
              {/* Responsive: max-w-full prevents clipping on small screens */}
              <img
                src={profile}
                alt="Sourabh Malviya"
                width={320}
                height={380}
                loading="eager"
                className="relative w-full max-w-xs sm:max-w-sm rounded-2xl object-cover object-top"
                style={{ aspectRatio: "320/380" }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
