import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

// --- IMAGES IMPORT SECTION ---
// Sabhi images ko 'src/assets/sportpic/' folder mein .jpg format mein rakhein
import khoKhoImg from '../assets/sportpic/khokho.jpeg';
import kabaddiImg from '../assets/sportpic/kabaddi.jpeg';
import footballImg from '../assets/sportpic/football.jpeg';
import tableTennisImg from '../assets/sportpic/tabletennis.jpeg';
import basketballImg from '../assets/sportpic/basketball.jpeg';
import volleyballImg from '../assets/sportpic/volleyball.jpeg';
import badmintonImg from '../assets/sportpic/badminton.jpeg';
import chessImg from '../assets/sportpic/chess.jpeg';
import longJumpImg from '../assets/sportpic/longjump.jpeg';
import highJumpImg from '../assets/sportpic/highjump.jpeg';
import discussImg from '../assets/sportpic/discussthrow.jpeg';
import shotputImg from '../assets/sportpic/shotput.jpeg';
import raceImg from '../assets/sportpic/race.jpeg';
import carromImg from '../assets/sportpic/carrom.jpeg';
import tugOfWarImg from '../assets/sportpic/tugofwar.jpeg';
import armWrestlingImg from '../assets/sportpic/armwrestling.jpeg';

// Fallback image agar koi photo miss ho jaye
// import defaultSportsImg from '../assets/sportpic/default-sports.jpg';

const SportsEvents = () => {
  const sportsData = [
    { id: 1, name: "KHO-KHO", link: "https://forms.gle/sports1", image: khoKhoImg },
    { id: 2, name: "KABBADDI", link: "https://forms.gle/sports2", image: kabaddiImg },
    { id: 3, name: "FOOTBALL", link: "https://forms.gle/sports3", image: footballImg },
    { id: 4, name: "TABLE TENNIS", link: "https://forms.gle/sports4", image: tableTennisImg },
    { id: 5, name: "BASKETBALL", link: "https://forms.gle/sports5", image: basketballImg },
    { id: 6, name: "VOLLEY BALL", link: "https://forms.gle/sports6", image: volleyballImg },
    { id: 7, name: "BADMINTON", link: "https://forms.gle/sports7", image: badmintonImg },
    { id: 8, name: "CHESS", link: "https://forms.gle/sports8", image: chessImg },
    { id: 9, name: "LONG JUMP", link: "https://forms.gle/sports9", image: longJumpImg },
    { id: 10, name: "HIGH JUMP", link: "https://forms.gle/sports10", image: highJumpImg },
    { id: 11, name: "DISCUSS THROW", link: "https://forms.gle/sports11", image: discussImg },
    { id: 12, name: "SHOTPUT", link: "https://forms.gle/sports12", image: shotputImg },
    { id: 13, name: "100 METRE RACE", link: "https://forms.gle/sports13", image: raceImg },
    { id: 14, name: "CARROM", link: "https://forms.gle/sports14", image: carromImg },
    { id: 15, name: "TUG OF WAR", link: "https://forms.gle/sports15", image: tugOfWarImg },
    { id: 16, name: "ARM WRESTLING", link: "https://forms.gle/sports16", image: armWrestlingImg }
  ];

  return (
    <PageTransition>
    <div className="min-h-screen pt-32 pb-20 px-6 bg-black">
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
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:border-fest-gold/50 transition-all hover:-translate-y-2 group flex flex-col overflow-hidden"
            >
              {/* Image Section - 16:9 Aspect Ratio */}
              <div className="w-full aspect-video overflow-hidden border-b border-white/5 bg-black/50 relative">
                <img 
                  src={sport.image} 
                  alt={sport.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => { e.target.src = defaultSportsImg }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 bg-fest-gold/20 rounded-lg flex items-center justify-center text-fest-gold font-bold group-hover:bg-fest-gold group-hover:text-black transition-all text-xs">
                      {sport.id}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-fest-gold transition-colors italic uppercase leading-tight">
                    {sport.name}
                  </h3>
                  <p className="text-gray-400 text-xs mb-6 leading-relaxed">
                    Showcase your strength and sportsmanship!
                  </p>
                </div>

                <a 
                  href={sport.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-fest-gold text-black py-3 rounded-xl font-black uppercase text-center tracking-tighter hover:bg-white transition-all shadow-lg text-xs"
                >
                  Register Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </PageTransition>
  );
};

export default SportsEvents;