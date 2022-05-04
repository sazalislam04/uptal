import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import { Row } from "react-bootstrap";
import Nabars from "../../../components/Navbars/Navbars";
import Filteritem from "../../../components/Filteritem";
import BlogCard from "../../../components/BlogCard";
import { createClient } from 'contentful'
import Footer from "../../../components/Footers/Footers";



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

  // console.log( blogs[0].fields.category.fields.categoryName)
  return (
    <div className="mx-auto">
      <Nabars />
      <Filteritem />

      <div className="container">
        <Row className="mx-auto mt-3">
          {blogs.map(blog => {
            return <>{blog.fields.category.fields.categoryName === "Diversity and Inclusion" ?
              <BlogCard key={blog.sys.id} blog={blog} /> : ""}</>
          })}
        </Row>
      </div>
      <Footer />
    </div>
  );
}
