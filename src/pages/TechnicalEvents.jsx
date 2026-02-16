import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

// --- IMAGES IMPORT SECTION ---
// Note: Apne folder 'src/assets/techeventpic/' mein in naamon se images rakhein
import bugHunterImg from '../assets/techeventpic/bughunter.jpeg';
import codeTitanImg from '../assets/techeventpic/codetitan.jpeg';
import miniHackImg from '../assets/techeventpic/minihackathon.jpeg';
import logicWarImg from '../assets/techeventpic/logicwar.jpeg';
import nfsImg from '../assets/techeventpic/nfs.jpeg';
import roboWarImg from '../assets/techeventpic/robowar.jpeg';
import bridgeKritiImg from '../assets/techeventpic/bridgekriti.jpeg';
import vicharYuddhImg from '../assets/techeventpic/vicharyuddh.jpeg';
import junkyardImg from '../assets/techeventpic/junkyard.jpeg';
import rubiksWarImg from '../assets/techeventpic/rubikswar.jpeg';
import sharkTankImg from '../assets/techeventpic/sharktank.jpeg';
import kalpanaImg from '../assets/techeventpic/kalpanacanvas.jpeg';
import bgmiImg from '../assets/techeventpic/bgmi.jpeg';
import riddleImg from '../assets/techeventpic/riddlemaster.jpeg';
import prescriptionImg from '../assets/techeventpic/prescription.jpeg';
import lensMasterImg from '../assets/techeventpic/lensmaster.jpeg';
import circuitImg from '../assets/techeventpic/circuitdesign.jpeg';
import scienceSrImg from '../assets/techeventpic/sciencesr.jpeg';
import scienceJrImg from '../assets/techeventpic/sciencejr.jpeg';
import blindTypingImg from '../assets/techeventpic/blindtyping.jpeg';
import freeFireImg from '../assets/techeventpic/freefire.jpeg';
import fictionImg from '../assets/techeventpic/fictionwriting.jpeg';

// Fallback Image (Agar koi image miss ho jaye to ye dikhegi)
// import defaultImg from '../assets/techeventpic/default.jpg'; 

const TechnicalEvents = () => {
  
  // Full Data with Images
  const techEvents = [
    { id: 1, name: "Bug Hunter", link: "https://forms.gle/WdCo6u9eLXejyAwF7", image: bugHunterImg },
    { id: 2, name: "Code Titan", link: "https://docs.google.com/forms/d/e/1FAIpQLSf2sFComHodUJqu9aJ5ZTf1cDuPDQ4fg7aqYQd8ObIT0-IzBg/viewform?usp=dialog", image: codeTitanImg },
    { id: 3, name: "Mini Hackathon", link: "https://docs.google.com/forms/d/e/1FAIpQLSc1Vr5JaH3agWswIGn1CQvTJhBd89EVkflZrI-6d9BBenZDdA/viewform?usp=dialog", image: miniHackImg },
    { id: 13, name: "BGMI", link: "https://docs.google.com/forms/d/e/1FAIpQLSdJI_ssRxo1EyE2--6sLs0wO1xzOpU3WhbdTK5CmT_fb9CMWg/viewform?usp=publish-editor", image: bgmiImg },
    { id: 21, name: "FREE FIRE", link: "https://docs.google.com/forms/d/e/1FAIpQLScY76rBh1QOgJoMS5ff0r8jgaELD7VFoLmsdCqUF_7jPdnb6w/viewform?usp=dialog", image: freeFireImg },
    { id: 4, name: "Logic War", link: "https://forms.gle/D7VENrDh2YB9x37R9", image: logicWarImg },
    { id: 5, name: "Need For Speed", link: "https://docs.google.com/forms/d/e/1FAIpQLSeGSBlybMysguaWDdTet2riasJyS_KuzElCaojzYJ90FwwIgA/viewform?usp=publish-editor", image: nfsImg },
    { id: 6, name: "Robo War", link: "https://forms.gle/fHxptANwv46wN5Y49", image: roboWarImg },
    { id: 7, name: "Bridge Kriti", link: "https://forms.gle/xDmKvLPQufPVvVW47", image: bridgeKritiImg },
    { id: 8, name: "Vichar Yuddh", link: "https://docs.google.com/forms/d/e/1FAIpQLSdoRsWwhSv5eTbpCFNU94sMgnRerhhxbuQWerIp9ZfnF_8srQ/viewform?usp=header", image: vicharYuddhImg },
    { id: 9, name: "Junkyard (Recraft)", link: "https://docs.google.com/forms/d/e/1FAIpQLScJ1eoLy9FE0A3nN2r1D9rgHqW0c14aYfaHZX9x2V0w7eeGGQ/viewform?usp=preview", image: junkyardImg },
    { id: 10, name: "Rubiks War", link: "https://docs.google.com/forms/d/e/1FAIpQLSe0A-UDcNn1juR0lqm7X6DTTgyJcQ7ipURlv3BKjCpw6QRWLQ/viewform?usp=heade", image: rubiksWarImg },
    { id: 11, name: "Shark Tank", link: "https://forms.gle/9Rss7j6McZ2HGLyT7", image: sharkTankImg },
    { id: 12, name: "Kalpana Canvas", link: "https://docs.google.com/forms/d/e/1FAIpQLScLlUYuByTN3_ac6hJwWWoGN8AB-brCV0OanLO9KbeqX-qC8A/viewform?usp=header", image: kalpanaImg },
    { id: 14, name: "Riddle Master", link: "https://docs.google.com/forms/d/e/1FAIpQLSfB42_N_Bd9C27DJX5mdx0wFV3pNYinPb9Hi_dLBB1RHKPbuQ/viewform?usp=header", image: riddleImg },
    { id: 15, name: "Prescription Decoding", link: "https://forms.gle/HW4Xw5N6aVjx8dx76", image: prescriptionImg },
    { id: 16, name: "Lens Master", link: "https://docs.google.com/forms/d/e/1FAIpQLSc3Sjh5W5j4qeWCGEt2VnUjMWT1q4OX5KI6qnuPlkrnSFOp-A/viewform?usp=publish-editor", image: lensMasterImg },
    { id: 17, name: "Circuit Design", link: "https://forms.gle/NdocAXotejUiP6T49", image: circuitImg },
    { id: 18, name: "Science Exhibition (SR)", link: "https://forms.gle/EUDCV9PUx59VFM587", image: scienceSrImg },
    { id: 19, name: "Science Exhibition (JR)", link: "https://forms.gle/CD68LKDn7fHgSbNR8", image: scienceJrImg },
    { id: 20, name: "Blind Typing", link: "https://forms.gle/2pQYqKZKY4nHxcEL7 ", image: blindTypingImg },
    { id: 22, name: "Futuristic Fiction", link: "https://docs.google.com/forms/d/e/1FAIpQLSclFFA1FNtYn5ZBF2SFWxjc6ot_SNTaMcEcwQfKVpKq_w88MQ/viewform?usp=publish-editor", image: fictionImg }
  ];

  return (
    <PageTransition>
    <div className="min-h-screen pt-32 pb-20 px-6 bg-black">
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

        {/* 22 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {techEvents.map((event) => (
            <div 
              key={event.id} 
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:border-fest-gold/50 transition-all hover:-translate-y-2 group flex flex-col overflow-hidden"
            >
              {/* Image Section - 16:9 Aspect Ratio */}
              <div className="w-full aspect-video overflow-hidden border-b border-white/5 bg-black/50 relative">
                <img 
                  src={event.image} 
                  alt={event.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => { e.target.src = defaultImg }} // Agar image nahi mili to default lag jayegi
                />
                
                {/* Gradient Overlay for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
              </div>

              {/* Content Section */}
              <div className="p-5 flex flex-col justify-between flex-grow relative">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <div className="w-8 h-8 bg-fest-gold/20 rounded-lg flex items-center justify-center text-fest-gold font-bold group-hover:bg-fest-gold group-hover:text-black transition-all text-xs">
                      {event.id}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-fest-gold transition-colors italic uppercase leading-tight">
                    {event.name}
                  </h3>
                  <p className="text-gray-400 text-[10px] uppercase tracking-wider mb-6">
                    Showcase your talent
                  </p>
                </div>

                <a 
                  href={event.link} 
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

export default TechnicalEvents;