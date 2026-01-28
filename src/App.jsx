import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Events from './components/Events';
import CulturalEvents from './pages/CulturalEvents';
import TechnicalEvents from './pages/TechnicalEvents';
import SportsEvents from './pages/SportsEvents';

// Team Components
import OrganizingHead from './components/OrganizingHead';
import TechnicalHeads from './components/TechnicalHeads';
import CulturalHeads from './components/CulturalHeads';
import SportsHeads from './components/SportsHeads';
import StageHead from './components/StageHead';
import SponsorshipHead from './components/SponsorshipHead';
import DisciplineHead from './components/DisciplineHead';
import HospitalityHeads from './components/HospitalityHeads';
import VolunteerHead from './components/VolunteerHead';
import PromotionHeads from './components/PromotionHeads';
import DocumentHead from './components/DocumentHead';
import AnchoringHeads from './components/AnchoringHeads';
import CDTHead from './components/CDTHead';
import DirectorDesk from './components/DirectorDesk';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* HOME ROUTE: Isme saare section honge */}
        <Route path="/" element={
          <>
            <Hero />
            <Events />
            <DirectorDesk />
            <OrganizingHead />
            <TechnicalHeads />
            <CulturalHeads />
            <SportsHeads />
            <StageHead />
            <SponsorshipHead />
            <DisciplineHead />
            <HospitalityHeads />
            <VolunteerHead />
            <PromotionHeads />
            <DocumentHead />
            <AnchoringHeads />
            <CDTHead />
          </>
        } />

        {/* EVENT PAGES: Inme sirf wahi page dikhega, team cards nahi */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/cultural" element={<CulturalEvents />} />
        <Route path="/technical" element={<TechnicalEvents />} />
        <Route path="/sports" element={<SportsEvents />} />
      </Routes>
    </Router>
  );
}

export default App;