import React, {useEffect, useState} from 'react'
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
import { getBlogs } from '../queries/use-posts'

export default function Home() {

  const [postsList, setPostsList] = useState<any>([]);

  const fetchPosts = async () => {
    try {
      let res = await getBlogs(6, 0);
      setPostsList(res.data.docs);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, [])

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

        <MoneyAlert blogs={postsList} />

        <Subscribe />

        <Footer />
    </div>
  )
}
