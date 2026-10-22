import { useState } from 'react'
import { createPortal } from 'react-dom'

// AuthModal: popup เดียวรองรับทั้งล็อกอินและสมัครสมาชิก สลับกันด้วย state "mode"
// isOpen: true/false คุมว่า popup โชว์อยู่ไหม (ส่งมาจาก Navbar ที่เป็นคนเก็บ state นี้จริง)
// onClose: ฟังก์ชันปิด popup (ส่งมาจาก Navbar เช่นกัน)
function AuthModal({ isOpen, onClose }) {
  const [mode, setMode] = useState('login') // 'login' | 'register'
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' })
  const [errorMsg, setErrorMsg] = useState('')

  if (!isOpen) return null // ไม่ render อะไรเลยถ้า popup ปิดอยู่

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.email || !formData.password) {
      setErrorMsg('กรุณากรอกอีเมลและรหัสผ่าน')
      return
    }
    if (mode === 'register') {
      if (!formData.name) {
        setErrorMsg('กรุณากรอกชื่อ')
        return
      }
      if (formData.password !== formData.confirmPassword) {
        setErrorMsg('รหัสผ่านไม่ตรงกัน')
        return
      }
    }

    setErrorMsg('')
    // TODO: เชื่อมต่อ API ล็อกอิน/สมัครสมาชิกจริงตรงนี้
    alert(mode === 'login' ? 'ล็อกอินสำเร็จ (demo)' : 'สมัครสมาชิกสำเร็จ (demo)')
    onClose()
  }

  const handleFacebookLogin = () => {
    // TODO: เชื่อม Facebook OAuth จริง (ต้องใช้ Facebook SDK + App ID)
    alert('เชื่อมต่อ Facebook Login (demo)')
  }

  return createPortal(
    // overlay: พื้นหลังมืดคลุมทั้งจอ คลิกข้างนอกการ์ดแล้วปิด popup ได้
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center px-4"
      onClick={onClose}
    >
      {/* การ์ด popup: stopPropagation กันไม่ให้คลิกข้างในแล้วปิดไปด้วย */}
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-8 relative animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"
          aria-label="ปิด"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-medium text-amber-900 text-center mb-6">
          {mode === 'login' ? 'เข้าสู่ระบบ' : 'สมัครสมาชิก'}
        </h2>

        {/* ปุ่ม Facebook login */}
        <button
          onClick={handleFacebookLogin}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2.5 mb-4 hover:bg-gray-50 transition text-sm font-medium text-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12a10 10 0 1 0-11.56 9.87v-6.98H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.98A10 10 0 0 0 22 12Z"/>
          </svg>
          เข้าสู่ระบบด้วย Facebook
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400">หรือ</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'register' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">ชื่อ</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-600"
                placeholder="ชื่อของคุณ"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">อีเมล</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-600"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">รหัสผ่าน</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-600"
              placeholder="••••••••"
            />
          </div>

          {mode === 'register' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">ยืนยันรหัสผ่าน</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-600"
                placeholder="••••••••"
              />
            </div>
          )}

          {errorMsg && <p className="text-red-600 text-sm">{errorMsg}</p>}

          <button
            type="submit"
            className="w-full bg-amber-700 text-white py-2.5 rounded-lg hover:bg-amber-800 transition font-medium"
          >
            {mode === 'login' ? 'เข้าสู่ระบบ' : 'สมัครสมาชิก'}
          </button>
        </form>

        {/* สลับโหมด login <-> register */}
        <p className="text-center text-sm text-gray-500 mt-6">
          {mode === 'login' ? (
            <>
              ยังไม่มีบัญชี?{' '}
              <button onClick={() => { setMode('register'); setErrorMsg('') }} className="text-amber-700 hover:underline font-medium">
                สมัครสมาชิก
              </button>
            </>
          ) : (
            <>
              มีบัญชีอยู่แล้ว?{' '}
              <button onClick={() => { setMode('login'); setErrorMsg('') }} className="text-amber-700 hover:underline font-medium">
                เข้าสู่ระบบ
              </button>
            </>
          )}
        </p>
      </div>
    </div>,
    document.body
  )
}

export default AuthModal
