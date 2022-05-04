import React from 'react';
import {Card, Col, Row} from 'react-bootstrap'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { BsArrowRightShort } from 'react-icons/bs';

export default function EventCard({blog}) {

    const {name, organizedBy,slug, dateAndTime } = blog.fields
    const router = useRouter()

  return(

      <div className=' event_colam'>
         <Link href={`/community/events/${slug}`}>
            <a>
               <div className='event_text_colam'>
               <p> <span className='date_text'>{dateAndTime.split('at')[0]} </span> <span  className='country_text'>English</span></p>
                <p className="event_title mt-3">{name}</p>
                <p className='host_text'>Host & Speakers</p>
                <p className="organized_text">{organizedBy}</p>
               </div>
                <a className="view_event mt-auto">View Event <BsArrowRightShort /></a>

            {/* <p className="category_text">{category.fields.categoryName}</p> */}
            </a>
         </Link>
      </div>
  )
}
{/* <img src={'https:' + thumbnail.fields.file.url} width="100%" height="200px" alt='' /> */}