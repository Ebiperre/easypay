import React from 'react';
import Download from './components/Download';
import Faq from './components/Faq';
import Happy from './components/Happy';
// import { Hand } from './components';
import Hero from './components/Hero';
import Payments from './components/Payments';
import Schedule from './components/Schedule';
import Services from './components/Services';

const Home = () => {
  return (
    <div>

    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      {/* Hero section */}
      <div>
        <Hero />
      </div>

      {/* Services */}
      <div>
        <Services/>
      </div>

      {/* Payments */}
      <div>
        <Payments/>
      </div>

      {/* Schedule */}
      <div>
        <Schedule/>
      </div>

      {/* Download */}
      <div>
        <Download/>
      </div>

      {/* Happy customer */}
      <div>
        <Happy/>
      </div>

      {/* FAQ */}
      <div>
        <Faq/>
      </div>
    </div>
    </div>
  );
};

export default Home;
