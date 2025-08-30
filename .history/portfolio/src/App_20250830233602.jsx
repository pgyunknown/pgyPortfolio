import Navbar from "./Navbar";

function App() {
  return (
    <div className="bg-[#030809] text-[#e0edf0] min-h-screen">
      <Navbar />

      {/* Home Section */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center text-center px-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-[#8fd1e1] mb-4">
          Hi, I'm Gokul
        </h1>
        <p className="text-lg md:text-xl max-w-xl text-[#e0edf0]/80">
          A passionate Java Backend Developer & Web Enthusiast building
          creative, minimal, and smooth digital experiences.
        </p>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex flex-col justify-center items-center px-6 py-20"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-[#3fc9ea] mb-6">
          About Me
        </h2>
        <p className="max-w-2xl text-center text-[#e0edf0]/80 leading-relaxed">
          I specialize in Java backend development and web technologies. I love
          blending minimal design with smooth functionality to create seamless
          user experiences.
        </p>
      </section>

      {/* Works Section */}
      <section
        id="works"
        className="min-h-screen flex flex-col justify-center items-center px-6 py-20"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-[#3fc9ea] mb-6">
          My Works
        </h2>
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl w-full">
          <div className="p-6 bg-[#1b7b92]/20 rounded-xl shadow-md hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold text-[#8fd1e1] mb-2">
              Carpooling App
            </h3>
            <p className="text-[#e0edf0]/70">
              React Native + Firebase project for daily commutes.
            </p>
          </div>
          <div className="p-6 bg-[#1b7b92]/20 rounded-xl shadow-md hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold text-[#8fd1e1] mb-2">Portfolio</h3>
            <p className="text-[#e0edf0]/70">
              This very minimal portfolio built with React + Tailwind.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex flex-col justify-center items-center px-6 py-20"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-[#3fc9ea] mb-6">
          Contact Me
        </h2>
        <p className="mb-6 text-[#e0edf0]/80">
          Feel free to reach out for collaborations or just a friendly hello 👋
        </p>
        <a
          href="mailto:gokul@example.com"
          className="px-6 py-3 bg-[#8fd1e1] text-[#030809] font-semibold rounded-xl hover:bg-[#3fc9ea] transition-colors"
        >
          Say Hello
        </a>
      </section>
    </div>
  );
}

export default App;
