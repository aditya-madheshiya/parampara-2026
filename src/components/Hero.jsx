import React from 'react';
// Assets Import
import logo2 from '../assets/logo2.png';
import itm from '../assets/itm.png';
import paramparaPng from '../assets/parampara_text.png'; 
import PageTransition from '../components/PageTransition';

const Hero = () => {
  return (
    <PageTransition>
    <section className="relative min-h-screen w-full flex flex-col items-center overflow-hidden bg-transparent">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-[-10%] w-80 h-80 bg-fest-gold/15 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-[-10%] w-80 h-80 bg-fest-gold/10 blur-[120px] rounded-full"></div>
      </div>

      {/* --- MAIN CONTENT WRAPPER --- */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 z-10 pt-28 md:pt-40 px-4 pb-10 my-auto">
        
        {/* Left Logo (ITM) */}
        <div className="flex-shrink-0 animate-float order-2 md:order-1" data-aos="fade-right">
          <div className="w-24 h-24 sm:w-36 sm:h-36 md:w-52 md:h-52 rounded-full p-1 bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl flex items-center justify-center">
            <img src={itm} className="w-[80%] h-[80%] object-contain" alt="ITM Logo" />
          </div>
        </div>

        {/* Center Content Section */}
        <div className="flex-[2] text-center order-1 md:order-2 w-full flex flex-col items-center justify-center" data-aos="zoom-in">
          
          {/* Nayi Hindi Tagline Section */}
          <div className="mb-4 flex flex-col items-center gap-1">
             <h3 className="text-white/90 text-lg sm:text-xl md:text-3xl font-serif tracking-wider drop-shadow-lg">
                शिक्षा <span className="text-fest-gold">•</span> संस्कार <span className="text-fest-gold">•</span> नवाचार
             </h3>
             <div className="h-[1px] w-20 bg-fest-gold/50 mb-4"></div>
             
             {/* English Sub-header */}
             <h2 className="text-fest-gold text-[10px] sm:text-xs md:text-lg tracking-[0.4em] font-black uppercase drop-shadow-md italic">
                Technical | Cultural | Sports 
             </h2>
          </div>
          
          {/* PARAMPARA PNG */}
          <div className="w-full max-w-[280px] xs:max-w-[340px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[850px] xl:max-w-[950px] transition-all">
            <img 
              src={paramparaPng} 
              alt="PARAMPARA" 
              className="w-full h-auto drop-shadow-[0_0_20px_rgba(255,204,0,0.25)] object-contain"
            />
          </div>

          {/* Coming Soon Badge */}
          <div className="mt-8 md:mt-12 w-fit">
            <div className="bg-black/40 backdrop-blur-xl border-x-[3px] border-fest-gold px-6 py-3 rounded-2xl shadow-xl">
              <p className="text-white text-xs sm:text-base md:text-3xl font-black tracking-[0.15em] flex items-center justify-center gap-3 uppercase italic">
                <span className="text-fest-gold">coming</span> 
                <span className="text-white opacity-20">•</span> 
                <span className="text-fest-gold">soon.</span> 
                <span className="text-white opacity-20">•</span> 
                <span className="text-fest-gold">stay</span> tuned
              </p>
            </div>
          </div>
        </div>

        {/* Right Logo (Fest Logo) */}
        <div className="flex-shrink-0 animate-float-delayed order-3" data-aos="fade-left">
          <div className="w-24 h-24 sm:w-36 sm:h-36 md:w-52 md:h-52 rounded-full p-1 bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl flex items-center justify-center">
            <img src={logo2} className="w-[80%] h-[80%] object-contain" alt="Fest Logo" />
          </div>
        </div>

      </div>

      {/* Subtle Bottom Glow Line */}
      <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-fest-gold to-transparent opacity-30 mt-auto mb-10"></div>
    </section>
    </PageTransition>
  );
};

export default Hero;