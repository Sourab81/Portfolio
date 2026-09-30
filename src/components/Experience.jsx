/**
 * Experience.jsx
 *
 * Self-contained: the default `ITEMS` array lives here so adding a new role
 * needs no JSX changes — just push a new object to ITEMS (or pass an `items`
 * prop from App.jsx).
 *
 * Data shape per item:
 * {
 *   role        : string,
 *   company     : string,
 *   period      : string,          // displayed date range
 *   duration    : string,          // e.g. "6 months"
 *   type        : string,          // e.g. "Internship"
 *   current     : boolean,         // shows pulsing ping on dot
 *   technologies: string[],
 *   bullets     : Array<{
 *     text      : string,          // full sentence (no JSX)
 *     highlights: string[],        // substrings to emphasise in font-medium text-neutral-100
 *   }>,
 *   projectLink      : string | null,
 *   projectLinkLabel : string | null,
 * }
 */

import { motion, useReducedMotion } from "framer-motion";
import { FiBriefcase, FiCalendar, FiClock, FiArrowUpRight } from "react-icons/fi";
import { EXPERIENCE } from "../constants/index.js";

// ---------------------------------------------------------------------------
// Default items — enriched with highlights, duration, type, current flag.
// Falls back gracefully to the EXPERIENCE constant if an `items` prop is given.
// ---------------------------------------------------------------------------
const buildDefaultItems = () =>
  EXPERIENCE.map((e) => ({
    ...e,
    duration: "6 months",
    type: "Internship",
    current: true,
    bullets: [
      {
        text: "Built and maintained the eNest Transaction Management System, an enterprise service-center management application.",
        highlights: ["eNest Transaction Management System"],
      },
      {
        text: "Developed customer, inventory, transaction, expense, and accounts modules.",
        highlights: [],
      },
      {
        text: "Implemented role-based workflows and permission-based access control.",
        highlights: ["role-based workflows", "permission-based access control"],
      },
      {
        text: "Integrated the React / Next.js frontend with PHP CodeIgniter REST APIs.",
        highlights: ["PHP CodeIgniter REST APIs"],
      },
      {
        text: "Optimized SQL queries and improved API response performance.",
        highlights: ["SQL queries"],
      },
      {
        text: "Worked directly on client requirements and fixed production bugs.",
        highlights: ["production bugs"],
      },
    ],
  }));

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Split `text` on every substring in `highlights` and return an array of
 * React nodes — plain strings interspersed with <mark>-less <span>s.
 * Order-independent and case-sensitive.
 */
function highlightText(text, highlights) {
  if (!highlights || highlights.length === 0) return [text];

  // Build one regex that matches any highlight phrase
  const escaped = highlights.map((h) =>
    h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );
  const regex = new RegExp(`(${escaped.join("|")})`, "g");
  const parts = text.split(regex);

  return parts.map((part, i) =>
    highlights.includes(part) ? (
      <span key={i} className="font-medium text-neutral-100">
        {part}
      </span>
    ) : (
      part
    )
  );
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

const TechPill = ({ tech }) => (
  <span className="rounded-full border border-neutral-700 bg-neutral-900/60 px-3 py-1 text-xs text-neutral-300">
    {tech}
  </span>
);

/** The animated gradient rail that draws itself downward */
const TimelineRail = ({ shouldReduceMotion }) => (
  <motion.div
    aria-hidden="true"
    className="absolute left-5 top-0 w-px origin-top bg-gradient-to-b from-cyan-400 via-purple-500/50 to-transparent"
    style={{ height: "100%" }}
    initial={{ scaleY: shouldReduceMotion ? 1 : 0 }}
    whileInView={{ scaleY: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.2, ease: "easeOut" }}
  />
);

/** Dot on the timeline. Pings when `current` is true. */
const TimelineDot = ({ current, shouldReduceMotion }) => (
  <div
    aria-hidden="true"
    className="absolute left-5 top-[1.6rem] -translate-x-1/2 z-10 flex items-center justify-center"
  >
    {/* Ping ring — only when current and motion allowed */}
    {current && !shouldReduceMotion && (
      <span className="absolute inline-flex h-4 w-4 rounded-full bg-cyan-400/30 animate-ping" />
    )}
    <span className="relative h-3.5 w-3.5 rounded-full border-2 border-cyan-400 bg-neutral-950 shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
  </div>
);

/**
 * Render one bullet with optional phrase highlighting.
 * The cyan dot is aligned to the first text line via `mt-2.5`.
 */
const Bullet = ({ item }) => (
  <li className="flex items-start gap-3">
    <span
      aria-hidden="true"
      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400"
    />
    <span className="text-[15px] leading-relaxed text-neutral-400">
      {highlightText(item.text, item.highlights)}
    </span>
  </li>
);

/** Left column: icon, role, company, date dl, tech pills */
const EntryLeft = ({ entry }) => (
  <div className="flex flex-col gap-4">
    {/* Icon tile */}
    <div
      aria-hidden="true"
      className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 text-2xl text-cyan-400"
    >
      <FiBriefcase />
    </div>

    {/* Role + company */}
    <div>
      <h2 className="text-xl font-bold font-heading leading-snug text-neutral-100">
        {entry.role}
      </h2>
      <p className="mt-1 text-base font-medium text-cyan-300">{entry.company}</p>
    </div>

    {/* Date / duration rows using dl for semantics */}
    <dl className="space-y-2 text-sm text-neutral-400">
      <div className="flex items-center gap-2">
        <dt className="sr-only">Period</dt>
        <FiCalendar aria-hidden="true" className="shrink-0 text-neutral-500" />
        <dd>{entry.period}</dd>
      </div>
      {entry.duration && (
        <div className="flex items-center gap-2">
          <dt className="sr-only">Duration</dt>
          <FiClock aria-hidden="true" className="shrink-0 text-neutral-500" />
          <dd>
            {entry.duration}
            {entry.type && (
              <span className="ml-2 rounded-full bg-cyan-500/15 px-2 py-0.5 text-xs font-medium text-cyan-300">
                {entry.type}
              </span>
            )}
          </dd>
        </div>
      )}
    </dl>

    {/* Tech pills */}
    <div className="flex flex-wrap gap-2">
      {entry.technologies.map((tech) => (
        <TechPill key={tech} tech={tech} />
      ))}
    </div>
  </div>
);

/** Right column: bullets + project link button */
const EntryRight = ({ entry }) => (
  <div className="flex flex-col gap-5 lg:border-l lg:border-neutral-800 lg:pl-8">
    <ul className="space-y-3" role="list">
      {entry.bullets.map((b, i) => (
        <Bullet key={i} item={b} />
      ))}
    </ul>

    {entry.projectLink && (
      <div className="pt-1">
        <a
          href={entry.projectLink}
          className="inline-flex items-center gap-2 rounded-lg border border-cyan-500/40 bg-cyan-500/5 px-4 py-2 text-sm font-medium text-cyan-300 transition-colors duration-200 hover:border-cyan-400 hover:bg-cyan-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
          aria-label={entry.projectLinkLabel}
        >
          {entry.projectLinkLabel}
          <FiArrowUpRight aria-hidden="true" />
        </a>
      </div>
    )}
  </div>
);

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

const Experience = ({ items }) => {
  const shouldReduceMotion = useReducedMotion();
  const entries = items ?? buildDefaultItems();

  return (
    <section id="experience" className="scroll-mt-24 border-b border-neutral-900 pb-24">
      {/* Section heading */}
      <motion.h1
        initial={shouldReduceMotion ? false : { opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6 }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl font-heading"
      >
        Work <span className="text-neutral-500">Experience</span>
      </motion.h1>

      {/* Timeline wrapper */}
      <div className="mx-auto max-w-4xl px-2 sm:px-0">
        {/*
          The outer div is position:relative so the rail and dots are positioned
          against it. On mobile we hide the rail/dot (left-5 requires at least
          ~40px of leading space which pl-10 / pl-14 provides).
        */}
        <div className="relative">
          {/* Animated gradient rail */}
          <TimelineRail shouldReduceMotion={shouldReduceMotion} />

          {/* Entry list */}
          <ol className="" aria-label="Work experience timeline">
            {entries.map((entry, idx) => (
              <li key={idx} className="relative">
                {/* Dot is positioned relative to the <ol> parent's left edge */}
                <TimelineDot current={entry.current} shouldReduceMotion={shouldReduceMotion} />

                {/* Card fades up once */}
                <motion.article
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }}
                  aria-label={`${entry.role} at ${entry.company}`}
                  className="rounded-2xl border border-cyan-500/30 bg-black/40 p-6 shadow-[0_0_40px_rgba(34,211,238,0.08)] backdrop-blur-md md:p-8"
                >
                  {/*
                    Two-column grid at lg:
                    Left  ~17 rem wide (metadata)
                    Right fills remaining space (bullets)
                  */}
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] lg:gap-8">
                    <EntryLeft entry={entry} />
                    <EntryRight entry={entry} />
                  </div>
                </motion.article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Experience;
