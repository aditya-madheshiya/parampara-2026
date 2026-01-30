import React from 'react';
// Naye folder 'sportshead' se images import karein
import adityaSingImg from '../assets/sportshead/aditya_s.jpeg'; 
import arunImg from '../assets/sportshead/arun.jpeg'; 
import akankshaImg from '../assets/sportshead/akanksha.jpeg'; 
import aparnaImg from '../assets/sportshead/aparna.jpeg'; 
import annapurnaImg from '../assets/sportshead/annapurna.jpeg'; 

const SportsHeads = () => {
  const heads = [
    { id: 1, name: "ADITYA SINGH", role: "Sports Head", img: adityaSingImg, whatsapp: "916388784797" },
    { id: 2, name: "ARUN KUMAR YADAV", role: "Sports Head", img: arunImg, whatsapp: "919651146500" },
    { id: 3, name: "AKANKSHA UPADHYAY", role: "Sports Head", img: akankshaImg, whatsapp: "919984163460" },
    { id: 4, name: "APARNA TIWARI", role: "Sports Head", img: aparnaImg, whatsapp: "918318334095" },
    { id: 5, name: "ANNAPURNA SINGH", role: "Sports Head", img: annapurnaImg, whatsapp: "919696749804" }
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-transparent flex flex-col items-center w-full">
      {/* Header Section - Centered for Mobile */}
      <div className="w-full flex justify-center mb-12">
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic text-center tracking-tighter">
          Sports <span className="text-fest-gold">Heads</span>
        </h2>
      </div>

      {/* Grid: Mobile 1, Tablet 2, Desktop 3, Large Desktop 5 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 w-full max-w-[1400px] justify-center">
        {heads.map((head) => (
          <div 
            key={head.id}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-[2.5rem] shadow-2xl hover:border-fest-gold/30 transition-all duration-500 group text-center relative overflow-hidden flex flex-col items-center"
          >
            {/* Profile Picture - Hair Fix (object-top) */}
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 mb-5 p-1 border-2 border-fest-gold/20 rounded-[2rem] group-hover:border-fest-gold/50 transition-all duration-500">
              <img 
                src={head.img} 
                alt={head.name} 
                className="w-full h-full object-cover object-top rounded-[1.8rem] shadow-xl"
                onError={(e) => e.target.src = `https://via.placeholder.com/300/ffcc00/000000?text=${head.name.split(' ')[0]}`}
              />
            </div>

            {/* Name Section */}
            <div className="mb-6 flex-grow">
              <h3 className="text-lg font-black text-white uppercase tracking-tighter leading-tight h-14 flex items-center justify-center px-2">
                {head.name}
              </h3>
              <p className="text-fest-gold font-bold uppercase text-[9px] tracking-[0.2em] mt-2 opacity-90">
                {head.role}
              </p>
            </div>

            {/* WhatsApp Button */}
            <a 
              href={`https://wa.me/${head.whatsapp}?text=Hi ${head.name}, I have a query about sports events.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-[#25D366] text-white w-full py-3.5 md:py-4 rounded-xl md:rounded-2xl font-black uppercase text-xs md:text-sm tracking-widest transition-all duration-300 shadow-lg hover:bg-[#1ebea5] active:scale-95"
            >
              Contact on WhatsApp
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SportsHeads;