import { useState } from "react";

const StarRating = () => (
  <div className="flex gap-[2px]">
    {[...Array(5)].map((_, i) => (
      <div key={i} className="bg-[#00b67a] rounded-sm p-[2px]">
        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </div>
    ))}
  </div>
);

const ReviewCard = ({ author, time, text, verified }) => (
  <div className="bg-[#f8f8f8] p-5 rounded">
    <StarRating />
    <p className="text-[14px] font-medium mt-3 mb-3 text-[#333333]">{text}</p>
    <div className="flex items-center gap-2">
      <span className="text-[13px] text-[#333333] font-medium">{author}</span>
      <span className="text-[13px] text-gray-500">{time}</span>
      {verified && (
        <div className="flex items-center gap-1">
          <svg className="w-4 h-4 text-[#00b67a]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
          </svg>
          <span className="text-[13px] text-[#333333]">Verified</span>
        </div>
      )}
    </div>
  </div>
);

const ReviewBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviews = [
    {
      author: "Mike Archibald",
      time: "5 hours ago",
      text: "I always get great support from NameHero!",
      verified: false,
    },
    {
      author: "Natalia",
      time: "1 day ago",
      text: "I always get great support from NameHero!",
      verified: false,
    },
    {
      author: "Neil",
      time: "1 day ago",
      text: "I always get great support from NameHero!",
      verified: false,
    },
    {
      author: "Neil",
      time: "1 day ago",
      text: "I always get great support from NameHero!",
      verified: true,
    },
    {
      author: "Win Day",
      time: "2 days ago",
      text: "I always get great support from NameHero!",
      verified: true,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-[32px] font-bold text-center mb-10 text-[#333333]">
          Over 50,000 Customers Already Rely on Hostrever – Be the Next!
        </h2>

        <div className="relative max-w-[1200px] mx-auto">
          <div className="shadow-[0_0_20px_rgba(0,0,0,0.05)] rounded-lg p-6">
            <div className="relative">
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-md"
              >
                <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {reviews.map((review, idx) => (
                  <div
                    key={idx}
                    className={`transition-opacity duration-300 ${
                      idx === currentSlide ? "opacity-100" : "opacity-100"
                    }`}
                  >
                    <ReviewCard {...review} />
                  </div>
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-md"
              >
                <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="text-center mt-8 mb-8">
              <p className="text-sm text-gray-600">
                Rated 4.9/5 based on 3,220 reviews. Showing our 4 & 5 star reviews.
              </p>
              <img
                src="https://cdn.trustpilot.net/brand-assets/1.1.0/logo-black.svg"
                alt="Trustpilot"
                className="h-6 mx-auto mt-2"
              />
            </div>
          </div>
        </div>

        <p className="text-center max-w-4xl mx-auto mt-6 text-[#666666] leading-relaxed text-[15px]">
          Experience lightning-fast web hosting designed for businesses of all sizes, supported 24/7/365 by our expert
          team. Whether you're a beginner launching your first website or a thriving e-commerce store managing hundreds
          of daily orders, we have the perfect hosting solution tailored just for you!
        </p>
      </div>
    </section>
  );
};

export default ReviewBanner;
