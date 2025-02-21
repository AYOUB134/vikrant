import React from "react";
import TopNav from "../page2/components/navigation/TopNav";
import SubHeader from "../page2/components/navigation/SubHeader";
import GameCategories from "../page2/components/navigation/GameCategories";
import Sidebar from "../page2/components/sidebar/Sidebar";
import GameGrid from "../page2/components/games/GameGrid";

export default function Page2() {
  return (
    <div className="min-h-screen bg-gray-900">
      <TopNav />
      <SubHeader />
      <div className="flex">
        <Sidebar />
        <main className="flex-1">
          <GameCategories />
          <GameGrid />
        </main>
      </div>
      {/* Chat widget */}
      <div className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full cursor-pointer">
        <div className="text-sm">We're Online!</div>
        <div className="text-xs">How may I help you today?</div>
      </div>
    </div>
  );
}
