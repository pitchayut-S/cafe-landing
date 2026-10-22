import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import MenuGrid from '../components/MenuGrid'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import LocationMap from '../components/LocationMap'
import BookingForm from '../components/BookingForm'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'

// Home: รวม section ทั้งหมดของหน้า landing page
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <MenuGrid />
      <About />
      <Testimonials />
      <LocationMap />
      <BookingForm />
      <Footer />
      <BackToTop />
    </>
  )
}

export default Home
