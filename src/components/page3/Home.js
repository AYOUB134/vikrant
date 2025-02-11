import Navbar from '../Navbar';
import Linux from './LinuxHosting'
import ReviewsBanner from '../ReviewsBanner'
import PricingCard from '../PricingCard'
import DomainSearch from '../DomainSearch'
import MigrationSection from  '../MigrationSection'
import FeatureCard from '../FeatureCard'
import ReviewCard from '../ReviewCard'
import PerformanceCard from '../PerformanceCard'
import HostingFAQ from '../page2/HostingFAQ';
import Footer from '../Footer';
import SupportSection from '../SupportSection'
const Home = () => {
  return (
 <>
 <Navbar></Navbar>
 <Linux></Linux>
 <ReviewsBanner></ReviewsBanner>
 <PricingCard></PricingCard>
 <DomainSearch />
 <MigrationSection />
 <FeatureCard />
 <ReviewCard />
 <PerformanceCard />
 <HostingFAQ></HostingFAQ>
 <SupportSection />
 <Footer></Footer>
 </>
  );
};

export default Home;
