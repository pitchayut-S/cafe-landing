function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-amber-50 text-center px-6"
    >
      <div>
        <h2 className="text-5xl font-bold text-amber-900 mb-4">
          กาแฟสดใหม่ทุกแก้ว
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          นั่งชิล จิบกาแฟ ในบรรยากาศอบอุ่นใจกลางเมือง
        </p>
        <a
          href="#booking"
          className="bg-amber-700 text-white px-6 py-3 rounded-full hover:bg-amber-800 transition"
        >
          จองโต๊ะเลย
        </a>
      </div>
    </section>
  )
}

export default Hero