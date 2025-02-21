import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import RightSidebar from "../components/RightSidebar";
import Popup from "../components/Popup";
import Tournamentwinner from '../components/TournamentWinner'
import BetSlip from '../components/BetSlip'
export default function Page1() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <div className="flex flex-col h-screen">
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        {/* <MainContent /> */}
      <Tournamentwinner/>
      <BetSlip></BetSlip>
        {/* <RightSidebar /> */}
      </div>
    </div>
  );
}
