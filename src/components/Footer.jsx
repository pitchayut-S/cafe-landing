// Footer: เพิ่มไอคอน social media (SVG inline ไม่ต้องโหลด library เพิ่ม)
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 md:py-10 px-6 text-center">
      <p className="font-semibold text-white mb-2 text-sm md:text-base">ร้านกาแฟของเรา</p>
      <p className="text-xs md:text-sm mb-4">กรุงเทพมหานคร · 02-xxx-xxxx</p>

      <div className="flex justify-center gap-4 mb-4">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-amber-500 transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12a10 10 0 1 0-11.56 9.87v-6.98H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.98A10 10 0 0 0 22 12Z"/>
          </svg>
        </a>
        <a href="#" aria-label="Instagram" className="hover:text-amber-500 transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7Zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10Zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.5 5.5 0 0 0 12 7.5Zm0 2A3.5 3.5 0 1 1 8.5 13 3.5 3.5 0 0 1 12 9.5ZM18 6a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z"/>
          </svg>
        </a>
        <a href="#" aria-label="Line" className="hover:text-amber-500 transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 5.73 2 10.3c0 4.08 3.55 7.5 8.35 8.17.33.07.77.22.88.5.1.26.07.66.03.92l-.14.85c-.04.26-.2 1.01.89.55 1.08-.46 5.85-3.44 7.98-5.9C21.5 13.69 22 12.07 22 10.3 22 5.73 17.52 2 12 2Z"/>
          </svg>
        </a>
      </div>

      <p className="text-xs text-gray-500">&copy; 2026 ร้านกาแฟของเรา. All rights reserved.</p>
    </footer>
  )
}

export default Footer
