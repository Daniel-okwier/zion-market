import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const categories = [
  "Produce",
  "Meat & Seafood",
  "Dairy",
  "Bakery",
  "Snacks",
  "Drinks",
  "International Foods",
];

export default function CategoryDropdown({ mobile = false }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 font-semibold text-zionGreen hover:text-zionOrange"
      >
        Categories
        <FiChevronDown />
      </button>

      {open && (
        <div
          className={`absolute ${
            mobile ? "relative mt-3" : "top-full mt-3"
          } bg-white rounded-xl shadow-lg border border-gray-200 w-56 z-50`}
        >
          <ul className="py-2">
            {categories.map((cat) => (
              <li key={cat}>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-zionGray hover:text-zionGreen"
                >
                  {cat}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
