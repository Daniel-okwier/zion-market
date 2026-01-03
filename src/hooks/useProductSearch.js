import { useMemo } from "react";

export function useProductSearch(products, query, activeCategory) {
  return useMemo(() => {
    let filtered = products;

    // category filter
    if (activeCategory && activeCategory !== "All") {
      filtered = filtered.filter(
        (p) => p.category === activeCategory
      );
    }

    // instant search (case-insensitive)
    if (query.trim()) {
      const q = query.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    return filtered;
  }, [products, query, activeCategory]);
}
