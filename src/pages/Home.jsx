import React from "react";
import Aurora from "../components/UI/Aurora";
import SplitText from "../components/UI/SplitText";
import TextType from "../components/UI/TextType";
import Bot2 from "../assets/bot2.png";
import { RevealOnScroll } from "../pages/ScrollReveal";

function Home() {
  const year = new Date().getFullYear();
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-black"
      aria-label="Home Section"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Aurora
          colorStops={["#5227FF", "#FF9FFC", "#B19EEF"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.8}
        />
      </div>

      {/* Content Layer */}
      <div className="absolute inset-0 z-50 flex flex-col items-center justify-center text-center text-white px-6">
        {/* Heading */}
        <div>
          <div className="flex items-center justify-center">
            <img src={Bot2} alt="Bot1" className="animate-bounce h-48 w-38" />
          </div>
          <SplitText
            text={`HIBOT - ${year}`}
            className="text-3xl md:text-8xl font-extrabold text-center"
            delay={300}
            duration={1.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
          />
        </div>

        {/* Typing Effect */}
        <div className="mt-6">
          <TextType
            text={[
              "A Festival of Innovation",
              "Where Ideas Come Alive !!!",
              "Join Us & Celebrate Technology",
            ]}
            typingSpeed={75}
            textColors={["#d1d5db", "#d1d5db", "#d1d5db"]} // Tailwind gray-300
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            className="text-lg md:text-xl font-semibold"
          />
        </div>

        {/* Description */}
        <div className="mt-4 max-w-2xl"></div>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          <a
            href="#events"
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium shadow-lg hover:scale-105 transition-transform duration-200"
          >
            View Events
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-2xl border border-gray-400 text-gray-200 font-medium hover:bg-gray-800 transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Scroll Cue */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-50 animate-bounce text-gray-300 text-sm">
          ↓ Scroll to Discover
        </div>
      
    </section>
  );
}

export default Home;
