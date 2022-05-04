import React, { useEffect, useState } from 'react';
import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import Navbartwo from '../../components/Navbars/Navbartwo';
import Meta from '../../partial/seo-meta';
import { Row, Col, Offcanvas, Card, Accordion, useAccordionButton } from "react-bootstrap";
import Footer from '../../components/Footers/Footers';
import { BsTwitter, BsLinkedin, BsInstagram } from 'react-icons/bs';
import { FaTwitterSquare, FaFacebook, FaWhatsappSquare } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import BlogCard from '../../components/BlogCard';
import RecentBlogCard from '../../components/RecentBlogCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RecentBlogSlide from '../../components/RecentBlogSlide';
import mixpanel from 'mixpanel-browser';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_KEY,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN,
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "jobDescription"
  })

  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const blogs = await client.getEntries({ content_type: "blog" })

  const { items } = await client.getEntries({
    content_type: 'jobDescription',
    'fields.slug': params.slug
  })

  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { post: items[0], blogs: blogs.items },
    revalidate: 1
  }
}

export default function HireDevelopers({ post, blogs }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const filterBlogs = blogs?.slice(0, 4)

  const { title, skill, skillLogo, content, intro, metaTitle, metaDescription } = post.fields;

  const headingTypes = [BLOCKS.HEADING_2]

  //const headings = content.json.content.filter(item => headingTypes.includes(item.nodeType))

  const document = {
    nodeType: 'document',
    content: headingTypes,
  }

  const main = {

    renderNode: {
      [BLOCKS.HEADING_2]: (node, pext) => {
        const strUnderscores = String(pext).replace(/ /g, "_")

        return (
          <p className="description_title"><a id={strUnderscores}>{pext} </a></p>
        )
      },
      [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
        return (
          <img
            src={`https://${node.data.target.fields.file.url}`}
            height={node.data.target.fields.file.details.image.height}
            width={node.data.target.fields.file.details.image.width}
            alt={node.data.target.fields.description}
          />
        );
      }

    },
  };

  const options = {

    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, next) =>
        " ",
      [BLOCKS.HEADING_3]: (node, next) =>
        " ",
      [BLOCKS.HEADING_4]: (node, next) =>
        " ",
      [BLOCKS.HEADING_5]: (node, next) =>
        " ",
      [BLOCKS.HEADING_6]: (node, next) =>
        " ",
      [BLOCKS.UL_LIST]: (node, next) =>
        " ",
      [BLOCKS.LIST_ITEM]: (node, next) =>
        " ",
      [BLOCKS.HR]: (node, next) =>
        " ",
      [BLOCKS.OL_LIST]: (node, next) =>
        " ",
      [BLOCKS.QUOTE]: (node, next) =>
        " ",
      [BLOCKS.TABLE]: (node, next) =>
        " ",
      [BLOCKS.TABLE_CELL]: (node, next) =>
        " ",
      [BLOCKS.TABLE_ROW]: (node, next) =>
        " ",
      [BLOCKS.TABLE_HEADER_CELL]: (node, next) =>
        " ",
      [BLOCKS.HEADING_2]: (node, pext) => {
        const strUnderscores = String(pext).replace(/ /g, "_")

        return (
          <p className="table_link"><a href={"#" + strUnderscores}>{pext}</a> </p>
        )
      }

    },
  };

  return (
    <div>
      <Row className="mx-auto">
        <Navbartwo />
        <Meta
            title={metaTitle}
            description={metaDescription}
        />
        <div className='hire_details_banner_section'>
          <Row className='container-fluid hire_details_banner mx-auto'>
            <Row className="container  mx-auto banner_row d-md-flex d-sm-flex justify-content-md-between justify-content-sm-between">
              <Col className='align-items-center' lg={7} md={6} sm={6} xs={12}>
                <h1 className='hire__details_title'>{title}</h1>
                <div className='d-flex blog_details_container'>
                  <p className='hire_banner_text'>{intro}</p>
                </div>
                <div className='mt-3'>
                  <input type="text" className="hire_blog_inputs" placeholder='Your work Email' />
                  <a href='https://client.uptal.org/'><button className="hire_blog_developer_btn"><div onClick={()=>{
                mixpanel.init('b7865fb165953c731ca885057e034237', {ignore_dnt: true}); 
                mixpanel.track('website-hire-now-click');
              }}>Hire {skill} Developer</div></button></a>
                </div>
              </Col>
              <Col lg={4} md={6} sm={6} xs={12}>
                <img src={'https:' + skillLogo.fields.file.url} className='details_img' />
              </Col>
            </Row>
          </Row>
        </div>
        <div className='container-fluid hire_details_banner_mobile'>
          <Row className="hire_details_mobile_banner_row  mx-auto banner_row d-md-flex d-sm-flex justify-content-md-center justify-content-sm-center">
            <Col lg={4} md={10} sm={12} xs={12}>
              <img src={'https:' + skillLogo.fields.file.url} className='details_img' />
            </Col>
            <Col className='align-items-center' lg={7} md={10} sm={12} xs={12}>
              <h1 className='details_title'>{title}</h1>
              <div className='d-flex blog_details_container'>
                <p className='blog_detailsone'>{intro}</p>
              </div>
              <div className='mt-3'>
                <input type="text" className="hire_blog_inputs" placeholder='Your work Email' />
                <a href='https://client.uptal.org/'><button className="hire_blog_developer_btn"><div onClick={()=>{
                mixpanel.init('b7865fb165953c731ca885057e034237', {ignore_dnt: true}); 
                mixpanel.track('website-hire-now-click');
              }}>Hire {skill} Developer</div></button></a>
              </div>
            </Col>

          </Row>
        </div>

        <div className='Question_section resume_description'>
          <Row className='Question_row container-fluid mx-auto ' >
            <Col lg={8} md={8} sm={12}>
              <p>{documentToReactComponents(content)}</p>
            </Col>
            <Col lg={4} md={4} sm={12}>
              <div className='sticky_silicon_div'>
                <div className='silicon_div'>
                  <p className='silicon_title'>Hire Silicon Valley-caliber {skill} developers at half the cost</p>
                  <p className='silicon_text'>Uptal helps companies match with top-quality {skill} developers from across the world in a matter of days. Scale your engineering team with pre-vetted {skill} developers at the push of a button.</p>

                  <a href='https://client.uptal.org/'><button className="silicon_btn"><div onClick={()=>{
                mixpanel.init('b7865fb165953c731ca885057e034237', {ignore_dnt: true}); 
                mixpanel.track('website-hire-now-click');
              }}>Hire Developer</div></button></a>
                </div>
                <div className='silicon_resume_icon_div'>
                  <p className='mt-2 '>Search Job</p>
                  <a> <img className='ms-2' style={{
                    height: '32px', marginTop: '5px'
                  }} alt="Picture of the author" src="/facebook.png" /></a>

                  <a href="https://www.linkedin.com/company/uptal"><img className='mx-2' style={{
                    height: '32px', marginTop: '5px'
                  }} alt="Picture of the author" src="/linkedin.png" /></a>

                  <a href="https://twitter.com/uptalorg"><img style={{
                    height: '32px', marginTop: '5px'
                  }} alt="Picture of the author" src="/twitter.png" /></a>

                  <a href="https://www.instagram.com/uptalorg/"><img className='mx-2' style={{
                    height: '32px', marginTop: '5px'
                  }} alt="Picture of the author" src="/insta.png" /></a>

                </div>
              </div>
            </Col>
          </Row>
        </div>

        {/* <div className='blog_section'>
              <h2 className='fw-bold ms-4 pb-4 '>Recent Blog</h2>
                <Row className="container-fluid mx-auto mt-3">
                    {filterBlogs.map(blog => {
                  return <RecentBlogCard key={blog.sys.id} blog={blog} />
                    })}
                </Row>
            </div> */}

        <section className='recent_blog_carusal_section' style={{
          display: 'block',
          marginBottom: '70px',
          marginTop: '70px'
        }}>
          <div className="container">
            <h2 className='fw-bold pb-4 '>Recent Blog</h2>
            <Slider className="bg-light"  {...settings}>
              {filterBlogs.map(blog => {
                return <RecentBlogSlide key={blog.sys.id} blog={blog} />
              })}
            </Slider>
          </div>
        </section>
        <Footer />
      </Row>
    </div>
  );
}