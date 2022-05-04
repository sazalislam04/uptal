import React from 'react';
import {Col, Row} from 'react-bootstrap'
import { useRouter } from 'next/router';
import { IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';

export default function JobCard({data}) {

    const {skill, skillLogo, slug} = data.fields
    console.log('slug', slug)
  return(

      <div className='technology_colam'  lg={4} md={6} sm={12}>
          <Link href={`/jobs/${slug}`}><a >
          <img className='hire_tech_img' src={'https:' + skillLogo.fields.file.url}  alt={skill} />
          <p className="technology_text">{skill}</p>
       
          {/* <p className="category_text">{category.fields.categoryName}</p> */}
          </a></Link>
      </div>
  )
}
{/* <img src={'https:' + thumbnail.fields.file.url} width="100%" height="200px" alt='' /> */}