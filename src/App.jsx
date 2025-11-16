import React from "react";

// Import components
import Hero from "./components/Hero";
import About from "./components/About";
import Capabilities from "./components/Capabilities";
import Highlights from "./components/Highlights";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App bg-[#1c1f22]">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Capabilities / Products Section */}
      <Capabilities />

      {/* Highlights Section */}
      <Highlights />

      {/* Contact / Footer Section */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
