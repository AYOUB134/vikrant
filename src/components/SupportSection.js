import React from 'react';

const SupportSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold leading-tight">
              Our Hostrever Support Team Is Happy To Help 24/7, 365
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Open Support Ticket</h3>
              <p className="text-gray-600 mb-4">Level III Support ready</p>
              <button className="w-full border border-red-600 text-red-600 py-2 rounded-md hover:bg-red-50 transition-colors">
                Open Ticket
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Live chat</h3>
              <p className="text-gray-600 mb-4">Chat, 24/7 for quick support.</p>
              <button className="w-full border border-red-600 text-red-600 py-2 rounded-md hover:bg-red-50 transition-colors">
                Chat Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#09113f] mt-20 py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Save up to 75% on your plan + get a free domain
          </h2>
          <p className=" mb-8">
            Try risk-free, 30-day money-back guarantee.
          </p>
          <button className="bg-red-600 text-white px-11 py-3 rounded-md hover:bg-red-700 transition-colors">
            Get started
          </button>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
