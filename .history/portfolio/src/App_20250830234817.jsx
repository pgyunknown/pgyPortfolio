import React from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-[#040a0d] text-[#e9f2f6] min-h-screen flex">
      {/* Sidebar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 ml-56 p-8">
        {/* Background Glow */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#03b3fd] rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-10 w-56 h-56 bg-[#8dcfeb] rounded-full blur-2xl opacity-20"></div>

        {/* Sections */}
        <section
          id="home"
          className="min-h-screen flex flex-col justify-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#8dcfeb]">
            Hi, I'm <span className="text-[#03b3fd]">Your Name</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-[#e9f2f6]">
            I build modern backend systems & web applications.
          </p>
          <a
            href="#works"
            className="mt-6 inline-block bg-[#03b3fd] text-[#040a0d] px-6 py-2 rounded-lg font-medium hover:bg-[#0d709a] transition"
          >
            View My Work
          </a>
        </section>

        <section
          id="about"
          className="min-h-screen flex flex-col justify-center"
        >
          <h2 className="text-3xl font-bold text-[#8dcfeb] mb-4">About Me</h2>
          <p className="text-lg leading-relaxed max-w-2xl">
            I am a passionate developer specializing in backend systems,
            building scalable APIs, and creating impactful solutions. With
            expertise in Java, Spring Boot, and modern web technologies, I aim
            to deliver clean and efficient code.
          </p>
        </section>

        <section
          id="works"
          className="min-h-screen flex flex-col justify-center"
        >
          <h2 className="text-3xl font-bold text-[#8dcfeb] mb-4">My Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0d709a] p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold">Project 1</h3>
              <p className="mt-2 text-sm">Description of project 1...</p>
            </div>
            <div className="bg-[#0d709a] p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold">Project 2</h3>
              <p className="mt-2 text-sm">Description of project 2...</p>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="min-h-screen flex flex-col justify-center"
        >
          <h2 className="text-3xl font-bold text-[#8dcfeb] mb-4">Contact</h2>
          <p className="text-lg mb-6">
            Feel free to reach out for collaborations or just a friendly hello
            👋
          </p>
          <a
            href="mailto:youremail@example.com"
            className="bg-[#03b3fd] text-[#040a0d] px-6 py-2 rounded-lg font-medium hover:bg-[#0d709a] transition"
          >
            Email Me
          </a>
        </section>
      </main>
    </div>
  );
}

export default App;
