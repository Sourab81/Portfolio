import { motion, useReducedMotion } from "framer-motion";
import { FiBriefcase, FiCalendar, FiArrowRight } from "react-icons/fi";
import { EXPERIENCE } from "../constants/index.js";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Experience = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="experience" className="scroll-mt-24 border-b border-neutral-900 pb-24">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6 }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl font-heading"
      >
        Work <span className="text-neutral-500">Experience</span>
      </motion.h1>

      {/* Timeline container */}
      <div className="relative mx-auto max-w-4xl">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-500/60 via-purple-500/40 to-transparent sm:block" />

        <div className="flex flex-col gap-12">
          {EXPERIENCE.map((entry, idx) => (
            <motion.div
              key={idx}
              variants={shouldReduceMotion ? {} : fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative sm:pl-16"
            >
              {/* Timeline dot */}
              <div className="absolute left-4 top-6 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-cyan-400 bg-neutral-950 shadow-[0_0_10px_rgba(34,211,238,0.5)] sm:block" />

              {/* Card */}
              <div className="group rounded-2xl border border-neutral-800 bg-black/30 p-6 backdrop-blur-md transition duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)] lg:p-8">
                {/* Header */}
                <div className="flex flex-wrap items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 text-2xl text-cyan-400">
                    <FiBriefcase />
                  </div>

                  <div className="flex-1">
                    <h2 className="text-xl font-bold font-heading text-neutral-100">
                      {entry.role}
                    </h2>
                    <p className="mt-0.5 text-base font-medium text-cyan-400">
                      {entry.company}
                    </p>
                  </div>

                  <span className="flex items-center gap-1.5 rounded-full border border-neutral-700 bg-neutral-900/60 px-3 py-1.5 text-xs text-neutral-400">
                    <FiCalendar className="shrink-0" />
                    {entry.period}
                  </span>
                </div>

                {/* Tech pills */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {entry.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-neutral-700 bg-neutral-900/60 px-3 py-1 text-xs text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bullet points */}
                <ul className="mt-5 space-y-2.5" role="list">
                  {entry.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-neutral-400"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Project link */}
                {entry.projectLink && (
                  <a
                    href={entry.projectLink}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
                    aria-label={entry.projectLinkLabel}
                  >
                    {entry.projectLinkLabel}
                    <FiArrowRight />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
