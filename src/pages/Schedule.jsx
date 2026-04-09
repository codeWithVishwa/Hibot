import React from "react";
import { motion } from "framer-motion";
import { RevealOnScroll } from "./ScrollReveal";

const Schedule = () => {
  const timeline = [
    {
      time: "09:00 AM",
      title: "Opening Keynote",
      desc: "An introduction to the current state of Cognitive Computing.",
      speaker: "Dr. Alan Turing",
      color: "border-blue-500",
      dot: "bg-blue-500"
    },
    {
      time: "11:30 AM",
      title: "Hackathon Kickoff",
      desc: "Teams assemble. Environments are provisioned. 48 hours begins.",
      speaker: "Event Coordinators",
      color: "border-fuchsia-500",
      dot: "bg-fuchsia-500"
    },
    {
      time: "02:00 PM",
      title: "Zero-Trust Infrastructure",
      desc: "Deep dive into securing modern distributed networks.",
      speaker: "Sarah Jenkins",
      color: "border-indigo-500",
      dot: "bg-indigo-500"
    },
    {
      time: "05:00 PM",
      title: "Fireside Chat: Neural Archs",
      desc: "Open floor Q&A regarding the limits of LLMs processing.",
      speaker: "Marcus Chen",
      color: "border-purple-500",
      dot: "bg-purple-500"
    }
  ];

  return (
    <section id="schedule" className="py-24 bg-[#050505] relative border-t border-white/5">
      <div className="absolute left-0 top-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-heading font-black text-white tracking-tighter mb-4">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Timeline.</span>
            </h2>
            <p className="text-gray-400 font-light text-lg">
              Structured precision. Navigate the core sessions of Day 1.
            </p>
          </div>

          <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 md:border-none">
            {/* Desktop Center Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {timeline.map((event, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className={`relative flex flex-col md:flex-row md:items-center justify-between w-full md:w-1/2 gap-6 ${isEven ? 'md:ml-auto md:pl-12' : 'md:pr-12 md:text-right'}`}
                  >
                    {/* Glowing Dot Marker */}
                    <div className={`absolute left-[-21px] md:left-auto ${isEven ? 'md:-left-2' : 'md:-right-2'} top-6 md:top-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full ${event.dot} shadow-[0_0_15px_inherit]`}>
                      <div className="absolute inset-0 bg-inherit rounded-full animate-ping opacity-50"></div>
                    </div>
                    
                    <div className={`w-full p-8 rounded-[2rem] bg-black/40 border ${event.color}/20 hover:${event.color}/50 backdrop-blur-md transition-colors group`}>
                      <div className={`inline-block px-4 py-1.5 rounded-full border border-white/5 bg-white/[0.02] text-white font-mono text-xs uppercase tracking-widest mb-4 group-hover:bg-white/5 transition-colors ${!isEven && 'md:ml-auto'}`}>
                        {event.time}
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-white mb-2">{event.title}</h3>
                      <p className="text-gray-400 font-light text-sm mb-4">{event.desc}</p>
                      
                      <div className={`flex items-center gap-3 ${!isEven && 'md:justify-end'}`}>
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-gray-400">
                          {event.speaker.charAt(0)}
                        </div>
                        <span className="text-sm font-semibold text-gray-300">{event.speaker}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Schedule;
