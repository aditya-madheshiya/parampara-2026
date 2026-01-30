import React from 'react';
import { Link } from 'react-router-dom';

const CulturalEvents = () => {
  // Yahan 22 events aur unki random Google Form links hain
  // Aap baad mein "https://forms.gle/..." wali links ko replace kar sakte hain
  const eventData = [
    { id: 1, name: "Rangoli", link: " https://forms.gle/random1" },
    { id: 2, name: "Flower Pot Making", link: "https://forms.gle/random2" },
    { id: 3, name: "Singing", link: "https://forms.gle/random3" },
    { id: 4, name: "Dancing", link: "https://forms.gle/random4" },
    { id: 5, name: "Poster Making", link: "https://forms.gle/random5" },
    { id: 6, name: "Mandala Art", link: "https://forms.gle/random6" },
    { id: 7, name: "Skit", link: "https://forms.gle/random7" },
    { id: 8, name: "Stand-up", link: "https://forms.gle/random8" },
    { id: 9, name: "Best Out Of Waste", link: "https://forms.gle/random9" },
    { id: 10, name: "Mehandi Design", link: "https://forms.gle/random10" },
    { id: 11, name: "Dumb Chardes", link: "https://forms.gle/random11" },
    { id: 12, name: "Poetry", link: "https://forms.gle/random12" },
    { id: 13, name: "Face Painting", link: "https://forms.gle/random13" },
    { id: 14, name: "Nail Art", link: "https://forms.gle/random14" },
    { id: 15, name: "Tulsi Ramayana Paddant", link: "https://forms.gle/random15" },
    { id: 16, name: "Heritage Quiz", link: "https://forms.gle/random16" },
    { id: 17, name: "Shankhannd Pratiyogita", link: "https://forms.gle/random17" },
    { id: 18, name: "Laughter Drive", link: "https://forms.gle/random18" },
    { id: 19, name: "Pyramid", link: "https://forms.gle/random19" },
    { id: 20, name: "Filmistan", link: "https://forms.gle/random20" }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex justify-between items-center mb-12 flex-wrap gap-4">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic">
            Cultural <span className="text-fest-gold">Events</span>
          </h1>
          <Link 
            to="/" 
            className="text-fest-gold border border-fest-gold/50 px-6 py-2 rounded-full hover:bg-fest-gold hover:text-black transition-all font-bold tracking-widest text-sm"
          >
            ← BACK HOME
          </Link>
        </div>

        {/* 22 Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {eventData.map((event) => (
            <div 
              key={event.id} 
              className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:border-fest-gold/50 transition-all hover:-translate-y-2 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-fest-gold/20 rounded-lg flex items-center justify-center text-fest-gold font-bold mb-4 group-hover:bg-fest-gold group-hover:text-black transition-all">
                  {event.id}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-fest-gold transition-colors italic uppercase">
                  {event.name}
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  Apna hunar dikhayen aur exciting prizes jeeten!
                </p>
              </div>

              {/* Dynamic Google Form Link Button */}
              <a 
                href={event.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-fest-gold text-black py-3 rounded-xl font-black uppercase text-center tracking-tighter hover:bg-white hover:scale-105 transition-all shadow-[0_5px_15px_rgba(255,204,0,0.2)]"
              >
                Register Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CulturalEvents;