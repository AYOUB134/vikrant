import React, { useEffect, useState } from 'react';
import cricketImage from './imgs/circket.avif'; // Make sure the path to your image is correct
import rightsliderimg2 from './imgs/rightsliderimg2.jpeg';
import rightsliderimg3 from './imgs/rightsliderimg3.jpeg';
import rightsliderimg4 from './imgs/rightsliderimg4.avif';
// import rightsliderimg5 from './imgs/rightsliderimg5.jpeg'; // Add your fifth image here

const RightSidebar = () => {
    const ads = [
        { src: cricketImage, alt: 'Aviation' },
        { src: rightsliderimg2, alt: 'Goal' },
        { src: rightsliderimg3, alt: 'JetX' },
        { src: rightsliderimg4, alt: 'Golden Roulette' },
        { src: rightsliderimg4, alt: 'New Image' } // Add your fifth image here
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % ads.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [ads.length]);

    return (
        <aside className="w-64 p-5 bg-gray-900 space-y-2 relative overflow-hidden h-100">
            <div className="absolute inset-0 flex flex-col items-center justify-start transition-transform duration-500"
                 style={{ transform: `translateY(-${currentIndex * 100}%)` }}>
                {ads.map((ad, i) => (
                    <img key={i} src={ad.src} alt={ad.alt} className="w-full h-auto rounded mb-2" />
                ))}
                {ads.map((ad, i) => (
                    <img key={i + ads.length} src={ad.src} alt={ad.alt} className="w-full h-auto rounded mb-2" />
                ))}
            </div>
        </aside>
    );
};

export default RightSidebar;