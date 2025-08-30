import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">PGY</h1>
        <div className="space-x-6 hidden md:flex">
          <a href="#about" className="hover:text-gray-600">
            About Me
          </a>
          <a href="#projects" className="hover:text-gray-600">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-600">
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
