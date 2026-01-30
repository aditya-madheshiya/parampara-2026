import React from 'react';
// Naye folder 'culturehead' se images import ho rahi hain
import vivekImg from '../assets/culturehead/vivek.jpeg'; 
import anamikaImg from '../assets/culturehead/anamika.jpeg'; 
import siddhantImg from '../assets/culturehead/siddhant.jpeg'; 
import riyaImg from '../assets/culturehead/riya.jpeg'; 

const CulturalHeads = () => {
  const heads = [
    {
      id: 1,
      name: "VIVEK SHARMA",
      role: "Cultural Head",
      img: vivekImg,
      whatsapp: "919815303104" 
    },
    {
      id: 2,
      name: "ANAMIKA YADAV",
      role: "Cultural Head",
      img: anamikaImg,
      whatsapp: "919151650879"
    },
    {
      id: 3,
      name: "SIDDHANT SINGH KAUSHIK",
      role: "Cultural Head",
      img: siddhantImg,
      whatsapp: "919415283335"
    },
    {
      id: 4,
      name: "RIYA TRIPATHI",
      role: "Cultural Head",
      img: riyaImg,
      whatsapp: "918707723964"
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-transparent flex flex-col items-center">
      <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic mb-12 text-center tracking-tighter">
        Cultural <span className="text-fest-gold">Heads</span>
      </h2>

      {/* Grid: Mobile 1, Tablet 2, Desktop 4 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {heads.map((head) => (
          <div 
            key={head.id}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-[2.5rem] shadow-2xl hover:border-fest-gold/30 transition-all duration-500 group text-center relative overflow-hidden"
          >
            {/* Profile Picture - Object-top for hair fix */}
            <div className="relative mx-auto w-36 h-36 sm:w-44 sm:h-44 mb-5 p-1 border-2 border-fest-gold/20 rounded-[2rem] group-hover:border-fest-gold/50 transition-all duration-500">
              <img 
                src={head.img} 
                alt={head.name} 
                className="w-full h-full object-cover object-top rounded-[1.8rem] shadow-xl"
                onError={(e) => e.target.src = `https://via.placeholder.com/300/ffcc00/000000?text=${head.name.split(' ')[0]}`}
              />
            </div>

            {/* Name & Role */}
            <div className="mb-6">
              <h3 className="text-lg font-black text-white uppercase tracking-tighter leading-tight h-14 flex items-center justify-center px-2">
                {head.name}
              </h3>
              <p className="text-fest-gold font-bold uppercase text-[9px] tracking-[0.2em] mt-2 opacity-90">
                {head.role}
              </p>
            </div>

            {/* Smooth WhatsApp Button */}
            <a 
              href={`https://wa.me/${head.whatsapp}?text=Hi ${head.name}, I have a query about cultural events.`}
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

export default CulturalHeads;