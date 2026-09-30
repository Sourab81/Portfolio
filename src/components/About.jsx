import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import aboutImg from "../assets/projects/aboutpic.png";
import {
  ABOUT_TEXT,
  ABOUT_TEXT1,
  STATS,
  EDUCATION,
  ACHIEVEMENTS,
} from "../constants/index.js";

const Counter = ({ value, label, suffix = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (shouldReduceMotion) {
      setCount(value);
      return;
    }
    let start = 0;
    const duration = 1200;
    const steps = 60;
    const increment = value / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value, shouldReduceMotion]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-bold font-heading bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
        {count}
        {suffix}
      </div>
      <div className="mt-1 text-sm text-neutral-400">{label}</div>
    </div>
  );
};

const About = ({ Resumebtn }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="scroll-mt-24 border-b border-neutral-900 pb-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6 }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl font-heading"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h1>

      <div className="flex flex-wrap">
        {/* About image — responsive, no fixed dimensions that clip on mobile */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 opacity-40 blur" />
              <img
                className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md rounded-2xl object-cover object-top"
                style={{ aspectRatio: "4/5" }}
                src={aboutImg}
                alt="Sourabh Malviya working"
                width={400}
                height={500}
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>

        {/* Text + Education + Achievements */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 flex justify-center lg:justify-start"
          >
            <div className="space-y-6">
              <p className="text-neutral-300 leading-relaxed">
                {ABOUT_TEXT}
                <br />
                <br />
                <span>{ABOUT_TEXT1}</span>
              </p>

              {/* Education */}
              <div>
                <h2 className="mb-3 text-lg font-semibold text-neutral-200">
                  Education
                </h2>
                <ul className="space-y-3">
                  {EDUCATION.map((edu) => (
                    <li
                      key={edu.degree}
                      className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4"
                    >
                      <p className="font-medium text-neutral-100">{edu.degree}</p>
                      <p className="mt-0.5 text-sm text-cyan-400">{edu.institution}</p>
                      <p className="mt-0.5 text-xs text-neutral-500">
                        {edu.period} · {edu.detail}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              <div>
                <h2 className="mb-3 text-lg font-semibold text-neutral-200">
                  Achievements
                </h2>
                <ul className="space-y-1.5">
                  {ACHIEVEMENTS.map((ach, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-neutral-400">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Resumebtn />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-8 border-t border-neutral-800 pt-10 md:grid-cols-4">
        {STATS.map((stat) => (
          <Counter
            key={stat.label}
            value={stat.value}
            label={stat.label}
            suffix={stat.suffix}
          />
        ))}
      </div>
    </section>
  );
};

export default About;
