import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-[#040a0d]/90 backdrop-blur-md z-50 border-b border-[#0d709a]/30">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1
          className="text-[#8dcfeb] font-bold text-xl cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          Gokul.dev
        </h1>
        <div className="hidden md:flex gap-8 text-[#e9f2f6] font-medium">
          {["home", "about", "works", "contact"].map((sec) => (
            <button
              key={sec}
              onClick={() => scrollToSection(sec)}
              className="relative group"
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#03b3fd] transition-all group-hover:w-full"></span>
            </button>
          ))}
        </div>
        <button
          className="md:hidden text-[#8dcfeb]"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-[#040a0d]/95 text-[#e9f2f6]">
          {["home", "about", "works", "contact"].map((sec) => (
            <button
              key={sec}
              onClick={() => scrollToSection(sec)}
              className="hover:text-[#03b3fd] transition-colors text-lg"
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
