import Navbar from '../Navbar';
import Searchdomain from './Domainsearch'
import WhyHostreverDomain from './WhyhostreverDomain';
import DomainRegistration from './DomainRegistration';
import  HostingFAQ from './HostingFAQ'
function Home() {
  return (
    <>
      <Navbar />
      <Searchdomain/>
      <WhyHostreverDomain/>
      <DomainRegistration/>
      <HostingFAQ/>
   
    </>
  );
}

export default Home;
