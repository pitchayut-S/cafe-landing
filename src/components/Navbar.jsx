import { useState } from 'react'
import AuthModal from './AuthModal'

// Navbar: ปุ่ม "เข้าสู่ระบบ" เปิด popup (AuthModal) แทนการเปลี่ยนหน้าไป /login
function Navbar() {
  const [isOpen, setIsOpen] = useState(false) // เมนูมือถือ
  const [isAuthOpen, setIsAuthOpen] = useState(false) // popup login/register

  const navLinks = [
    { href: '#home', label: 'หน้าแรก' },
    { href: '#menu', label: 'เมนู' },
    { href: '#about', label: 'เกี่ยวกับเรา' },
    { href: '#booking', label: 'จองโต๊ะ' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-md shadow-sm z-50 border-b border-white/20">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-semibold text-amber-800 tracking-tight">ร้านกาแฟของเรา</h1>

        <ul className="hidden md:flex gap-8 text-gray-700 items-center font-light">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="relative hover:text-amber-700 transition-colors group">
                {link.label}
                <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-amber-600 group-hover:w-full group-hover:left-0 transition-all duration-300" />
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={() => setIsAuthOpen(true)}
              className="bg-amber-700 text-white px-5 py-2 rounded-full hover:bg-amber-800 hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm"
            >
              เข้าสู่ระบบ
            </button>
          </li>
        </ul>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="เปิด/ปิดเมนู"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 text-gray-700 bg-white/90 backdrop-blur-md">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="block hover:text-amber-700" onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={() => { setIsAuthOpen(true); setIsOpen(false) }}
              className="inline-block bg-amber-700 text-white px-4 py-1.5 rounded-full hover:bg-amber-800 transition"
            >
              เข้าสู่ระบบ
            </button>
          </li>
        </ul>
      )}

      {/* popup login/register แสดงเมื่อ isAuthOpen เป็น true */}
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </nav>
  )
}

export default Navbar
