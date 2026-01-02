import React, { useState } from "react";
import { FiSearch, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import CategoryDropdown from "../ui/CategoryDropdown";
import logo from "../../assets/images/logos/zion-logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
<header className="fixed top-0 left-0 right-0 z-50">
  <nav className="mx-auto max-w-7xl px-4">
    <div className="flex items-center justify-between px-4 py-3 gap-4">

      {/* Logo */}
      <a href="/" className="flex items-center shrink-0">
        <img
          src={logo}
          alt="Zion Market"
          className="h-10 w-auto object-contain"
        />
      </a>

      {/* Search (Desktop) */}
      <div className="hidden md:flex flex-1 max-w-xl relative">
        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" />
        <input
          type="text"
          placeholder="Search products, brands, categories..."
          className="w-full pl-12 pr-4 py-3 rounded-full bg-white border-2 border-zionOrange text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-zionOrange"
        />
      </div>

      {/* Desktop Actions */}
      <div className="hidden md:flex items-center gap-6">
        <CategoryDropdown />
        <button className="relative">
          <FiShoppingCart className="text-2xl text-gray-800" />
          <span className="absolute -top-2 -right-2 bg-zionOrange text-white text-xs px-1.5 rounded-full">
            0
          </span>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-800 text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>
    </div>

    {/* Mobile Menu */}
    {menuOpen && (
      <div className="md:hidden px-4 pb-4 space-y-4 bg-gray-100 rounded-b-2xl shadow-sm">
        {/* Search Mobile */}
        <div className="relative">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-12 pr-4 py-3 rounded-full bg-white border-2 border-zionOrange text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-zionOrange"
          />
        </div>

        <CategoryDropdown mobile />

        <button className="flex items-center gap-3 text-gray-800 font-semibold">
          <FiShoppingCart className="text-xl" />
          Cart
        </button>
      </div>
    )}
  </nav>
</header>



  );
}
