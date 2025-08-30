import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-[#030809]/80 backdrop-blur-md z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
        <h1
          className="text-[#8fd1e1] font-bold text-xl cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          MyPortfolio
        </h1>
        <div className="hidden md:flex gap-6 text-[#e0edf0]">
          {["home", "about", "works", "contact"].map((sec) => (
            <button
              key={sec}
              onClick={() => scrollToSection(sec)}
              className="hover:text-[#3fc9ea] transition-colors"
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </button>
          ))}
        </div>
        {/* Mobile Menu */}
        <button
          className="md:hidden text-[#8fd1e1]"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col items-center gap-4 py-6 bg-[#030809]/95 text-[#e0edf0]">
          {["home", "about", "works", "contact"].map((sec) => (
            <button
              key={sec}
              onClick={() => scrollToSection(sec)}
              className="hover:text-[#3fc9ea] transition-colors text-lg"
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
