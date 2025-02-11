import { useState } from "react";
import logo from './imgs/chnagedlogo.png'
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = ["Domain", "Hosting", "VPS", "Website Builder", "Blog"];

  return (
    <header className="bg-[#09113f] sticky top-0 z-50">
      {/* Top bar */}
      <div className="border-b border-gray-700/50">
        <div className="container mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="text-sm">1-855-984-6263</span>
          </div>


          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              <button className="text-gray-300 flex items-center gap-2 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Live Chat
              </button>
              <button className="text-gray-300 flex items-center gap-2 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Contact Us
              </button>
            </div>
            <div className="relative flex items-center gap-2 text-gray-300">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 3h18l-1.8 9H4.8L3 3z" />
                  <path d="M6 12h12" />
                  <path d="M6 16h12" />
                  <circle cx="9" cy="20" r="1" />
                  <circle cx="15" cy="20" r="1" />
                </svg>
                <span className="absolute bottom-0 left-0 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center transform translate-x-[-50%] translate-y-[50%]">
                  0
                </span>
              </div>
              <span className="text-sm">Cart</span>
            </div>
          </div>
        </div>
      </div>
      <img src={logo} alt="Logo" className="h-11 mt-0 ml-16" />
      {/* Main navigation */}
      <div className="container mx-auto px-6">
        <nav className="h-20 flex items-center justify-between">
          <div className="flex-1"></div>
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white text-sm font-medium hover:text-gray-300 transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="border border-red-600 text-white px-6 py-2 text-sm rounded hover:bg-red-600/10 transition-colors">
              Client Area
            </button>
          </div>
          <button
            className="md:hidden text-white"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#09113f] py-4">
          <div className="container mx-auto px-6">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-white text-sm font-medium py-2 hover:text-gray-300 transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="mt-4 w-full border border-red-600 text-white px-6 py-2 text-sm rounded hover:bg-red-600/10 transition-colors">
              Client Area
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
