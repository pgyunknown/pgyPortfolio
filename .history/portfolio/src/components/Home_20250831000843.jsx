import React from "react";
import { Mail, Linkedin, Github, ChevronDown } from "lucide-react";
import { Section } from "./Section";
import { colors } from "../App";

export default function Home() {
  return (
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
          {[Github, Linkedin, Mail].map((Icon, idx) => (
            <a
              key={idx}
              href="#"
              className="p-2 rounded-full"
              style={{ backgroundColor: colors.accent }}
            >
              <Icon style={{ color: colors.primary }} />
            </a>
          ))}
        </div>

        <a href="#about" className="absolute bottom-10 animate-bounce">
          <ChevronDown size={32} style={{ color: colors.primary }} />
        </a>
      </div>
    </Section>
  );
}
