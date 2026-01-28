import React from 'react';
import { Link } from 'react-router-dom';

const Events = () => {
  const categories = [
    { title: "Cultural", icon: "🎭", path: "/cultural", events: ["Dance", "Singing", "Drama" ,"Many More...."] },
    { title: "Technical", icon: "💻", path: "/technical", events: ["BGMI", "Free Fire", "Mini Hackathon" ,"Many More...."] },
    { title: "Sports", icon: "🏆", path: "/sports", events: ["Kho-Kho", "Kabaddi", "Football " , "Many More...."] }
  ];

  return (
    <section className="py-24 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl md:text-6xl font-bold text-white mb-16 uppercase italic">Event <span className="text-fest-gold">Categories</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:border-fest-gold/50 transition-all group">
              <span className="text-6xl mb-4 block">{cat.icon}</span>
              <h3 className="text-2xl font-bold text-fest-gold mb-4 uppercase">{cat.title}</h3>
              <ul className="text-gray-300 space-y-2 mb-8">
                {cat.events.map(e => <li key={e}>• {e}</li>)}
              </ul>
              <Link to={cat.path} className="text-fest-gold font-bold uppercase tracking-widest group-hover:underline">Explore More →</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Events;