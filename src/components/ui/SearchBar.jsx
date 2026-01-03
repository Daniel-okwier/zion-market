import { FiSearch } from "react-icons/fi";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative max-w-xl mx-auto mb-8">
      <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search products, brands, flavors..."
        className="w-full pl-12 pr-4 py-3 rounded-full bg-white shadow-sm
                   focus:outline-none focus:ring-2 focus:ring-zionGreen/40
                   transition"
      />
    </div>
  );
}
