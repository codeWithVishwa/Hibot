import React from "react";
import { Server, Database, Cloud, Shield, Cpu, Code2 } from "lucide-react";
import { RevealOnScroll } from "./ScrollReveal";

const Sponsors = () => {
  const sponsors = [
    { icon: Server, name: "DataSys", desc: "Cloud Architecture" },
    { icon: Database, name: "NexusDB", desc: "Data Solutions" },
    { icon: Cloud, name: "SkyNet", desc: "AI Hosting" },
    { icon: Shield, name: "Aegis", desc: "Cyber Security" },
    { icon: Cpu, name: "Quantum", desc: "Processors" },
    { icon: Code2, name: "DevCore", desc: "Software Tools" },
  ];

  return (
    <section className="py-24 bg-[#020202] border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_0,transparent_70%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-semibold text-white tracking-tight uppercase mb-4">
              Backed by Industry <span className="text-gray-500">Leaders</span>
            </h2>
            <p className="text-gray-400 font-light tracking-wide">
              Strategic partnerships scaling the frontiers of cognitive engineering.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {sponsors.map((sponsor, idx) => (
              <div 
                key={idx} 
                className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-white/20 hover:bg-white/[0.03] transition-all duration-300"
              >
                <sponsor.icon className="text-gray-500 group-hover:text-white transition-colors mb-4" size={32} />
                <h3 className="text-white font-heading font-medium tracking-wide text-sm">{sponsor.name}</h3>
                <p className="text-xs text-gray-500 font-light mt-1">{sponsor.desc}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Sponsors;
