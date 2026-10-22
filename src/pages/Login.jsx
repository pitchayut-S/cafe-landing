import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

// Login: หน้าล็อกอินแยกต่างหาก มี route เป็นของตัวเอง (/login)
function Login() {
  // formData: เก็บค่า email/password ที่พิมพ์
  const [formData, setFormData] = useState({ email: '', password: '' })
  // errorMsg: ข้อความ error ตอน validation ไม่ผ่าน
  const [errorMsg, setErrorMsg] = useState('')
  // navigate: ฟังก์ชันจาก react-router ใช้เปลี่ยนหน้าแบบ programmatic (ไม่ต้องคลิกลิงก์)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.email || !formData.password) {
      setErrorMsg('กรุณากรอกอีเมลและรหัสผ่าน')
      return
    }

    setErrorMsg('')
    // TODO: จุดนี้ไว้เชื่อมต่อ API ล็อกอินจริงในอนาคต
    // ตอนนี้แค่ตัวอย่าง: ล็อกอินสำเร็จแล้วพากลับไปหน้าแรก
    navigate('/')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-50 px-6">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-amber-900 text-center mb-6">
          เข้าสู่ระบบ
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">อีเมล</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
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
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
              placeholder="••••••••"
            />
          </div>

          {errorMsg && <p className="text-red-600 text-sm">{errorMsg}</p>}

          <button
            type="submit"
            className="w-full bg-amber-700 text-white py-3 rounded-lg hover:bg-amber-800 transition"
          >
            เข้าสู่ระบบ
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          <Link to="/" className="text-amber-700 hover:underline">กลับไปหน้าแรก</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
