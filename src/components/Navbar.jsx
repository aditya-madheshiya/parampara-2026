import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  // Mobile menu close karne ke liye function
  const handleClose = () => setNav(false);

  return (
    <nav className="fixed w-full h-20 bg-black/80 backdrop-blur-md border-b border-fest-gold/20 z-[100]">
      <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3" onClick={handleClose}>
          <img 
            src={logo} 
            alt="Logo" 
            className="w-12 h-12 rounded-xl border border-fest-gold/50 object-cover" 
            onError={(e) => e.target.src='https://via.placeholder.com/40'} 
          />
          <h1 className="text-xl md:text-2xl font-bold text-fest-gold uppercase tracking-tighter">
            Parampara 2026
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          <li className="hover:text-fest-gold cursor-pointer transition-colors">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-fest-gold cursor-pointer transition-colors">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-fest-gold cursor-pointer transition-colors">
            <Link to="/contact">Contact</Link>
          </li>
          {/* Agar Update Section ka koi page hai to wahan link de do */}
          <li className="hover:text-fest-gold cursor-pointer transition-colors">
            Update Section
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div onClick={() => setNav(!nav)} className="md:hidden text-fest-gold text-3xl cursor-pointer z-[110] relative">
          {nav ? '✕' : '☰'}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full h-[50dvh] bg-black/95 flex flex-col items-center justify-center gap-8 text-2xl text-white transition-all duration-500 ease-in-out z-[105] ${
        nav 
          ? 'translate-y-0 opacity-100 visible' 
          : '-translate-y-full opacity-0 invisible'
      }`}>
        <Link onClick={handleClose} to="/" className="hover:text-fest-gold">Home</Link>
        <Link onClick={handleClose} to="/about" className="hover:text-fest-gold">About</Link>
        <Link onClick={handleClose} to="/contact" className="hover:text-fest-gold">Contact</Link>
        <div onClick={handleClose} className="hover:text-fest-gold cursor-pointer text-white/50">Update Section</div>
      </div>
    </nav>
  );
};

export default Navbar;