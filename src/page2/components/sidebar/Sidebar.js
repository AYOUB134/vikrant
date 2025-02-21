import React from 'react';
import logo from '../../../components/imgs/logo.png';

function Sidebar() {
  const providers = [
    { name: "OUR CASINO", logo: "https://cdn-icons-png.flaticon.com/512/2618/2618478.png" },
    { name: "OUR VIRTUAL", logo: "https://cdn-icons-png.flaticon.com/512/8002/8002115.png" },
    { name: "TEMBO", logo: "https://cdn-icons-png.flaticon.com/512/5341/5341025.png" },
    { name: "CREEDROOMZ", logo: "https://cdn-icons-png.flaticon.com/512/2883/2883886.png" },
    { name: "VIVO GAMING", logo: "https://cdn-icons-png.flaticon.com/512/686/686589.png" },
    { name: "EVOLUTION", logo: "https://cdn-icons-png.flaticon.com/512/8002/8002461.png" },
    { name: "EZUGI", logo: "https://cdn-icons-png.flaticon.com/512/1055/1055823.png" },
    { name: "COCKFIGHT", logo: "https://cdn-icons-png.flaticon.com/512/1998/1998592.png" },
  ];

  return (
    <aside className="bg-gray-900 w-full h-full">
      <div className="py-4">
        <img src={logo} alt="Vikrant Exchange" className="w-40 mx-auto mb-4" />
        <div className="space-y-1 grid grid-cols-3 gap-2">
          {providers.map((provider) => (
            <button
              key={provider.name}
              className="text-white py-2 px-4 hover:bg-gray-800 flex flex-col items-center border border-gray-700 rounded"
            >
              <img src={provider.logo || "/placeholder.svg"} alt={provider.name} className="w-6 h-6 mb-1" />
              <span className="text-xs">{provider.name}</span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;