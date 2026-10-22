import Coffee3D from './Coffee3D'

function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden"
    >
      <img
        src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1920&auto=format&fit=crop"
        alt="บรรยากาศร้านกาแฟ"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />

      <div className="absolute -top-20 -right-20 w-72 h-72 bg-amber-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 -left-10 w-56 h-56 bg-amber-300/20 rounded-full blur-3xl" />

      {/* เนื้อหาหลัก: จัดกึ่งกลางทั้งหมด เลื่อนขึ้นด้านบนนิดหน่อย (-mt) เพื่อเผื่อที่ว่างด้านล่าง
          ไว้ใส่แก้วกาแฟ 3D ต่อจากปุ่มจองโต๊ะ */}
      <div className="relative z-10 flex flex-col items-center animate-fade-in">
        {/* แก้วกาแฟ 3D: วางไว้เหนือข้อความ เป็นจุดสายตาแรกก่อนเข้าสู่หัวข้อ/ปุ่ม */}
        <div className="hidden lg:block relative w-[300px] h-[300px] -mb-2">
          <Coffee3D />
        </div>

        <p className="text-amber-200 tracking-[0.3em] text-xs md:text-sm mb-4 font-light uppercase">
          Specialty Coffee
        </p>
        <h2 className="text-5xl md:text-7xl font-light text-white mb-4 tracking-tight">
          กาแฟสดใหม่<span className="font-semibold">ทุกแก้ว</span>
        </h2>
        <p className="text-base md:text-lg text-gray-200 mb-8 font-light max-w-md">
          นั่งชิล จิบกาแฟ ในบรรยากาศอบอุ่นใจกลางเมือง
        </p>
        <a
          href="#booking"
          className="inline-block bg-amber-600 text-white px-8 py-3.5 rounded-full font-medium hover:bg-amber-700 hover:scale-105 active:scale-95 transition-all duration-200 shadow-xl"
        >
          จองโต๊ะเลย
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
