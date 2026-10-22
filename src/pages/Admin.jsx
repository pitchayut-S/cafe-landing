import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

// Admin: หน้าดูรายการจองโต๊ะทั้งหมด (demo-level auth แค่กรอกรหัสผ่าน ไม่ใช่ระบบ login จริง
// เหมาะสำหรับโปรเจกต์พอร์ตโฟลิโอ ถ้าจะใช้งานจริงต้องทำระบบ auth ที่รัดกุมกว่านี้)
function Admin() {
  const [authed, setAuthed] = useState(false)
  const [password, setPassword] = useState('')
  const [authError, setAuthError] = useState('')

  const [bookings, setBookings] = useState([])
  const [loading, setLoading] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === import.meta.env.VITE_ADMIN_PASSWORD) {
      setAuthed(true)
      setAuthError('')
    } else {
      setAuthError('รหัสผ่านไม่ถูกต้อง')
    }
  }

  // ดึงรายการจองทั้งหมด เรียงจากใหม่ไปเก่า
  const fetchBookings = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('bookings')
      .select('*')
      .order('created_at', { ascending: false })

    if (!error) setBookings(data)
    setLoading(false)
  }

  useEffect(() => {
    if (authed) fetchBookings()
  }, [authed])

  // อัปเดตสถานะการจอง (confirmed / cancelled) แล้วรีเฟรชรายการ
  const updateStatus = async (id, status) => {
    await supabase.from('bookings').update({ status }).eq('id', id)
    fetchBookings()
  }

  const statusBadge = (status) => {
    const map = {
      pending: 'bg-amber-100 text-amber-700',
      confirmed: 'bg-green-100 text-green-700',
      cancelled: 'bg-red-100 text-red-700',
    }
    return map[status] || map.pending
  }

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <form onSubmit={handleLogin} className="bg-white rounded-xl shadow-lg p-8 w-full max-w-sm space-y-4">
          <h1 className="text-xl font-semibold text-gray-800 text-center">เข้าสู่ระบบ Admin</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="รหัสผ่าน"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-600"
          />
          {authError && <p className="text-red-600 text-sm">{authError}</p>}
          <button type="submit" className="w-full bg-amber-700 text-white py-2.5 rounded-lg hover:bg-amber-800 transition">
            เข้าสู่ระบบ
          </button>
        </form>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">รายการจองโต๊ะ</h1>
          <button onClick={fetchBookings} className="text-sm text-amber-700 hover:underline">
            รีเฟรช
          </button>
        </div>

        {loading && <p className="text-gray-500 text-sm">กำลังโหลด...</p>}
        {!loading && bookings.length === 0 && (
          <p className="text-gray-500 text-sm">ยังไม่มีรายการจอง</p>
        )}

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="px-4 py-3">ชื่อ</th>
                <th className="px-4 py-3">เบอร์โทร</th>
                <th className="px-4 py-3">วันที่ / เวลา</th>
                <th className="px-4 py-3">จำนวนคน</th>
                <th className="px-4 py-3">สถานะ</th>
                <th className="px-4 py-3">จัดการ</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr key={b.id} className="border-t border-gray-100">
                  <td className="px-4 py-3">{b.name}</td>
                  <td className="px-4 py-3">{b.phone}</td>
                  <td className="px-4 py-3">{b.date} · {b.time}</td>
                  <td className="px-4 py-3">{b.guests}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs ${statusBadge(b.status)}`}>
                      {b.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 space-x-2">
                    <button
                      onClick={() => updateStatus(b.id, 'confirmed')}
                      className="text-green-700 hover:underline text-xs"
                    >
                      ยืนยัน
                    </button>
                    <button
                      onClick={() => updateStatus(b.id, 'cancelled')}
                      className="text-red-700 hover:underline text-xs"
                    >
                      ยกเลิก
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Admin
