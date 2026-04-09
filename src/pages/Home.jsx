import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import Aurora from "../components/UI/Aurora";
import Bot2 from "../assets/bot2.png";
import { ArrowDown, Cpu, Sparkles } from "lucide-react";

/* --- Magnetic Button Component --- */
const MagneticButton = ({ children, className, href }) => {
  const ref = useRef(null);
  const position = { x: useMotionValue(0), y: useMotionValue(0) };
  
  // Smooth spring physics for magnetic reset
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const smoothX = useSpring(position.x, springConfig);
  const smoothY = useSpring(position.y, springConfig);

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    position.x.set(middleX * 0.4);
    position.y.set(middleY * 0.4);
  };

  const reset = () => {
    position.x.set(0);
    position.y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      href={href}
      style={{ x: smoothX, y: smoothY }}
      className={`relative inline-block ${className}`}
    >
      {children}
    </motion.a>
  );
};

/* --- Main Home Component --- */
function Home() {
  const year = new Date().getFullYear();

  // 3D Tilt Effect State for bot
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Create smooth constraints for the 3D tilt
  const springConfig = { damping: 20, stiffness: 100 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(smoothMouseX, [-300, 300], [-15, 15]);

  function handlePerspectiveMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  }

  function handlePerspectiveLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  // Word Carousel State
  const words = ["Architect", "Engineer", "Innovate", "Dominate", "Design"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [words.length]);

  // Generate random stable particles
  const floatingParticles = [...Array(15)].map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    left: Math.random() * 100 + "%",
    top: Math.random() * 100 + "%",
    duration: Math.random() * 5 + 5,
    delay: Math.random() * 2
  }));

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center bg-[#020202] overflow-hidden"
    >
      {/* 1. Immersive Deep Aurora Background */}
      <div className="absolute inset-0 z-0 opacity-[0.55] mix-blend-screen pointer-events-none">
        <Aurora
          colorStops={["#111827", "#4338ca", "#0f172a", "#1e1b4b"]}
          blend={0.6}
          amplitude={1.8}
          speed={0.5}
        />
      </div>

      {/* 2. 3D Cyberpunk Horizon Floor Grid */}
      <div className="absolute bottom-0 left-0 right-0 h-[40vh] pointer-events-none" style={{ perspective: "1000px" }}>
        <motion.div 
          className="absolute inset-0 border-t border-indigo-500/10 origin-bottom"
          style={{ rotateX: "80deg", backgroundSize: "60px 60px", backgroundImage: "linear-gradient(to right, rgba(99, 102, 241, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(99, 102, 241, 0.05) 1px, transparent 1px)" }}
        >
          {/* Fading glow on the horizon */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/80 to-transparent"></div>
        </motion.div>
      </div>

      {/* 3. Floating Data Particles behind content */}
      {floatingParticles.map(p => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-indigo-400/30 blur-[1px] pointer-events-none"
          style={{ width: p.size, height: p.size, left: p.left, top: p.top }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ repeat: Infinity, duration: p.duration, delay: p.delay, ease: "easeInOut" }}
        />
      ))}

      <div className="relative z-10 container mx-auto px-6 max-w-[1400px] pt-32 pb-16">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-8">
          
          {/* Left Text Block */}
          <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left z-20">
            
            {/* Ultra-luxury Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group flex items-center gap-3 px-5 py-2 mb-8 rounded-full border border-indigo-500/20 bg-indigo-900/10 hover:bg-indigo-900/20 hover:border-indigo-500/40 transition-all cursor-crosshair text-indigo-200 text-xs font-semibold tracking-[0.2em] uppercase backdrop-blur-md shadow-[0_0_20px_rgba(79,70,229,0.15)]"
            >
              <Cpu size={14} className="group-hover:rotate-90 transition-transform duration-500" />
              Annual Tech Summit {year}
            </motion.div>

            {/* Massive Tech Headline with Rotating 3D Text */}
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-5xl sm:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-heading font-black text-white tracking-tighter leading-[1] mb-8"
            >
              We <br className="hidden lg:block"/>
              <span className="inline-block relative">
                {/* Text underline glow */}
                <div className="absolute bottom-1 left-0 w-full h-[30%] bg-indigo-500/20 blur-[15px]"></div>
                
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    initial={{ y: 50, opacity: 0, rotateX: -90, scale: 0.9 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0, scale: 1 }}
                    exit={{ y: -50, opacity: 0, rotateX: 90, scale: 0.9 }}
                    transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-400 to-fuchsia-400 drop-shadow-[0_0_30px_rgba(99,102,241,0.3)] relative z-10"
                    style={{ transformOrigin: "50% 50% -50px" }}
                  >
                    {words[index]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <br/> Tomorrow.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-xl mb-12"
            >
              Hindusthan College of Arts & Science presents <strong className="text-white font-medium">HIBOT</strong>. An elite symposium uniting cognitive systems, artificial intelligence, and modern engineering.
            </motion.p>

            {/* Magnetic Physics Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
            >
              <MagneticButton href="#events">
                <div className="group relative w-full sm:w-auto px-10 py-5 rounded-3xl bg-white text-black font-semibold text-sm tracking-[0.15em] uppercase transition-all duration-300 text-center overflow-hidden flex items-center gap-3">
                  <div className="absolute inset-0 bg-gray-200 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                  <Sparkles size={16} className="relative z-10 text-indigo-600" />
                  <span className="relative z-10">Secure Pass</span>
                </div>
              </MagneticButton>
              
              <MagneticButton href="#about">
                <div className="w-full sm:w-auto px-10 py-5 rounded-3xl bg-transparent border border-white/10 text-gray-300 font-medium text-sm tracking-[0.15em] uppercase hover:bg-white/5 hover:text-white hover:border-white/30 transition-all duration-300 text-center backdrop-blur-md">
                  Explore Hub
                </div>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Image Block - Liquid 3D Hover Tilt */}
          <div 
            className="w-full lg:w-[45%] flex justify-center lg:justify-end z-20"
            onMouseMove={handlePerspectiveMove}
            onMouseLeave={handlePerspectiveLeave}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.7, filter: "blur(20px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative w-full max-w-[360px] md:max-w-[480px] lg:max-w-[600px] aspect-square flex items-center justify-center rounded-full"
              style={{ rotateX, rotateY, perspective: 1200 }}
            >
              {/* Intelligent dynamic lighting core tracking cursor */}
              <motion.div 
                className="absolute w-full h-full rounded-full blur-[100px] bg-indigo-600/20 mix-blend-screen pointer-events-none"
                style={{ x: useTransform(mouseX, val => val * 0.2), y: useTransform(mouseY, val => val * 0.2) }}
              ></motion.div>
              
              {/* Immersive Bot Image */}
              <motion.img 
                src={Bot2} 
                alt="HIBOT Core Terminal" 
                className="w-full h-full object-contain relative z-20 drop-shadow-[0_30px_60px_rgba(79,70,229,0.3)] pointer-events-none"
                animate={{ y: [0, -25, 0] }}
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
              />

              {/* Orbital Interface Ring */}
              <motion.div 
                className="absolute inset-[-10%] border-[2px] border-indigo-400/20 rounded-full border-t-indigo-400/60 pointer-events-none z-10"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              ></motion.div>
              <motion.div 
                className="absolute inset-[-5%] border border-fuchsia-400/10 rounded-full border-b-fuchsia-400/40 pointer-events-none z-10"
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              ></motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Extreme Floating Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-indigo-200/50 hover:text-indigo-400 transition-colors cursor-pointer z-30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        onClick={() => document.getElementById('sponsors')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[9px] font-heading font-bold uppercase tracking-[0.4em] rotate-90 my-6">Scroll</span>
        <motion.div
           animate={{ y: [0, 10, 0] }}
           transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
           className="p-2 rounded-full border border-indigo-500/20 bg-indigo-500/5"
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Home;
