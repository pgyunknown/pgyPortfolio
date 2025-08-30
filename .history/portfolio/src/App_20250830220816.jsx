import React from "react";
import profile from "./assets/profile.png"; // replace with your image

function App() {
  return (
    <div className="font-sans scroll-smooth">
      {/* NAVBAR */}
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
          <a
            href="#contact"
            className="ml-4 px-4 py-2 rounded-full bg-black text-white hover:bg-gray-800 text-sm"
          >
            Contact Me
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100 pt-20"
      >
        <div className="md:w-1/2 text-center md:text-left px-6">
          <h2 className="text-lg">Hi, I am</h2>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">P Gokul Yadav</h1>
          <p className="text-gray-600 mt-2">
            Front-end Developer / UI Designer
          </p>

          <div className="flex justify-center md:justify-start mt-4 space-x-4">
            <a href="#">
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img
            src={profile}
            alt="Profile"
            className="rounded-full w-56 h-56 object-cover border-4 border-black shadow-lg"
          />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 bg-white text-center px-6">
        <h2 className="text-2xl font-bold mb-6 border-b-4 border-black inline-block">
          About Me
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-12">
          I am passionate about designing and developing clean, user-friendly
          interfaces. I focus on creating responsive websites with smooth UI/UX.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg">Design</h3>
            <p className="text-gray-600 mt-2">
              Crafting visually appealing and modern designs.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Development</h3>
            <p className="text-gray-600 mt-2">
              Building clean and efficient code for projects.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Maintenance</h3>
            <p className="text-gray-600 mt-2">
              Ensuring websites remain updated and functional.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-20 bg-gray-100 text-center px-6">
        <h2 className="text-2xl font-bold mb-6 border-b-4 border-black inline-block">
          Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-semibold">Project 1</h3>
            <p className="text-gray-600 mt-2">
              Brief description of the project.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-semibold">Project 2</h3>
            <p className="text-gray-600 mt-2">
              Brief description of the project.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-semibold">Project 3</h3>
            <p className="text-gray-600 mt-2">
              Brief description of the project.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 bg-white text-center px-6">
        <h2 className="text-2xl font-bold mb-6 border-b-4 border-black inline-block">
          Contact Me
        </h2>
        <p className="text-gray-600 mb-6">
          Feel free to reach out for collaborations or just a friendly chat!
        </p>
        <a
          href="mailto:gokul@example.com"
          className="px-6 py-3 rounded-full bg-black text-white hover:bg-gray-800"
        >
          Say Hello
        </a>
      </section>
    </div>
  );
}

export default App;
