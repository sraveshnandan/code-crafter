import React from "react";
import HeroSection from "../components/Sections/HeroSection";
import ServicesSection from "../components/Sections/ServicesSection";
import AboutSection from "../components/Sections/AboutSection";
import FeatureSection from "../components/Sections/FeatureSection";
import WhatWeDoSection from "../components/Sections/WhatWeDoSection";
import MarqueeSection from "../components/Sections/MarqueeSection";
import PortFolioSection from "../components/Sections/PortFolioSection";
import PricingSection from "../components/Sections/PricingSection";
import TestiMonialSection from "../components/Sections/TestiMonialSection";

const HomePage = () => {
  return (
    <>
      {/* Hero Section  */}

      <HeroSection />

      {/* Service section  */}

      <ServicesSection />

      {/* About Us Section  */}

      <AboutSection />

      {/* Feature Section  */}
      <FeatureSection />

      {/* What We Do Section  */}
      <WhatWeDoSection />

      {/* Marquee Section  */}
      <MarqueeSection />

      {/* PortfOLIO sECTION  */}

      <PortFolioSection />


      {/* Pricing Section  */}
      <PricingSection/>

      {/* Testimonial section  */}

      <TestiMonialSection/>


    </>
  );
};

export default HomePage;
