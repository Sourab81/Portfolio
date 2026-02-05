import { motion } from "framer-motion";
import React from "react";
import profile from "../assets/projects/profilepic.jpg";
import { HERO_CONTENT } from "../constants/index.js";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-20">
      <div className="flex flex-wrap">

        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">

            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pb-6 text-6xl font-thin tracking-tight lg:mt-6 lg:text-8xl"
            >
              Sourabh Malviya
            </motion.h1>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text 
              text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-center lg:text-left"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
           <motion.img
  initial={{ x: 100, opacity: 0 }}   
  animate={{ x: 0, opacity: 1 }}     
  transition={{ duration: 0.8, delay: 0.8 }}
  src={profile}
  // alt="govind"
  className="rounded-xl w-80 h-[380px] object-cover object-top"
/>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;


