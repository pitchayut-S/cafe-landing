import { useEffect, useRef, useState } from 'react'

// useScrollReveal: custom hook เช็คว่า element เลื่อนเข้ามาในจอหรือยัง
// ใช้ IntersectionObserver ของ browser (ไม่ต้องใช้ library เพิ่ม)
// คืนค่า [ref, isVisible] -> เอา ref ไปผูกกับ element, isVisible ใช้ตัดสิน class animation
export function useScrollReveal() {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect() // เล่น animation แค่ครั้งเดียวพอ ไม่ต้องเล่นซ้ำทุกครั้งที่เลื่อนผ่าน
        }
      },
      { threshold: 0.15 } // เริ่มนับว่า "เห็นแล้ว" ตอน element โผล่มา 15%
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return [ref, isVisible]
}
