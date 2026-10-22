import MenuCard from './MenuCard'
import { useScrollReveal } from '../hooks/useScrollReveal'

const menuItems = [
  { id: 1, name: "ลาเต้", price: 65, image: "https://images.unsplash.com/photo-1561047029-3000c68339ca?w=400" },
  { id: 2, name: "คาปูชิโน่", price: 65, image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400" },
  { id: 3, name: "อเมริกาโน่", price: 55, image: "https://images.unsplash.com/photo-1551030173-122aabc4489c?w=400" },
  { id: 4, name: "ชาไทย", price: 60, image: "https://images.unsplash.com/photo-1558857563-b371033873b8?w=400" },
  { id: 5, name: "โมจิโต้", price: 70, image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400" },
  { id: 6, name: "ครัวซองต์", price: 55, image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400" },
]

function MenuGrid() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section
      id="menu"
      ref={ref}
      className={`py-14 md:py-24 px-6 max-w-6xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
    >
      <p className="text-amber-700 text-center tracking-[0.3em] text-xs mb-2 font-light uppercase">Our Menu</p>
      <h2 className="text-2xl md:text-4xl font-light text-center text-amber-900 mb-10 md:mb-14">
        เมนูแนะนำ
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {menuItems.map((item) => (
          <MenuCard key={item.id} name={item.name} price={item.price} image={item.image} />
        ))}
      </div>
    </section>
  )
}

export default MenuGrid
