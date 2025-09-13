export default function CartItem({ item, removeFromCart }) {
  return (
    <div className="flex items-center justify-between border-b pb-2">
      <div className="flex items-center space-x-4">
        <img src={item.thumbnail} alt={item.title} className="w-16 h-16 object-cover rounded" />
        <div>
          <h2 className="font-semibold">{item.title}</h2>
          <p className="text-gray-600">${item.price}</p>
        </div>
      </div>
      <button
        onClick={() => removeFromCart(item.id)}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        Remove
      </button>
    </div>
  );
}
