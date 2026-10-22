import { useEffect, useState } from 'react'

// BackToTop: ปุ่มลอยมุมขวาล่าง โผล่มาเฉพาะตอนเลื่อนจอลงไปไกลพอ (เกิน 400px)
function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll) // cleanup กัน memory leak
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 bg-amber-700 text-white p-3 rounded-full shadow-lg hover:bg-amber-800 hover:scale-110 active:scale-95 transition-all duration-200"
      aria-label="กลับขึ้นบนสุด"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  )
}

export default BackToTop
