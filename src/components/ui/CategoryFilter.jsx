import React from "react";

export default function CategoryFilter({ categories, active, onChange }) {
  return (
    <div className="relative mb-10">
      {/* fade edges for premium feel */}
      <div className="absolute left-0 top-0 h-full w-6 bg-gradient-to-r from-zionGray to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-6 bg-gradient-to-l from-zionGray to-transparent pointer-events-none" />

      <div className="flex gap-3 overflow-x-auto scrollbar-hide py-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onChange(category)}
            className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300
              ${
                active === category
                  ? "bg-zionGreen text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-zionGreen/10 hover:text-zionGreen"
              }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
