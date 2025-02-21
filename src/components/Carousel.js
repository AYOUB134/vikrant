import React from 'react';
import bannerimg from './imgs/banner.jpeg';
import bannerimg2 from './imgs/bannerimg2.jpeg';
import bannerimg4 from './imgs/bannerimg4.jpeg';

const Carousel = () => {
    const buttons = [
        { name: 'ICC Champions Trophy', icon: 'https://img.icons8.com/ios-filled/50/ffffff/trophy.png', bg: 'bg-blue-800' },
        { name: 'Pakistan v New Zealand', icon: 'https://img.icons8.com/ios-filled/50/ffffff/cricket.png', bg: 'bg-green-800' },
        { name: 'UP Warriorz W v Delhi Capitals W', icon: 'https://img.icons8.com/ios-filled/50/ffffff/cricket.png', bg: 'bg-red-500' },
        { name: 'Real Madrid v Man City', icon: 'https://img.icons8.com/ios-filled/50/ffffff/trophy.png', bg: 'bg-yellow-500' },
        { name: 'Dortmund v Sporting Lisbon', icon: 'https://img.icons8.com/ios-filled/50/ffffff/trophy.png', bg: 'bg-green-500' }
    ];

    const images = [
        bannerimg,
        bannerimg2,
        bannerimg4
    ];

    return (
        <div className="relative">
            <div className="bg-gray-800 text-white p-2 flex items-center justify-between mb-1 rounded" style={{marginTop:"-18px" ,}}>
                <div className="flex items-center gap-2">
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/speaker.png" alt="Notification" width="20" />
                    <span className="text-xs font-bold bg-red-500 px-1 rounded">Notification Upcoming Fixure</span>
                </div>
                <div className="text-xs">
                    <p className="font-bold">Atyrau - Yesil</p>
                    <p>19/02/2025 00:30:00 (UTC-08:00)</p>
                    <p className="text-left text-xs">BEST ONLINE CRICKET BETT</p>
                </div>
            </div>
            <div className="flex justify-around mb-4">
                {buttons.map((button, index) => (
                    <button
                        key={index}
                        className={`flex items-center gap-2 px-2 py-1 text-white rounded ${button.bg}`}
                        style={{ width: '150px', height: '40px' }}
                    >
                        <img src={button.icon} alt={button.name} width="20" />
                        <span className="text-xs">{button.name}</span>
                    </button>
                ))}
            </div>
            <div>
                <div className="h-48 bg-gray-300 flex items-center justify-center font-bold text-xl relative overflow-hidden">
                    <div className="whitespace-nowrap animate-slide flex">
                        {images.map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt={`Slide ${index + 1}`}
                                className="inline-block w-full h-full object-cover"
                                style={{ minWidth: '100%' }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;