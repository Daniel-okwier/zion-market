import { Search } from "lucide-react";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative max-w-3xl mx-auto mb-10">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        placeholder="Search products, categories..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full pl-12 pr-4 py-4 rounded-full
          bg-white shadow-sm
          focus:outline-none focus:ring-2 focus:ring-zionGreen/30
          transition
        "
      />
    </div>
  );
}
