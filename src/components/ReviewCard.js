// components/CustomerReviews.jsx
import React from 'react';

// components/ReviewCard.jsx
const ReviewCard = () => {
    const reviews = [
      {
        name: "Cyndi Papia",
        rating: 2,
        text: "Fast and top-notch support...",
        time: "2 months ago"
      },
      {
        name: "Paul",
        rating: 5,
        text: "I have an excellent customer service...",
        time: "1 month ago"
      },
      {
        name: "Redwan Rahman",
        rating: 5,
        text: "Ashfika is the best live support chat...",
        time: "2 months ago"
      },
      {
        name: "Clean Avenue Laundry",
        rating: 5,
        text: "Excellent service and attention...",
        time: "2 months ago"
      },
      {
        name: "Nagy Mohd",
        rating: 5,
        text: "Very good service and live support is...",
        time: "1 month ago"
      }
    ];
  
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Hostrever Customers Reviews
          </h2>
          
          <div className="flex overflow-x-auto gap-6 pb-6 -mx-4 px-4">
            {reviews.map((review, index) => (
              <div key={index} className="min-w-[300px] bg-white p-6 rounded-lg border border-gray-100">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < review.rating ? 'text-[#00B67A]' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-3 mb-2">{review.text}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{review.name}</span>
                  <span>{review.time}</span>
                </div>
              </div>
            ))}
          </div>
  
          <div className="text-center mt-8">
            <button className="border border-red-600 text-red-600 px-6 py-2 rounded-md hover:bg-red-50 transition-colors">
              Read More Reviews
            </button>
          </div>
        </div>
      </section>
    );
  };

export default ReviewCard;