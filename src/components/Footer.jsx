import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-400 pt-6 pb-6">
      {/* Horizontal Line */}
      <div className="border-t border-blue-500/30 mb-6 w-full"></div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-20">
        {/* Left: Brand and copyright */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-xl font-bold text-blue-400">DevPortfolio</h3>
          <p className="text-sm">© {new Date().getFullYear()} Vishal Gadage. All rights reserved.</p>
        </div>

        {/* Right: Navigation links */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="hover:text-white transition-colors duration-200 text-sm">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white transition-colors duration-200 text-sm">
                Projects
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:text-white transition-colors duration-200 text-sm">
                Experience
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition-colors duration-200 text-sm">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
