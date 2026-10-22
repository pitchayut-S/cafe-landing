import Home from './pages/Home'

// App: ไม่ใช้ routing แล้ว เพราะหน้า login เปลี่ยนเป็น popup (AuthModal) แทนการเปลี่ยนหน้า
// เหลือแค่ render หน้า Home หน้าเดียว
function App() {
  return <Home />
}

export default App
