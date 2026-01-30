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
    <section className="py-12 md:py-20 px-4 md:px-6 bg-transparent flex flex-col items-center w-full">
      <div className="w-full flex justify-center mb-10 md:mb-12">
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic text-center tracking-tighter">
          Hospitality <span className="text-fest-gold">Heads</span>
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-6 w-full max-w-[1400px]">
        {heads.map((head) => (
          <div 
            key={head.id}
            className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)] max-w-[340px] bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-[2.5rem] shadow-2xl hover:border-fest-gold/30 transition-all duration-500 group text-center relative overflow-hidden flex flex-col"
          >
            {/* Background Glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-fest-gold/5 blur-3xl rounded-full pointer-events-none"></div>

            {/* Profile Picture */}
            <div className="relative mx-auto w-40 h-40 sm:w-48 sm:h-48 mb-6 p-1 border-2 border-fest-gold/20 rounded-[2rem] group-hover:border-fest-gold/50 transition-all duration-500 overflow-hidden shrink-0">
              <img 
                src={head.img} 
                className="w-full h-full object-cover object-top rounded-[1.8rem]"
                onError={(e) => e.target.src = `https://via.placeholder.com/300/ffcc00/000000?text=Head`}
              />
            </div>

            {/* Name & Role Section - flex-grow ensures this takes only needed space */}
            <div className="flex-grow flex flex-col justify-start">
              <h3 className="text-lg md:text-xl font-black text-white uppercase tracking-tighter leading-tight italic px-2">
                {head.name}
              </h3>
              <p className="text-fest-gold font-bold uppercase text-[10px] tracking-[0.2em] mt-2 mb-6 opacity-90">
                {head.role}
              </p>
            </div>

            {/* WhatsApp Button - Ab ye name ke turant baad natural gap par aayega */}
            <a 
              href={`https://wa.me/${head.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto flex items-center justify-center bg-[#25D366] text-white w-full py-3.5 rounded-xl font-black uppercase text-xs tracking-widest transition-all duration-300 shadow-lg hover:bg-[#1ebea5] active:scale-95"
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