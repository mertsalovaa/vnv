import './App.css';
import ContactUs from './components/contact-us';
import Brief from './components/brief';
import Header from './components/header';
import OurProjects from './components/our-projects';
import Services from './components/services';
import WhyUs from './components/why-us';
import FAQ from './components/faq';
import { SocialNetworks } from './components/social-networks';
import LeadMagnet from './components/lead-magnet';

function App() {
  return (
    <>
      <div className='container'>
        <Header />
        <WhyUs />
        <Services />
        <OurProjects />
        <ContactUs />
        <Brief />
        <FAQ />
      </div>
      <LeadMagnet />
    </>
  );
}

export default App;
