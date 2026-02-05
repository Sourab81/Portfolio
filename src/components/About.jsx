import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/projects/aboutpic.png";
import { ABOUT_TEXT,ABOUT_TEXT1} from "../constants/index.js";

const About = ({Resumebtn}) => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h1>

      <div className="flex flex-wrap">

        {/* LEFT IMAGE ANIMATION */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <img
              className="rounded-2xl object-cover object-top w-100 h-120"
              src={aboutImg}
              alt="about"
            />
          </motion.div>
        </div>

        {/* RIGHT TEXT ANIMATION */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start mt-16"
          >
            <p>{ABOUT_TEXT}
              <br /><br />
              <p>{ABOUT_TEXT1}
                <br />
                <br />
                {<Resumebtn/>}
              </p>
            </p>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default About;
