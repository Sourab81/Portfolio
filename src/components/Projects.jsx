import React from "react";
import { motion } from "framer-motion";
import {
  FiExternalLink,
  FiGithub,
  FiLock,
  FiMail,
  FiFolder,
} from "react-icons/fi";
import { PROJECTS } from "../constants/index.js";

const TechPill = ({ tech }) => (
  <span className="rounded-full border border-neutral-700 bg-neutral-900/60 px-3 py-1 text-xs text-neutral-300">
    {tech}
  </span>
);

const PlaceholderImage = ({ title }) => (
  <div className="flex h-48 w-full flex-col items-center justify-center gap-3 rounded-lg border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-800">
    <FiFolder className="text-5xl text-cyan-400/70" />
    <span className="px-4 text-center text-sm text-neutral-400">{title}</span>
  </div>
);

const LinkButtons = ({ project }) => (
  <div className="flex flex-wrap gap-3">
    {project.liveUrl && (
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
      >
        <FiExternalLink /> Live Demo
      </a>
    )}
    {project.githubUrl && (
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 px-4 py-2 text-sm font-medium text-neutral-200 transition hover:border-neutral-400 hover:text-cyan-300"
      >
        <FiGithub /> GitHub
      </a>
    )}
  </div>
);

const FeaturedProject = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
    className="mx-auto mt-12 max-w-6xl overflow-hidden rounded-2xl border border-cyan-500/40 bg-black/40 shadow-[0_0_40px_rgba(34,211,238,0.15)] backdrop-blur-md"
  >
    <div className="flex flex-col lg:flex-row">
      <div className="relative lg:w-1/2">
        <img
          src={project.image}
          alt={project.title}
          className="h-64 w-full object-cover lg:h-full"
        />
        <span className="absolute left-4 top-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 px-4 py-1 text-sm font-bold text-white shadow-lg">
          &#9733; Featured Project
        </span>
      </div>

      <div className="flex-1 p-6 lg:p-10">
        <h3 className="text-2xl font-bold font-heading">{project.title}</h3>
        <p className="mt-3 text-neutral-400">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.modules.map((module) => (
            <span
              key={module}
              className="rounded-md border border-neutral-700 bg-neutral-900/70 px-2.5 py-1 text-xs text-cyan-300"
            >
              {module}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <TechPill key={tech} tech={tech} />
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4 rounded-xl border border-dashed border-cyan-500/50 bg-cyan-500/5 p-4">
          <div className="flex flex-col gap-1.5 text-sm">
            <div className="flex items-center gap-2 text-neutral-300">
              <FiMail className="text-cyan-400" />
              <span className="font-medium">{project.demoCredentials.email}</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-300">
              <FiLock className="text-cyan-400" />
              <span className="font-medium">{project.demoCredentials.password}</span>
            </div>
          </div>
          <span className="ml-auto rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-300">
            Demo Credentials
          </span>
        </div>

        <div className="mt-6">
          <LinkButtons project={project} />
        </div>
      </div>
    </div>
  </motion.div>
);

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
    viewport={{ once: true }}
    className="group overflow-hidden rounded-xl border border-neutral-800 bg-black/30 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] backdrop-blur-md"
  >
    {project.image ? (
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
    ) : (
      <PlaceholderImage title={project.title} />
    )}

    <div className="p-5">
      <h3 className="text-lg font-semibold text-neutral-100 font-heading">
        {project.title}
      </h3>
      <p className="mt-2 text-sm text-neutral-400">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <TechPill key={tech} tech={tech} />
        ))}
      </div>

      <div className="mt-5">
        <LinkButtons project={project} />
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const featured = PROJECTS.find((project) => project.featured);
  const others = PROJECTS.filter((project) => !project.featured);

  return (
    <section id="projects" className="scroll-mt-24 pb-24">
      <div className="text-center text-4xl font-bold font-heading">Projects</div>
      <p className="mx-auto mt-4 max-w-2xl px-4 text-center text-neutral-400">
        A selection of full-stack, frontend, and automation projects I have built.
      </p>

      {featured && <FeaturedProject project={featured} />}

      <div className="mt-16 grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3">
        {others.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
