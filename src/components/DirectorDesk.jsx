import React from 'react';
import directorImg from '../assets/director.jpeg';

const DirectorDesk = () => {
  return (
    <section className="py-16 md:py-24 px-6 bg-transparent w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Side: Content Section */}
        <div className="flex-1 space-y-6 order-2 md:order-1 text-center md:text-left">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
              Director's <span className="text-fest-gold">Desk</span>
            </h2>
            <div className="w-20 h-1.5 bg-fest-gold rounded-full mx-auto md:mx-0"></div>
          </div>

          <div className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed font-medium italic">
            <p>
              It is my privilege to welcome you all to <span className="text-fest-gold font-bold">Parampara 2026</span>, 
              our annual cultural extravaganza that celebrates heritage, creativity, and excellence.
            </p>
            <p>
              As we mark <span className="text-fest-gold font-bold">26 years of ITM, GIDA, Gorakhpur</span>, 
              this milestone is a testament to our legacy of academic and cultural enrichment.
            </p>
          </div>

          <div className="pt-4">
            <p className="text-fest-gold font-black text-2xl uppercase flex items-center justify-center md:justify-start gap-3">
              <span className="text-white text-3xl italic">✒️</span> Dr. N K Singh
            </p>
          </div>
        </div>

        {/* Right Side: Image Section */}
        <div className="flex-1 flex justify-center order-1 md:order-2">
          <div className="relative group">
            {/* Decorative Background Frame */}
            <div className="absolute -inset-4 border-2 border-fest-gold/20 rounded-[3rem] group-hover:border-fest-gold/50 transition-all duration-500 -z-10"></div>
            
            {/* Main Director Image - Square Rounded */}
            <div className="w-[300px] h-[380px] md:w-[400px] md:h-[500px] overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-white/5">
              <img 
                src={directorImg} 
                alt="Dr. NK Singh" 
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                onError={(e) => e.target.src = 'https://via.placeholder.com/400x500/000/fff?text=Dr.+NK+Singh'}
              />
            </div>

            {/* Accent Glow */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-fest-gold/10 blur-3xl rounded-full pointer-events-none"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DirectorDesk;