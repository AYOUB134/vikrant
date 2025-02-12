import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ReviewsBanner from './components/ReviewsBanner';
import DomainSearch from './components/DomainSearch';
import MigrationSection from './components/MigrationSection';
import FeatureCard from './components/FeatureCard';
import ReviewCard from './components/ReviewCard';
import PerformanceCard from './components/PerformanceCard';
import SupportSection from './components/SupportSection';
import Footer from './components/Footer';
import CopyPricingPlan from './components/CopyPricingPlan'
import Home2 from './components/page2/Home';
import Home3 from './components/page3/Home';
import Home4 from './components/page4/Home'


function App() {
  return (
    <Router>
   
      <Routes>
        <Route 
          path="/" 
          element={
            <>
            <Navbar/>
              <HeroSection />
              <ReviewsBanner />
              <CopyPricingPlan/>
              <DomainSearch />
              <MigrationSection />
              <FeatureCard />
              <ReviewCard />
              <PerformanceCard />
              <SupportSection />
              <Footer/>
            </>
          } 
        />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/home3" element={<Home3 />} />
        <Route path="/home4" element={<Home4 />} />

      </Routes>
  
    </Router>
  );
}

export default App;
