import React from "react";
import { motion } from "framer-motion";
import { Code, Cpu, Globe, Lightbulb } from "lucide-react";

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#030303] text-gray-200 flex flex-col items-center justify-center px-6 py-24 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Top Header Section */}
        <motion.div 
          className="text-center md:text-left mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-300 text-xs font-medium tracking-widest uppercase">
            About Our Mission
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-semibold tracking-tight text-white mb-6">
            Architecting the <span className="text-gray-500">Unseen.</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed font-light">
            The Departments of Computer Science with Cognitive Systems & Artificial Intelligence and Machine Learning at Hindusthan College of Arts & Science proudly present HIBOT. More than a fest, it is a crucible where theoretical AI transforms into tangible impact.
          </p>
        </motion.div>

        {/* Extended Features Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Box 1 */}
          <motion.div variants={itemVariants} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group">
            <div className="p-4 bg-indigo-500/10 rounded-2xl w-max mb-6">
              <Cpu className="text-indigo-400 group-hover:scale-110 transition-transform" size={28} />
            </div>
            <h3 className="text-2xl font-heading font-semibold text-white mb-4">Cognitive Evolution</h3>
            <p className="text-gray-400 font-light leading-relaxed">
              Participate in hands-on workshops exploring neural architectures, deep learning paradigms, and the underlying cognitive systems automating our modern world.
            </p>
          </motion.div>

          {/* Box 2 */}
          <motion.div variants={itemVariants} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group">
            <div className="p-4 bg-purple-500/10 rounded-2xl w-max mb-6">
              <Code className="text-purple-400 group-hover:scale-110 transition-transform" size={28} />
            </div>
            <h3 className="text-2xl font-heading font-semibold text-white mb-4">Elite Hackathons</h3>
            <p className="text-gray-400 font-light leading-relaxed">
              Deploy your code in high-stakes environments. Compete against top developers in rapid-prototyping challenges ranging from IoT to applied ML solutions.
            </p>
          </motion.div>

          {/* Box 3 */}
          <motion.div variants={itemVariants} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group">
            <div className="p-4 bg-blue-500/10 rounded-2xl w-max mb-6">
              <Lightbulb className="text-blue-400 group-hover:scale-110 transition-transform" size={28} />
            </div>
            <h3 className="text-2xl font-heading font-semibold text-white mb-4">Design Aesthetics</h3>
            <p className="text-gray-400 font-light leading-relaxed">
              We focus heavily on the intersection of technical brilliance and human-centered design. Learn how to craft UX/UI patterns that elevate robotic systems.
            </p>
          </motion.div>

          {/* Box 4 */}
          <motion.div variants={itemVariants} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group">
            <div className="p-4 bg-fuchsia-500/10 rounded-2xl w-max mb-6">
              <Globe className="text-fuchsia-400 group-hover:scale-110 transition-transform" size={28} />
            </div>
            <h3 className="text-2xl font-heading font-semibold text-white mb-4">Global Networking</h3>
            <p className="text-gray-400 font-light leading-relaxed">
              Connect with esteemed professors, industry veterans, and like-minded peers across colleges. Build the network that will launch your next startup.
            </p>
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}

export default About;
