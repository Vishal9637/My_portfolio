import React, { useState } from "react";
import { Menu, X } from "lucide-react";

// List of nav items with their corresponding section IDs
const navItems = [
  { title: "About", id: "about" },
  { title: "Skills", id: "skills" },
  { title: "Projects", id: "projects" },
  { title: "Experience", id: "experience" },
  { title: "Certificates", id: "certificates" },
  { title: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        flex items-center justify-between
        px-6 md:px-20 py-4
        bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364]
        text-white shadow-lg backdrop-blur-sm
      "
    >
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-300">
        <a href="#hero" onClick={closeMenu}>DevPortfolio</a>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-8 text-sm">
        {navItems.map(({ title, id }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="hover:text-blue-400 transition-colors duration-200"
            >
              {title}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul
          className="
            absolute top-full left-0 w-full bg-[#203a43] text-white
            flex flex-col items-center space-y-4 py-6 md:hidden
            shadow-md animate-slide-down
          "
        >
          {navItems.map(({ title, id }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={closeMenu}
                className="text-lg hover:text-blue-400 transition-colors duration-200"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
