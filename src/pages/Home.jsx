import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Treatments from "../components/Treatments"
import Results from "../components/Results"
import Testimonials from "../components/Testimonials"
import Products from "../components/Products"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Treatments />
      <Results />
      <Testimonials />
      <Products />
      <Contact />
      <Footer />
    </>
  )
}

export default Home