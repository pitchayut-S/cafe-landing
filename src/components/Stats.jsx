import { useScrollReveal } from '../hooks/useScrollReveal'

const stats = [
  { number: '10+', label: 'ปีประสบการณ์' },
  { number: '500+', label: 'ลูกค้าพึงพอใจ' },
  { number: '20+', label: 'เมนูให้เลือก' },
  { number: '4.8', label: 'คะแนนรีวิว' },
]

// Stats: section เล็ก ๆ โชว์ตัวเลขน่าเชื่อถือ ใช้ scroll-reveal ให้ตัวเลขค่อย ๆ โผล่ทีละตัว
function Stats() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section ref={ref} className="bg-amber-900 py-12 md:py-16 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={isVisible ? 'animate-fade-in' : 'opacity-0'}
            style={{ animationDelay: `${i * 0.15}s` }} // แต่ละตัวเลขเริ่ม animation ช้ากว่ากันนิดหน่อย (stagger effect)
          >
            <p className="text-3xl md:text-5xl font-light text-amber-200 mb-1">{stat.number}</p>
            <p className="text-xs md:text-sm text-amber-100/70 font-light">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats
