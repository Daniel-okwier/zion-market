import React, { useState } from "react";
import { FiSearch, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import CategoryDropdown from "../ui/CategoryDropdown";
import logo from "../../assets/images/logos/zion-logo.png";

export default function Navbar({ search, setSearch, setActiveCategory }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zionGray">
      <nav className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between px-4 py-3 gap-4">
          {/* Logo */}
          <img src={logo} alt="Zion Market" className="h-10" />

          {/* Search Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl relative">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-12 pr-4 py-3 rounded-full bg-white border-2 border-zionOrange"
            />
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-6">
            <CategoryDropdown onSelect={setActiveCategory} />
            <FiShoppingCart className="text-2xl text-gray-800" />
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-4 bg-gray-100 rounded-b-2xl">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full px-4 py-3 rounded-full border-2 border-zionOrange"
            />

            <CategoryDropdown
              mobile
              onSelect={(cat) => {
                setActiveCategory(cat);
                setMenuOpen(false);
              }}
            />
          </div>
        )}
      </nav>
    </header>
  );
}
