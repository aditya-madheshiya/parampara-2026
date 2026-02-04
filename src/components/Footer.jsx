import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react'; // Instagram icon import kiya
import logo from '../assets/logo.jpeg';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: "Official", link: "https://www.instagram.com/parampara_2k26_official?igsh=MTBxODAyZ28wMzdkYw==", label: "OFFICIAL PAGE" },
    { name: "Technical", link: "https://www.instagram.com/parampara_2k26_technical?igsh=ajZud3I1bzlsc3Uw", label: "TECHNICAL PAGE" },
    { name: "Sports", link: "https://www.instagram.com/parampara_2k26_sports?igsh=cnd4NHUzb2wxeDdw", label: "SPORTS PAGE" },
    { name: "Cultural", link: "https://www.instagram.com/parampara_2k26_cultural?utm_source=qr&igsh=d2xxNTFwaG16bmlh", label: "CULTURAL PAGE" }
  ];

  return (
    <footer className="bg-[#050505] border-t border-fest-gold/20 pt-16 pb-8 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* 1. Brand Section */}
          <div className="space-y-6">
            <Link to="/" onClick={scrollToTop} className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="w-12 h-12 rounded-lg border border-fest-gold/30" />
              <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter">
                Parampara <span className="text-fest-gold">2026</span>
              </h2>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              Celebrating 26 glorious years of legacy at ITM GIDA, Gorakhpur.
            </p>
          </div>

          {/* 2. Explore Links */}
          <div>
            <h3 className="text-white font-black uppercase text-sm tracking-widest mb-6 underline decoration-fest-gold decoration-2 underline-offset-8">Explore</h3>
            <ul className="space-y-4 text-gray-400 text-sm font-bold">
              <li className="hover:text-fest-gold transition-colors"><Link to="/" onClick={scrollToTop}>HOME</Link></li>
              <li className="hover:text-fest-gold transition-colors"><Link to="/about" onClick={scrollToTop}>ABOUT FEST</Link></li>
              <li className="hover:text-fest-gold transition-colors"><Link to="/contact" onClick={scrollToTop}>CONTACT TEAM</Link></li>
            </ul>
          </div>

          {/* 3. Follow Us (With Official Instagram Icons) */}
          <div>
            <h3 className="text-white font-black uppercase text-sm tracking-widest mb-6 underline decoration-fest-gold decoration-2 underline-offset-8">Follow Us Instagram</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-fest-gold/50 hover:bg-fest-gold/10 transition-all group"
                >
                  <div className="w-15 h-10 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                    <Instagram size={20} strokeWidth={2.5} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-fest-gold font-black tracking-widest uppercase">{social.label}</span>
                    <span className="text-xs text-white font-bold uppercase tracking-tighter">{social.name}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* 4. Venue Section */}
          <div>
            <h3 className="text-white font-black uppercase text-sm tracking-widest mb-6 underline decoration-fest-gold decoration-2 underline-offset-8">Venue</h3>
            <p className="text-gray-400 text-sm leading-relaxed font-medium">
              ITM GIDA, Sector-7, <br />
              GIDA, Gorakhpur, UP - 273209
            </p>
          </div>

        </div>

        {/* BOTTOM LINE & CREDITS */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[9px] uppercase tracking-[0.4em] font-black">
            © 2026 PARAMPARA. ITM GIDA GORAKHPUR.
          </p>

          <div className="flex flex-col items-center md:items-end group">
            <span className="text-gray-500 text-[8px] uppercase tracking-[0.3em] font-bold mb-1">Designed & Developed By</span>
            <div className="flex items-center gap-2 text-white font-black italic uppercase tracking-tighter text-sm">
              <span className="group-hover:text-fest-gold transition-colors duration-500">Aditya Madheshiya</span>
              <span className="text-gray-600 font-bold text-xs">&</span>
              <span className="group-hover:text-fest-gold transition-colors duration-500">Anshit Kumar Srivastav</span>
            </div>
            <div className="w-0 h-[1.5px] bg-fest-gold group-hover:w-full transition-all duration-700 mt-1 shadow-[0_0_10px_#ffcc00]"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;