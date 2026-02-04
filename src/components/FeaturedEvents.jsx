import React from 'react';

// Images Import (Make sure paths are correct)
import bgmiImg from '../assets/techeventpic/bgmi.jpeg';
import hackathonImg from '../assets/techeventpic/minihackathon.jpeg';
import freeFireImg from '../assets/techeventpic/freefire.jpeg';

import dancingImg from '../assets/culturepic/dancing.jpeg';
import singingImg from '../assets/culturepic/singing.jpeg';
import skitImg from '../assets/culturepic/skit.jpeg';

import footballImg from '../assets/sportpic/football.jpeg';
import volleyballImg from '../assets/sportpic/volleyball.jpeg';
import kabaddiImg from '../assets/sportpic/kabaddi.jpeg';

const FeaturedEvents = () => {
  const featured = [
    // --- Technical (3 Events) ---
    { id: 1, name: "BGMI Mobile", category: "Technical", image: bgmiImg, tag: "E-Sports" },
    { id: 2, name: "Mini Hackathon", category: "Technical", image: hackathonImg, tag: "Coding" },
    { id: 3, name: "Free Fire Max", category: "Technical", image: freeFireImg, tag: "E-Sports" },
    
    // --- Cultural (3 Events) ---
    { id: 4, name: "Mega Dance Show", category: "Cultural", image: dancingImg, tag: "Stage" },
    { id: 5, name: "Sur Sangram", category: "Cultural", image: singingImg, tag: "Vocal" },
    { id: 6, name: "Skit / Drama", category: "Cultural", image: skitImg, tag: "Acting" },
    
    // --- Sports (3 Events) ---
    { id: 7, name: "Football League", category: "Sports", image: footballImg, tag: "Field" },
    { id: 8, name: "Volleyball", category: "Sports", image: volleyballImg, tag: "Smash" },
    { id: 9, name: "Kabaddi Clash", category: "Sports", image: kabaddiImg, tag: "Dangal" },
  ];

  return (
    <section className="py-20 px-6 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
            Pop <span className="text-fest-gold">Highlights</span>
          </h2>
          <div className="w-24 h-1 bg-fest-gold mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 mt-4 uppercase tracking-[0.2em] text-xs font-bold italic">
            9 Most Awaited Events of Parampara 2026
          </p>
        </div>

        {/* 9 Events Grid (3 per row on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((event) => (
            <div 
              key={event.id} 
              className="relative group h-[350px] rounded-[2.5rem] overflow-hidden border border-white/10 hover:border-fest-gold/50 transition-all duration-500 shadow-2xl"
            >
              {/* Image Background */}
              <img 
                src={event.image} 
                alt={event.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                onError={(e) => e.target.src = 'https://via.placeholder.com/600x400/000/fff?text=' + event.name}
              />
              
              {/* Dark Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-95"></div>

              {/* Event Content */}
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex items-center gap-2 mb-3">
                   <span className="text-[10px] bg-fest-gold text-black px-3 py-1 rounded-full font-black uppercase tracking-widest">
                    {event.category}
                  </span>
                  <span className="text-[10px] bg-white/20 text-white backdrop-blur-md px-3 py-1 rounded-full font-bold uppercase tracking-widest">
                    {event.tag}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tight leading-none group-hover:text-fest-gold transition-colors">
                  {event.name}
                </h3>
              </div>

              {/* Corner Glow Effect */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-fest-gold/10 blur-[50px] rounded-full group-hover:bg-fest-gold/30 transition-all"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;