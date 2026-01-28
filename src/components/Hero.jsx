import React from 'react';
// Assets Import
import logo2 from '../assets/logo2.png';
import itm from '../assets/itm.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-4 py-20 overflow-hidden bg-transparent">
      
      {/* Background Decor - Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-[-5%] w-72 h-72 bg-fest-gold/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-[-5%] w-72 h-72 bg-fest-gold/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 z-10">
        
        {/* Left Logo (ITM) - Circular Glassmorphism */}
        <div className="flex-shrink-0 animate-float order-2 md:order-1">
          <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full p-1 bg-white/10 backdrop-blur-md border border-fest-gold/30 shadow-[0_0_30px_rgba(255,204,0,0.2)] flex items-center justify-center">
            <img 
              src={itm} 
              className="w-[85%] h-[85%] object-contain rounded-full" 
              alt="ITM Logo" 
              onError={(e) => { e.target.src = 'https://via.placeholder.com/150/ffcc00/000000?text=ITM' }} 
            />
          </div>
        </div>

        {/* Center Content Section - Clipping & Mobile Touch Fix */}
        <div className="flex-1 text-center order-1 md:order-2 px-4 max-w-full lg:min-w-[650px]">
          <h2 className="text-fest-gold text-xs sm:text-sm md:text-lg tracking-[0.4em] font-bold uppercase mb-2 drop-shadow-lg">
            Cultural | Technical | Sports Fest
          </h2>
          
          <div className="flex flex-col items-center">
            {/* Desktop Clipping Fix: Adjusted size to 115px and tracking to normal */}
            <h1 className="text-5xl sm:text-7xl lg:text-[115px] font-black text-white leading-tight uppercase tracking-normal drop-shadow-2xl">
              PARAM<span className="text-fest-gold">PARA</span>
            </h1>
            
            {/* Bold & Colorful 2026 */}
            <span className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-widest bg-linear-to-r from-fest-gold via-white to-fest-gold bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,204,0,0.5)] -mt-2">
              2026
            </span>
          </div>

          {/* Event Date Badge - Fixed Screen Touching Issue */}
          <div className="mt-8 mb-6 inline-block max-w-[95%] sm:max-w-full mx-auto">
            <div className="bg-black/60 backdrop-blur-md border-x-2 border-fest-gold px-6 sm:px-10 py-3 rounded-lg shadow-2xl">
              <p className="text-white text-lg sm:text-xl md:text-3xl font-bold tracking-[0.1em] sm:tracking-[0.2em] flex items-center justify-center gap-2 sm:gap-3 whitespace-nowrap">
                <span className="text-fest-gold">12</span> • 
                <span className="text-fest-gold">13</span> • 
                <span className="text-fest-gold">14</span> MARCH 2026
              </p>
            </div>
          </div>

          <div className="h-[2px] w-24 sm:w-32 bg-linear-to-r from-transparent via-fest-gold to-transparent mx-auto"></div>
        </div>

        {/* Right Logo (Fest Logo) - Circular Glassmorphism */}
        <div className="flex-shrink-0 animate-float-delayed order-3">
          <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full p-1 bg-white/10 backdrop-blur-md border border-fest-gold/30 shadow-[0_0_30px_rgba(255,204,0,0.2)] flex items-center justify-center">
            <img 
              src={logo2} 
              className="w-[85%] h-[85%] object-contain rounded-full" 
              alt="Fest Logo" 
              onError={(e) => { e.target.src = 'https://via.placeholder.com/150/ffffff/000000?text=Logo2' }} 
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;