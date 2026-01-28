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

const Contact = () => {
  return (
    <div className="pt-20 bg-black min-h-screen">
      <div className="text-center py-10">
        <h1 className="text-4xl md:text-7xl font-black text-white uppercase italic">
          Contact <span className="text-fest-gold">Our Team</span>
        </h1>
        <p className="text-gray-400 mt-4 tracking-[0.3em] uppercase text-xs">Parampara 2026 Core Committee</p>
      </div>

      {/* Saare Cards Yahan Show Honge */}
      <OrganizingHead />
      <TechnicalHeads />
      <CulturalHeads />
      <SportsHeads />
      <SponsorshipHead />
      <StageHead />
      <DisciplineHead />
      <HospitalityHeads />
      <VolunteerHead />
      <PromotionHeads />
      <DocumentHead />
      <AnchoringHeads />
      <CDTHead />
    </div>
  );
};

export default Contact;