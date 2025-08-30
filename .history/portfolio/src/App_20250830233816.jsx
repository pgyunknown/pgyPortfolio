import Navbar from "./components/Navbar";
import profile from "./assets/p1.jpg"; // ⚠️ Put your photo in src/assets

function App() {
  return (
    <div className="bg-[#030809] text-[#e0edf0] min-h-screen font-sans">
      <Navbar />

      {/* Home Section */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden"
      >
        {/* Background Accent Circle */}
        <div className="absolute -top-32 -left-32 w-72 h-72 bg-[#1b7b92]/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3fc9ea]/20 rounded-full blur-3xl"></div>

        {/* Profile Image */}
        <img
          src={profile}
          alt="Profile"
          className="w-32 h-32 md:w-44 md:h-44 rounded-full border-4 border-[#8fd1e1] shadow-lg mb-6 animate-fadeIn"
        />

        <h1 className="text-4xl md:text-6xl font-bold text-[#8fd1e1] mb-4 animate-slideUp">
          Hi, I'm Gokul
        </h1>
        <p className="text-lg md:text-xl max-w-xl text-[#e0edf0]/80 animate-fadeIn delay-200">
          A passionate Java Backend Developer & Web Enthusiast building
          creative, minimal, and smooth digital experiences.
        </p>
        <a
          href="#works"
          className="mt-6 px-6 py-3 bg-[#8fd1e1] text-[#030809] font-semibold rounded-xl hover:bg-[#3fc9ea] transition-all hover:scale-105 shadow-md"
        >
          View My Work
        </a>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex flex-col justify-center items-center px-6 py-20 relative"
      >
        {/* Accent Divider */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#8fd1e1] to-[#3fc9ea] rounded-full"></div>

        <h2 className="text-3xl md:text-4xl font-semibold text-[#3fc9ea] mb-6 animate-slideUp">
          About Me
        </h2>
        <p className="max-w-2xl text-center text-[#e0edf0]/80 leading-relaxed animate-fadeIn delay-200">
          I specialize in{" "}
          <span className="text-[#8fd1e1]">Java backend development</span>
          and web technologies. I love blending minimal design with smooth
          functionality to create seamless user experiences. Always curious,
          always learning.
        </p>
      </section>

      {/* Works Section */}
      <section
        id="works"
        className="min-h-screen flex flex-col justify-center items-center px-6 py-20 relative"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-[#3fc9ea] mb-12 animate-slideUp">
          My Works
        </h2>
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl w-full">
          <div className="p-6 bg-[#1b7b92]/20 rounded-xl shadow-md hover:scale-105 transition-transform animate-fadeIn">
            <h3 className="text-xl font-bold text-[#8fd1e1] mb-2">
              Carpooling App
            </h3>
            <p className="text-[#e0edf0]/70">
              A React Native + Firebase project designed to simplify daily
              commutes between Hassan and Bangalore.
            </p>
          </div>
          <div className="p-6 bg-[#1b7b92]/20 rounded-xl shadow-md hover:scale-105 transition-transform animate-fadeIn delay-200">
            <h3 className="text-xl font-bold text-[#8fd1e1] mb-2">Portfolio</h3>
            <p className="text-[#e0edf0]/70">
              This very portfolio — built with React + TailwindCSS, minimal yet
              beautiful.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex flex-col justify-center items-center px-6 py-20 relative"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-[#3fc9ea] mb-6 animate-slideUp">
          Contact Me
        </h2>
        <p className="mb-6 text-[#e0edf0]/80 animate-fadeIn delay-200">
          Let's connect — whether it's a collaboration, project idea, or just a
          hello 👋
        </p>
        <a
          href="mailto:gokul@example.com"
          className="px-6 py-3 bg-[#8fd1e1] text-[#030809] font-semibold rounded-xl hover:bg-[#3fc9ea] transition-all hover:scale-105 shadow-lg"
        >
          Say Hello
        </a>
      </section>
    </div>
  );
}

export default App;
