const ReviewCard = () => {
  const reviews = [
    {
      name: "Cyndi Papia",
      rating: 2,
      text: "Fast and top-notch support...",
      time: "2 months ago",
    },
    {
      name: "Paul",
      rating: 5,
      text: "I have an excellent customer service...",
      time: "1 month ago",
    },
    {
      name: "Redwan Rahman",
      rating: 5,
      text: "Ashfika is the best live support chat...",
      time: "2 months ago",
    },
    {
      name: "Clean Avenue Laundry",
      rating: 5,
      text: "Excellent service and attention...",
      time: "2 months ago",
    },
    {
      name: "Nagy Mohd",
      rating: 5,
      text: "Very good service and live support is...",
      time: "1 month ago",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Hostrever Customers Reviews</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg border border-gray-200 shadow-[2px_2px_10px_rgba(0,0,0,0.1)]"
            >
              <h3 className="font-medium text-base mb-2">{review.name}</h3>

              <div className="flex justify-between items-center mb-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < review.rating ? "text-yellow-400" : "text-gray-200"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <img
                  src="https://cdn.trustpilot.net/brand-assets/1.1.0/logo-black.svg"
                  alt="Trustpilot"
                  className="h-3 w-auto object-contain"
                />
              </div>

              <p className="text-gray-600 text-sm mb-3 min-h-[40px]">{review.text}</p>

              <div className="flex justify-between items-center text-xs">
                <button className="text-red-600 hover:text-red-700 font-medium">View Review</button>
                <span className="text-gray-500">{review.time}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-red-600 text-red-600 px-8 py-2.5 rounded-md hover:bg-red-50 transition-colors font-medium">
            Read More Reviews
          </button>
        </div>
      </div>
    </section>
  )
}

export default ReviewCard

