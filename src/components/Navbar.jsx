import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Navbar = () => {
  const iconLinks = [
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/sourabh-malviya-a54519352/" },
    { icon: <FaGithub />, url: "https://github.com/Sourab81" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/_sourabh_.1111/" },
    { icon: <FaSquareXTwitter />, url: "https://x.com/SourabhMal89915" },
  ];

  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

 
  const iconVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 500 } },
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-6 px-8">
     
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent cursor-pointer"
      >
        SM
      </motion.div>

    
      <motion.div
        className="flex items-center justify-center gap-6 text-2xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {iconLinks.map((item, index) => (
          <motion.a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            whileHover={{ scale: 1.3, color: "#00bcd4" }}
            whileTap={{ scale: 0.9 }}
            className="transition-colors duration-200"
          >
            {item.icon}
          </motion.a>
        ))}
      </motion.div>
    </nav>
  );
};

export default Navbar;



