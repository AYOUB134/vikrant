import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection'
import ReviewsBanner from './components/ReviewsBanner';
import  DomainSearch from './components/DomainSearch'
import MigrationSection from './components/MigrationSection';
import FeatureCard from './components/FeatureCard'
import ReviewCard from './components/ReviewCard'
import PerformanceCard from './components/PerformanceCard'
import SupportSection from './components/SupportSection'
import Footer from './components/Footer'
import PricingCard from './components/PricingCard';
function App() {
  return (
 <>
   <Navbar/>
   <HeroSection></HeroSection>
   <ReviewsBanner></ReviewsBanner>
   <PricingCard></PricingCard>
   <DomainSearch/>
   <MigrationSection></MigrationSection>
   {/* <FeatureCard></FeatureCard>
   <ReviewCard></ReviewCard>
   <PerformanceCard></PerformanceCard>
   <SupportSection></SupportSection>
   <Footer></Footer> */}
 </>
  );
}

export default App;
