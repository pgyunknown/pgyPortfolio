import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { colors } from "../App";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "works", title: "Works" },
    { id: "contact", title: "Contact" },
  ];

  return (
    <header
      className="sticky top-0 z-50"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center backdrop-blur-sm">
        <a
          href="#home"
          className="text-2xl font-bold"
          style={{ color: colors.primary }}
        >
          PGY
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="text-lg relative group">
                {link.title}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: colors.primary }}
                ></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-50">
          {isOpen ? (
            <X size={28} style={{ color: colors.primary }} />
          ) : (
            <Menu size={28} style={{ color: colors.primary }} />
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-center items-center space-y-8 z-40`}
          style={{ backgroundColor: colors.background }}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-3xl font-semibold"
              style={{ color: colors.text }}
              onClick={() => setIsOpen(false)}
            >
              {link.title}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
