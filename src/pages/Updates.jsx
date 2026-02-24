import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PageTransition from '../components/PageTransition';

// --- PAMPATE (PAMPHLET) IMAGES IMPORT ---
import guestPamphlet1 from '../assets/guests/pampate2.jpeg'; // Aapka pehla pamphlet
import guestPamphlet2 from '../assets/guests/pampate1.jpeg'; // Aapka dusra pamphlet

const Updates = () => {
  // Sirf 2 Pamphlets ka data
  const pamphlets = [
    { id: 1, image: guestPamphlet1 },
    { id: 2, image: guestPamphlet2 },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#050505] pt-32 pb-20 px-6 relative overflow-hidden">
        
        {/* Ambient Glow */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-fest-gold/10 blur-[150px] rounded-full"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Header Section - iPad Safe Logic */}
          <div className="flex flex-col lg:flex-row justify-between items-center mb-20 gap-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter">
                Special <span className="text-fest-gold">Guests</span>
              </h1>
              <p className="text-gray-500 font-bold uppercase tracking-[0.3em] text-[10px] mt-2">
                Legacy of Parampara 2026
              </p>
            </motion.div>

            <Link 
              to="/" 
              className="flex items-center gap-2 text-fest-gold border border-fest-gold/30 px-8 py-3 rounded-full hover:bg-fest-gold hover:text-black transition-all font-black tracking-widest text-xs uppercase"
            >
              <ArrowLeft size={16} /> Back Home
            </Link>
          </div>

          {/* Pamphlet Grid - Always Centered for 2 Items */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 lg:gap-20">
            {pamphlets.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -15 }}
                className="relative group w-full max-w-[400px]"
              >
                {/* A4 PROPORTION FRAME (Aspect Ratio 1:1.414) */}
                <div className="relative aspect-[1/1.414] w-full bg-[#111] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] group-hover:border-fest-gold/50 transition-all duration-500">
                  
                  {/* The Pamphlet Image */}
                  <img 
                    src={item.image} 
                    alt="Guest Pamphlet" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Glassy Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Shine Effect Animation */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                </div>

                {/* Optional: Subtle Glow below the card */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-10 bg-fest-gold/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Decorative Bottom Line */}
        <div className="absolute bottom-10 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>
    </PageTransition>
  );
};

export default Updates;