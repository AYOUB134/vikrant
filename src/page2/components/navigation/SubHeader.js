import React from 'react';
import logo from '../../../components/imgs/logo.png';

function SubHeader() {
  return (
    <div className="bg-gray-700 text-white py-2 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Vikrant Exchange" className="w-20 h-auto md:hidden" />
          <span className="text-sm hidden md:inline">Upcoming Fixture</span>
          <span className="bg-red-800 px-2 py-1 rounded text-xs hidden md:inline">New South Wales Breakers v ACT Meteors</span>
          <span className="text-xs text-gray-300 hidden md:inline">18/02/2025 15:00:00 (UTC-08:00)</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="hidden md:inline">BEST ONLINE CRICKET BETTING ID PROVIDER IN INDIA</span>
          <div className="flex items-center space-x-2">
            <span>pts: 1500</span>
            <span>exp: 0</span>
            <button className="bg-gray-800 px-3 py-1 rounded">
              Demo <span className="text-xs">▼</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubHeader;