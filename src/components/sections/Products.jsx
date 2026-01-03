import { useMemo, useState } from "react";
import SearchBar from "../ui/SearchBar";
import CategoryFilter from "../ui/CategoryFilter";
import ProductGrid from "../marketplace/ProductGrid";
import { products } from "../../data/products";

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

export default function Products() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "All" || product.category === activeCategory;

      const query = search.toLowerCase();
      const matchesSearch =
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <section className="px-4 pb-24">
      {/* Search */}
      <SearchBar value={search} onChange={setSearch} />

      {/* Category Pills */}
      <CategoryFilter
        categories={categories}
        active={activeCategory}
        onChange={setActiveCategory}
      />

      {/* Products */}
      <ProductGrid products={filteredProducts} />
    </section>
  );
}
