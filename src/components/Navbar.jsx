import React, { useState, useEffect } from "react";
import { Menu, X, Bot } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // 🔥 Track scroll position to set active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "events", "contact", "register"];
      let current = "home";

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 120; // adjust for navbar height
          if (window.scrollY >= top) {
            current = id;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id) =>
    `transition ${
      activeSection === id
        ? "text-purple-400 font-bold border-purple-400"
        : "text-white hover:text-purple-300"
    }`;

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-[70%] z-90">
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-lg px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-2xl font-extrabold tracking-wide flex gap-3">
          <Bot size={28} color="white" />
          HIBOT
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          <li>
            <a href="#home" className={linkClass("home")}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className={linkClass("about")}>
              About
            </a>
          </li>
          <li>
            <a href="#events" className={linkClass("events")}>
              Events
            </a>
          </li>
          <li>
            <a href="#contact" className={linkClass("contact")}>
              Contact
            </a>
          </li>
          <li>
            <a
              href="#register"
              className={`px-4 py-2 rounded-lg transition ${
                activeSection === "register"
                  ? "bg-purple-700 text-white"
                  : "bg-purple-600 hover:bg-purple-700 text-white"
              }`}
            >
              Register
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-2 backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl shadow-lg py-4 px-6">
          <ul className="flex flex-col space-y-4 text-sm font-medium items-center">
            {["home", "about", "events", "contact"].map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={linkClass(id)}
                  onClick={() => setIsOpen(false)}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#register"
                className={`px-4 py-2 rounded-lg transition ${
                  activeSection === "register"
                    ? "bg-purple-700 text-white"
                    : "bg-purple-600 hover:bg-purple-700 text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Register
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;





