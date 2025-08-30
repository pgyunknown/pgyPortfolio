import Navbar from "./components/Navbar";
import profile from "./assets/p1.jpg"; // ⚠️ Add your photo in src/assets

function App() {
  return (
    <div className="bg-[#040a0d] text-[#e9f2f6] min-h-screen font-sans">
      <Navbar />

      {/* Home Section */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center text-center px-6 relative"
      >
        <img
          src={profile}
          alt="Profile"
          className="w-32 h-32 md:w-44 md:h-44 rounded-full border-4 border-[#8dcfeb] shadow-lg mb-6 animate-fadeIn"
        />
        <h1 className="text-4xl md:text-6xl font-bold text-[#8dcfeb] mb-4 animate-slideUp">
          Hi, I'm Gokul
        </h1>
        <p className="text-lg md:text-xl max-w-xl text-[#e9f2f6]/80 animate-fadeIn delay-200">
          Java Backend Developer & Web Enthusiast — crafting modern, minimal,
          and high-performance digital experiences.
        </p>
        <a
          href="#works"
          className="mt-6 px-6 py-3 bg-[#8dcfeb] text-[#040a0d] font-semibold rounded-lg hover:bg-[#03b3fd] transition-all hover:scale-105 shadow-md"
        >
          View My Work
        </a>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex flex-col justify-center items-center px-6 py-20"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-[#03b3fd] mb-6 animate-slideUp">
          About Me
        </h2>
        <p className="max-w-2xl text-center text-[#e9f2f6]/80 leading-relaxed animate-fadeIn delay-200">
          I’m a{" "}
          <span className="text-[#8dcfeb] font-medium">
            Java Backend Developer
          </span>{" "}
          with experience in building scalable systems and clean APIs. I also
          enjoy web development and designing simple, elegant UIs that balance
          performance with creativity.
        </p>
      </section>

      {/* Works Section */}
      <section
        id="works"
        className="min-h-screen flex flex-col justify-center items-center px-6 py-20"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-[#03b3fd] mb-12 animate-slideUp">
          Featured Works
        </h2>
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl w-full">
          <div className="p-6 bg-[#0d709a]/20 rounded-lg shadow-md hover:scale-105 transition-transform animate-fadeIn">
            <h3 className="text-xl font-bold text-[#8dcfeb] mb-2">
              Carpooling App
            </h3>
            <p className="text-[#e9f2f6]/70">
              A React Native + Firebase solution for daily commutes, optimized
              for simplicity and real-time usage.
            </p>
          </div>
          <div className="p-6 bg-[#0d709a]/20 rounded-lg shadow-md hover:scale-105 transition-transform animate-fadeIn delay-200">
            <h3 className="text-xl font-bold text-[#8dcfeb] mb-2">
              Minimal Portfolio
            </h3>
            <p className="text-[#e9f2f6]/70">
              This portfolio itself — a responsive React + Tailwind build with
              smooth transitions and minimal aesthetics.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex flex-col justify-center items-center px-6 py-20"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-[#03b3fd] mb-6 animate-slideUp">
          Contact Me
        </h2>
        <p className="mb-6 text-[#e9f2f6]/80 animate-fadeIn delay-200">
          Let’s collaborate on something amazing 🚀
        </p>
        <a
          href="mailto:gokul@example.com"
          className="px-6 py-3 bg-[#8dcfeb] text-[#040a0d] font-semibold rounded-lg hover:bg-[#03b3fd] transition-all hover:scale-105 shadow-md"
        >
          Say Hello
        </a>
      </section>
    </div>
  );
}

export default App;
