// components/FeaturesSection.jsx
import React from 'react';

const FeatureCard = () => {
    const features = [
      {
        icon: (
          <svg className="w-16 h-16 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 4v16m8-8H4" strokeLinecap="round"/>
            <path d="M20 12a8 8 0 11-16 0 8 8 0 0116 0z"/>
          </svg>
        ),
        title: "Unmetered bandwidth",
        description: "Enjoy unlimited bandwidth for your website – no caps or restrictions with our unmetered plans."
      },
      {
        icon: (
          <svg className="w-16 h-16 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>
          </svg>
        ),
        title: "Solid State Drives (SSDs)",
        description: "Experience faster website performance, improved caching, and quicker database queries with SSDs (up to 200% faster than HDDs)"
      },
      {
        icon: (
          <svg className="w-16 h-16 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        title: "99.9% uptime guarantee",
        description: "In addition to our technical expertise, we also offer a 99.9% uptime guarantee – so you can have peace of mind knowing that your website will be available to your users whenever they need it"
      },
      {
        icon: (
          <svg className="w-16 h-16 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        title: "Free SSL certificate",
        description: "All of our hosting plans come with a free SSL certificate – protect your website and its visitors with this essential security feature."
      }
    ];
  
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default FeatureCard;