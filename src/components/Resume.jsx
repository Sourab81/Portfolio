import React from "react";
import resume from "../assets/projects/SourabhResume.pdf";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume; 
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      className="px-6 py-3 bg-neutral-900 border border-neutral-700 rounded-xl 
             text-neutral-200 hover:bg-neutral-800 hover:border-neutral-500 
             transition-all duration-300"
    >
      Download Resume
    </button>
  );
};

export default Resume;

