import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Vance",
      role: "Hackathon Winner '24",
      quote: "HIBOT wasn't just a symposium; it was the exact crucible I needed to pressure-test my algorithms against actual industry parameters.",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Dr. L. K. Smith",
      role: "Visiting Research Professor",
      quote: "The intersection of cognitive AI theory and practical mechanical engineering demonstrated here sets a global benchmark for student capabilities.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Maya Chen",
      role: "Frontend Engineer @ Nexus",
      quote: "The connections I made during the VR World Building sprint landed me my senior role. The networking scale is unmatched.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] relative border-t border-white/5 overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white tracking-tighter mb-4">
            System <span className="text-gray-500">Feedback.</span>
          </h2>
          <p className="text-gray-400 font-light text-lg">
            What the industry says about the HIBOT interface.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="p-10 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors relative group"
            >
              <div className="absolute top-6 right-8 text-white/5 group-hover:text-indigo-500/10 transition-colors">
                <Quote size={80} />
              </div>
              
              <p className="text-gray-300 font-light leading-relaxed mb-8 relative z-10 min-h-[120px]">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <img 
                  src={t.avatar} 
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-white/20 grayscale group-hover:grayscale-0 transition-all"
                />
                <div>
                  <h4 className="text-white font-bold font-heading">{t.name}</h4>
                  <p className="text-indigo-400 text-xs font-mono uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
