import React, { useEffect, useState } from 'react';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import BlogCard from "../../components/BlogCard";
import { createClient } from 'contentful'
import Filteritem from "../../components/Filteritem";
import { Row } from "react-bootstrap";
import Navbar from "../../components/Navbars/Navbars";
import Footer from "../../components/Footers/Footers";
import { IoIosArrowDown } from 'react-icons/io';
import Meta from '../../partial/seo-meta';

export async function getStaticProps() {

  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_KEY,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN,
  })

  const res = await client.getEntries({ content_type: "blog" })

  return {
    props: {
      blogs: res.items,
    },
    revalidate: 1
  }
}

export default function Blog({ blogs }) {
  const [viewBlog, ViewBlog] = useState(6)
  const [viewMore, setViewMore] = useState(true)

  let SliceBlogs;
  SliceBlogs = blogs.slice(0, viewBlog)


  return (

    <div className="mx-auto">
      <Navbar />
      <Meta
            title="Uptal - Matching remote developers with global startups"
            description="Hire verified remote developers from Uptal | Access future ready talent cloud and find developers with verified technical skills, matched in your timezone."
            image="https://uptal.org/blog.png"
        
        />

      <Filteritem />
      <div className="container" style={{
        minHeight:'calc(100vh - 700px)'
      }}>
        <Row className="mx-auto mt-3 mb-4">
          {SliceBlogs.map(blog => {
            return <BlogCard key={blog.sys.id} blog={blog} />
          })}
          {
            viewMore && <p className='view_more_blog_btn text-center' onClick={() => {
              ViewBlog(viewBlog + 6)
            }}
            >View More <IoIosArrowDown size={22} /></p>
          }

        </Row>
      </div>
      <Footer />
    </div>

  );
}
