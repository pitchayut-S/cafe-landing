import { useState } from 'react'

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
  })
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      setErrorMsg('กรุณากรอกข้อมูลให้ครบทุกช่อง')
      return
    }

    // phonePattern: เช็คว่าเบอร์โทรเป็นตัวเลข 9-10 หลัก (รองรับมี/ไม่มีขีดคั่น)
    const phonePattern = /^0[0-9]{1,2}-?[0-9]{3}-?[0-9]{4}$/
    if (!phonePattern.test(formData.phone)) {
      setErrorMsg('รูปแบบเบอร์โทรไม่ถูกต้อง เช่น 0812345678 หรือ 081-234-5678')
      return
    }

    setErrorMsg('')
    setStatus('sending')

    try {
      const response = await fetch('https://formspree.io/f/xvkzenbk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', phone: '', date: '', time: '', guests: '' })
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="booking" className="py-14 md:py-20 px-6 bg-amber-900">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-6 md:mb-10">
          จองโต๊ะ
        </h2>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-5 md:p-8 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">ชื่อ</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-amber-600"
              placeholder="ชื่อของคุณ"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">เบอร์โทร</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-amber-600"
              placeholder="08x-xxx-xxxx"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">วันที่</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-amber-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">เวลา</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-amber-600"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">จำนวนคน</label>
            <input
              type="number"
              name="guests"
              min="1"
              value={formData.guests}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-amber-600"
              placeholder="2"
            />
          </div>

          {errorMsg && <p className="text-red-600 text-sm">{errorMsg}</p>}
          {status === 'success' && (
            <p className="text-green-600 text-sm">จองโต๊ะสำเร็จ! เราจะติดต่อกลับไปเร็ว ๆ นี้</p>
          )}
          {status === 'error' && (
            <p className="text-red-600 text-sm">ส่งไม่สำเร็จ ลองใหม่อีกครั้ง</p>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full bg-amber-700 text-white py-3 rounded-lg text-sm md:text-base hover:bg-amber-800 transition disabled:opacity-50"
          >
            {status === 'sending' ? 'กำลังส่ง...' : 'ยืนยันการจอง'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default BookingForm
