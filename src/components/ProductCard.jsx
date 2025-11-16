import React from "react";

export default function ProductCard({ icon, title, description }) {
  return (
    <div className="bg-[#1c1f22] p-6 rounded-xl shadow hover:-translate-y-1 transition transform duration-300 border border-white/10 hover:border-[#00ffff] hover:shadow-[#00ffff]/40 cursor-pointer">
      {/* Icon */}
      {icon && (
        <div className="text-[var(--vyomOrange)] text-4xl mb-4">{icon}</div>
      )}

      {/* Title */}
      <h3 className="text-xl font-poppins font-semibold mb-2">{title}</h3>

      {/* Description */}
      <p className="text-white/70 font-inter">{description}</p>
    </div>
  );
}
