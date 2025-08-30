// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Shared colors (exportable for all components)
export const colors = {
  text: "#1a1a1a",
  background: "#ffffff",
  primary: "#0077b6",
  secondary: "#00b4d8",
  accent: "#90e0ef",
};

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
