import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <nav className="fixed w-full h-20 bg-black/80 backdrop-blur-md border-b border-fest-gold/20 z-[100]">
      <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          {/* Logo: Square Rounded (rounded-xl) style */}
          <img 
            src={logo} 
            alt="Logo" 
            className="w-12 h-12 rounded-xl border border-fest-gold/50 object-cover" 
            onError={(e) => e.target.src='https://via.placeholder.com/40'} 
          />
          <h1 className="text-xl md:text-2xl font-bold text-fest-gold uppercase tracking-tighter">Parampara 2026</h1>
        </Link>
        <ul className="hidden md:flex gap-8 text-white font-medium">
          <li className="hover:text-fest-gold cursor-pointer"><Link to="/">Home</Link></li>
          <li className="hover:text-fest-gold cursor-pointer">About</li>
          <li className="hover:text-fest-gold cursor-pointer"><Link to="/contact">Contact</Link></li>
          <li className="hover:text-fest-gold cursor-pointer">Update Section</li>
        </ul>
        <div onClick={() => setNav(!nav)} className="md:hidden text-fest-gold text-3xl cursor-pointer z-[110] relative">
          {nav ? '✕' : '☰'}
        </div>
      </div>

      {/* Mobile Menu: Smooth Slide Down Animation using transform & opacity */}
      <div className={`fixed top-0 left-0 w-full h-[40dvh] bg-fest-dark flex flex-col items-center justify-center gap-8 text-2xl transition-all duration-800 ease-in-out z-[105] ${
        nav 
          ? 'translate-y-0 opacity-100 visible' 
          : '-translate-y-full opacity-6 invisible'
      }`}>
        <Link onClick={() => setNav(false)} to="/">Home</Link>
        <a onClick={() => setNav(false)}>About</a>
        <a onClick={() => setNav(false)}><Link to="/contact">Contact</Link></a>
        <a onClick={() => setNav(false)} >Update Section</a>
      </div>
    </nav>
  );
};

export default Navbar;