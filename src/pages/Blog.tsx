import React, { useEffect, useState } from 'react'
import Navbar from '../components/common/Navbar/Navbar'
import Banner from '../components/Blog/Banner'
import Footer from '../components/common/Footer/Footer'
import Consultation from '../components/Blog/Consultation'
import News from '../components/Blog/News'
import { getCategories } from '../queries/use-categories'
import { getTags } from '../queries/use-tags'
import { getBlogs, getLatestBlogs, getRelatedBlogs } from '../queries/use-posts'
import { useLocation } from 'react-router-dom'

export default function Blog() {

  const location = useLocation();

  const [posts, setPosts] = useState<any>([]);
  const [latestPosts, setLatestPosts] = useState<any>([]);
  const [tags, setTags] = useState<any>([]);
  const [categories, setCategories] = useState<any>([]);
  const [initialPaginationProps, setInitialPaginationProps] = useState<any>({
    limit: 2,
    offset: 0
  })

  const fetchPosts = async () => {
    try {
      let res = await getBlogs(initialPaginationProps.limit, initialPaginationProps.offset);
      setPosts(res.data.docs);
    } catch (error) {
      console.log(error);
    }
  }

  const fetchLatestPosts = async () => {
    try {
      let res = await getLatestBlogs();
      setLatestPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  const fetchTags = async () => {
    try {
      let res = await getTags();
      setTags(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  const fetchCategories = async () => {
    try {
      let res = await getCategories();
      setCategories(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPosts();
    fetchLatestPosts();
    fetchTags();
    fetchCategories();
  }, [location.pathname])

  const handleLoadMore = async () => {
    try {
      let res = await getBlogs(2, +initialPaginationProps.offset + +initialPaginationProps.limit);
      setInitialPaginationProps({limit: 2, offset: +initialPaginationProps.offset + +initialPaginationProps.limit})
      setPosts([...posts, ...res.data.docs]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbar />

      <Banner />

      <News handleLoadMore={handleLoadMore} blogs={posts} latestsBlogs={latestPosts} tags={tags} categories={categories} />

      <Consultation />

      <Footer />
    </>
  )
}
