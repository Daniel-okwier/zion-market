export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-4">
      <div className="aspect-square bg-zionGray rounded-xl mb-3" />
      <h3 className="font-semibold text-sm">{product.name}</h3>
      <p className="text-xs text-gray-500">{product.category}</p>
      <p className="mt-2 font-bold text-zionGreen">
        ${product.price.toFixed(2)}
      </p>
    </div>
  );
}
