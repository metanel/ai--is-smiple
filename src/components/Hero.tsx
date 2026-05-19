/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="home"
      className="relative min-h-screen bg-navy flex flex-col justify-center items-center text-center px-6 overflow-hidden"
      dir="rtl"
    >
      {/* Background Effects */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src={`${import.meta.env.BASE_URL}earth.mp4`} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/50 to-green-dark/90" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight"
        >
          ברוכים הבאים <br />
          <span className="text-green">לעולם החדש</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button className="bg-green text-white px-10 py-5 rounded-full text-xl font-bold shadow-[0_0_30px_rgba(4,120,87,0.4)] hover:shadow-[0_0_50px_rgba(4,120,87,0.6)] transition-all transform hover:scale-105 active:scale-95">
            התחילו את המסע
          </button>
        </motion.div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute bottom-[-200px] left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-green opacity-20 rounded-full blur-[120px]" />

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50"
      >
        <ChevronDown size={32} />
      </motion.div>

      {/* Bottom Interface */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />
    </section>
  );
}
