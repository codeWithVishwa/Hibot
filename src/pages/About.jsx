import React from "react";
import { motion } from "framer-motion";
import { AnimatedTextGenerate } from "../components/UI/Animated-textgenerate";
import { AnimatedButton } from "../components/UI/Animated-button";
import { RevealOnScroll } from "./ScrollReveal";

function About() {
  const words = `The Departments of Computer Science with Cognitive Systems & Artificial Intelligence and Machine Learning at Hindusthan College of Arts & Science proudly present HIBOT – Design Aesthetics Idea Challenge.
HIBOT is more than just a technical fest – it’s a platform where innovation meets creativity. Through engaging workshops, competitions, and exhibitions, HIBOT encourages students to think beyond the ordinary, design futuristic solutions, and celebrate the true spirit of technology.
This event is designed to spark creativity, push the boundaries of innovation, and empower young minds with the skills and confidence to shape the future of AI, Cognitive Systems, and Machine Learning.
At HIBOT, we believe that every idea has the potential to transform the world. Join us in this journey of design, innovation, and inspiration.`;

  return (
    <section
      id="about"
      className="relative min-h-screen bg-black text-gray-200 flex flex-col items-center justify-center px-6 py-20 overflow-hidden"
    >
      <RevealOnScroll>
        {/* ✅ Gradient Frame Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative max-w-5xl w-full rounded-2xl p-[2px] 
                     bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 
                    shadow-[0_0_60px_rgba(168,85,247,0.5)]"
        >
          {/* Inner Glass Card */}
          <div className="rounded-2xl backdrop-blur-xl bg-gray-900 p-10 text-center">
            {/* Heading */}
            <h2 className="text-2xl md:text-6xl font-extrabold mb-8">
              <span className="bg-gradient-to-r from-pink-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
                About HIBOT
              </span>
            </h2>

            {/* Animated Text */}
            <AnimatedTextGenerate
              text={words}
              className="text-center space-y-6"
              textClassName="text-lg md:text-lg text-gray-400 leading-relaxed"
              blurEffect={true}
              speed={0.4}
              highlightWords={[
                "HIBOT",
                "Artificial Intelligence",
                "Machine Learning",
                "creativity",
                "innovation",
              ]}
              highlightClassName="text-pink-400 font-semibold"
              linkWords={["journey"]}
              linkHrefs={["/about"]}
              linkClassNames={["underline text-purple-400 hover:text-pink-400"]}
            />
          </div>
        </motion.div>
      </RevealOnScroll>

      {/* ✅ CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-10"
      >
        <a href="#contact">
          <AnimatedButton
            className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white px-8 py-4"
            variant="default"
            size="lg"
            glow={true}
            textEffect="shimmer"
            uppercase={true}
            rounded="full"
            asChild={false}
            hideAnimations={false}
            shimmerColor="#ff80ff"
            shimmerSize="0.2em"
            shimmerDuration="2.5s"
            borderRadius="9999px"
            background="rgba(0, 0, 0, 1)"
          >
            Contact Us
          </AnimatedButton>
        </a>
      </motion.div>
    </section>
  );
}

export default About;


