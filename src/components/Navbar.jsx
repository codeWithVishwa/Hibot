import React, { useState, useEffect } from "react";
import { Menu, X, Bot } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "gallery", "events", "contact"];
      let current = "home";

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 120; 
          if (window.scrollY >= top) {
            current = id;
          }
        }
      }
      setActiveSection(current);
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id) =>
    `transition-all duration-300 relative tracking-wide ${
      activeSection === id
        ? "text-fuchsia-400 font-bold"
        : "text-gray-300 hover:text-white"
    } hover:after:w-full after:w-0 after:h-[2px] after:bg-fuchsia-400 after:absolute after:-bottom-1 after:left-0 after:transition-all after:duration-300 ${activeSection === id ? "after:w-full" : ""}`;

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] md:w-[75%] z-[90]">
      <div className={`transition-all duration-500 backdrop-blur-xl rounded-2xl flex items-center justify-between px-8 py-4 ${scrolled ? 'bg-black/60 border border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.5)]' : 'bg-transparent border-transparent'}`}>
        
        {/* Logo */}
        <div className="text-white text-2xl font-heading font-extrabold tracking-widest flex items-center gap-3">
          <Bot size={28} className="text-fuchsia-400" />
          HIBOT
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-10 text-sm font-medium">
          <li><a href="#home" className={linkClass("home")}>Home</a></li>
          <li><a href="#about" className={linkClass("about")}>About</a></li>
          <li><a href="#gallery" className={linkClass("gallery")}>Gallery</a></li>
          <li><a href="#events" className={linkClass("events")}>Events</a></li>
          <li><a href="#contact" className={linkClass("contact")}>Contact</a></li>
          <li>
            <a
              href="#events"
              className={`px-7 py-2.5 rounded-full font-bold uppercase tracking-wider text-xs transition-all duration-300 ${
                activeSection === "events"
                  ? "bg-indigo-600 text-white shadow-[0_0_20px_rgba(79,70,229,0.5)] scale-105"
                  : "bg-white/10 hover:bg-indigo-600 text-white hover:shadow-[0_0_20px_rgba(79,70,229,0.5)]"
              }`}
            >
              Register
            </a>
          </li>
          <li>
            <a
              href="/admin"
              className="ml-2 px-6 py-2.5 rounded-full border border-indigo-500/30 text-indigo-300 font-bold uppercase tracking-wider text-xs hover:bg-indigo-500/10 hover:border-indigo-500 transition-all duration-300"
            >
              Portal Login
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-300 hover:text-white transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div className={`md:hidden absolute top-full left-0 w-full mt-4 backdrop-blur-xl bg-black/80 border border-white/5 rounded-2xl shadow-2xl py-6 px-6 transition-all duration-300 ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
        <ul className="flex flex-col space-y-6 text-sm font-medium items-center">
          {["home", "about", "gallery", "events", "contact"].map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`uppercase tracking-widest ${activeSection === id ? 'text-fuchsia-400 font-bold' : 'text-gray-300'}`}
                onClick={() => setIsOpen(false)}
              >
                {id}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#events"
              className="px-8 py-3 mt-4 inline-block rounded-full bg-indigo-600 text-white font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(79,70,229,0.4)]"
              onClick={() => setIsOpen(false)}
            >
              Register
            </a>
          </li>
          <li>
            <a
              href="/admin"
              className="px-8 py-3 mt-2 inline-block rounded-full border border-indigo-500/30 text-indigo-300 font-bold uppercase tracking-wider w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Portal Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
