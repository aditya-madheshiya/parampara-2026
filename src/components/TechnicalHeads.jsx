import React from 'react';
// Photos import karein (Path sahi kar lena apne assets ke hisab se)
import anuragImg from '../assets/techhead/anurag.jpeg'; 
import anshitImg from '../assets/techhead/anshit.jpeg'; 
import adityaImg from '../assets/techhead/aditya.jpeg'; 

const TechnicalHeads = () => {
  const heads = [
    {
      id: 1,
      name: "Anurag Gupta",
      role: "Technical Head",
      img: anuragImg,
      whatsapp: "919336139565" // Apna number dalein
    },
    {
      id: 2,
      name: "Anshit Kumar Srivastav",
      role: "Technical Head",
      img: anshitImg,
      whatsapp: "918545999173" // Apna number dalein
    },
    {
      id: 3,
      name: "Aditya Madheshiya",
      role: "Technical Head",
      img: adityaImg,
      whatsapp: "919792415039" // Apna number dalein
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-transparent flex flex-col items-center">
      <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic mb-12 text-center tracking-tighter">
        Technical <span className="text-fest-gold">Heads</span>
      </h2>

      {/* Grid Layout: Mobile pe 1, Desktop pe 3 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {heads.map((head) => (
          <div 
            key={head.id}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-[2.5rem] shadow-2xl hover:border-fest-gold/30 transition-all duration-500 group text-center relative overflow-hidden"
          >
            {/* Profile Picture - Haircut Fix (object-top) */}
            <div className="relative mx-auto w-40 h-40 sm:w-48 sm:h-48 mb-6 p-1 border-2 border-fest-gold/20 rounded-[2rem] group-hover:border-fest-gold/50 transition-all duration-500">
              <img 
                src={head.img} 
                alt={head.name} 
                className="w-full h-full object-cover object-top rounded-[1.8rem] shadow-xl"
                onError={(e) => e.target.src = 'https://via.placeholder.com/300/ffcc00/000000?text=Head'}
              />
            </div>

            {/* Info */}
            <div className="mb-6">
              <h3 className="text-lg md:text-xl font-black text-white uppercase tracking-tighter leading-tight h-12 flex items-center justify-center">
                {head.name}
              </h3>
              <p className="text-fest-gold font-bold uppercase text-[10px] tracking-[0.2em] mt-2 opacity-90">
                {head.role}
              </p>
            </div>

            {/* WhatsApp Button */}
            <a 
              href={`https://wa.me/${head.whatsapp}?text=Hi ${head.name}, I have a query about technical events.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-[#25D366] text-white w-full py-3 rounded-xl font-black uppercase text-[10px] md:text-xs tracking-widest transition-all duration-300 shadow-lg hover:bg-[#1ebea5] active:scale-95"
            >
              Contact on WhatsApp
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalHeads;