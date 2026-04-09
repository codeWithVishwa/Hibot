import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { RevealOnScroll } from "./ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: "Who is eligible to participate in HIBOT?",
      a: "HIBOT is open to all college students, independent researchers, and professionals interested in AI, robotics, and cognitive systems. We have specific tracks designed for beginners as well as industry veterans."
    },
    {
      q: "What is the registration process for external students?",
      a: "External college students can seamlessly register through our platform. Select the 'Other College' tab in the registration modal to ensure you receive external hospitality logic and gate passes."
    },
    {
      q: "Is there any entry fee for the Hackathon?",
      a: "The preliminary rounds of the hackathons are completely free. However, finalizing a physical spot in the continuous 48-hour event requires a minimal hospitality fee which is explicitly stated upon shortlisting."
    },
    {
      q: "Are the workshops certified?",
      a: "Yes. All Masterclasses and Workshops are officially certified by Hindusthan College of Arts & Science in collaboration with our industry partners, adding significant weight to your technical resume."
    },
    {
      q: "Do I need to come with a team?",
      a: "While you can register individually for seminars, hackathons and world-building sprints require a team of 2-4 members. Don't have a team? We host a global networking session on Day 1 specifically for team building."
    }
  ];

  return (
    <section className="py-24 bg-[#030303] relative border-t border-white/5 overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-heading font-semibold text-white tracking-tight mb-4">
              Frequently <span className="text-gray-500">Asked.</span>
            </h2>
            <p className="text-gray-400 text-lg font-light">
              Clear up any ambiguities before stepping into the symposium.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden transition-colors hover:bg-white/[0.03]"
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer transition-colors"
                  >
                    <span className="text-white font-medium tracking-wide pr-8">{faq.q}</span>
                    <span className="text-gray-500 bg-white/5 p-2 rounded-full min-w-[32px] flex items-center justify-center">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 text-gray-400 font-light leading-relaxed border-t border-white/5 mt-2">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default FAQ;
