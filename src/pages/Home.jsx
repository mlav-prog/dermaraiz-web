import Navbar from "../components/Navbar/Navbar.jsx"
import Hero from "../components/Hero/Hero.jsx"
import Team from "../components/Team/Team.jsx"
import Treatments from "../components/Treatments/Treatments.jsx"
import Results from "../components/Results/Results.jsx"
import Testimonials from "../components/Testimonials/Testimonials.jsx"
import Products from "../components/Products/Products.jsx"
import Contact from "../components/Contact/Contact.jsx"
import Footer from "../components/Footer/Footer.jsx"

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Team />
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