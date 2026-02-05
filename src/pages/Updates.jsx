import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const Updates = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#050505] flex items-center justify-center px-6 relative overflow-hidden">
        
        {/* Background Ambient Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-fest-gold/10 blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/5 blur-[150px] rounded-full"></div>

        <div className="max-w-3xl w-full text-center relative z-10">
          
          {/* Animated Icon/Badge */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', duration: 0.8 }}
            className="inline-block px-6 py-2 rounded-full bg-fest-gold/10 border border-fest-gold/20 mb-8"
          >
            <span className="text-fest-gold font-black uppercase tracking-[0.3em] text-[10px] sm:text-xs">
              Latest News & Notifications
            </span>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl font-black text-white uppercase italic tracking-tighter mb-4">
              Coming <span className="text-fest-gold">Soon</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl font-medium mb-12 max-w-xl mx-auto leading-relaxed">
              We are working hard to bring you the latest event schedules, registration details, and exciting announcements. Stay tuned!
            </p>
          </motion.div>

          {/* Loading Animation / Progress Bar */}
          <div className="w-full max-w-md mx-auto h-1 bg-white/5 rounded-full overflow-hidden mb-12">
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="w-1/2 h-full bg-gradient-to-r from-transparent via-fest-gold to-transparent"
            />
          </div>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs hover:text-fest-gold transition-colors"
            >
              <span className="text-lg">←</span> Back to home
            </Link>
          </motion.div>

        </div>

        {/* Decorative Grid Line */}
        <div className="absolute bottom-10 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>
    </PageTransition>
  );
};

export default Updates;