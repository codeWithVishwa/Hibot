import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { RevealOnScroll } from "./ScrollReveal";

function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen bg-[#050505] text-gray-200 flex flex-col justify-center px-6 py-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-fuchsia-900/10 via-black to-black pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto w-full z-10">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tighter text-white">
              Let's Connect.
            </h2>
            <p className="mt-4 text-gray-500 font-light tracking-wide text-lg">We are here to answer any questions you may have.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Contact Details Grid */}
            <div className="space-y-8">
              {[
                { icon: Mail, title: "Email Address", val: "hibotfest@hindusthan.ac.in" },
                { icon: Phone, title: "Phone Number", val: "+91 98765 43210" },
                { icon: MapPin, title: "Campus Location", val: "Hindusthan College of Arts & Science" },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 p-6 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
                >
                  <div className="p-4 bg-fuchsia-500/10 rounded-2xl">
                    <item.icon className="text-fuchsia-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-heading font-bold text-gray-400 uppercase tracking-widest mb-1">{item.title}</h3>
                    <p className="text-xl text-white font-light">{item.val}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="p-8 md:p-10 rounded-3xl backdrop-blur-2xl bg-white/[0.02] border border-white/5 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-600/10 blur-[100px] pointer-events-none"></div>
              
              <form className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-700 outline-none focus:border-fuchsia-500/50 focus:ring-1 focus:ring-fuchsia-500/50 transition-all font-light"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-700 outline-none focus:border-fuchsia-500/50 focus:ring-1 focus:ring-fuchsia-500/50 transition-all font-light"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-700 outline-none focus:border-fuchsia-500/50 focus:ring-1 focus:ring-fuchsia-500/50 transition-all font-light"
                    placeholder="jane@example.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">Message</label>
                  <textarea
                    rows="4"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-700 outline-none focus:border-fuchsia-500/50 focus:ring-1 focus:ring-fuchsia-500/50 transition-all resize-none font-light"
                    placeholder="How can we help?"
                  ></textarea>
                </div>

                <button
                  type="button"
                  className="group flex items-center justify-between w-full bg-white hover:bg-gray-200 text-black px-6 py-4 rounded-xl font-heading font-bold uppercase tracking-widest text-sm transition-all"
                >
                  <span>Send Message</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </button>
              </form>
            </div>

          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export default Contact;
