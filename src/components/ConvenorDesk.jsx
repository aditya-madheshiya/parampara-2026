import React from 'react';
// Convenor ki image yahan import karein (JPEG format mein)
import convenorImg from '../assets/convenor.jpeg'; 

const ConvenorDesk = () => {
  return (
    <section className="py-16 md:py-24 px-6 bg-transparent w-full">
      {/* md:flex-row-reverse se image left mein aur text right mein shift ho jayega */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
        
        {/* Right Side: Content Section */}
        <div className="flex-1 space-y-6 order-2 md:order-2 text-center md:text-left">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
              Convenor's <span className="text-fest-gold">Desk</span>
            </h2>
            <div className="w-20 h-1.5 bg-fest-gold rounded-full mx-auto md:mx-0"></div>
          </div>

          <div className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed font-medium italic">
            <p>
              It gives me immense pleasure to be a part of <span className="text-fest-gold font-bold">Parampara 2026</span>, 
              as we proudly celebrate <span className="text-fest-gold font-bold">26 years of ITM, GIDA, Gorakhpur</span>.
            </p>
            <p>
              This festival is not just an event but a platform for students to showcase their talents, 
              learn, and grow together.
            </p>
          </div>

          <div className="pt-4">
            <p className="text-fest-gold font-black text-2xl uppercase flex items-center justify-center md:justify-start gap-3">
              <span className="text-white text-3xl italic">✒️</span> Dr. Manoj Kumar Mishra
            </p>
          </div>
        </div>

        {/* Left Side: Image Section */}
        <div className="flex-1 flex justify-center order-1 md:order-1">
          <div className="relative group">
            {/* Decorative Background Frame */}
            <div className="absolute -inset-4 border-2 border-fest-gold/20 rounded-[3rem] group-hover:border-fest-gold/50 transition-all duration-500 -z-10"></div>
            
            {/* Main Convenor Image - Square Rounded */}
            <div className="w-[300px] h-[380px] md:w-[400px] md:h-[500px] overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-white/5 bg-black/40">
              <img 
                src={convenorImg} 
                alt="Dr. Manoj Kumar Mishra" 
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                // Fallback agar image missing ho
                onError={(e) => e.target.src = 'https://via.placeholder.com/400x500/000/fff?text=Dr.+Manoj+Mishra'}
              />
            </div>

            {/* Accent Glow (Right side glow for balance) */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-fest-gold/10 blur-3xl rounded-full pointer-events-none"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ConvenorDesk;