import React from 'react'
import Footer from '../components/common/Footer/Footer'
import Navbar from '../components/common/Navbar/Navbar'
import Subscribe from '../components/common/Subscribe/Subscribe'
import Banner from '../components/Home/Banner'
import Clients from '../components/Home/Clients'
import CurrentChallenges from '../components/Home/CurrentChallenges'
import Facts from '../components/Home/Facts'
import MoneyAlert from '../components/Home/MoneyAlert'
import OurSolutions from '../components/Home/OurSolutions'
import Service from '../components/Home/Service'
import TechPlatform from '../components/Home/TechPlatform'
import WhyWeStandOut from '../components/Home/WhyWeStandOut'

export default function Home() {
  return (
    <div>
        <Navbar />

        <Banner />

        <Facts />

        <CurrentChallenges />

        <OurSolutions />

        <WhyWeStandOut />

        <Service />

        <Clients />

        <TechPlatform />

        <MoneyAlert />

        <Subscribe />

        <Footer />
    </div>
  )
}
