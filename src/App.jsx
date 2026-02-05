import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedEvents from './components/FeaturedEvents';
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
import ConvenorDesk from './components/ConvenorDesk';
import Contact from './pages/Contact';
import About from './pages/About';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Updates from './pages/Updates';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* HOME ROUTE: Isme saare section honge */}
        <Route path="/" element={
          <>
            <Hero />
            <Events />
            <DirectorDesk />
            <ConvenorDesk />
            <FeaturedEvents />
            {/* <OrganizingHead />
            <TechnicalHeads />
            <CulturalHeads />
            <SportsHeads />
            <CDTHead />
            <PromotionHeads />
            <SponsorshipHead />
            <AnchoringHeads />
            <HospitalityHeads />
            <DisciplineHead />
            <VolunteerHead />
            <StageHead />
            <DocumentHead /> */}
          </>
        } />

        {/* EVENT PAGES: Inme sirf wahi page dikhega, team cards nahi */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cultural" element={<CulturalEvents />} />
        <Route path="/technical" element={<TechnicalEvents />} />
        <Route path="/sports" element={<SportsEvents />} />
        <Route path="/updates" element={<Updates />} />
      </Routes>
      <Footer /> {/* Footer hamesha niche rahega */}
    </Router>
  );
}

export default App;