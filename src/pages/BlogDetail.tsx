import React from 'react'
import Navbar from '../components/common/Navbar/Navbar'
import Banner from '../components/BlogDetail/Banner'
import Footer from '../components/common/Footer/Footer'
import Subscribe from '../components/common/Subscribe/Subscribe'
import Blog from '../components/BlogDetail/Blog'
import RelatedCourse from '../components/BlogDetail/RelatedCourse'

export default function BlogDetail() {
  return (
    <>
      <Navbar />

      <Banner />

      <Blog />

      <RelatedCourse />

      <Subscribe />

      <Footer />
    </>
  )
}
