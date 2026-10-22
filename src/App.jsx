import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Admin from './pages/Admin'

// App: เพิ่ม route /admin สำหรับหน้าจัดการรายการจองโต๊ะ
// ส่วนหน้า login/สมัครยังเป็น popup (AuthModal) เหมือนเดิม ไม่ใช่ route แยก
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  )
}

export default App
