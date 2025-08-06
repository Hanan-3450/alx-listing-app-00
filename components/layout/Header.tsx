import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600 cursor-pointer">
          StayFinder
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#" className="hover:text-blue-600">
            Rooms
          </a>
          <a href="#" className="hover:text-blue-600">
            Mansion
          </a>
          <a href="#" className="hover:text-blue-600">
            Countryside
          </a>
          <a href="#" className="hover:text-blue-600">
            Beach
          </a>
        </nav>

        {/* Search & Auth */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-lg px-3 py-1 focus:outline-none focus:ring focus:border-blue-400"
          />
          <button className="text-gray-700 hover:text-blue-600 font-medium">
            Sign In
          </button>
          <button className="bg-blue-600 text-white px-4 py-1 rounded-lg hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
