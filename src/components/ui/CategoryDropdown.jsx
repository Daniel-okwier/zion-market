import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const categories = [
  "All",
  "Ramyun",
  "Snacks",
  "Beverages",
  "Frozen",
  "Ready to Cook",
  "Banchan",
  "Pickled",
  "Dairy & Soy",
  "Pantry",
  "Rice",
  "Produce",
  "Meat",
  "Seafood",
];

export default function CategoryDropdown({ onSelect, mobile = false }) {
  const [open, setOpen] = useState(false);

  const handleSelect = (category) => {
    onSelect(category);
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 font-semibold text-zionGreen hover:text-zionOrange"
      >
        Categories <FiChevronDown />
      </button>

      {open && (
        <div
          className={`
            ${mobile ? "relative mt-3" : "absolute top-full mt-3"}
            bg-white rounded-xl shadow-lg border border-gray-200 w-56 z-50
          `}
        >
          {/* 👇 SCROLLABLE LIST */}
          <ul className="py-2 max-h-64 overflow-y-auto overscroll-contain">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => handleSelect(cat)}
                  className="w-full text-left px-4 py-2 text-gray-700 hover:bg-zionGray hover:text-zionGreen"
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
