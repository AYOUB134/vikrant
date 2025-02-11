const HostingHero = () => {
    return (
      <section className="bg-[#09113f] min-h-[60vh] flex flex-col justify-center items-center px-4 py-16 text-white">
        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center max-w-4xl leading-tight mb-2">
          Linux Shared Web Hosting
          <br />
          with cPanel
        </h1>
  
        {/* Features */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 my-10">
          <div className="flex items-center gap-2 text-lg md:text-xl">
            <i className="fa-solid fa-circle-check text-red-600"></i>
            <span>24x7 Support</span>
          </div>
          <div className="flex items-center gap-2 text-lg md:text-xl">
            <i className="fa-solid fa-circle-check text-red-600"></i>
            <span>99.9% Uptime</span>
          </div>
          <div className="flex items-center gap-2 text-lg md:text-xl">
            <i className="fa-solid fa-circle-check text-red-600"></i>
            <span>1-Click Installer</span>
          </div>
        </div>
  
        {/* CTA Button */}
        <button className="bg-[#dc0000] hover:bg-[#b30000] text-white font-semibold px-8 py-4 rounded text-lg transition-colors duration-200 my-4">
          Get Started Now
        </button>
  
        {/* Trust Text */}
        <p className="text-base md:text-lg opacity-90 mt-4">Proudly Trusted By Over 750,000+ Websites</p>
      </section>
    )
  }
  
  export default HostingHero