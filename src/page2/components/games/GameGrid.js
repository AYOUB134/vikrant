function GameGrid() {
  const games = [
    {
      id: "1",
      title: "20-20 Teenpatti",
      image: "https://www.shutterstock.com/image-illustration/teen-patti-game-banner-design-260nw-2276632755.jpg",
    },
    {
      id: "2",
      title: "Bollywood",
      image: "https://img.freepik.com/premium-vector/bollywood-movie-banner-with-realistic-cinema-objects_1302-30859.jpg",
    },
    {
      id: "3",
      title: "Unique Roulette",
      image: "https://img.freepik.com/premium-vector/casino-roulette-wheel-with-chips-realistic-style_48369-11544.jpg",
    },
    {
      id: "4",
      title: "Super Over",
      image: "https://img.freepik.com/premium-vector/cricket-championship-banner-design_1302-12397.jpg",
    },
    {
      id: "5",
      title: "Lucky 15",
      image: "https://img.freepik.com/premium-vector/casino-gambling-game-banner-with-playing-cards_1302-19493.jpg",
    },
    {
      id: "6",
      title: "Poker",
      image: "https://img.freepik.com/premium-vector/poker-night-banner-with-playing-cards-chips_1302-10713.jpg",
    },
    {
      id: "7",
      title: "Dragon Tiger",
      image: "https://img.freepik.com/premium-vector/casino-table-dragon-tiger-game-banner_1302-23216.jpg",
    },
    {
      id: "8",
      title: "Andar Bahar",
      image: "https://img.freepik.com/premium-vector/andar-bahar-card-game-banner_1302-22899.jpg",
    },
    {
      id: "9",
      title: "Blackjack",
      image: "https://img.freepik.com/premium-vector/realistic-blackjack-banner-with-cards-chips_1302-16576.jpg",
    },
    {
      id: "10",
      title: "Baccarat",
      image: "https://img.freepik.com/premium-vector/casino-baccarat-game-table-banner_1302-21234.jpg",
    },
    {
      id: "11",
      title: "Crazy Time",
      image: "https://img.freepik.com/premium-vector/colorful-casino-wheel-fortune-banner_1302-23941.jpg",
    },
    {
      id: "12",
      title: "Coin Flip",
      image: "https://img.freepik.com/premium-vector/golden-coin-flip-casino-game-banner_1302-20475.jpg",
    },
    {
      id: "13",
      title: "Crash Game",
      image: "https://img.freepik.com/premium-vector/crypto-crash-game-casino-banner_1302-25690.jpg",
    },
    {
      id: "14",
      title: "Aviator",
      image: "https://img.freepik.com/premium-vector/aviator-plane-crash-game-banner_1302-24199.jpg",
    },

    {
      id: "16",
      title: "Mega Roulette",
      image: "https://img.freepik.com/premium-vector/mega-roulette-wheel-casino-banner_1302-27980.jpg",
    },
    {
      id: "17",
      title: "Triple Chance",
      image: "https://img.freepik.com/premium-vector/triple-chance-slot-game-banner_1302-28250.jpg",
    },
    {
      id: "18",
      title: "Sic Bo",
      image: "https://img.freepik.com/premium-vector/sic-bo-casino-dice-game-banner_1302-28930.jpg",
    },
    {
      id: "19",
      title: "Monopoly Live",
      image: "https://img.freepik.com/premium-vector/monopoly-casino-game-live-banner_1302-29420.jpg",
    },
    {
      id: "20",
      title: "Dream Catcher",
      image: "https://img.freepik.com/premium-vector/dream-catcher-casino-wheel-banner_1302-30210.jpg",
    },
    {
      id: "21",
      title: "Golden Baccarat",
      image: "https://img.freepik.com/premium-vector/golden-baccarat-casino-banner_1302-31155.jpg",
    },
    {
      id: "22",
      title: "Speed Roulette",
      image: "https://img.freepik.com/premium-vector/speed-roulette-game-banner_1302-31942.jpg",
    },
    {
      id: "23",
      title: "Crash Pilot",
      image: "https://img.freepik.com/premium-vector/crash-pilot-airplane-game-banner_1302-32870.jpg",
    },
    {
      id: "24",
      title: "Lucky Draw",
      image: "https://img.freepik.com/premium-vector/lucky-draw-lottery-banner_1302-33561.jpg",
    },
    {
      id: "25",
      title: "Caribbean Poker",
      image: "https://img.freepik.com/premium-vector/caribbean-poker-casino-banner_1302-34129.jpg",
    },
    {
      id: "26",
      title: "European Blackjack",
      image: "https://img.freepik.com/premium-vector/european-blackjack-game-banner_1302-34791.jpg",
    },
    {
      id: "27",
      title: "Big Bass Bonanza",
      image: "https://img.freepik.com/premium-vector/big-bass-bonanza-slot-game-banner_1302-35921.jpg",
    },
    {
      id: "28",
      title: "Cash or Crash",
      image: "https://img.freepik.com/premium-vector/cash-crash-game-casino-banner_1302-36615.jpg",
    },
    {
      id: "29",
      title: "Royal Flush",
      image: "https://img.freepik.com/premium-vector/royal-flush-poker-banner_1302-37288.jpg",
    },
    {
      id: "30",
      title: "Jungle Roulette",
      image: "https://img.freepik.com/premium-vector/jungle-roulette-casino-banner_1302-38941.jpg",
    },
  ];
  
  

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 p-4">
      {games.map((game) => (
        <div key={game.id} className="relative group cursor-pointer overflow-hidden rounded-lg">
          <img
            src={game.image || "/placeholder.svg"}
            alt={game.title}
            className="w-full h-24 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white text-lg font-semibold">{game.title}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default GameGrid