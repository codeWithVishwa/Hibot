import React from "react";
import { Bot, Twitter, Github, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <div className="text-white text-2xl font-heading font-extrabold tracking-widest flex items-center gap-3 mb-6">
              <Bot size={28} className="text-indigo-500" />
              HIBOT
            </div>
            <p className="text-gray-400 font-light leading-relaxed mb-6">
              The premier symposium uniting cognitive systems, artificial intelligence, and modern engineering at Hindusthan College of Arts & Science.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin, Instagram].map((Icon, idx) => (
                <a key={idx} href="#" className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-indigo-500/20 hover:border-indigo-500/50 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Quick */}
          <div>
            <h4 className="text-white font-medium mb-6 tracking-wide uppercase text-sm">Navigation</h4>
            <ul className="space-y-4 text-gray-400 font-light">
              <li><a href="#home" className="hover:text-indigo-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-indigo-400 transition-colors">About Us</a></li>
              <li><a href="#events" className="hover:text-indigo-400 transition-colors">All Events</a></li>
              <li><a href="#gallery" className="hover:text-indigo-400 transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Links Legal */}
          <div>
            <h4 className="text-white font-medium mb-6 tracking-wide uppercase text-sm">Legal & Policies</h4>
            <ul className="space-y-4 text-gray-400 font-light">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Code of Conduct</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Refund Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-medium mb-6 tracking-wide uppercase text-sm">Newsletter</h4>
            <p className="text-gray-400 font-light mb-4">
              Subscribe to get the latest updates on upcoming hackathons and events.
            </p>
            <form className="flex border border-white/10 rounded-xl overflow-hidden focus-within:border-indigo-500/50 transition-colors bg-white/[0.02]">
              <input 
                type="email" 
                className="w-full bg-transparent outline-none px-4 py-3 text-white text-sm" 
                placeholder="Enter your email" 
              />
              <button 
                type="button" 
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 font-semibold text-sm transition-colors"
              >
                Join
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm font-light">
          <p>© {new Date().getFullYear()} HIBOT Symposium. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Engineered with <span className="text-indigo-500 text-lg leading-none">♥</span> at Hindusthan College
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
