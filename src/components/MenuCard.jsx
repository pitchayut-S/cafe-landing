function MenuCard({ name, price, image }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4 flex justify-between items-center">
        <h3 className="font-semibold text-gray-800">{name}</h3>
        <span className="text-amber-700 font-bold">{price} บาท</span>
      </div>
    </div>
  )
}

export default MenuCard
