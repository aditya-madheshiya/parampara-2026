import React from 'react';
import OrganizingHead from '../components/OrganizingHead';
import TechnicalHeads from '../components/TechnicalHeads';
import CulturalHeads from '../components/CulturalHeads';
import SportsHeads from '../components/SportsHeads';
import StageHead from '../components/StageHead';
import SponsorshipHead from '../components/SponsorshipHead';
import DisciplineHead from '../components/DisciplineHead';
import HospitalityHeads from '../components/HospitalityHeads';
import VolunteerHead from '../components/VolunteerHead';
import PromotionHeads from '../components/PromotionHeads';
import DocumentHead from '../components/DocumentHead';
import AnchoringHeads from '../components/AnchoringHeads';
import CDTHead from '../components/CDTHead';
import PageTransition from '../components/PageTransition';

const Contact = () => {
  return (
    <PageTransition>
    // Background Update: Deep Black to Navy Blue Gradient with Mesh Effect
    <div className="pt-20 bg-[#050505] min-h-screen relative overflow-hidden">
      
      {/* --- BACKGROUND ELEMENTS --- */}
      {/* 1. Subtile Dot Grid */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffcc00 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      {/* 2. Floating Animated Orbs (Golden & Blue Glow) */}
      <div className="absolute top-[10%] -left-[10%] w-[500px] h-[500px] bg-fest-gold/10 blur-[150px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-[20%] -right-[10%] w-[600px] h-[600px] bg-blue-600/5 blur-[180px] rounded-full"></div>
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/5 blur-[200px] rounded-full"></div>

      {/* --- CONTENT SECTION --- */}
      <div className="relative z-10">
        <div className="text-center py-16 px-6">
          <h1 className="text-5xl md:text-8xl font-black text-white uppercase italic tracking-tighter">
            Contact <span className="text-fest-gold">Our Team</span>
          </h1>
          <div className="w-24 h-1 bg-fest-gold mx-auto mt-6 rounded-full"></div>
          <p className="text-gray-400 mt-6 tracking-[0.4em] uppercase text-[10px] md:text-xs font-bold">
            Parampara 2026 Core Committee | ITM GIDA
          </p>
        </div>

        {/* --- CARDS GRID SECTION --- */}
        <div className="max-w-7xl mx-auto pb-20 space-y-4">
          <OrganizingHead />
          <TechnicalHeads />
          <CulturalHeads />
          <SportsHeads />
          <CDTHead />
          <PromotionHeads />
          <SponsorshipHead />
          <StageHead />
          <AnchoringHeads />
          <HospitalityHeads />
          <DisciplineHead />
          <VolunteerHead />
          <DocumentHead />
        </div>
      </div>

      {/* Subtle Bottom Glow */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-fest-gold/5 to-transparent"></div>
    </div>
    </PageTransition>
  );
};

export default Contact;