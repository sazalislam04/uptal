import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import EventCard from "../../components/EventCard";
import { createClient } from 'contentful'
import Filteritem from "../../components/Filteritem";
import { Button, Row } from "react-bootstrap";
import Nabars from "../../components/Navbars/Navbars";
import Footer from "../../components/Footers/Footers";
import Meta from "../../partial/seo-meta";

export async function getStaticProps() {

  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_KEY,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN,
  })

  const res = await client.getEntries({ content_type: "events" })

  return {
    props: {
      blogs: res.items,
    },
    revalidate: 1
  }
}


export default function Community({ blogs }) {


  return (
       
    <Row className="mx-auto">
     <Nabars/>
     <Meta
            title="Dummy Title"
            description="Dummy Description"
            image="AWS.svg"
        />
     
     <Filteritem />
    
      <Row className="mx-auto mt-3">
          {blogs.map(blog => (
            <EventCard key={blog.sys.id} blog={blog} />
          ))}
      </Row>
      <Link href='/community/events'><button >View all events</button></Link>
      <Footer/>
    </Row>
    
  );
}
