import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
// Square Logo Import
import logoSquare from '../assets/logo.jpeg'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Updates', path: '/updates' },
    { name: 'Technical', path: '/technical' },
    { name: 'Cultural', path: '/cultural' },
    { name: 'Sports', path: '/sports' },
  ];

  const hasBackground = ['/', '/about', '/contact', '/updates'].includes(location.pathname);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${
      hasBackground || isOpen ? 'bg-black/90 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
        
        {/* --- DUAL BRANDING: Square Logo + Styled Text --- */}
        <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 group">
          {/* Square Logo */}
          <div className="relative">
            <img 
              src={logoSquare} 
              alt="Logo" 
              className="h-10 w-10 md:h-11 md:w-11 object-cover rounded-xl border border-fest-gold/30 shadow-[0_0_15px_rgba(255,204,0,0.2)] group-hover:scale-105 transition-transform"
            />
          </div>

          {/* Separator Line */}
          <div className="h-8 w-[1.5px] bg-white/20 hidden sm:block mx-1"></div>

          {/* Styled Text: PARAM (Yellow) PARA (White) */}
          <div className="flex flex-col justify-center">
            <h1 className="text-xl md:text-2xl font-black italic tracking-tighter leading-none">
              <span className="text-fest-gold uppercase">Param</span>
              <span className="text-white uppercase">para</span>
            </h1>
            <span className="text-[8px] md:text-[10px] text-white/50 font-bold tracking-[0.3em] uppercase ml-1">
              Legacy 2026
            </span>
          </div>
        </Link>

        {/* --- DESKTOP MENU --- */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`text-[10px] lg:text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:text-fest-gold relative group ${
                location.pathname === link.path ? 'text-fest-gold' : 'text-gray-300'
              }`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-fest-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* --- MOBILE TOGGLE --- */}
        <button 
          className="md:hidden text-white transition-transform active:scale-90 p-2" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} className="text-fest-gold" /> : <Menu size={28} />}
        </button>
      </div>

      {/* --- MOBILE DROPDOWN --- */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[-1] md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              className="absolute top-20 left-0 w-full md:hidden overflow-hidden px-4"
            >
              <div className="bg-[#0c0c0c]/95 backdrop-blur-[30px] border border-white/10 shadow-2xl my-2 rounded-[2rem] overflow-hidden">
                <div className="max-h-[380px] overflow-y-auto p-5 custom-scrollbar">
                  {navLinks.map((link, i) => (
                    <motion.div key={link.name} initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between p-4 mb-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-fest-gold/20 hover:border-fest-gold/30 transition-all group"
                      >
                        <span className="text-xl font-black text-white uppercase italic tracking-tighter">{link.name}</span>
                        <ChevronRight size={18} className="text-fest-gold" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;