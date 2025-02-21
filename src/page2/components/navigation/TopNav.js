function TopNav() {
  return (
    <nav className="bg-[#8B0000] text-white w-full">
      <div className="container mx-auto px-4 overflow-x-auto">
        <ul className="flex items-center justify-center space-x-8 py-2 w-full hidden md:flex">
          <li className="cursor-pointer hover:opacity-80 whitespace-nowrap">Lottery</li>
          <li className="cursor-pointer hover:opacity-80 whitespace-nowrap">SportBook1</li>
          <li className="cursor-pointer hover:opacity-80 whitespace-nowrap">Exchange</li>
          <li className="cursor-pointer hover:opacity-80 font-semibold whitespace-nowrap">Live Casino</li>
          <li className="cursor-pointer hover:opacity-80 whitespace-nowrap">Slot</li>
          <li className="cursor-pointer hover:opacity-80 whitespace-nowrap">Fantasy Games</li>
        </ul>
      </div>
    </nav>
  );
}

export default TopNav;