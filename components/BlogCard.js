import React from 'react';
import {Col, Row} from 'react-bootstrap'
import Link from 'next/link'
import { useRouter } from 'next/router';


export default function BlogCard({blog}) {

    const {category, title,thumbnail, slug, date ,intro } = blog.fields
    const router = useRouter()
    const ClickHandler = () => {
        router.push(`/blog/${slug}`)
    }
    const month = new Date(date).toLocaleString('default', { month: 'long' });
    const dates = new Date(date).getDate();
    const years = new Date(date).getFullYear();

  return(

      <Col className='card-colam pb-4' lg={4} md={6} sm={12} >
          <Link href={`/blog/${slug}`}><a>
          <img className='cards-img' src={'https:' + thumbnail.fields.file.url}  alt='' />
          <p className="blog-title mt-3">{title}</p>
          <p className="blog-content">{intro}</p>
          <p className="date_text">{month} {dates}, {years}</p>
          {/* <p className="category_text">{category.fields.categoryName}</p> */}
          </a></Link>
      </Col>
  )
}
{/* <img src={'https:' + thumbnail.fields.file.url} width="100%" height="200px" alt='' /> */}