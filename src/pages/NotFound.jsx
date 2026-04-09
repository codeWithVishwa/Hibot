import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { TerminalSquare, Home } from 'lucide-react';
import CustomCursor from '../components/UI/CustomCursor';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-[#020202] flex items-center justify-center overflow-hidden font-sans">
      <CustomCursor />
      
      {/* Background Anomalies */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[800px] aspect-square bg-red-600/5 blur-[120px] rounded-full mix-blend-screen animate-pulse pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        
        {/* Glitching 404 Text */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <motion.h1 
            animate={{ 
              x: [0, -5, 5, -5, 0],
              filter: ["contrast(1)", "contrast(1.5) hue-rotate(90deg)", "contrast(1)"]
            }}
            transition={{ repeat: Infinity, duration: 3, repeatDelay: 5 }}
            className="text-[8rem] md:text-[12rem] font-heading font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-800 tracking-tighter leading-none"
          >
            404
          </motion.h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-red-500/20 shadow-[0_0_20px_rgba(239,68,68,0.5)] pointer-events-none"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-8 flex flex-col items-center"
        >
          <div className="flex items-center gap-3 text-red-400 mb-4 px-4 py-1.5 rounded-full border border-red-500/20 bg-red-500/10">
            <TerminalSquare size={16} />
            <span className="text-xs font-mono uppercase tracking-widest">Fatal Error: Sector Unmapped</span>
          </div>
          
          <p className="text-gray-400 font-light max-w-md mx-auto mb-10 text-lg leading-relaxed">
            The neural pathway you requested has collapsed. This domain exists outside the structural parameters of the HIBOT symposium.
          </p>

          <button
            onClick={() => navigate('/')}
            className="group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.15)] flex items-center gap-3"
          >
            <div className="absolute inset-0 bg-gray-200 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            <Home size={16} className="relative z-10 text-black" />
            <span className="relative z-10">Return to Grid</span>
          </button>
        </motion.div>

      </div>
    </div>
  );
};

export default NotFound;
