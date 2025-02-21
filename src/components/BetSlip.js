import React, { useState } from "react";

const BetSlip = ({ team = "India", odds = 2.48 }) => {
  const [amount, setAmount] = useState("");

  const handleAmountClick = (value) => {
    setAmount((prev) => (prev ? parseInt(prev) + value : value));
  };

  const handleClear = () => {
    setAmount("");
  };

  return (
    <div className="bg-blue-400 p-3 text-black w-80 h-80 rounded-md shadow-lg mt-12">
      <div className="flex justify-between items-center border-b pb-2 mb-2">
        <h3 className="text-md font-bold">ICC Champions Trophy</h3>
        <button className="text-md font-bold cursor-pointer">✖</button>
      </div>

      <div className="flex justify-between items-center  p-2 rounded-md">
        <span className="font-semibold">{team}</span>
        <select className="bg-gray-300 p-1 rounded text-black text-sm">
          <option>{odds}</option>
        </select>
      </div>

      <div className="mt-3">
        <label className="block font-semibold text-sm mb-1">Amount</label>
        {/* <input
          type="text"
          value={amount}
          readOnly
          className="w-full p-2 border rounded-md text-sm"
        /> */}
      </div>

      <div className="grid grid-cols-3 gap-1 mt-3">
        {[1000, 2000, 5000, 10000, 20000, 25000, 50000, 75000, 90000, 95000].map(
          (value, index) => (
            <button
              key={index}
              onClick={() => handleAmountClick(value)}
              className="bg-green-600 text-white p-1 rounded-md text-center text-sm"
            >
              +{value / 1000}k
            </button>
          )
        )}
      </div>

      {/* <div className="text-center mt-3">
        <button onClick={handleClear} className="text-blue-700 underline text-sm">
          Clear
        </button>
      </div> */}

      <button className="w-full bg-green-700 text-white p-2 rounded-md mt-3 text-md font-bold">
        Place Bet
      </button>
    </div>
  );
};

export default BetSlip;