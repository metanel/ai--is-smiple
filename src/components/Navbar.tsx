/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'דף הבית', href: '#home' },
    { name: 'תכנית הלימודים', href: '#curriculum' },
    { name: 'מי אנחנו', href: '#about' },
    { name: 'מחירים', href: '#pricing' },
    { name: 'שאלות ותשובות', href: '#faq' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cream/80 backdrop-blur-xl shadow-sm py-4 opacity-100' : 'bg-transparent py-6 opacity-0 pointer-events-none'
      }`}
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <a href="#home" className="text-2xl font-bold text-navy hover:text-green transition-colors">
            בינה מלאכותית <span className="text-green">זה פשוט</span>
          </a>
          
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-navy/70 hover:text-green transition-colors font-medium border-b-2 border-transparent hover:border-green pb-1"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <button className="bg-green text-white px-6 py-2.5 rounded-full font-semibold hover:bg-green-dark transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-green/20">
            הצטרפו עכשיו
          </button>
        </div>

        <button 
          className="md:hidden text-navy"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-cream border-t border-navy/10 p-6 md:hidden flex flex-col gap-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-xl font-medium text-navy/80"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-green text-white px-6 py-3 rounded-xl font-bold mt-2">
              הצטרפו עכשיו
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
