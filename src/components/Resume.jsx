import React from "react";
import resume from "../assets/projects/SourabhResume.pdf";

const Resume = () => {
  return (
    <a
      href={resume}
      download="Sourabh-Malviya-Resume.pdf"
      className="inline-block px-6 py-3 bg-neutral-900 border border-neutral-700 rounded-xl
                 text-neutral-200 hover:bg-neutral-800 hover:border-cyan-400 hover:text-cyan-300
                 transition-all duration-300"
    >
      Download Resume
    </a>
  );
};

export default Resume;
