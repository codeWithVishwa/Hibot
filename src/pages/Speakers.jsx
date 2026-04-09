import React from "react";
import { motion } from "framer-motion";
import { RevealOnScroll } from "./ScrollReveal";
import { Mic, Terminal, Database, Brain } from "lucide-react";

const Speakers = () => {
  const speakers = [
    {
      name: "Dr. Alan Turing",
      role: "Pioneer of Computation",
      topic: "The Future of Machines",
      icon: Terminal,
      bgStr: "from-blue-600/20 to-transparent",
    },
    {
      name: "Elena Rostova",
      role: "Lead Systems Architect",
      topic: "Scalable Data Pipelines",
      icon: Database,
      bgStr: "from-fuchsia-600/20 to-transparent",
    },
    {
      name: "Marcus Chen",
      role: "Director of AI Research",
      topic: "Cognitive Neural Paths",
      icon: Brain,
      bgStr: "from-purple-600/20 to-transparent",
    },
    {
      name: "Sarah Jenkins",
      role: "Cyber Security Expert",
      topic: "Zero-Trust Infrastructures",
      icon: Mic,
      bgStr: "from-indigo-600/20 to-transparent",
    }
  ];

  return (
    <section id="speakers" className="py-32 bg-[#020202] relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-5xl md:text-7xl font-heading font-black text-white tracking-tighter mb-4">
                Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Pioneers.</span>
              </h2>
              <p className="text-xl text-gray-400 font-light max-w-2xl">
                Learn directly from the architects shaping the next decade of digital infrastructure and cognitive models.
              </p>
            </div>
            <a href="#events" className="group flex items-center gap-2 text-indigo-400 font-bold uppercase tracking-widest text-sm hover:text-white transition-colors">
              View Full Lineup
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {speakers.map((s, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className={`relative overflow-hidden rounded-[2rem] bg-gradient-to-br ${s.bgStr} border border-white/10 p-8 hover:border-white/30 transition-colors group cursor-pointer h-[400px] flex flex-col justify-end`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05)_0,transparent_50%)] pointer-events-none"></div>

                <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-indigo-500/20 group-hover:scale-110 transition-all duration-300">
                  <s.icon className="text-white/50 group-hover:text-white" size={24} />
                </div>

                <div className="relative z-10">
                  <div className="inline-block px-3 py-1 bg-black/50 backdrop-blur-md rounded-lg text-xs font-mono text-gray-400 uppercase tracking-widest mb-4 border border-white/5">
                    {s.topic}
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-white mb-2 leading-tight">
                    {s.name}
                  </h3>
                  <p className="text-gray-400 font-light">
                    {s.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Speakers;
