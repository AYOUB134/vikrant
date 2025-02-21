function GameCategories() {
  const categories = [
    "All Casino",
    "Roulette",
    "Teenpatti",
    "Poker",
    "Baccarat",
    "Dragon Tiger",
    "32 Cards",
    "Andar Bahar",
    "Lucky 7",
    "3 Card Judgement",
   
  ]

  return (
    <div className="bg-gray-800 text-white py-2">
      <div className="container mx-auto flex items-center justify-between px-4">
        <img
          src="https://cdn-icons-png.flaticon.com/512/271/271220.png"
          alt="left"
          className="w-6 h-6 cursor-pointer"
        />
        <div className="flex-1 overflow-x-auto">
          <ul className="flex space-x-6 px-4">
            {categories.map((category) => (
              <li key={category} className="whitespace-nowrap cursor-pointer hover:text-gray-300">
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center space-x-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/271/271228.png"
            alt="right"
            className="w-6 h-6 cursor-pointer"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149852.png"
            alt="search"
            className="w-6 h-6 cursor-pointer"
          />
        </div>
      </div>
    </div>
  )
}

export default GameCategories

