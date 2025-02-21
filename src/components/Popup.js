import React, { useState, useEffect } from "react";
import popupImage1 from './imgs/popoupimg.jpeg'; // Ensure the path to your popup images is correct
import popupImage2 from './imgs/rightsliderimg2.jpeg';
import popupImage3 from './imgs/rightsliderimg3.jpeg';
import popupImage4 from './imgs/rightsliderimg4.avif';

const Popup = ({ onClose }) => {
  const images = [popupImage1, popupImage2, popupImage3, popupImage4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded-lg shadow-lg relative w-3/5 h-3/5">
        <button
          className="absolute top-2 right-2 text-white text-2xl p-1 focus:outline-none z-10"
          style={{ backgroundColor: "red", borderRadius: "50%", width: "40px", height: "40px" }}
          onClick={onClose}
        >
          ✖
        </button>
        <img
          src={images[currentImageIndex]}
          alt="Popup"
          className="w-full h-full object-cover rounded-md"
        />
        {/* <div className="absolute bottom-5 left-5 text-white text-2xl font-bold animate-bounce">
          This is animated text!
        </div> */}
      </div>
    </div>
  );
};

export default Popup;