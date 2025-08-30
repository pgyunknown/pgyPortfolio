import React from "react";

export const Section = ({ id, children, className = "" }) => (
  <section
    id={id}
    className={`py-16 md:py-24 px-6 md:px-12 lg:px-24 ${className}`}
  >
    <div className="max-w-7xl mx-auto">{children}</div>
  </section>
);

export const SectionTitle = ({ children, color }) => (
  <h2
    className="text-3xl md:text-4xl font-bold text-center mb-12"
    style={{ color }}
  >
    {children}
  </h2>
);
