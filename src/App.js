import React from 'react'
import Navbar from "./Conponents/Navbar"
import Hero from "./Conponents/Hero"
import Services from "./Conponents/Services"
import Recommend from "./Conponents/Recommend"
import Testimonials from "./Conponents/Testimonials"
import Footer from "./Conponents/Footer"
import ScrollToTop from "./Conponents/ScrollToTop"

export default function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Services />
    <Recommend />
    <Testimonials />
    <Footer />
    <ScrollToTop />
    </>
  )
}
