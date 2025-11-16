import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      alert(
        `Thank you for contacting us, ${name}! We will get back to you soon.`
      );
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <section id="contact" className="py-16 bg-[#101214] text-white md:py-18">
      <motion.div
        className="max-w-3xl mx-auto px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-8 text-center">
          Contact Us
        </h2>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit} // <-- use handleSubmit here
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-4 rounded-md bg-[#1c1f22] border border-white/20 text-white focus:outline-none focus:border-[var(--vyomOrange)]"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-4 rounded-md bg-[#1c1f22] border border-white/20 text-white focus:outline-none focus:border-[var(--vyomOrange)]"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p-4 rounded-md bg-[#1c1f22] border border-white/20 text-white focus:outline-none focus:border-[var(--vyomOrange)]"
          ></textarea>

          <button
            type="submit"
            className="mt-4 px-6 py-3 bg-[var(--vyomOrange)] text-white font-semibold rounded-md hover:shadow-[0_0_5px_1px_var(--vyomOrange)] hover:brightness-110 transition duration-300 cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}
