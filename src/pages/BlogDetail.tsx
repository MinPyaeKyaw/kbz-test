import React, {useEffect, useState} from 'react'
import Navbar from '../components/common/Navbar/Navbar'
import Banner from '../components/BlogDetail/Banner'
import Footer from '../components/common/Footer/Footer'
import Subscribe from '../components/common/Subscribe/Subscribe'
import Blog from '../components/BlogDetail/Blog'
import RelatedCourse from '../components/BlogDetail/RelatedCourse'

import { getBlogById, getLatestBlogs, getRelatedBlogs } from '../queries/use-posts'

import { useParams, useLocation } from "react-router-dom";
import { getTags } from '../queries/use-tags'
import { getCategories } from '../queries/use-categories'

export default function BlogDetail() {

  const routeParams = useParams();
  const location = useLocation();

  const [post, setPost] = useState<any>({});
  const [latestPosts, setLatestPosts] = useState<any>([]);
  const [relatedPosts, setRelatedPosts] = useState<any>([]);
  const [tags, setTags] = useState<any>([]);
  const [categories, setCategories] = useState<any>([]);

  const fetchPostById = async () => {
    try {
      // @ts-ignore
      let res = await getBlogById(routeParams.id);
      setPost(res.data);
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

  const fetchRelatedPosts = async () => {
    try {
      let res = await getRelatedBlogs();
      setRelatedPosts(res.data);
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
    fetchPostById();
    fetchLatestPosts();
    fetchRelatedPosts();
    fetchTags();
    fetchCategories();
  }, [location.pathname])

  return (
    <>
      <Navbar />

      <Banner blog={post} />

      <Blog blog={post} latestsBlogs={latestPosts} tags={tags} categories={categories} />

      <RelatedCourse blogs={relatedPosts} />

      <Subscribe />

      <Footer />
    </>
  )
}
