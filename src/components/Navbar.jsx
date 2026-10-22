function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold text-amber-700">ร้านกาแฟของเรา</h1>
        <ul className="flex gap-6 text-gray-700">
          <li><a href="#home" className="hover:text-amber-700">หน้าแรก</a></li>
          <li><a href="#menu" className="hover:text-amber-700">เมนู</a></li>
          <li><a href="#about" className="hover:text-amber-700">เกี่ยวกับเรา</a></li>
          <li><a href="#booking" className="hover:text-amber-700">จองโต๊ะ</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar