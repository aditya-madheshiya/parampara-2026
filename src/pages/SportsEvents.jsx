import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, GraduationCap, ArrowLeft } from 'lucide-react';
import PageTransition from '../components/PageTransition';

// --- IMAGES IMPORT ---
import khoKhoImg from '../assets/sportpic/khokho.jpeg';
import kabaddiImg from '../assets/sportpic/kabaddi.jpeg';
import footballImg from '../assets/sportpic/football.jpeg';
import tableTennisImg from '../assets/sportpic/tabletennis.jpeg';
import basketballImg from '../assets/sportpic/basketball.jpeg';
import volleyballImg from '../assets/sportpic/volleyball.jpeg';
import badmintonImg from '../assets/sportpic/badminton.jpeg';
import chessImg from '../assets/sportpic/chess.jpeg';
import longJumpImg from '../assets/sportpic/longjump.jpeg';
import highJumpImg from '../assets/sportpic/highjump.jpeg';
import discussImg from '../assets/sportpic/discussthrow.jpeg';
import shotputImg from '../assets/sportpic/shotput.jpeg';
import raceImg from '../assets/sportpic/race.jpeg';
import carromImg from '../assets/sportpic/carrom.jpeg';
import tugOfWarImg from '../assets/sportpic/tugofwar.jpeg';
import armWrestlingImg from '../assets/sportpic/armwrestling.jpeg';

const SportsEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  // --- COMPLETE 16 EVENTS ARRAY ---
  const sportsData = [
    { id: 1, name: "KHO-KHO", image: khoKhoImg, internal: "LINK_HERE", external: "LINK_HERE" },
    { id: 2, name: "KABBADDI", image: kabaddiImg, internal: "LINK_HERE", external: "LINK_HERE" },
    { id: 3, name: "FOOTBALL", image: footballImg, internal: "LINK_HERE", external: "LINK_HERE" },
    { id: 4, name: "TABLE TENNIS", image: tableTennisImg, internal: "LINK_HERE", external: "LINK_HERE" },
    { id: 5, name: "BASKETBALL", image: basketballImg, internal: "LINK_HERE", external: "LINK_HERE" },
    { id: 6, name: "VOLLEY BALL", image: volleyballImg, internal: "LINK_HERE", external: "LINK_HERE" },
    { id: 7, name: "BADMINTON", image: badmintonImg, internal: "LINK_HERE", external: "LINK_HERE" },
    { id: 8, name: "CHESS", image: chessImg, internal: "LINK_HERE", external: "LINK_HERE" },
    { id: 9, name: "LONG JUMP", image: longJumpImg, internal: "LINK_HERE", external: "LINK_HERE" },
    { id: 10, name: "HIGH JUMP", image: highJumpImg, internal: "LINK_HERE", external: "LINK_HERE" },
    { id: 11, name: "DISCUSS THROW", image: discussImg, internal: "LINK_HERE", external: "LINK_HERE" },
    { id: 12, name: "SHOTPUT", image: shotputImg, internal: "LINK_HERE", external: "LINK_HERE" },
    { id: 13, name: "100 METRE RACE", image: raceImg, internal: "LINK_HERE", external: "LINK_HERE" },
    { id: 14, name: "CARROM", image: carromImg, internal: "LINK_HERE", external: "LINK_HERE" }

  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-20 px-6 bg-black overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
            <h1 className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter">
              Sports <span className="text-fest-gold">Events</span>
            </h1>
            <Link to="/" className="flex items-center gap-2 text-fest-gold border border-fest-gold/30 px-8 py-3 rounded-full hover:bg-fest-gold hover:text-black transition-all font-black tracking-widest text-xs uppercase">
              <ArrowLeft size={16} /> BACK HOME
            </Link>
          </div>

          {/* Responsive Grid Fixed at lg (1024px) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {sportsData.map((event) => (
              <div key={event.id} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] hover:border-fest-gold/40 transition-all duration-500 group flex flex-col overflow-hidden shadow-2xl">
                <div className="w-full aspect-video overflow-hidden relative">
                  <img src={event.image} alt={event.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                </div>

                <div className="p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-2xl font-black text-white mb-2 uppercase italic leading-none group-hover:text-fest-gold transition-colors tracking-tighter">
                      {event.name}
                    </h3>
                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">Showcase your legacy</p>
                  </div>

                  <button 
                    onClick={() => setSelectedEvent(event)}
                    className="w-full bg-fest-gold text-black py-4 rounded-2xl font-black uppercase text-[11px] tracking-widest hover:bg-white transition-all transform active:scale-95 shadow-[0_0_20px_rgba(255,204,0,0.2)]"
                  >
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- DUAL REGISTRATION MODAL --- */}
        <AnimatePresence>
          {selectedEvent && (
            <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6">
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setSelectedEvent(null)}
                className="absolute inset-0 bg-black/95 backdrop-blur-md"
              />

              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 30 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 30 }}
                className="relative w-full max-w-md bg-[#0a0a0a] border border-white/10 p-10 rounded-[3rem] shadow-2xl"
              >
                <button onClick={() => setSelectedEvent(null)} className="absolute top-8 right-8 text-gray-500 hover:text-fest-gold">
                  <X size={28} />
                </button>

                <div className="text-center mb-10">
                  <h2 className="text-3xl font-black text-white uppercase italic mb-2 tracking-tighter">{selectedEvent.name}</h2>
                  <p className="text-fest-gold text-[10px] font-black uppercase tracking-[0.4em]">Select Participant Type</p>
                </div>

                <div className="flex flex-col gap-5">
                  <a href={selectedEvent.internal} target="_blank" rel="noopener noreferrer" 
                     className="flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-fest-gold hover:text-black transition-all group">
                    <div className="flex items-center gap-5">
                      <GraduationCap size={32} className="text-fest-gold group-hover:text-black" />
                      <div className="text-left">
                        <span className="block font-black uppercase italic text-lg leading-none">Internal</span>
                        <span className="text-[9px] uppercase font-bold opacity-60">ITM GIDA Students</span>
                      </div>
                    </div>
                    <ExternalLink size={20} />
                  </a>

                  <a href={selectedEvent.external} target="_blank" rel="noopener noreferrer" 
                     className="flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white hover:text-black transition-all group">
                    <div className="flex items-center gap-5">
                      <ExternalLink size={32} className="text-fest-gold group-hover:text-black" />
                      <div className="text-left">
                        <span className="block font-black uppercase italic text-lg leading-none">External</span>
                        <span className="text-[9px] uppercase font-bold opacity-60">Other Institutions</span>
                      </div>
                    </div>
                    <ExternalLink size={20} />
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
};

export default SportsEvents;