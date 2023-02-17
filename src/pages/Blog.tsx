import React from 'react'
import Navbar from '../components/common/Navbar/Navbar'
import Banner from '../components/Blog/Banner'
import Footer from '../components/common/Footer/Footer'
import Consultation from '../components/Blog/Consultation'
import News from '../components/Blog/News'

export default function Blog() {
  return (
    <>
      <Navbar />

      <Banner />

      <News />

      <Consultation />

      <Footer />
    </>
  )
}
