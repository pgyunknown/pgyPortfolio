import React, { useState } from "react";

// Main App Component
export default function App() {
  return (
    <div className="bg-[#111111] min-h-screen font-sans">
      <Portfolio />
    </div>
  );
}

// Portfolio Component
const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = [
    { href: "#about", text: "About me" },
    { href: "#projects", text: "Projects" },
  ];

  return (
    <div className="relative flex flex-col lg:flex-row min-h-screen">
      {/* Blue accent bar */}
      <div className="absolute top-0 left-0 w-2 lg:w-4 h-full bg-[#3b82f6] z-10"></div>

      {/* Left Section */}
      <div className="w-full lg:w-1/2 bg-[#e5e7eb] text-[#1f2937] flex flex-col justify-center p-8 sm:p-12 lg:p-20 relative">
        {/* Mobile Header */}
        <header className="absolute top-0 left-0 w-full p-6 sm:p-8 flex justify-between items-center lg:hidden">
          <div className="text-2xl sm:text-3xl font-bold z-30">PGY</div>
          <button
            onClick={toggleMenu}
            className="z-30 text-[#1f2937] focus:outline-none"
          >
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              )}
            </svg>
          </button>
        </header>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-[#e5e7eb] z-20 transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out lg:hidden`}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <nav className="flex flex-col space-y-8 text-2xl">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-[#3b82f6] transition-colors"
                  onClick={toggleMenu}
                >
                  {link.text}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-white text-black border border-black rounded-full px-8 py-3 hover:bg-black hover:text-white transition-all duration-300 font-semibold"
                onClick={toggleMenu}
              >
                CONTACT ME
              </a>
            </nav>
          </div>
        </div>

        {/* Hero Text */}
        <div className="lg:pl-8">
          <p className="text-xl sm:text-2xl font-light mb-2">Hi, I am</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            P Gokul Yadav
          </h1>
          <p className="text-lg sm:text-xl font-medium text-gray-600 mt-2">
            Front-end Developer / UI Designer
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-8">
            <SocialIcon href="mailto:p.gokul.yadav@example.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.206"
                />
              </svg>
            </SocialIcon>
            <SocialIcon href="https://github.com/pgokulyadav">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
                  clipRule="evenodd"
                />
              </svg>
            </SocialIcon>
            <SocialIcon href="https://linkedin.com/in/pgokulyadav">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </SocialIcon>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 bg-[#111111] text-white flex flex-col items-center justify-center p-8 sm:p-12 lg:p-20 relative overflow-hidden">
        {/* Desktop Header */}
        <header className="absolute top-0 right-0 p-6 sm:p-8 hidden lg:flex items-center space-x-8">
          <nav className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:text-[#3b82f6] transition-colors"
              >
                {link.text.toUpperCase()}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="bg-white text-black rounded-full px-6 py-2 text-sm font-semibold hover:bg-gray-300 transition-colors"
          >
            CONTACT ME
          </a>
        </header>

        {/* Profile Image */}
        <div className="relative w-full max-w-sm sm:max-w-md mx-auto lg:mx-0">
          <div className="relative w-full aspect-square rounded-full border-4 border-white p-2 shadow-xl">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <img
                src="https://i.imgur.com/8038b2.png"
                alt="P Gokul Yadav"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Social Icon Component
const SocialIcon = ({ href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 bg-white rounded-md flex items-center justify-center text-gray-700 hover:bg-gray-200 hover:text-black transition-all duration-300 shadow-md"
    >
      {children}
    </a>
  );
};
