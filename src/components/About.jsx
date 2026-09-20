import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import aboutImg from "../assets/projects/aboutpic.png";
import { ABOUT_TEXT, ABOUT_TEXT1, STATS } from "../constants/index.js";

const Counter = ({ value, label }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
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
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-bold font-heading bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
        {count}+
      </div>
      <div className="mt-1 text-sm text-neutral-400">{label}</div>
    </div>
  );
};

const About = ({ Resumebtn }) => {
  return (
    <section id="about" className="scroll-mt-24 border-b border-neutral-900 pb-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl font-heading"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h1>

      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 opacity-40 blur" />
              <img
                className="relative w-100 h-120 rounded-2xl object-cover object-top"
                src={aboutImg}
                alt="Sourabh Malviya working"
              />
            </div>
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 flex justify-center lg:justify-start"
          >
            <div>
              <p>
                {ABOUT_TEXT}
                <br />
                <br />
                <span>{ABOUT_TEXT1}</span>
              </p>
              <div className="mt-8">
                <Resumebtn />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-8 border-t border-neutral-800 pt-10 md:grid-cols-4">
        {STATS.map((stat) => (
          <Counter key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  );
};

export default About;
