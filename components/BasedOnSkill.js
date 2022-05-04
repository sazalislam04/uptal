import React from 'react';
import {Col, Row} from 'react-bootstrap'
import Link from 'next/link'
import { useRouter } from 'next/router';
import HireCard from './HireCard';
import { createClient } from 'contentful'

export async function getStaticProps() {

    const client = createClient({
      space: process.env.NEXT_PUBLIC_CONTENTFUL_KEY,
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN,
    })
  
    const res = await client.getEntries({ content_type: "hire" })
  
    return {
      props: {
        hire: res.items,
      },
      revalidate: 1
    }
  }

export default function BasedOnSkill({hire}) {
console.log(hire)
  return(

    <div className="technology_div mt-2 hire_tech_div">
    {hire?.map(data => (
        <HireCard key={data.sys.id} data={data} />
    ))}
    </div>
  )
}
{/* <img src={'https:' + thumbnail.fields.file.url} width="100%" height="200px" alt='' /> */}


  