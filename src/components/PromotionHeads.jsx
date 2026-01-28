import React from 'react';
// Promotion Head folder se images import
import shubhamImg from '../assets/promotionhead/shubham.jpeg'; 
import adarshImg from '../assets/promotionhead/adarsh.jpeg'; 

const PromotionHeads = () => {
  const heads = [
    {
      id: 1,
      name: "SHUBHAM PANDEY",
      role: "Promotion Head",
      img: shubhamImg,
      whatsapp: "919260955694" // Shubham ji ka number
    },
    {
      id: 2,
      name: "ADARSH YADAV",
      role: "Promotion Head",
      img: adarshImg,
      whatsapp: "916393369091" // Adarsh ji ka number
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-transparent flex flex-col items-center w-full">
      {/* Centered Heading */}
      <div className="w-full flex justify-center mb-10 md:mb-12">
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic text-center tracking-tighter">
          Promotion <span className="text-fest-gold">Heads</span>
        </h2>
      </div>

      {/* Grid: Mobile 1, Desktop 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {heads.map((head) => (
          <div 
            key={head.id}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-[2.5rem] shadow-2xl hover:border-fest-gold/30 transition-all duration-500 group text-center relative overflow-hidden flex flex-col items-center"
          >
            {/* Profile Picture - Haircut Fix (object-top) */}
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 mb-6 p-1 border-2 border-fest-gold/20 rounded-[2rem] group-hover:border-fest-gold/50 transition-all duration-500">
              <img 
                src={head.img} 
                alt={head.name} 
                className="w-full h-full object-cover object-top rounded-[1.8rem] shadow-xl"
                onError={(e) => e.target.src = `https://via.placeholder.com/300/ffcc00/000000?text=${head.name.split(' ')[0]}`}
              />
            </div>

            {/* Name & Role */}
            <div className="mb-6 flex-grow">
              <h3 className="text-lg md:text-xl font-black text-white uppercase tracking-tighter leading-tight h-14 flex items-center justify-center px-2">
                {head.name}
              </h3>
              <p className="text-fest-gold font-bold uppercase text-[10px] tracking-[0.2em] mt-2 opacity-90">
                {head.role}
              </p>
            </div>

            {/* WhatsApp Button */}
            <a 
              href={`https://wa.me/${head.whatsapp}?text=Hi ${head.name}, I have a query regarding promotions for Parampara 2026`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-[#25D366] text-white w-full py-3.5 rounded-xl font-black uppercase text-xs tracking-widest transition-all duration-300 shadow-lg hover:bg-[#1ebea5] active:scale-95"
            >
              Contact on WhatsApp
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromotionHeads;