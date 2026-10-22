import { useScrollReveal } from '../hooks/useScrollReveal'

function About() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section
      id="about"
      ref={ref}
      className={`bg-amber-50 py-14 md:py-24 px-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-amber-700 tracking-[0.3em] text-xs mb-2 font-light uppercase">About Us</p>
        <h2 className="text-2xl md:text-4xl font-light text-amber-900 mb-6">เกี่ยวกับเรา</h2>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-10 font-light">
          ร้านกาแฟของเราเริ่มต้นจากความรักในกาแฟคั่วสดและบรรยากาศที่อบอุ่น
          เราคัดสรรเมล็ดกาแฟคุณภาพดีจากแหล่งปลูกในประเทศไทย
          เพื่อมอบประสบการณ์การดื่มกาแฟที่ดีที่สุดให้กับทุกคนที่แวะมา
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-12 text-gray-700 text-sm md:text-base">
          <div>
            <h3 className="font-medium text-amber-800 mb-1">เวลาเปิด-ปิด</h3>
            <p className="font-light">ทุกวัน 08:00 - 20:00</p>
          </div>
          <div>
            <h3 className="font-medium text-amber-800 mb-1">โทรศัพท์</h3>
            <p className="font-light">02-xxx-xxxx</p>
          </div>
          <div>
            <h3 className="font-medium text-amber-800 mb-1">ที่อยู่</h3>
            <p className="font-light">กรุงเทพมหานคร</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
