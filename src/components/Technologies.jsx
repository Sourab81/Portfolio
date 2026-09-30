import { motion, useReducedMotion } from "framer-motion";
import {
  RiReactjsLine,
  RiCodeSSlashLine,
} from "react-icons/ri";
import { TbBrandMongodb } from "react-icons/tb";
import {
  FaNodeJs,
  FaGithub,
  FaJava,
  FaPython,
  FaPhp,
} from "react-icons/fa";
import {
  SiMysql,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiCodeigniter,
  SiPostman,
  SiJsonwebtokens,
  SiGit,
} from "react-icons/si";

const GROUPS = [
  {
    title: "Languages",
    items: [
      { icon: <SiJavascript />, name: "JavaScript", color: "text-yellow-400" },
      { icon: <FaJava />, name: "Java", color: "text-red-500" },
      { icon: <FaPhp />, name: "PHP", color: "text-indigo-400" },
      { icon: <FaPython />, name: "Python", color: "text-yellow-300" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { icon: <SiHtml5 />, name: "HTML5", color: "text-orange-500" },
      { icon: <SiCss3 />, name: "CSS3", color: "text-blue-500" },
      { icon: <RiReactjsLine />, name: "React.js", color: "text-cyan-400" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-cyan-300" },
      { icon: <SiNextdotjs />, name: "Next.js", color: "text-white" },
    ],
  },
  {
    title: "Backend",
    items: [
      { icon: <FaNodeJs />, name: "Node.js", color: "text-green-500" },
      { icon: <SiExpress />, name: "Express.js", color: "text-gray-300" },
      { icon: <SiCodeigniter />, name: "CodeIgniter (PHP)", color: "text-orange-400" },
      { icon: <RiCodeSSlashLine />, name: "REST APIs", color: "text-purple-400" },
      { icon: <SiJsonwebtokens />, name: "JWT", color: "text-pink-400" },
    ],
  },
  {
    title: "Database & Tools",
    items: [
      { icon: <TbBrandMongodb />, name: "MongoDB", color: "text-green-500" },
      { icon: <SiMysql />, name: "MySQL", color: "text-blue-500" },
      { icon: <SiGit />, name: "Git", color: "text-orange-400" },
      { icon: <FaGithub />, name: "GitHub", color: "text-white" },
      { icon: <SiPostman />, name: "Postman", color: "text-orange-500" },
      // XAMPP/WAMP — no dedicated react-icons icon; represented as a label pill below
    ],
  },
];

// Extra text-only tools without icons
const EXTRA_TOOLS = ["XAMPP / WAMP"];

const appear = {
  hidden: { opacity: 0, y: 20 },
  show: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.08, ease: "easeOut" },
  }),
};

const Technologies = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="skills" className="scroll-mt-24 border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl font-heading">Technologies</h1>

      <div className="space-y-14">
        {GROUPS.map((group, groupIndex) => (
          <div key={group.title}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-6 text-center text-2xl font-semibold text-neutral-400"
            >
              {group.title}
            </motion.h2>

            <div className="flex flex-wrap items-center justify-center gap-6">
              {group.items.map((item, index) => (
                <motion.div
                  key={item.name}
                  custom={index}
                  variants={appear}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  // Floating animation — disabled when prefers-reduced-motion
                  animate={
                    shouldReduceMotion
                      ? {}
                      : { y: [0, -8, 0] }
                  }
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : {
                          duration: 3 + (groupIndex + index) * 0.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.3,
                        }
                  }
                  className="group relative flex flex-col items-center gap-2 rounded-2xl border-4 border-neutral-800 bg-neutral-900/40 px-6 py-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/50"
                  aria-label={item.name}
                >
                  <span className={`text-4xl ${item.color}`} aria-hidden="true">
                    {item.icon}
                  </span>
                  <span className="text-xs text-neutral-400 transition group-hover:text-neutral-200">
                    {item.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* Extra text-only tools */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 text-center text-2xl font-semibold text-neutral-400"
          >
            Other Tools
          </motion.h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {EXTRA_TOOLS.map((tool) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border-4 border-neutral-800 bg-neutral-900/40 px-6 py-4 text-sm text-neutral-300 transition hover:border-cyan-500/50"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
