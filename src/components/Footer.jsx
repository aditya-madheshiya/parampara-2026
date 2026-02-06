import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MapPin, ExternalLink } from 'lucide-react';
import paramparaPng from '../assets/parampara_text.png'; 

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const socialLinks = [
    { name: "Official", link: "https://www.instagram.com/parampara_2k26_official?igsh=MTBxODAyZ28wMzdkYw==" },
    { name: "Technical", link: "https://www.instagram.com/parampara_2k26_technical?igsh=ajZud3I1bzlsc3Uw" },
    { name: "Sports", link: "https://www.instagram.com/parampara_2k26_sports?igsh=cnd4NHUzb2wxeDdw" },
    { name: "Cultural", link: "https://www.instagram.com/parampara_2k26_cultural?utm_source=qr&igsh=d2xxNTFwaG16bmlh" }
  ];

  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-16 pb-8 px-6 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto">
        
        {/* 1. TOP BRANDING - Responsive Image Size */}
        <div className="flex flex-col items-center mb-16" data-aos="fade-up">
          <img 
            src={paramparaPng} 
            alt="Parampara" 
            className="h-12 sm:h-16 md:h-20 w-auto drop-shadow-[0_0_15px_rgba(255,204,0,0.3)] mb-4"
          />
          <p className="text-fest-gold/60 text-[9px] md:text-xs font-black tracking-[0.4em] uppercase text-center">
            Celebrating 26 glorious years of legacy at ITM GIDA, Gorakhpur.
          </p>
        </div>

        {/* 2. MAIN GRID - 1 column on mobile, 3 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center sm:text-left">
          
          {/* Quick Links Section */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-white font-black uppercase text-sm tracking-widest mb-6 border-b-2 border-fest-gold pb-1">Navigate</h3>
            <ul className="space-y-3 text-gray-400 text-xs font-bold uppercase tracking-widest">
              <li className="hover:text-fest-gold transition-colors"><Link to="/" onClick={scrollToTop}>Home</Link></li>
              <li className="hover:text-fest-gold transition-colors"><Link to="/about" onClick={scrollToTop}>About Fest</Link></li>
              <li className="hover:text-fest-gold transition-colors"><Link to="/contact" onClick={scrollToTop}>Contact Team</Link></li>
            </ul>
          </div>

          {/* Connect/Social Section */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-white font-black uppercase text-sm tracking-widest mb-6 border-b-2 border-fest-gold pb-1">Connect</h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-all text-[11px] font-bold uppercase tracking-tighter"
                >
                  <Instagram size={14} className="text-fest-gold" /> {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Venue Section */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-white font-black uppercase text-sm tracking-widest mb-6 border-b-2 border-fest-gold pb-1">Venue</h3>
            <div className="flex items-start gap-3 text-gray-400 text-xs font-medium italic">
              <MapPin size={18} className="text-fest-gold flex-shrink-0" />
              <p>Sector-7, GIDA, Gorakhpur, UP - 273209</p>
            </div>
            <a href="https://maps.app.goo.gl/1ArKZ3XuGgBBBjz19" className="mt-4 inline-flex items-center gap-2 text-fest-gold text-[10px] font-black tracking-widest uppercase hover:underline">
               Locate on Map <ExternalLink size={12} />
            </a>
          </div>

        </div>

        {/* 3. BOTTOM BAR - Credits */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[10px] font-bold uppercase tracking-widest">
            © 2026 ITM GIDA. All Rights Reserved.
          </p>

          <div className="flex flex-col items-center md:items-end">
            <span className="text-gray-500 text-[8px] uppercase tracking-[0.3em] font-bold mb-1">Developed By</span>
            <div className="flex items-center gap-2 text-white font-black italic uppercase text-xs tracking-tighter">
              <span className="hover:text-fest-gold transition-colors">Aditya Madheshiya</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;