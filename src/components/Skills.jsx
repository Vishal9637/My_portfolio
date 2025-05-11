import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
 
  FaGitAlt,
  FaNodeJs,
  FaJava,
  FaPython,
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiTailwindcss, SiFirebase } from "react-icons/si";
import { MdDevices } from "react-icons/md";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "Python", icon: <FaPython className="text-yellow-300" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
  { name: "Responsive Design", icon: <MdDevices className="text-pink-300" /> },
];

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen px-6 md:px-20 py-24 bg-[#0f172a] text-white"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          My <span className="text-blue-400">Skills</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 25px rgba(59, 130, 246, 0.4)",
              transition: { duration: 0.15 },
            }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 15,
              delay: index * 0.03,
            }}
            className="bg-[#1e293b] rounded-xl flex flex-col items-center justify-center p-6 text-center cursor-default backdrop-blur-sm hover:backdrop-blur-md transition-all"
          >
            <motion.div
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="text-4xl mb-2"
            >
              {skill.icon}
            </motion.div>
            <p className="text-sm font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
