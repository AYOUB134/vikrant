const DomainSearch = () => {
    const domains = [
      { tld: ".com", originalPrice: "16.99", price: "4.99", hasInfo: true },
      { tld: ".online", originalPrice: "34.99", price: "1.99", hasInfo: false },
      { tld: ".shop", originalPrice: "34.99", price: "0.99", hasInfo: false },
      { tld: ".pro", originalPrice: "24.99", price: "2.99", hasInfo: false },
      { tld: ".net", originalPrice: "15.99", price: "11.99", hasInfo: true },
      { tld: ".xyz", originalPrice: "13.99", price: "1.99", hasInfo: false },
    ]
  
    return (
      <div className="min-h-screen bg-[#09113f] flex flex-col items-center justify-center px-4 py-16">
        <div className="w-full max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-4xl font-bold text-white mb-6">Find Your Perfect Domain Name Today</h1>
          <p className="text-white text-lg mb-8">
            Use our domain checker tool to quickly check domain availability. Simply enter the name you want, and get
            instant results.
          </p>
  
          <div className="relative w-full max-w-3xl mx-auto mb-12">
            <div className="flex items-center bg-white rounded-lg p-1">
              <div className="pl-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search for your perfect domain..."
                className="w-full py-3 px-4 outline-none text-gray-700"
              />
              <button className="bg-red-600 hover:bg-red-500 text-white font-semibold py-3 px-14 rounded-md transition-colors">
                Search
              </button>
            </div>
          </div>
  
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {domains.map((domain, index) => (
              <div
                key={index}
                className="border border-white/20 rounded-lg p-4 text-center hover:border-white/40 transition-colors"
              >
                <div className="flex items-center justify-center gap-1 mb-2">
                  <span className="text-white text-xl font-semibold">{domain.tld}</span>
                  {domain.hasInfo && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5 text-white/70"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  )}
                </div>
                <div className="text-white/60 text-sm line-through mb-1">US$ {domain.originalPrice}</div>
                <div className="text-white font-bold">US$ {domain.price}</div>
              </div>
            ))}
          </div>
  
          <div className="flex flex-col items-center gap-4 text-white/90 text-sm">
            <div className="flex items-center gap-2">
              Free WHOIS privacy protection is included with every eligible domain registration.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              Already bought a domain?
              <a href="#" className="text-white hover:underline ml-2">
                Transfer it
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default DomainSearch
  
  