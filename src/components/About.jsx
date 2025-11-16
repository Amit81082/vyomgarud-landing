import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-16 bg-[var(--vyomCharcoal)]/90 text-white md:py-15 max-w-7xl mx-auto px-6"
    >
      <motion.div
        className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Left side: Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
            About VyomGarud
          </h2>
          <p className="text-lg md:text-xl font-inter mb-2">
            Reliable UAV systems
          </p>
          <p className="text-lg md:text-xl font-inter mb-2">
            Military-grade performance
          </p>
          <p className="text-lg md:text-xl font-inter mb-2">
            Autonomous intelligence
          </p>
        </div>

        {/* Right side: Optional image/icon */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/src/assets/drone(1).png" // temporary placeholder, can replace with UAV icon
            alt="Drone Illustration"
            className="w-full max-w-sm rounded-md hover:-translate-y-1 transform duration-300"
          />
        </div>
      </motion.div>
    </section>
  );
}
