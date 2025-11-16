import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <footer className="bg-[var(--vyomCharcoal)] text-white py-5 mt-3">
      <motion.div
        className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Company Name + Year */}
        <p className="font-inter text-sm">
          © {new Date().getFullYear()} VyomGarud. All rights reserved.
        </p>

        {/* Contact Email */}
        <a
          href="mailto:contact@vyomgarud.com"
          className="font-inter text-sm text-[var(--vyomOrange)] hover:shadow-[0_0_5px_1px_var(--vyomOrange)] hover:px-2 transition duration-300"
        >
          contact@vyomgarud.com
        </a>

        {/* Socials (Optional) */}
        <div className="flex gap-4">
          <Link
            to="hero" // ID of Hero section
            smooth={true} // smooth scroll
            duration={500} // scroll duration in ms
            className="text-[var(--vyomOrange)] hover:text-[var(--vyomOrange)] hover:shadow-[0_0_5px_1px_var(--vyomOrange)] hover:px-2 transition duration-300 cursor-pointer"
          >
            LinkedIn
          </Link>

          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="text-[var(--vyomOrange)] hover:text-[var(--vyomOrange)] hover:shadow-[0_0_5px_1px_var(--vyomOrange)] hover:px-2 transition duration-300 cursor-pointer"
          >
            Twitter
          </Link>

          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="text-[var(--vyomOrange)] hover:text-[var(--vyomOrange)] hover:shadow-[0_0_5px_1px_var(--vyomOrange)] hover:px-2 transition duration-300 cursor-pointer"
          >
            GitHub
          </Link>
        </div>
      </motion.div>
    </footer>
  );
}
