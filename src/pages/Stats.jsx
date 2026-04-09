import React, { useState, useEffect, useRef } from "react";
import { Users, Code, Trophy, Target } from "lucide-react";
import { RevealOnScroll } from "./ScrollReveal";

const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let startTimestamp = null;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}</span>;
};

const Stats = () => {
  const stats = [
    { label: "Active Participants", value: 5000, suffix: "+", icon: Users },
    { label: "Lines of Code Written", value: 120, suffix: "K", icon: Code },
    { label: "Hackathon Prizes", value: 45, suffix: "", icon: Trophy },
    { label: "Colleges Involved", value: 150, suffix: "+", icon: Target },
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center justify-center p-10 rounded-[2rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <stat.icon size={100} className="text-gray-400" rotate={-15} />
                </div>
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="text-5xl md:text-6xl font-heading font-extrabold text-white mb-2">
                    <CountUp end={stat.value} duration={2500} />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 ml-1">
                      {stat.suffix}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 font-mono tracking-widest uppercase">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Stats;
