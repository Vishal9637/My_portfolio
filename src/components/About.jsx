import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const cardHover = {
    hover: { scale: 1.05, transition: { type: "spring", stiffness: 300 } },
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen px-6 md:px-20 py-24 bg-[#0f172a] text-white"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          About <span className="text-blue-400">Me</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Bio */}
        <motion.div
          variants={cardHover}
          whileHover="hover"
          className="bg-[#1f2a38] p-6 rounded-lg shadow-md transition"
        >
          <p className="text-gray-300">
            I'm a passionate frontend developer with 6 months of experience
            creating responsive and user-friendly web applications. My journey
            in web development started when I built my first website in college,
            and I’ve been hooked ever since.
            <br /><br />
            I specialize in modern JavaScript frameworks like React, Vue, and
            Angular, with a strong foundation in HTML, CSS, and vanilla
            JavaScript. I'm committed to writing clean, maintainable code and
            creating accessible user interfaces.
            <br /><br />
            When I’m not coding, you can find me exploring new technologies,
            contributing to open-source projects, or sharing my knowledge
            through blog posts and community meetups.
          </p>
        </motion.div>

        <div className="space-y-6">
          {/* Education */}
          <motion.div
            variants={cardHover}
            whileHover="hover"
            className="bg-[#1f2a38] p-6 rounded-lg shadow-md transition"
          >
            <h3 className="text-blue-400 font-semibold mb-1">Education</h3>
            <p className="text-gray-300">Diploma in Information Technology</p>
            <p className="text-sm text-gray-400">
              Goverment Politechnic Mumbai <br />
              2022 – 2025
            </p>
          </motion.div>

          {/* Location */}
          <motion.div
            variants={cardHover}
            whileHover="hover"
            className="bg-[#1f2a38] p-6 rounded-lg shadow-md transition"
          >
            <h3 className="text-blue-400 font-semibold mb-1">Location</h3>
            <p className="text-gray-300">Mumbai, India</p>
            <p className="text-sm text-gray-400">
              Available for remote work <br />
              <span className="opacity-50">Open to relocation</span>
            </p>
          </motion.div>

          {/* Interests */}
          <motion.div
            variants={cardHover}
            whileHover="hover"
            className="bg-[#1f2a38] p-6 rounded-lg shadow-md transition"
          >
            <h3 className="text-blue-400 font-semibold mb-3">Interests</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Web Accessibility",
                "Performance Optimization",
               
                "Responsive Design",
                "User Experience",
                "Open Source",
                "Tech Blogging",
                "Mentoring",    
              ].map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-600 transition"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
