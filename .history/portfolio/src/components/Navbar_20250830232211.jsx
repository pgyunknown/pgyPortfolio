import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-between min-h-screen"
    >
      {/* Left Side */}
      <div className="w-full md:w-1/2 bg-gray-100 clip-path-skew p-10 md:p-20 flex flex-col justify-center space-y-6">
        <h2 className="text-lg text-gray-600">Hi, I am</h2>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          P Gokul Yadav
        </h1>
        <p className="text-gray-500 text-lg">
          Front-end Developer / UI Designer
        </p>

        {/* Social Links */}
        <div className="flex space-x-4 pt-4">
          <a
            href="mailto:yourmail@gmail.com"
            className="p-3 bg-gray-200 hover:bg-gray-300 rounded-md shadow"
          >
            @
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-gray-200 hover:bg-gray-300 rounded-md shadow"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-gray-200 hover:bg-gray-300 rounded-md shadow"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 bg-black flex items-center justify-center relative py-10 md:py-0">
        <div className="relative">
          {/* Circle Image */}
          <img
            src="your-image.jpg"
            alt="Profile"
            className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-full border-4 border-white shadow-lg"
          />

          {/* Outer Circle */}
          <div className="absolute inset-0 rounded-full border-2 border-white"></div>

          {/* Decorative Shapes */}
          <div className="absolute top-4 right-4 flex flex-col space-y-2 text-white">
            <span>+</span>
            <span>+</span>
            <span>+</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
