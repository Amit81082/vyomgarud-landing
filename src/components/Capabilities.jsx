import React from "react";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";
export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="py-16 md:py-18 bg-[#101214] text-white"
    >
      <motion.div
        className="max-w-7xl mx-auto px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-12 text-center">
          Capabilities
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProductCard
            icon={"🚁"}
            title="Autonomous Recon Drone"
            description="Long-range autonomous UAV designed for rapid surveillance missions with real-time imaging."
          />

          <ProductCard
            icon={"🔐"}
            title="Secure Communication System"
            description="Encrypted military-grade comms enabling safe data transfer during critical missions."
          />

          <ProductCard
            icon={"🧭"}
            title="Mission Control Software"
            description="Advanced ground control software for live monitoring, smart routing, and autonomous ops."
          />

          <ProductCard
            icon={"📦"}
            title="Payload Integration"
            description="Supports tactical payloads including sensors, EO/IR cameras, and custom mission modules."
          />
        </div>
      </motion.div>
    </section>
  );
}
