import React, { useState } from 'react';
import logo from './imgs/logo.png'; // Make sure the path to your image is correct

const Sidebar = () => {
  const sports = [
    { icon: "https://img.icons8.com/ios-filled/50/ffffff/horse.png", text: 'Horse Racing', subButtons: ['Flat Racing', 'Steeplechase', 'Harness Racing'] },
    { icon: "https://img.icons8.com/ios-filled/50/ffffff/trophy.png", text: 'Greyhound Racing', subButtons: ['Sprint Races', 'Marathon Races', 'Hurdles'] },
    { icon: "https://img.icons8.com/ios-filled/50/ffffff/cricket.png", text: 'Cricket', subButtons: ['Test Matches', 'ODI', 'T20', 'The Hundred'] },
    { icon: "https://img.icons8.com/ios-filled/50/ffffff/football.png", text: 'Football', subButtons: ['Premier League', 'La Liga', 'Bundesliga', 'Serie A', 'Ligue 1', 'Champions League'] },
    { icon: "https://img.icons8.com/ios-filled/50/ffffff/tennis.png", text: 'Tennis', subButtons: ['Grand Slams', 'ATP Tour', 'WTA Tour', 'Davis Cup'] },
    { icon: "https://img.icons8.com/ios-filled/50/ffffff/volleyball.png", text: 'Table Tennis', subButtons: ['ITTF World Tour', 'Olympics', 'World Championships'] },
    { icon: "https://img.icons8.com/ios-filled/50/ffffff/basketball.png", text: 'Esoccer', subButtons: ['FIFA eWorld Cup', 'ePremier League', 'Virtual Bundesliga'] },
    { icon: "https://img.icons8.com/ios-filled/50/ffffff/basketball.png", text: 'Basketball', subButtons: ['NBA', 'EuroLeague', 'FIBA World Cup', 'WNBA'] },
    { icon: "https://img.icons8.com/ios-filled/50/ffffff/volleyball.png", text: 'Volleyball', subButtons: ['FIVB World Cup', 'Olympics', 'Nations League'] },
    { icon: "https://img.icons8.com/ios-filled/50/ffffff/volleyball.png", text: 'MotoGP', subButtons: ['MotoGP', 'Moto2', 'Moto3'] },
    { icon: "https://img.icons8.com/ios-filled/50/ffffff/car.png", text: 'Formula 1', subButtons: ['Grand Prix', 'Sprint Races', 'Constructors Championship'] },
    { icon: "https://img.icons8.com/ios-filled/50/ffffff/boxing-glove.png", text: 'Boxing', subButtons: ['Heavyweight', 'Middleweight', 'Lightweight'] },
    { icon: "https://img.icons8.com/ios-filled/50/ffffff/wrestling.png", text: 'Wrestling', subButtons: ['WWE', 'AEW', 'NJPW'] },
    { icon: "https://img.icons8.com/ios-filled/50/ffffff/ice-hockey.png", text: 'Ice Hockey', subButtons: ['NHL', 'KHL', 'Olympics'] },
    { icon: "https://img.icons8.com/ios-filled/50/ffffff/golf.png", text: 'Golf', subButtons: ['PGA Tour', 'European Tour', 'Ryder Cup'] },
    { icon: "https://img.icons8.com/ios-filled/50/ffffff/baseball.png", text: 'Baseball', subButtons: ['MLB', 'NPB', 'KBO League'] },
    { icon: "https://img.icons8.com/ios-filled/50/ffffff/cycling.png", text: 'Cycling', subButtons: ['Tour de France', 'Giro d’Italia', 'Vuelta a España'] },
    { icon: "https://img.icons8.com/ios-filled/50/ffffff/swimming.png", text: 'Swimming', subButtons: ['Olympics', 'FINA World Championships', 'ISL'] },
    { icon: "https://img.icons8.com/ios-filled/50/ffffff/archery.png", text: 'Archery', subButtons: ['Olympics', 'World Championships', 'Asian Games'] },
    { icon: "https://img.icons8.com/ios-filled/50/ffffff/fencing.png", text: 'Fencing', subButtons: ['Olympics', 'World Cup', 'Grand Prix'] },
];

    const [activeIndex, setActiveIndex] = useState(null);

    const handleButtonClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <aside className="bg-gray-900 text-white w-60 p-3 space-y-5 text-sm">
            <div className="flex flex-col items-center mb-5">
                <img src={logo} alt="Logo" className="w-30 h-20 mb-3" />
                <div className="relative w-full">
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="w-full p-2 pl-10 bg-gray-800 rounded text-white text-xs"
                    />
                    <img 
                        src="https://img.icons8.com/ios-filled/50/ffffff/search.png" 
                        alt="Search Icon" 
                        className="absolute top-1/2 left-3 transform -translate-y-1/2 w-4 h-4"
                    />
                </div>
            </div>
            {['Racing Sport', 'All Sport'].map((title, i) => (
                <section key={i}>
                    <h2 className="font-bold text-sm mb-2">{title}</h2>
                    <ul className="space-y-2">
                        {sports.slice(i * 5, (i + 1) * 5).map(({ icon, text, subButtons }, j) => (
                            <li key={j}>
                                <div 
                                    className="flex items-center gap-2 cursor-pointer"
                                    onClick={() => handleButtonClick(i * 5 + j)}
                                >
                                    <img src={icon} alt="Icon" width="20" /> {text}
                                </div>
                                {activeIndex === i * 5 + j && subButtons.length > 0 && (
                                    <ul className="ml-6 mt-1 space-y-1">
                                        {subButtons.map((subButton, k) => (
                                            <li key={k} className="text-xs">{subButton}</li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </aside>
    );
};

export default Sidebar;