import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
// --- IMAGES IMPORT SECTION ---
// Sabhi images ko 'src/assets/culturepic/' folder mein .jpg ya .jpeg format mein rakhein
import rangoliImg from '../assets/culturepic/rangoli.jpeg';
import flowerImg from '../assets/culturepic/flowerpot.jpeg';
import singingImg from '../assets/culturepic/singing.jpeg';
import dancingImg from '../assets/culturepic/dancing.jpeg';
import posterImg from '../assets/culturepic/poster.jpeg';
import mandalaImg from '../assets/culturepic/mandala.jpeg';
import skitImg from '../assets/culturepic/skit.jpeg';
import standupImg from '../assets/culturepic/standup.jpeg';
import wasteImg from '../assets/culturepic/bestwaste.jpeg';
import mehandiImg from '../assets/culturepic/mehandi.jpeg';
import dumbImg from '../assets/culturepic/dumbchardes.jpeg';
import poetryImg from '../assets/culturepic/poetry.jpeg';
import faceImg from '../assets/culturepic/facepainting.jpeg';
import nailImg from '../assets/culturepic/nailart.jpeg';
import ramayanaImg from '../assets/culturepic/ramayana.jpeg';
import heritageImg from '../assets/culturepic/heritagequiz.jpeg';
import shankhImg from '../assets/culturepic/shankh.jpeg';
import laughterImg from '../assets/culturepic/laughter.jpeg';
import pyramidImg from '../assets/culturepic/pyramid.jpeg';
import filmistanImg from '../assets/culturepic/filmistan.jpeg';
import battleofbandImg from '../assets/culturepic/battleofband.jpeg';


// Fallback image (Default JPEG)
// import defaultCultureImg from '../assets/culturepic/default-culture.jpg';

const CulturalEvents = () => {
  const eventData = [
    { id: 1, name: "Rangoli", link: "https://docs.google.com/forms/d/e/1FAIpQLSecuSeR3NpTkliuaWScZimfhG3F6MMEB4gYZXyaHK6Utr5SHA/viewform?usp=header ", image: rangoliImg },
    { id: 2, name: "Flower Pot Making", link: "https://forms.gle/cnSJFfMs6nPzdrna6", image: flowerImg },
    { id: 3, name: "Singing", link: "https://docs.google.com/forms/d/13qUqAxhDrRmfRvO3_gpcWJ04XG_VdBWh2ZybSkoaJpk/edit", image: singingImg },
    { id: 4, name: "Dancing", link: "https://docs.google.com/forms/d/e/1FAIpQLSfsf5BvpcuO6beXFrBkjErUsG_lOZBA4Ibq68gdCxRhotCPFQ/viewform?usp=publish-editor", image: dancingImg },
    { id: 5, name: "Poster Making", link: "https://docs.google.com/forms/d/1QEzIc3KruWsV4bIc4h4ze5SAGyolvUPAF37qciKuAUw/edit?ts=698aaef4", image: posterImg },
    { id: 6, name: "Mandala Art", link: "https://forms.gle/BYjcWTHEucLiuvBk9", image: mandalaImg },
    { id: 7, name: "Skit", link: "https://forms.gle/kRE9d2DYrCpjvi7i6 ", image: skitImg },
    { id: 8, name: "Stand-up", link: "https://docs.google.com/forms/d/1iF5zIZqNVgS72JwVLhpvOR5s4rzgRua9CPAY6009iVQ/edit", image: standupImg },
    { id: 9, name: "Best Out Of Waste", link: "https://forms.gle/GXrhTMMpo9Tbarxz7", image: wasteImg },
    { id: 10, name: "Mehandi Design", link: "https://docs.google.com/forms/d/e/1FAIpQLSevGaaskz0w037Xxq7tbojqtkP75w3vXcyeTvwgU9n1ubcJJA/viewform?usp=dialog", image: mehandiImg },
    { id: 11, name: "Dumb Chardes", link: "https://forms.gle/aqSuU4Br2jxXukUX8", image: dumbImg },
    { id: 12, name: "Poetry", link: "https://forms.gle/RCiNKz3eoYyptfuC6", image: poetryImg },
    { id: 13, name: "Face Painting", link: "https://docs.google.com/forms/d/e/1FAIpQLSeEILzKIlXnDResfXRYQeKYFkDnoJxhkwKgvJNGSBl0QN0HDQ/viewform?usp=dialog", image: faceImg },
    { id: 14, name: "Nail Art", link: "https://forms.gle/mkScq5gkBTKquDaPA", image: nailImg },
    { id: 15, name: "Ramcharitmanas antakshari ", link: "https://docs.google.com/forms/d/e/1FAIpQLSdbTxJEouTDO5TLHPJclfvtl7rSnzpaEnEbEdXrEJAHXFMsng/viewform?usp=sharing&ouid=114820572430620098558", image: ramayanaImg },
    { id: 16, name: "Heritage Quiz", link: "https://docs.google.com/forms/d/e/1FAIpQLScWVQKqe1p1cC6VWG3Z26AmwbAfSmLAYSUUjKPHULyMod_h_g/viewform?usp=preview", image: heritageImg },
    { id: 17, name: "Shankhannd", link: "https://docs.google.com/forms/d/e/1FAIpQLSfJsJ4Tly5FfVjVWeN1Kb3MOAhBpd4oRGilKQ7Zlhhy9ZKvFA/viewform?usp=dialog", image: shankhImg },
    { id: 18, name: "Mimicry", link: "https://forms.gle/o239C5n9HaZyDGMX9", image: laughterImg },
    { id: 19, name: "Pyramid", link: "https://docs.google.com/forms/d/e/1FAIpQLSdfHLzFvLHte3oBSyVFdqSyytdHf_wqj8GEVhKKFtOvQtjUUA/viewform", image: pyramidImg },
    { id: 20, name: "Filmistan", link: "https://forms.gle/XVHo1xXsyzGcmwCC7", image: filmistanImg },
    { id: 21, name: "Battle of bands", link: "https://docs.google.com/forms/d/1PtKAdCUtTn-eEHVceNowANPWW6SyCXRDeUFNhVvNmS0/edit", image: battleofbandImg }
  ];

  return (
    <PageTransition>
    <div className="min-h-screen pt-32 pb-20 px-6 bg-black">
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

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {eventData.map((event) => (
            <div 
              key={event.id} 
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:border-fest-gold/50 transition-all hover:-translate-y-2 group flex flex-col overflow-hidden"
            >
              {/* Image Section - 16:9 Ratio */}
              <div className="w-full aspect-video overflow-hidden border-b border-white/5 bg-black/50 relative">
                <img 
                  src={event.image} 
                  alt={event.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => { e.target.src = defaultCultureImg }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 bg-fest-gold/20 rounded-lg flex items-center justify-center text-fest-gold font-bold group-hover:bg-fest-gold group-hover:text-black transition-all text-xs">
                      {event.id}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-fest-gold transition-colors italic uppercase leading-tight">
                    {event.name}
                  </h3>
                  <p className="text-gray-400 text-xs mb-6 leading-relaxed">
                    Apna hunar dikhayen aur exciting prizes jeeten!
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

export default CulturalEvents;