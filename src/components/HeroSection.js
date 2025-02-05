// components/HeroSection.jsx
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-[#020B2A] pt-32 pb-40">
      <div className="container mx-auto px-6 text-center">
        <h4 className=" md:text-5xl font-bold text-white leading-tight  mx-auto mb-6">
          Fast, Secure Hosting & Domain Management
        </h4>
        <p className="text-xl md:text-2xl text-gray-400 mb-10">
          Winter Savings Event: Up to 65% Off!
        </p>
        <button className="bg-red-600 text-white px-9 py-3 text-lg font-medium rounded hover:bg-red-700 transition-colors">
          Get Started Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;