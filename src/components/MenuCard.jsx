// MenuCard: เพิ่ม hover effect ที่รูปขยายนิดหน่อย (micro-interaction) ให้ดูมีชีวิตชีวาขึ้น
function MenuCard({ name, price, image }) {
  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl overflow-hidden transition-shadow duration-300">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-32 md:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-3 md:p-4 flex justify-between items-center">
        <h3 className="font-medium text-gray-800 text-sm md:text-base">{name}</h3>
        <span className="text-amber-700 font-semibold text-sm md:text-base">{price} บาท</span>
      </div>
    </div>
  )
}

export default MenuCard
