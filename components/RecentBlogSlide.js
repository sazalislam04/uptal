import React from 'react';
import {Col, Row, Carousel} from 'react-bootstrap'
import Link from 'next/link'
import { useRouter } from 'next/router';


export default function RecentBlogCard({blog}) {

    const {category, title,thumbnail, slug, date ,intro } = blog.fields
    const router = useRouter()
    const ClickHandler = () => {
        router.push(`/blog/${slug}`)
    }
    const month = new Date(date).toLocaleString('default', { month: 'long' });
    const dates = new Date(date).getDate();
    const years = new Date(date).getFullYear();

  return(
    <div className='card-colam pb-4 ps-3 pe-3' style={{
      backgroundColor:'#fff'
    }}>
        <Link href={`/blog/${slug}`}><a>
        <img className='cards-img' src={'https:' + thumbnail.fields.file.url}  alt='' />
        <p className="blog-title mt-3">{title}</p>
        <p className="blog-content">{intro}</p>
        <p className="date_text">{month} {dates}, {years}</p>
        </a></Link>
    </div>
  )
}