import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './Hero';
import Flavors from './Flavors';
import Ingredients from './Ingredients';
import HowItWorks from './HowItWorks';
import Contact from './Contact';
import FAQ from './FAQ';

const LandingPage: React.FC = () => {
  const location = useLocation();
  const lastScrollPos = useRef(0);

  useEffect(() => {
    // Handle scroll on mount or location change if state exists
    if (location.state && (location.state as any).scrollTo) {
      const id = (location.state as any).scrollTo;
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="bg-brand-cream selection:bg-brand-black selection:text-white">
      <Hero />

      {/* Visual Divider / Transition */}
      <div className="relative z-20 -mt-20 pointer-events-none">
        <div className="h-24 bg-gradient-to-b from-transparent to-brand-cream"></div>
      </div>

      <div className="relative z-10 space-y-24 md:space-y-32 pb-24">

        {/* Wrapper for Sections to give them breathing room and potential scroll reveals */}
        <section className="scroll-mt-24" id="flavors">
          <Flavors />
        </section>

        <section className="container mx-auto px-6">
          <div className="h-px bg-gray-200 w-full max-w-4xl mx-auto"></div>
        </section>

        <section id="ingredients" className="scroll-mt-24">
          <Ingredients />
        </section>

        <section id="how-it-works" className="scroll-mt-24 bg-white py-24 rounded-[3rem] mx-4 shadow-inner">
          <HowItWorks />
        </section>

        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>

        <section id="faq" className="scroll-mt-24">
          <FAQ />
        </section>
      </div>
    </div>
  );
};

export default LandingPage;