import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-16 bg-gray-100"
    >
      {/* Left Section */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left">
        <h2 className="text-lg font-medium text-gray-700">Hi, I am</h2>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          P Gokul Yadav
        </h1>
        <p className="text-gray-500 text-lg">
          Front-end Developer / UI Designer
        </p>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start space-x-4 pt-4">
          <a
            href="mailto:yourmail@gmail.com"
            className="p-2 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            @
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="p-2 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="p-2 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <div className="relative">
          {/* Profile Image */}
          <img
            src="portfolio/src/assets/p1.jpg"
            alt="Profile"
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-white shadow-xl"
          />

          {/* Decorative Circle */}
          <div className="absolute inset-0 rounded-full border-2 border-white"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
