import { useScrollReveal } from '../hooks/useScrollReveal'

const reviews = [
  { name: 'มินตรา', text: 'กาแฟอร่อยมาก บรรยากาศดีสุด ๆ นั่งทำงานได้ทั้งวัน', rating: 5 },
  { name: 'ธนวัฒน์', text: 'พนักงานบริการดี เมนูหลากหลาย ราคาคุ้มค่า', rating: 5 },
  { name: 'ปรียา', text: 'ร้านสวย ถ่ายรูปสวย กาแฟก็เข้มข้นกำลังดี', rating: 4 },
]

// Testimonials: การ์ดรีวิวลูกค้า ใช้ glassmorphism (โปร่งแสง+เบลอ) ให้เข้าชุดกับ Navbar
function Testimonials() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section ref={ref} className="py-14 md:py-24 px-6 bg-amber-50">
      <div className="max-w-6xl mx-auto">
        <p className="text-amber-700 text-center tracking-[0.3em] text-xs mb-2 font-light uppercase">Testimonials</p>
        <h2 className="text-2xl md:text-4xl font-light text-center text-amber-900 mb-10 md:mb-14">
          รีวิวจากลูกค้า
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* ดาวตามคะแนน rating */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <svg
                    key={idx}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 ${idx < review.rating ? 'text-amber-500' : 'text-gray-200'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 00-.363 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.366-2.446a1 1 0 00-1.175 0l-3.366 2.446c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.363-1.118L2.98 9.384c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.957z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-600 font-light leading-relaxed mb-4">"{review.text}"</p>
              <p className="text-sm font-medium text-amber-800">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
