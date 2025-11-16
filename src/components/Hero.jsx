import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <header
      id="hero"
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/src/assets/hero.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full text-center md:text-left">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[var(--vyomOrange)] uppercase tracking-wider font-poppins font-semibold text-sm sm:text-base"
        >
          VyomGarud
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-white leading-snug"
        >
          Military-grade autonomy. Precision in every flight.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl font-inter text-white/80 max-w-2xl mx-auto md:mx-0"
        >
          Reliable systems for critical missions — hardened, secure, precise.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-4"
        >
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="px-6 py-3 bg-[var(--vyomOrange)] text-black font-semibold rounded-md shadow-lg transition duration-300 hover:shadow-[0_0_15px_3px_var(--vyomOrange)] hover:brightness-110 cursor-pointer text-center"
          >
            Request Demo
          </Link>

          <Link
            to="capabilities"
            smooth={true}
            duration={500}
            className="px-6 py-3 border border-white/20 rounded-md text-white hover:shadow-[0_0_15px_3px_white] hover:brightness-90 cursor-pointer text-center transition duration-300"
          >
            View Capabilities
          </Link>
        </motion.div>
      </div>
    </header>
  );
}
