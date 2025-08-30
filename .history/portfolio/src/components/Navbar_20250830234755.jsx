import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Works", id: "works" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <div className="fixed top-0 left-0 h-full w-56 bg-[#040a0d] text-[#e9f2f6] hidden md:flex flex-col justify-between shadow-xl z-50">
      {/* Profile Section */}
      <div className="flex flex-col items-center mt-8">
        <img
          src="https://via.placeholder.com/100"
          alt="profile"
          className="w-24 h-24 rounded-full border-4 border-[#03b3fd] shadow-lg"
        />
        <h1 className="mt-4 text-lg font-bold">Your Name</h1>
        <p className="text-sm text-[#8dcfeb]">Java Backend Developer</p>
      </div>

      {/* Nav Links */}
      <ul className="flex flex-col gap-6 text-center mb-16">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className="hover:text-[#03b3fd] transition-colors duration-300"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
