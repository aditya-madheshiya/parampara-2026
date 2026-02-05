import React from 'react';
import { Link } from 'react-router-dom';

// Background Images Import (Apni images ke path yahan set karein)
import techBg from '../assets/techeventpic/bgmi.jpeg'; 
import culturalBg from '../assets/culturepic/dancing.jpeg'; 
import sportsBg from '../assets/sportpic/football.jpeg';

const Events = () => {
  const categories = [
    { 
      title: "Technical", 
      icon: "💻", 
      path: "/technical", 
      bgImage: techBg,
      events: ["BGMI", "Free Fire", "Mini Hackathon", "Many More...."] 
    },
    { 
      title: "Cultural", 
      icon: "🎭", 
      path: "/cultural", 
      bgImage: culturalBg,
      events: ["Dance", "Singing", "Drama", "Many More...."] 
    },
    { 
      title: "Sports", 
      icon: "🏆", 
      path: "/sports", 
      bgImage: sportsBg,
      events: ["Kho-Kho", "Kabaddi", "Football", "Many More...."] 
    }
  ];

  return (
    <section className="py-24 px-6 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading with AOS */}
        <h2 
          className="text-center text-4xl md:text-6xl font-black text-white mb-20 uppercase italic tracking-tighter"
          data-aos="fade-down"
        >
          Event <span className="text-fest-gold">Categories</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {categories.map((cat, i) => (
            <div 
              key={i} 
              data-aos="fade-up"
              data-aos-delay={i * 200}
              className="relative h-[450px] group rounded-[2.5rem] overflow-hidden border border-white/10 hover:border-fest-gold/50 transition-all duration-500 shadow-2xl"
            >
              {/* --- BACKGROUND IMAGE --- */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={cat.bgImage} 
                  alt={cat.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"
                />
                {/* Dark Overlay to make text readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
              </div>

              {/* --- CONTENT --- */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                <span className="text-5xl mb-4 block transform group-hover:-translate-y-2 transition-transform duration-300">
                  {cat.icon}
                </span>
                
                <h3 className="text-3xl font-black text-fest-gold mb-4 uppercase italic tracking-tight">
                  {cat.title}
                </h3>
                
                <ul className="text-gray-200 space-y-2 mb-8 font-medium">
                  {cat.events.map(e => (
                    <li key={e} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-fest-gold rounded-full"></span>
                      {e}
                    </li>
                  ))}
                </ul>

                <Link 
                  to={cat.path} 
                  className="inline-block w-full text-center bg-white/10 backdrop-blur-md border border-white/20 text-white font-black py-4 rounded-2xl uppercase tracking-widest hover:bg-fest-gold hover:text-black transition-all duration-300 active:scale-95"
                >
                  Explore More →
                </Link>
              </div>

              {/* Subtle Glow Effect on Hover */}
              <div className="absolute inset-0 bg-fest-gold/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;