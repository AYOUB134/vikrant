// components/PerformanceSection.jsx
import React from 'react';

const PerformanceCard = ({ icon, title, description }) => {
  return (
    <div className="text-center text-white">
      <div className="text-red-600 text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const PerformanceSection = () => {
  const performanceItems = [
    {
      icon: '🌐',
      title: "Global Data Centers",
      description: "We utilize global servers to ensure optimal performance and minimal latency for users worldwide."
    },
    {
      icon: '🛡️',
      title: "Advanced Control Panel",
      description: "Manage your hosting with our intuitive control panel designed for both beginners and experts."
    },
    {
      icon: '⚡',
      title: "Daily Offsite Backups",
      description: "Your data is automatically backed up daily to ensure your peace of mind."
    }
  ];

  return (
    <section className="py-16 bg-[#0B1222]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Speed. Dependability. Performance.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {performanceItems.map((item, index) => (
            <PerformanceCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;