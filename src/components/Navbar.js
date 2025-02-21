import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-red-700 text-white flex justify-center items-center px-6 py-3">
            <div className="flex gap-5 text-sm">
                {['Lottery', 'SportBook1', 'Exchange', 'Live Casino', 'Slot', 'Fantasy Games'].map((item, i) => (
                    <span key={i} className={item === 'Exchange' ? 'underline font-bold' : ''}>{item}</span>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;