import React from 'react';
import { Link } from 'react-router-dom';

const SportsEvents = () => {
  // Aapki image se nikali gayi 16 sports ki list
  const sportsData = [
    { id: 1, name: "KHO-KHO", link: "https://forms.gle/sports1" },
    { id: 2, name: "KABBADDI", link: "https://forms.gle/sports2" },
    { id: 3, name: "FOOTBALL", link: "https://forms.gle/sports3" },
    { id: 4, name: "TABLE TENNIS", link: "https://forms.gle/sports4" },
    { id: 5, name: "BASKETBALL", link: "https://forms.gle/sports5" },
    { id: 6, name: "VOLLEY BALL", link: "https://forms.gle/sports6" },
    { id: 7, name: "BADMINTON", link: "https://forms.gle/sports7" },
    { id: 8, name: "CHESS", link: "https://forms.gle/sports8" },
    { id: 9, name: "LONG JUMP", link: "https://forms.gle/sports9" },
    { id: 10, name: "HIGH JUMP", link: "https://forms.gle/sports10" },
    { id: 11, name: "DISCUSS THROW", link: "https://forms.gle/sports11" },
    { id: 12, name: "SHOTPUT", link: "https://forms.gle/sports12" },
    { id: 13, name: "100 METRE RACE", link: "https://forms.gle/sports13" },
    { id: 14, name: "CARROM", link: "https://forms.gle/sports14" },
    { id: 15, name: "TUG OF WAR", link: "https://forms.gle/sports15" },
    { id: 16, name: "ARM WRESTLING", link: "https://forms.gle/sports16" }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="flex justify-between items-center mb-12 flex-wrap gap-4">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic">
            Sports <span className="text-fest-gold">Events</span>
          </h1>
          <Link 
            to="/" 
            className="text-fest-gold border border-fest-gold/50 px-6 py-2 rounded-full hover:bg-fest-gold hover:text-black transition-all font-bold tracking-widest text-sm"
          >
            ← BACK HOME
          </Link>
        </div>

        {/* 16 Sports Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sportsData.map((sport) => (
            <div 
              key={sport.id} 
              className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:border-fest-gold/50 transition-all hover:-translate-y-2 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-fest-gold/20 rounded-lg flex items-center justify-center text-fest-gold font-bold mb-4 group-hover:bg-fest-gold group-hover:text-black transition-all">
                  {sport.id}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-fest-gold transition-colors italic uppercase leading-tight">
                  {sport.name}
                </h3>
                <p className="text-gray-400 text-sm mb-6 italic">
                  Showcase your strength and sportsmanship!
                </p>
              </div>

              {/* Registration Link */}
              <a 
                href={sport.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-fest-gold text-black py-3 rounded-xl font-black uppercase text-center tracking-tighter hover:bg-white transition-all shadow-[0_5px_15px_rgba(255,204,0,0.2)]"
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

export default SportsEvents;