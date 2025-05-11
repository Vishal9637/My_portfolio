import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "IMDB Clone",
    description:
      "Developed a feature-rich IMDb clone with user authentication, movie watchlists,,ersonalized recommendations, and smooth UI/UX.",
    tech: ["React", "Redux", "Node.js", "Firestore"],
    liveDemo: "https://imdbclone-woad-three.vercel.app/",
    sourceCode: "https://github.com/Vishal9637/imdbclone",
  },
  {
    title: "Landing Page Demo",
    description:
      "This project is a visually appealing and responsive landing page built using front-end technologies. It features a modern animated hero section designed to capture user attention immediately.  ",
    tech: ["React", , "Tailwind CSS"],
    liveDemo: "https://landing-pages-roan.vercel.app/",
    sourceCode: "https://github.com/Vishal9637/landing_pages",
  },
  {
    title: "Hospital Management System",
    description:
      " The hospital management system is a computer system that helps manage the information related to healthcare and aids in the job completion of healthcare providers effectively.",
    tech: ["Python", ],
    liveDemo: "#",
    sourceCode: "https://github.com/Vishal9637/hospitalMS",
  },
];

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen px-6 md:px-20 py-24 bg-[#0f172a] text-white"
    >
      <div className="text-center mb-12">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold"
        >
          My <span className="text-blue-400">Projects</span>
        </motion.h2>
      </div>

      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 15,
              delay: index * 0.1
            }}
            whileHover={{
              y: -10,
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3)"
            }}
            className="bg-[#1e293b] rounded-2xl shadow-lg overflow-hidden relative group cursor-pointer"
          >
            {/* Animated background elements */}
            <motion.div
              className="absolute top-0 left-0 w-full h-1/2 bg-[#151d29]"
              whileHover={{ opacity: 0.8 }}
            >
              <motion.div
                className="absolute right-4 top-4 w-24 h-12 bg-[#214b67] opacity-60 rounded-full mix-blend-screen"
                animate={{ x: [0, 10, 0], y: [0, -5, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <motion.div
                className="absolute left-0 bottom-0 w-full h-1/2 bg-[#121c2b] clip-triangle"
                whileHover={{ scale: 1.1 }}
              />
            </motion.div>

            <motion.div
              className="relative p-6 pt-40 flex flex-col justify-between min-h-[340px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <div>
                <motion.h3
                  className="text-lg font-semibold mb-2"
                  whileHover={{ x: 5 }}
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  className="text-sm text-gray-300 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {project.description}
                </motion.p>
              </div>

              {/* Tech stack with staggered animation */}
              <motion.div
                className="flex flex-wrap gap-2 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1 }}
              >
                {project.tech.map((tech, i) => (
                  <motion.span
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="bg-[#2e3b4e] text-sm px-3 py-1 rounded-full text-gray-200"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              {/* Animated links */}
              <motion.div className="flex gap-4" whileHover={{ scale: 1.02 }}>
                <motion.a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-400 hover:text-blue-300"
                  whileHover={{ x: 5 }}
                >
                  <motion.span
                    className="inline-block"
                    whileHover={{ scale: 1.2 }}
                  >
                    <FaExternalLinkAlt />
                  </motion.span>
                  Live Demo
                </motion.a>

                <motion.a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-400 hover:text-blue-300"
                  whileHover={{ x: 5 }}
                >
                  <motion.span
                    className="inline-block"
                    whileHover={{ scale: 1.2 }}
                  >
                    <FaGithub />
                  </motion.span>
                  Source Code
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
