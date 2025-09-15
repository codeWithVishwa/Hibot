import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { RevealOnScroll } from "./ScrollReveal";

function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen bg-black text-gray-200 flex items-center justify-center px-6 py-10 overflow-hidden"
    >
      <RevealOnScroll>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative max-w-5xl w-full rounded-2xl p-[2px] bg-gradient-to-r 
                     from-pink-500 via-fuchsia-500 to-purple-600 shadow-[0_0_60px_rgba(168,85,247,0.5)]"
        >
          {/* Inner glassy card */}
          <div className="rounded-2xl backdrop-blur-xl bg-gray-900 p-10">
            {/* Heading */}
            <h2 className="text-5xl md:text-6xl font-extrabold mb-10 text-center">
              <span className="bg-gradient-to-r from-pink-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
                Contact Us
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-600/20 rounded-xl">
                    <Mail className="text-purple-400" size={28} />
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Email</p>
                    <p className="text-gray-400">hibotfest@hindusthan.ac.in</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-600/20 rounded-xl">
                    <Phone className="text-purple-400" size={28} />
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Phone</p>
                    <p className="text-gray-400">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-600/20 rounded-xl">
                    <MapPin className="text-purple-400" size={28} />
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Location</p>
                    <p className="text-gray-400">
                      Hindusthan College of Arts & Science, Coimbatore
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form className="space-y-6">
                <div>
                  <label className="block mb-2 text-sm text-gray-300">Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-purple-500/30 
                               focus:border-purple-500 focus:ring-1 focus:ring-purple-500 
                               outline-none text-white"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray-300">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-purple-500/30 
                               focus:border-purple-500 focus:ring-1 focus:ring-purple-500 
                               outline-none text-white"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray-300">Message</label>
                  <textarea
                    rows="4"
                    placeholder="Write your message..."
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-purple-500/30 
                               focus:border-purple-500 focus:ring-1 focus:ring-purple-500 
                               outline-none text-white resize-none"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 px-6 rounded-xl bg-gradient-to-r 
                             from-pink-500 via-purple-600 to-fuchsia-500
                             text-white font-semibold shadow-lg hover:opacity-90 transition"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </RevealOnScroll>
    </section>
  );
}

export default Contact;

