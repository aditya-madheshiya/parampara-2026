import React from 'react';
import ujjwalImg from '../assets/hospitalityhead/ujjwal.jpeg'; 
import prakharImg from '../assets/hospitalityhead/prakhar.jpeg'; 

const HospitalityHeads = () => {
  const heads = [
    {
      id: 1,
      name: "UJJWAL KUMAR SRIVASTAVA",
      role: "Hospitality Head",
      img: ujjwalImg,
      whatsapp: "919555697950"
    },
    {
      id: 2,
      name: "PRAKHAR SRIVASTAVA",
      role: "Hospitality Head",
      img: prakharImg,
      whatsapp: "917897573948"
    }
  ];

  return (
    <section className="py-12 md:py-24 px-4 md:px-6 bg-transparent flex flex-col items-center w-full min-h-[500px] justify-center">
      
      {/* Section Heading */}
      <div className="w-full flex justify-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-6xl font-black text-white uppercase italic text-center tracking-tighter">
          Hospitality <span className="text-fest-gold">Heads</span>
        </h2>
      </div>

      {/* Cards Container - width adjusted for 2 cards */}
      <div className="flex flex-wrap justify-center gap-8 md:gap-12 w-full max-w-5xl">
        {heads.map((head) => (
          <div 
            key={head.id}
            className="w-full sm:w-[45%] lg:w-[400px] bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[3rem] shadow-2xl hover:border-fest-gold/40 transition-all duration-500 group text-center relative overflow-hidden flex flex-col items-center"
          >
            {/* Background Aesthetic Glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-fest-gold/10 blur-3xl rounded-full pointer-events-none group-hover:bg-fest-gold/20 transition-all"></div>

            {/* Profile Picture - Increased size for better impact */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 mb-8 p-1.5 border-2 border-fest-gold/20 rounded-[2.5rem] group-hover:border-fest-gold/60 transition-all duration-700 overflow-hidden shrink-0 shadow-2xl">
              <img 
                src={head.img} 
                className="w-full h-full object-cover object-top rounded-[2.2rem] transition-transform duration-700 group-hover:scale-110"
                alt={head.name}
                onError={(e) => e.target.src = `https://via.placeholder.com/300/ffcc00/000000?text=Head`}
              />
            </div>

            {/* Name & Role Section */}
            <div className="flex-grow flex flex-col items-center">
              <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter leading-tight italic mb-3">
                {head.name}
              </h3>
              <p className="text-fest-gold font-black uppercase text-xs tracking-[0.3em] mb-8 opacity-90 px-4 py-1.5 bg-fest-gold/10 rounded-full inline-block">
                {head.role}
              </p>
            </div>

            {/* WhatsApp Button */}
            <a 
              href={`https://wa.me/${head.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-auto flex items-center justify-center bg-[#25D366] text-white py-4 rounded-2xl font-black uppercase text-[11px] tracking-[0.2em] transition-all duration-300 shadow-[0_10px_30px_rgba(37,211,102,0.3)] hover:shadow-[0_15px_40px_rgba(37,211,102,0.4)] hover:-translate-y-1 active:scale-95"
            >
              Contact on WhatsApp
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HospitalityHeads;