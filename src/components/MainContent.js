import React, { useState } from 'react';
import Carousel from './Carousel';

const MainContent = () => {
    const [selectedSport, setSelectedSport] = useState('Cricket');

    const sports = [
        'Cricket', 'Football', 'Tennis', 'Esoccer', 'Horse Racing', 'Greyhound Racing'
    ];

    const matches = {
        Cricket: [
            { title: 'Live - Gujarat vs Kerala', subtitle: 'Ranji Trophy Elite 2024-25' },
            { title: 'Live - Vidarbha vs Mumbai', subtitle: 'Ranji Trophy Elite 2024-25' },
         
        ],
        Football: [
            { title: 'Live - Manchester United vs Chelsea', subtitle: 'Premier League' },
            { title: 'Live - Real Madrid vs Barcelona', subtitle: 'La Liga' },
        ],
        // Add other sports and their matches here
    };

    return (
        <main className="flex-1 p-6 overflow-auto">
            <Carousel />
            <div className="flex justify-between gap-1 mt-3">
                {sports.map((sport, i) => (
                    <button 
                        key={i} 
                        onClick={() => setSelectedSport(sport)}
                        className={`flex-1 px-2 py-1 text-xs rounded ${selectedSport === sport ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-200'}`}
                    >
                        {sport}
                    </button>
                ))}
            </div>
            <h2 className="text-lg font-bold mb-4 text-white">Live Matches - {selectedSport}</h2>
            <ul className="divide-y divide-gray-700 border border-gray-700 rounded-md bg-gray-900">
                {(matches[selectedSport] || []).map((match, i) => (
                    <li key={i} className="flex justify-between items-center p-3 hover:bg-gray-800">
                        <div className="text-white">
                            <h3 className="text-sm font-bold">{match.title}</h3>
                            <p className="text-xs text-gray-400">{match.subtitle}</p>
                        </div>
                        <div className="flex space-x-2 text-sm font-bold">
                            <span className="bg-blue-500 text-white px-2 py-1 rounded">1.75</span>
                            <span className="bg-pink-500 text-white px-2 py-1 rounded">2.32</span>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default MainContent;