import React from "react";
import { motion } from "framer-motion";

export default function Highlights() {
  return (
    <section
      id="highlights"
      className="py-16 bg-[var(--vyomCharcoal)] text-white md:py-18 max-w-7xl mx-auto px-6"
    >
      <motion.div
        className="max-w-7xl mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-8">
          Key Highlights
        </h2>

        {/* Chips */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="bg-[#1c1f22] px-6 py-3 rounded-full font-inter font-medium border border-white/20 hover:bg-[var(--vyomOrange)] hover:text-black cursor-pointer transition duration-300 hover:shadow-[0_0_10px_1px_var(--vyomOrange)] hover:brightness-110">
            MIL-STD Reliability
          </div>
          <div className="bg-[#1c1f22] px-6 py-3 rounded-full font-inter font-medium border border-white/20 hover:bg-[var(--vyomOrange)] hover:text-black transition duration-300 hover:shadow-[0_0_10px_1px_var(--vyomOrange)] hover:brightness-110 cursor-pointer">
            Secure Low-Latency Comms
          </div>
          <div className="bg-[#1c1f22] px-6 py-3 rounded-full font-inter font-medium border border-white/20 hover:bg-[var(--vyomOrange)] hover:text-black transition duration-300 hover:shadow-[0_0_10px_1px_var(--vyomOrange)] hover:brightness-110 cursor-pointer">
            Extended Endurance
          </div>
        </div>
      </motion.div>
    </section>
  );
}
