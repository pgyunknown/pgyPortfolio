import React, { useState } from "react";
import { Mail, Linkedin, Github, ChevronDown, Menu, X } from "lucide-react";

// Color Palette Constants
const colors = {
  text: "#1a1a1a",
  background: "#ffffff",
  primary: "#0077b6",
  secondary: "#00b4d8",
  accent: "#90e0ef",
};

// ----- Reusable Components -----

const Section = ({ id, children, className = "" }) => (
  <section
    id={id}
    className={`py-16 md:py-24 px-6 md:px-12 lg:px-24 ${className}`}
  >
    <div className="max-w-7xl mx-auto">{children}</div>
  </section>
);

const SectionTitle = ({ children }) => (
  <h2
    className="text-3xl md:text-4xl font-bold text-center mb-12"
    style={{ color: colors.primary }}
  >
    {children}
  </h2>
);

// ----- Page Sections -----

const Navbar = () => {
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

        {/* Desktop Menu */}
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

        {/* Mobile Menu Button */}
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
};

const Home = () => (
  <Section
    id="home"
    className="min-h-screen flex items-center justify-center text-center"
  >
    <div className="flex flex-col items-center">
      <img
        src="https://i.imgur.com/8038b2.png"
        alt="P Gokul Yadav"
        className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover mb-6 border-4"
        style={{ borderColor: colors.primary }}
      />
      <h1 className="text-4xl md:text-6xl font-extrabold mb-2">
        P Gokul Yadav
      </h1>
      <p
        className="text-xl md:text-2xl mb-8"
        style={{ color: colors.secondary }}
      >
        Front-end Developer & UI Designer
      </p>
      <div className="flex space-x-4 mb-8">
        <a
          href="#"
          className="p-2 rounded-full transition-colors"
          style={{ backgroundColor: colors.accent }}
        >
          <Github style={{ color: colors.primary }} />
        </a>
        <a
          href="#"
          className="p-2 rounded-full transition-colors"
          style={{ backgroundColor: colors.accent }}
        >
          <Linkedin style={{ color: colors.primary }} />
        </a>
        <a
          href="#"
          className="p-2 rounded-full transition-colors"
          style={{ backgroundColor: colors.accent }}
        >
          <Mail style={{ color: colors.primary }} />
        </a>
      </div>
      <a href="#about" className="absolute bottom-10 animate-bounce">
        <ChevronDown size={32} style={{ color: colors.primary }} />
      </a>
    </div>
  </Section>
);

const About = () => (
  <Section id="about" style={{ backgroundColor: "#f8f9fa" }}>
    <SectionTitle>About Me</SectionTitle>
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="text-lg leading-relaxed text-justify">
        <p className="mb-4">
          Hello! I'm Gokul, a passionate Front-end Developer and UI Designer
          with a knack for creating beautiful, intuitive, and highly functional
          web applications. My journey into web development started with a
          fascination for how design and code can work together to create
          seamless user experiences.
        </p>
        <p className="mb-4">
          I specialize in React, Tailwind CSS, and modern JavaScript, and I
          always strive to write clean, efficient, and scalable code. From
          wireframing and prototyping in Figma to building responsive layouts
          that work on any device, I love every step of the creative process.
        </p>
        <p>
          When I'm not coding, you can find me exploring new design trends,
          contributing to open-source projects, or enjoying a good cup of
          coffee.
        </p>
      </div>
      <div
        className="flex justify-center items-center p-8 rounded-lg"
        style={{ backgroundColor: colors.accent }}
      >
        <div className="text-center">
          <h3
            className="text-2xl font-bold mb-4"
            style={{ color: colors.primary }}
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
                className="py-2 px-4 rounded-full font-semibold"
                style={{ backgroundColor: colors.secondary, color: "white" }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Section>
);

const Works = () => {
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

  return (
    <Section id="works">
      <SectionTitle>My Works</SectionTitle>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm font-semibold py-1 px-3 rounded-full"
                    style={{
                      backgroundColor: colors.accent,
                      color: colors.primary,
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
    </Section>
  );
};

const Contact = () => (
  <Section id="contact" style={{ backgroundColor: "#f8f9fa" }}>
    <SectionTitle>Get In Touch</SectionTitle>
    <div className="max-w-2xl mx-auto text-center">
      <p className="text-lg mb-8">
        I'm currently open to new opportunities and collaborations. If you have
        a project in mind or just want to say hello, feel free to reach out!
      </p>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 border-2 rounded-md focus:outline-none focus:border-blue-500"
          style={{ borderColor: colors.accent }}
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 border-2 rounded-md focus:outline-none"
          style={{ borderColor: colors.accent }}
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="p-3 border-2 rounded-md focus:outline-none"
          style={{ borderColor: colors.accent }}
        ></textarea>
        <button
          type="submit"
          className="text-white font-bold py-3 px-6 rounded-lg transition-transform duration-300 hover:scale-105"
          style={{ backgroundColor: colors.primary }}
        >
          Send Message
        </button>
      </form>
    </div>
  </Section>
);

const Footer = () => (
  <footer
    className="text-center py-6"
    style={{ backgroundColor: colors.primary, color: "white" }}
  >
    <p>&copy; {new Date().getFullYear()} P Gokul Yadav. All Rights Reserved.</p>
  </footer>
);

// Main App Component
export default function App() {
  return (
    <div
      style={{ backgroundColor: colors.background, color: colors.text }}
      className="font-sans antialiased"
    >
      <Navbar />
      <main>
        <Home />
        <About />
        <Works />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
