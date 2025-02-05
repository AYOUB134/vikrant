// components/DomainSearch.jsx
import React from 'react';

// components/DomainSearch.jsx
const DomainSearch = () => {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Get The Perfect Domain Name
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="flex shadow-lg rounded-lg overflow-hidden">
              <div className="flex-grow flex items-center bg-white px-4">
                <svg 
                  className="w-5 h-5 text-gray-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Find your perfect domain name"
                  className="w-full p-4 outline-none text-gray-600"
                />
              </div>
              <button className="bg-red-600 text-white px-8 py-4 text-lg font-medium hover:bg-red-700 transition-colors">
                Search
              </button>
            </div>
            
            <div className="text-center mt-4">
              <a href="#" className="text-red-600 hover:text-red-700 text-sm">
                Transfer Domain
              </a>
            </div>
            
            <p className="text-center text-gray-600 mt-8 max-w-2xl mx-auto">
              Your domain name is a key feature of your website's identity. It is the first building block in growing your online brand. With over 200 unique and affordable domain name extensions to choose from, it's easy to register the right name for your website.
            </p>
          </div>
        </div>
      </section>
    );
  };
export default DomainSearch;