import Navbar from "./components/Navbar";
import profile from "./assets/p1.jpg"; // ⚠️ add your photo in src/assets

function App() {
  return (
    <div className="bg-[#040a0d] text-[#e9f2f6] min-h-screen font-sans">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="h-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-20 gap-10"
      >
        {/* Left: Intro */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-[#8dcfeb] mb-4 animate-slideUp">
            Hi, I'm Gokul
          </h1>
          <p className="text-lg md:text-xl text-[#e9f2f6]/80 mb-6 animate-fadeIn delay-200">
            Java Backend Developer & Web Enthusiast. I create scalable systems
            and clean digital experiences with a touch of minimal design.
          </p>
          <a
            href="#works"
            className="px-6 py-3 bg-[#8dcfeb] text-[#040a0d] font-semibold rounded-lg hover:bg-[#03b3fd] transition-all hover:scale-105 shadow-md"
          >
            Explore My Work
          </a>
        </div>

        {/* Right: Profile Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={profile}
            alt="Profile"
            className="w-44 h-44 md:w-64 md:h-64 rounded-full border-4 border-[#03b3fd] shadow-lg animate-fadeIn"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-8 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#03b3fd] mb-8">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto bg-[#0d709a]/10 p-8 rounded-lg shadow-lg animate-fadeIn">
          <p className="text-lg text-[#e9f2f6]/80 leading-relaxed">
            I specialize in{" "}
            <span className="text-[#8dcfeb]">Java Backend Development</span>,
            building robust APIs and scalable applications. I also enjoy
            front-end design, blending clean UI with smooth functionality.
            Passionate about learning, solving problems, and collaborating on
            impactful projects.
          </p>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className="py-20 px-8 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#03b3fd] mb-12">
          Featured Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          <div className="p-6 bg-[#0d709a]/10 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform text-left">
            <h3 className="text-xl font-bold text-[#8dcfeb] mb-2">
              Carpooling App
            </h3>
            <p className="text-[#e9f2f6]/70">
              A React Native + Firebase app for daily commutes, enabling
              real-time ride sharing between Hassan and Bangalore.
            </p>
          </div>
          <div className="p-6 bg-[#0d709a]/10 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform text-left">
            <h3 className="text-xl font-bold text-[#8dcfeb] mb-2">
              Portfolio Website
            </h3>
            <p className="text-[#e9f2f6]/70">
              This responsive portfolio built with React + TailwindCSS — minimal
              yet powerful, designed to showcase skills.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#03b3fd] mb-6">
          Get In Touch
        </h2>
        <p className="mb-6 text-[#e9f2f6]/80">
          Let’s collaborate on something amazing 🚀
        </p>
        <a
          href="mailto:gokul@example.com"
          className="px-8 py-3 bg-[#8dcfeb] text-[#040a0d] font-semibold rounded-lg hover:bg-[#03b3fd] transition-all hover:scale-105 shadow-md"
        >
          Say Hello
        </a>
      </section>
    </div>
  );
}

export default App;
