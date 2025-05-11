import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 pt-24 pb-16 min-h-screen bg-[#0c111e] text-white"
    >
      {/* Text Block */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="flex-1 space-y-6 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hi, I’m <span className="text-blue-400">Vishal</span>
          <br />
          <span className="text-blue-300">Gadage</span>
        </h1>
        <h2 className="text-lg text-gray-300">Frontend Developer</h2>
        <p className="text-sm text-gray-400 max-w-md mx-auto md:mx-0">
          I build exceptional and accessible digital experiences for the web.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <a href="#contact">
            <button className="bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 px-6 py-2 rounded-md font-medium transition">
              Contact Me
            </button>
          </a>
          <a href="#projects">
            <button className="border border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white px-6 py-2 rounded-md font-medium transition">
              View Projects
            </button>
          </a>
        </div>
      </motion.div>

      {/* Avatar / Illustration */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="flex-1 mb-12 md:mb-0 flex justify-center"
      >
        {/* Increased avatar size to w-80 h-80 */}
        <div className="w-80 h-80 rounded-full border-4 border-blue-400 overflow-hidden">
          <img
            src="https://i.ibb.co/xtn907b1/Whats-App-Image-2025-05-11-at-17-37-41-2c826bbc.jpg"
            alt="Vishal's Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </motion.section>
  );
}
