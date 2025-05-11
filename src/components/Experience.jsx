import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: " INTERN FRONT-END WEB DEVELOPER",
    company: "NullClass.",
    duration: "JAN 2025 - Jun 2025",
    description: "Completed a 5-month internship as a Front-End Developer, working on real-time web applications using React.js. Actively contributed to the development of production-level features, including dynamic components, responsive layouts, and seamless user experiences. Gained hands-on experience with React hooks, state management, routing (React Router), and API integration. ",
    tech: ["React", "TypeScript", "Redux", "javaScript"]
  },
  
  {
    title: " INTERN FRONT-END WEB DEVELOPER",
    company: "CodeTech IT Solution.",
    duration: "JAN 2025 - FEB 2025",
    description: "Completed a one-month internship as a Front-End Developer, primarily working with React.js to build interactive and responsive user interfaces. Gained practical experience in developing reusable components, managing state with hooks, and integrating APIs for dynamic content rendering. ",
    tech: ["React", "TypeScript", "Redux", "javaScript"]
  },
  {
    title: " CNC Machine Operator",
    company: " Saini Electrical & Engineering Works .",
    duration: "DEC 2022– JUL 2023",
    description: "Over 8 months of hands-on experience operating CNC machines in a precision engineering environment, specifically focused on railway motor shafts. Responsibilities included setting up and running CNC Grinding and milling machines, interpreting technical drawings, and maintaining tight tolerances within micron-level accuracy.",
    tech: ["CNC programming" , "machine operator"]
  }
];

const Experience = () => {
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
          My <span className="text-blue-400">Experience</span>
        </motion.h2>
      </div>

      <div className="max-w-4xl mx-auto space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 15,
              delay: index * 0.15
            }}
            className="relative group"
          >
            {/* Timeline dot */}
            <div className="absolute left-[-28px] top-6 h-3 w-3 rounded-full bg-blue-400 shadow-lg" />

            {/* Experience card */}
            <motion.div
              whileHover={{
                x: 10,
                boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.3)"
              }}
              className="bg-[#1e293b] rounded-xl p-6 border-l-4 border-blue-400 relative overflow-hidden"
            >
              {/* Hover background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <motion.h3
                    className="text-xl font-semibold mb-1"
                    whileHover={{ x: 5 }}
                  >
                    {exp.title}
                  </motion.h3>
                  <p className="text-blue-300">{exp.company}</p>
                </div>
                <span className="text-gray-400 mt-2 md:mt-0">{exp.duration}</span>
              </div>

              <motion.p
                className="text-gray-300 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {exp.description}
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1 }}
              >
                {exp.tech.map((tech, i) => (
                  <motion.span
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="bg-[#2e3b4e] px-3 py-1 rounded-full text-sm text-gray-200"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* Separator line */}
            {index < experiences.length - 1 && (
              <div className="absolute left-[-22px] top-[110%] h-[calc(100%+4rem)] w-px bg-gray-600" />
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
