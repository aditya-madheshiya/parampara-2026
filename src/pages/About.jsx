import React from 'react';
import { Link } from 'react-router-dom';
import adityaImg from '../assets/techhead/aditya.jpeg'; 
import anshitImg from '../assets/techhead/anshit.jpeg'; 
import PageTransition from '../components/PageTransition';

const About = () => {
  const developers = [
    { 
      id: 1, 
      name: "Aditya Madheshiya", 
      role: "Lead Developer", 
      img: adityaImg,
      linkedin: "https://www.linkedin.com/in/aditya-madheshiya-829899322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" // Apna LinkedIn link yahan dalein
    },
    { 
      id: 2, 
      name: "Anshit Kumar Srivastav", 
      role: "Co-Developer", 
      img: anshitImg,
      linkedin: "https://www.linkedin.com/in/anshit-kumar-srivastava?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" // Anshit ka LinkedIn link yahan dalein
    }
  ];

  return (
    <PageTransition>
    <div className="min-h-screen pt-32 pb-20 px-6 bg-[#050505] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffcc00 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}></div>
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-fest-gold/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>

      <div className="max-w-5xl w-full mx-auto relative z-10">
        {/* Main About Card */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-2xl text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-black text-[#2D46B9] uppercase mb-4 tracking-tighter">About Parampara 2026</h1>
          <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-10 italic">Celebrating 26 Glorious Years! 🥳</h2>
          <div className="space-y-6 text-gray-600 text-lg md:text-xl font-medium leading-relaxed">
            <p>🌟 Parampara 2026 marks the 26th anniversary of our grand celebration.</p>
            <p>🎭 This edition promises to be more spectacular than ever before.</p>
          </div>
          <div className="mt-12 bg-[#F2B100] text-black px-10 py-4 rounded-2xl font-black inline-block shadow-lg hover:scale-105 transition-all">
             Join the Legacy! ✨
          </div>
        </div>

        {/* Developers Section */}
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic mb-12 text-center tracking-tighter">
          Meet the <span className="text-fest-gold">Developers</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-10">
          {developers.map((dev) => (
            <div key={dev.id} className="w-full sm:w-[340px] bg-[#111111] border border-white/10 p-8 rounded-[3rem] text-center group hover:border-fest-gold/40 transition-all duration-500 shadow-2xl">
              
              {/* Profile Image - Perfect Alignment */}
              <div className="relative mx-auto w-48 h-48 mb-6 p-1 border-2 border-fest-gold/20 rounded-[2.5rem] overflow-hidden bg-black/50">
                <img 
                  src={dev.img} 
                  alt={dev.name}
                  className="w-full h-full object-cover object-top rounded-[2.2rem] group-hover:scale-110 transition-transform duration-500" 
                />
              </div>

              {/* Developer Info */}
              <div className="mb-8">
                <h3 className="text-2xl font-black text-white uppercase italic tracking-tight group-hover:text-fest-gold transition-colors">
                  {dev.name}
                </h3>
                <p className="text-fest-gold font-bold uppercase text-[10px] tracking-[0.3em] mt-2 opacity-80">
                  {dev.role}
                </p>
              </div>

              {/* LINKEDIN BUTTON */}
              <a 
                href={dev.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-[#0077B5] hover:bg-[#005a8a] text-white py-4 rounded-2xl font-black uppercase text-sm tracking-widest transition-all shadow-lg active:scale-95 gap-2"
              >
                <span>View LinkedIn</span>
                <span className="text-lg">↗</span>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link to="/" className="text-fest-gold font-bold uppercase tracking-widest text-sm hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
    </PageTransition>
  );
};

export default About;