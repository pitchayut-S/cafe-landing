import { useScrollReveal } from '../hooks/useScrollReveal'

function LocationMap() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section
      ref={ref}
      className={`py-14 md:py-20 px-6 max-w-6xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center text-amber-900 mb-6 md:mb-10">
        แผนที่ร้าน
      </h2>
      <div className="rounded-xl overflow-hidden shadow-md aspect-video">
        {/* DEMO: พิกัดนี้เป็นตัวอย่างใจกลางกรุงเทพฯ เท่านั้น ยังไม่ใช่ที่อยู่ร้านจริง
           เมื่อมีที่อยู่จริงให้เปลี่ยน src ด้านล่างเป็นลิงก์ embed จาก Google Maps ของร้าน */}
        <iframe
          title="ที่ตั้งร้าน"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1937.0!2d100.5018!3d13.7563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQ1JzIyLjciTiAxMDDCsDMwJzA2LjUiRQ!5e0!3m2!1sen!2sth!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  )
}

export default LocationMap
