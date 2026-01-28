import React from 'react';
import { Link } from 'react-router-dom';

const TechnicalEvents = () => {
  // Image se nikale gaye saare 22 Technical Events
  const techEvents = [
    { id: 1, name: "Bug Hunter", link: "https://forms.gle/tech1" },
    { id: 2, name: "Code Titan", link: "https://forms.gle/tech2" },
    { id: 3, name: "Mini Hackathon", link: "https://forms.gle/tech3" },
    { id: 4, name: "Logic War", link: "https://forms.gle/tech4" },
    { id: 5, name: "Need For Speed", link: "https://forms.gle/tech5" },
    { id: 6, name: "Robo War", link: "https://forms.gle/tech6" },
    { id: 7, name: "Bridge Kriti", link: "https://forms.gle/tech7" },
    { id: 8, name: "Vichar Yuddh", link: "https://forms.gle/tech8" },
    { id: 9, name: "Junkyard (Recraft)", link: "https://forms.gle/tech9" },
    { id: 10, name: "Rubiks War", link: "https://forms.gle/tech10" },
    { id: 11, name: "Shark Tank", link: "https://forms.gle/tech11" },
    { id: 12, name: "Kalpana Canvas (Graphics Design)", link: "https://forms.gle/tech12" },
    { id: 13, name: "BGMI", link: "https://forms.gle/tech13" },
    { id: 14, name: "Riddle Master", link: "https://forms.gle/tech14" },
    { id: 15, name: "Prescription Decoding Challenge", link: "https://forms.gle/tech15" },
    { id: 16, name: "Lens Master", link: "https://forms.gle/tech16" },
    { id: 17, name: "Circuit Design", link: "https://forms.gle/tech17" },
    { id: 18, name: "Science Exhibition (SR)", link: "https://forms.gle/tech18" },
    { id: 19, name: "Science Exhibition (JR)", link: "https://forms.gle/tech19" },
    { id: 20, name: "Blind Typing Challenge", link: "https://forms.gle/tech20" },
    { id: 21, name: "FREE FIRE", link: "https://forms.gle/tech21" },
    { id: 22, name: "Futuristic Fiction Writing", link: "https://forms.gle/tech22" }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex justify-between items-center mb-12 flex-wrap gap-4">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic">
            Technical <span className="text-fest-gold">Events</span>
          </h1>
          <Link 
            to="/" 
            className="text-fest-gold border border-fest-gold/50 px-6 py-2 rounded-full hover:bg-fest-gold hover:text-black transition-all font-bold tracking-widest text-sm"
          >
            ← BACK HOME
          </Link>
        </div>

        {/* 22 Technical Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {techEvents.map((event) => (
            <div 
              key={event.id} 
              className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:border-fest-gold/50 transition-all hover:-translate-y-2 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-fest-gold/20 rounded-lg flex items-center justify-center text-fest-gold font-bold mb-4 group-hover:bg-fest-gold group-hover:text-black transition-all">
                  {event.id}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-fest-gold transition-colors italic uppercase leading-tight">
                  {event.name}
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  Showcase your technical skills and innovate for the future!
                </p>
              </div>

              <a 
                href={event.link} 
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

export default TechnicalEvents;