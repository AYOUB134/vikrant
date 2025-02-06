import React from "react";
import MigrateImg from "./imgs/Migrateimg.PNG";
const MigrationSection = () => {
    return (
      <section className="bg-[#09113f] py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                Migrate Your Website For Free
              </h2>
              
              <div className="space-y-6 text-gray-300">
                <p>
                  Switching to a new web host doesn't have to be stressful. We make it seamless and hassle-free with our complimentary website migration service. In most cases, we can migrate your website and have it live within 24 hours.
                </p>
                
                <p>
                  Have multiple websites or a more complex setup? No problem! Our expert team is ready to discuss your specific needs and ensure your migration is smooth and efficient.
                </p>
                
                <p>
                  Let our skilled professionals handle the heavy lifting so you can focus on what matters most – growing your website. Contact us today to get started!
                </p>
              </div>
              
              <div className="flex flex-wrap gap-6 mt-8">
                <button className="flex items-center gap-2 bg-transparent border border-gray-600 text-white px-6 py-3 rounded-md hover:border-gray-400 transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  0113 541 7880
                </button>
                
                <button className="flex items-center gap-2 bg-transparent border border-gray-600 text-white px-6 py-3 rounded-md hover:border-gray-400 transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Start live Chatting
                </button>
              </div>
            </div>
            
            <div className="relative">
              <img
                src ={MigrateImg}
                alt="Website Migration"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default MigrationSection;