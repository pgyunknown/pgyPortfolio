import React, { useState, useEffect } from "react";
import {
  Mail,
  Linkedin,
  Github,
  ChevronDown,
  Menu,
  X,
  Sun,
  Moon,
  Download,
} from "lucide-react";

// --- Color Palettes ---
const lightColors = {
  text: "#1a1a1a",
  background: "#ffffff",
  primary: "#0077b6",
  secondary: "#00b4d8",
  accent: "#90e0ef",
  cardBg: "rgba(255, 255, 255, 0.5)",
  sectionBg: "rgba(255, 255, 255, 0.7)",
};

const darkColors = {
  text: "#e0e0e0",
  background: "#121212",
  primary: "#00b4d8",
  secondary: "#90e0ef",
  accent: "#0077b6",
  cardBg: "rgba(42, 42, 42, 0.5)",
  sectionBg: "rgba(26, 26, 26, 0.7)",
};

// --- Main App Component ---
export default function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  const currentColors = theme === "light" ? lightColors : darkColors;

  useEffect(() => {
    document.body.style.backgroundColor = currentColors.background;
  }, [theme, currentColors.background]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const navLinks = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "works", title: "Works" },
    { id: "contact", title: "Contact" },
  ];

  const projects = [
    {
      title: "Project One",
      description: "A brief description of the first amazing project.",
      image: "https://placehold.co/600x400/00b4d8/ffffff?text=Project+1",
      tags: ["React", "Tailwind"],
    },
    {
      title: "Project Two",
      description: "This project showcases skills in UI design and backend.",
      image: "https://placehold.co/600x400/0077b6/ffffff?text=Project+2",
      tags: ["Next.js", "Figma"],
    },
    {
      title: "Project Three",
      description: "An e-commerce platform with a focus on user experience.",
      image: "https://placehold.co/600x400/90e0ef/1a1a1a?text=Project+3",
      tags: ["TypeScript", "Node.js"],
    },
    {
      title: "Project Four",
      description: "A mobile-first application for social networking.",
      image: "https://placehold.co/600x400/00b4d8/ffffff?text=Project+4",
      tags: ["React Native", "UI/UX"],
    },
  ];

  const backgroundPatternStyle = {
    backgroundColor: currentColors.background,
    backgroundImage: `radial-gradient(${currentColors.accent} 0.5px, transparent 0.5px)`,
    backgroundSize: "20px 20px",
  };

  const animationStyles = `
    .animated-shape {
        position: absolute;
        border-radius: 50%;
        opacity: 0.15;
        animation: float 20s infinite linear;
    }
    .shape-1 { width: 150px; height: 150px; top: 10%; left: 15%; animation-duration: 25s; }
    .shape-2 { width: 80px; height: 80px; top: 25%; left: 80%; animation-duration: 18s; animation-delay: 3s; }
    .shape-3 { width: 200px; height: 200px; bottom: 10%; left: 5%; animation-duration: 22s; animation-delay: 5s; }
    .shape-4 { width: 120px; height: 120px; bottom: 20%; left: 60%; animation-duration: 20s; animation-delay: 8s; }
    @keyframes float {
        0% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-30px) rotate(180deg); }
        100% { transform: translateY(0px) rotate(360deg); }
    }
  `;

  return (
    <>
      <style>{animationStyles}</style>
      <div
        style={{ ...backgroundPatternStyle, color: currentColors.text }}
        className="font-sans antialiased transition-colors duration-300"
      >
        {/* ----- Navbar ----- */}
        <header
          className="sticky top-0 z-50 shadow-md"
          style={{
            backgroundColor:
              theme === "light"
                ? "rgba(255, 255, 255, 0.8)"
                : "rgba(18, 18, 18, 0.8)",
          }}
        >
          <nav className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center backdrop-blur-md">
            <a
              href="#home"
              className="text-2xl font-bold"
              style={{ color: currentColors.primary }}
            >
              PGY
            </a>

            <div className="flex items-center space-x-4 sm:space-x-8">
              <ul className="hidden md:flex items-center space-x-8">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="text-lg relative group"
                      style={{ color: currentColors.text }}
                    >
                      {link.title}
                      <span
                        className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                        style={{ backgroundColor: currentColors.primary }}
                      ></span>
                    </a>
                  </li>
                ))}
              </ul>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-full focus:outline-none"
                style={{ backgroundColor: currentColors.cardBg }}
              >
                {theme === "light" ? (
                  <Moon size={20} color={currentColors.primary} />
                ) : (
                  <Sun size={20} color={currentColors.primary} />
                )}
              </button>
            </div>

            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="md:hidden z-50"
            >
              {isNavOpen ? (
                <X size={28} style={{ color: currentColors.primary }} />
              ) : (
                <Menu size={28} style={{ color: currentColors.primary }} />
              )}
            </button>

            <div
              className={`fixed top-0 left-0 w-full h-screen transform ${
                isNavOpen ? "translate-x-0" : "-translate-x-full"
              } transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-center items-center space-y-8 z-40`}
              style={{ backgroundColor: currentColors.background }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="text-3xl font-semibold"
                  style={{ color: currentColors.text }}
                  onClick={() => setIsNavOpen(false)}
                >
                  {link.title}
                </a>
              ))}
            </div>
          </nav>
        </header>

        <main>
          {/* ----- Home Section ----- */}
          <section
            id="home"
            className="min-h-screen flex items-center justify-center text-center py-16 md:py-24 px-6 relative overflow-hidden"
          >
            <div className="absolute inset-0 z-0">
              <div
                className="animated-shape shape-1"
                style={{ backgroundColor: currentColors.accent }}
              ></div>
              <div
                className="animated-shape shape-2"
                style={{ backgroundColor: currentColors.secondary }}
              ></div>
              <div
                className="animated-shape shape-3"
                style={{ backgroundColor: currentColors.primary }}
              ></div>
              <div
                className="animated-shape shape-4"
                style={{ backgroundColor: currentColors.secondary }}
              ></div>
            </div>

            <div className="max-w-7xl mx-auto z-10">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/8038b2.png"
                  alt="P Gokul Yadav"
                  className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover mb-6 border-4 shadow-xl"
                  style={{ borderColor: currentColors.primary }}
                />
                <h1 className="text-4xl md:text-6xl font-extrabold mb-2">
                  {"P Gokul Yadav"}
                </h1>
                <p
                  className="text-xl md:text-2xl mb-8"
                  style={{ color: currentColors.secondary }}
                >
                  Front-end Developer & UI Designer
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                  <a
                    href="/pgy-resume.pdf"
                    download="P-Gokul-Yadav-Resume.pdf"
                    className="flex items-center gap-2 font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    style={{
                      backgroundColor: currentColors.primary,
                      color: theme === "light" ? "white" : "#121212",
                    }}
                  >
                    <Download size={20} />
                    Download Resume
                  </a>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-md"
                      style={{ backgroundColor: currentColors.accent }}
                    >
                      <Github style={{ color: currentColors.primary }} />
                    </a>
                    <a
                      href="#"
                      className="p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-md"
                      style={{ backgroundColor: currentColors.accent }}
                    >
                      <Linkedin style={{ color: currentColors.primary }} />
                    </a>
                    <a
                      href="#"
                      className="p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-md"
                      style={{ backgroundColor: currentColors.accent }}
                    >
                      <Mail style={{ color: currentColors.primary }} />
                    </a>
                  </div>
                </div>

                <a href="#about" className="absolute bottom-10 animate-bounce">
                  <ChevronDown
                    size={32}
                    style={{ color: currentColors.primary }}
                  />
                </a>
              </div>
            </div>
          </section>

          {/* ----- About Section ----- */}
          <section
            id="about"
            className="py-16 md:py-24 px-6 md:px-12 lg:px-24 backdrop-blur-lg"
            style={{
              background: `linear-gradient(135deg, ${currentColors.sectionBg}, ${currentColors.cardBg})`,
            }}
          >
            <div className="max-w-7xl mx-auto">
              <h2
                className="text-3xl md:text-4xl font-bold text-center mb-12"
                style={{ color: currentColors.primary }}
              >
                About Me
              </h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-lg leading-relaxed text-justify">
                  <p className="mb-4">
                    Hello! I'm Gokul, a passionate Front-end Developer and UI
                    Designer with a knack for creating beautiful, intuitive, and
                    highly functional web applications. My journey into web
                    development started with a fascination for how design and
                    code can work together to create seamless user experiences.
                  </p>
                  <p className="mb-4">
                    I specialize in React, Tailwind CSS, and modern JavaScript,
                    and I always strive to write clean, efficient, and scalable
                    code. From wireframing and prototyping in Figma to building
                    responsive layouts that work on any device, I love every
                    step of the creative process.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new design
                    trends, contributing to open-source projects, or enjoying a
                    good cup of coffee.
                  </p>
                </div>
                <div
                  className="flex justify-center items-center p-8 rounded-lg shadow-lg"
                  style={{ backgroundColor: currentColors.accent }}
                >
                  <div className="text-center">
                    <h3
                      className="text-2xl font-bold mb-4"
                      style={{ color: currentColors.primary }}
                    >
                      My Skills
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4">
                      {[
                        "React",
                        "JavaScript",
                        "TypeScript",
                        "Tailwind CSS",
                        "Figma",
                        "Next.js",
                        "Node.js",
                        "UI/UX Design",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="py-2 px-4 rounded-full font-semibold shadow-sm"
                          style={{
                            backgroundColor: currentColors.secondary,
                            color: theme === "light" ? "white" : "#1a1a1a",
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ----- Works Section ----- */}
          <section id="works" className="py-16 md:py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
              <h2
                className="text-3xl md:text-4xl font-bold text-center mb-12"
                style={{ color: currentColors.primary }}
              >
                My Works
              </h2>
              <div className="grid sm:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border hover:-translate-y-2"
                    style={{
                      backgroundColor: currentColors.cardBg,
                      borderColor: currentColors.accent,
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-sm font-semibold py-1 px-3 rounded-full"
                            style={{
                              backgroundColor: currentColors.accent,
                              color: currentColors.primary,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ----- Contact Section ----- */}
          <section
            id="contact"
            className="py-16 md:py-24 px-6 md:px-12 lg:px-24 backdrop-blur-lg"
            style={{
              background: `linear-gradient(135deg, ${currentColors.cardBg}, ${currentColors.sectionBg})`,
            }}
          >
            <div className="max-w-7xl mx-auto">
              <h2
                className="text-3xl md:text-4xl font-bold text-center mb-12"
                style={{ color: currentColors.primary }}
              >
                Get In Touch
              </h2>
              <div className="max-w-2xl mx-auto text-center">
                <p className="text-lg mb-8">
                  I'm currently open to new opportunities and collaborations. If
                  you have a project in mind or just want to say hello, feel
                  free to reach out!
                </p>
                <form className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="p-3 border-2 rounded-md focus:outline-none transition-all focus:ring-2 focus:border-transparent bg-transparent"
                    style={{
                      borderColor: currentColors.accent,
                      color: currentColors.text,
                      "--tw-ring-color": currentColors.secondary,
                    }}
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="p-3 border-2 rounded-md focus:outline-none transition-all focus:ring-2 focus:border-transparent bg-transparent"
                    style={{
                      borderColor: currentColors.accent,
                      color: currentColors.text,
                      "--tw-ring-color": currentColors.secondary,
                    }}
                  />
                  <textarea
                    placeholder="Your Message"
                    rows="5"
                    className="p-3 border-2 rounded-md focus:outline-none transition-all focus:ring-2 focus:border-transparent bg-transparent"
                    style={{
                      borderColor: currentColors.accent,
                      color: currentColors.text,
                      "--tw-ring-color": currentColors.secondary,
                    }}
                  ></textarea>
                  <button
                    type="submit"
                    className="font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    style={{
                      backgroundColor: currentColors.primary,
                      color: theme === "light" ? "white" : "#121212",
                    }}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>

        {/* ----- Footer ----- */}
        <footer
          className="text-center py-6"
          style={{
            backgroundColor: currentColors.primary,
            color: theme === "light" ? "white" : "#121212",
          }}
        >
          <p>
            &copy; {new Date().getFullYear()} P Gokul Yadav. All Rights
            Reserved.
          </p>
        </footer>
      </div>
    </>
  );
}
