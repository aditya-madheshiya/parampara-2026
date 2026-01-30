import React from 'react';
// Images import
import ashishImg from '../assets/volunteerhead/ashish.jpeg'; 
import rahulImg from '../assets/volunteerhead/rahul.jpeg';

const VolunteerHead = () => {
  // 1. Sara data is array mein rahega
  const volunteerData = [
    {
      id: 1,
      name: "ASHISH SINGH",
      role: "Volunteer Committee Head",
      image: ashishImg,
      phone: "916387716102",
      message: "Hi Ashish, I want to join the volunteer team for Parampara 2026."
    },
    {
      id: 2,
      name: "Rahul Rai", // Dusre head ka naam yahan likhein
      role: "Volunteer Committee Head",
      image: rahulImg,
      phone: "919305569986", // Dusra number yahan
      message: "Hi, I want to join the volunteer team for Parampara 2026."
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-transparent flex flex-col items-center w-full">
      {/* Centered Heading */}
      <div className="w-full flex justify-center mb-10 md:mb-12">
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic text-center tracking-tighter">
          Volunteer <span className="text-fest-gold">Heads</span>
        </h2>
      </div>

      {/* 2. Mapping through the array to create cards */}
      <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl">
        {volunteerData.map((head) => (
          <div 
            key={head.id}
            className="w-full max-w-[340px] sm:max-w-sm bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-[2.5rem] shadow-2xl hover:border-fest-gold/30 transition-all duration-500 group text-center relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-fest-gold/5 blur-3xl rounded-full pointer-events-none"></div>

            {/* Profile Picture */}
            <div className="relative mx-auto w-44 h-44 sm:w-56 sm:h-56 mb-6 md:mb-8 p-1 border-2 border-fest-gold/20 rounded-[2rem] sm:rounded-[2.5rem] group-hover:border-fest-gold/50 transition-all duration-500">
              <img 
                src={head.image} 
                alt={head.name} 
                className="w-full h-full object-cover object-top rounded-[1.8rem] sm:rounded-[2.2rem] shadow-xl"
                onError={(e) => e.target.src = 'https://via.placeholder.com/300/ffcc00/000000?text=Volunteer+Head'}
              />
            </div>

            {/* Info Section */}
            <div className="space-y-1 md:space-y-2 mb-6 md:mb-8">
              <h3 className="text-xl md:text-3xl font-black text-white uppercase tracking-tighter leading-tight">
                {head.name}
              </h3>
              <p className="text-fest-gold font-bold uppercase text-[10px] md:text-xs tracking-[0.2em] opacity-90">
                {head.role}
              </p>
            </div>

            {/* WhatsApp Button */}
            <a 
              href={`https://wa.me/${head.phone}?text=${encodeURIComponent(head.message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-[#25D366] text-white w-full py-3.5 md:py-4 rounded-xl md:rounded-2xl font-black uppercase text-xs md:text-sm tracking-widest transition-all duration-300 shadow-lg hover:bg-[#1ebea5] active:scale-95"
            >
              Contact on WhatsApp
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VolunteerHead;