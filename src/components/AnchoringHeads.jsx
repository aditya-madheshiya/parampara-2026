import React from 'react';
// Anchoring Head folder se .jpeg images import
import anweshaImg from '../assets/anchoringhead/anwesha.jpeg'; 
import aditiImg from '../assets/anchoringhead/aditi.jpeg'; 

const AnchoringHeads = () => {
  const heads = [
    {
      id: 1,
      name: "ANWESHA GUPTA",
      role: "Anchoring Head",
      img: anweshaImg,
      whatsapp: "916393639771" // Anwesha ji ka number
    },
    {
      id: 2,
      name: "ADITI UPADHYAY",
      role: "Anchoring Head",
      img: aditiImg,
      whatsapp: "916387370800" // Aditi ji ka number
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-transparent flex flex-col items-center w-full">
      {/* Centered Heading */}
      <div className="w-full flex justify-center mb-10 md:mb-12">
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic text-center tracking-tighter">
          Anchoring <span className="text-fest-gold">Heads</span>
        </h2>
      </div>

      {/* Grid: Mobile 1, Desktop 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {heads.map((head) => (
          <div 
            key={head.id}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-[2.5rem] shadow-2xl hover:border-fest-gold/30 transition-all duration-500 group text-center relative overflow-hidden flex flex-col items-center"
          >
            {/* Background Glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-fest-gold/5 blur-3xl rounded-full pointer-events-none"></div>

            {/* Profile Picture - .jpeg format and object-top fix */}
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
              href={`https://wa.me/${head.whatsapp}?text=Hi ${head.name}, I have a query regarding anchoring for Parampara 2026`}
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

export default AnchoringHeads;