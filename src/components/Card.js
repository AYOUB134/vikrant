import React from 'react';

const Card = ({ title, subtitle }) => {
    return (
        <div className="p-4 bg-white shadow rounded">
            <p className="font-semibold text-lg">{title}</p>
            <p className="text-sm text-gray-600">{subtitle}</p>
        </div>
    );
};

export default Card;