import React, { useEffect, useState } from 'react';
import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import Navbartwo from '../../components/Navbars/Navbartwo';
import Meta from '../../partial/seo-meta';
import { Row, Col, Offcanvas, Card, Accordion, useAccordionButton } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IoIosArrowForward } from 'react-icons/io';
import { useRouter } from "next/router";
import { Button, TextField } from '@mui/material';
import Footer from '../../components/Footers/Footers';
import HireCard from '../../components/HireCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RecentBlogCard from '../../components/RecentBlogCard';
import RecentBlogSlide from '../../components/RecentBlogSlide';
import Link from 'next/link';
import mixpanel from 'mixpanel-browser';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_KEY,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN,
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "hire"
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
  const res = await client.getEntries({ content_type: "hire" })
  const blogs = await client.getEntries({ content_type: "blog" })

  // console.log(blogs.items)

  const { items } = await client.getEntries({
    content_type: 'hire',
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
    props: { post: items[0], hire: res.items, blogs: blogs.items },
    revalidate: 1
  }
}


export default function HireDevelopers({ post, hire, blogs }) {
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
  const HalfSliceTwo = hire.slice(0, 18)
  const HalfSLice = hire.slice(0, 6)
  const [showTech, setShowTech] = useState(false)

  const filterBlogs = blogs.slice(0, 4)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { title, skill, skillLogo, content, intro, metaDescription, metaTitle } = post.fields;


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
            className="hire_content_image"
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
      <div className="mx-auto">
        <Navbartwo />
        <Meta
            title={`Hire remote ${skill} developers in 2022 | Uptal.org`}
            description={`Hire ${skill} developers with Uptal in 4 easy steps. Create your employer profile. Get access to vetted talent cloud. Engage with talents and hire 4x faster.`}
            image='https://uptal.org/hire-cms-slug.png'
        />
        <section className='hire_details_banner_section'>
          <div className='hire_details_banner mx-auto' style={{
            borderRadius: '0'
          }}>
            <div className="container">
              <Row className="mx-auto banner_row d-md-flex d-sm-flex justify-content-md-between justify-content-sm-between">
                <Col className='align-items-center' lg={7} md={6} sm={6} xs={12} style={{
                  paddingLeft: '0'
                }}>
                  <h1 className='hire__details_title'>{title}</h1>
                  <div className='d-flex blog_details_container'>
                    <p className='hire_banner_text'>{intro}</p>
                  </div>
                  <div className='mt-3'>
                    <a href='https://client.uptal.org/'><button className="hire_blog_developer_btn"><div onClick={()=>{
                mixpanel.init('b7865fb165953c731ca885057e034237', {ignore_dnt: true}); 
                mixpanel.track('website-hire-now-click');
              }}>Hire {skill} Developer</div></button></a>
                  </div>
                </Col>
                <Col lg={4} md={6} sm={6} xs={12} style={{
                  paddingRight: '0'
                }}>
                  <img src={'https:' + skillLogo.fields.file.url} className='details_img' />
                </Col>
              </Row>
            </div>
          </div>
        </section>
        <section className='container-fluid hire_details_banner_mobile'>
          <Row className="hire_details_mobile_banner_row  mx-auto banner_row d-md-flex d-sm-flex justify-content-md-center justify-content-sm-center ps-2">
            <Col lg={4} md={10} sm={12} xs={12}>
              <img src={'https:' + skillLogo.fields.file.url} className='details_img' />
            </Col>
            <Col className='align-items-center' lg={7} md={10} sm={12} xs={12} >
              <h1 className='details_title'>{title}</h1>
              <div className='d-flex blog_details_container'>
                <p className='blog_detailsone'>{intro}</p>
              </div>
              <div className='mt-3'>
                <button className="hire_blog_developer_btn">Hire {skill} Developer</button>
              </div>
            </Col>

          </Row>
        </section>

        <section className="hire_expact_section">
          <div className="container">
            <Row className="mx-auto expact_row">
              <div className="expact_description_div" >
                <p className="expact_title">What you can expect</p>
                <p className="expact_text">It all starts with quality database—after registraion you will get access to
                    8000+ verified talent pool,quickly shortlist, communicate,
                      setup interview with the developers and hire.</p>
              </div>
              <div className="expact_point_div">
                <div className="expact_point">
                  <img style={{
                    height: '30px'
                  }} alt="Picture of the author" src="/numone.png" />
                  <p className="expact_text ms-3"> <span className="fw-bold">Sign up and Complete your profile</span> <br />
                  Give us a few details and get verified</p>
                </div>
                <div className="expact_point">
                  <img style={{
                    height: '30px'
                  }} alt="Picture of the author" src="/twoicon.png" />
                  <p className="expact_text ms-3"> <span className="fw-bold"> Access Talent Cloud</span> <br />
                  After verification, you will get 100% access to our talent cloud for free.</p>
                </div>
                <div className="expact_point">
                  <img style={{
                    height: '30px'
                  }} alt="Picture of the author" src="/numthree.png" />
                  <p className="expact_text ms-3"> <span className="fw-bold"> Engage and hire talents</span> <br />
                  Communicate with shortlisted talents and setup interview and hire 4X faster</p>
                </div>
              </div>
              <div className="talk_two_btn_div text-center">
                <a href='https://client.uptal.org/'> <button className="hire_expect_btn mt-3"><div onClick={()=>{
                mixpanel.init('b7865fb165953c731ca885057e034237', {ignore_dnt: true}); 
                mixpanel.track('website-hire-now-click');
              }}>Hire Remote Developers</div></button></a>
              </div>
            </Row>
          </div>
        </section>

        <section className='mx-3'>
          <div className='hire_description_container pb-4' style={{
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px'
          }}>
            <div className="container">
              <Row className='mx-auto justify-content-lg-start justify-content-sm-center  justify-content-md-center description_container'>
                <Col className="table_colam pt-0 ps-0" lg={2}>
                  <div className='hire_table_content' style={{
                    marginLeft: '0'
                  }}>
                    <p className='table_content_title'>TABLE OF CONTENTS</p>
                    <p>{documentToReactComponents(content, options)}</p>
                  </div>
                </Col>
                <Col className='description_colam' lg={10} md={12} sm={12} xs={12}>
                  <div className='table_description_container'>
                    <p className='description'>{documentToReactComponents(content, main)}</p>
                  </div>
                </Col>

              </Row>
            </div>
          </div>

        </section>

        <section className="join_work_section" style={{
          marginLeft: '0',
          marginRight: '0',
          width: '100%'
        }}>
          <div className="container">
            <Row className='join_full_container justify-content-center mx-auto'>
              <Col lg={12} md={12} sm={12} xs={12} className='w-100 '>
                <Row className="join_work_container justify-content-md-between">
                  <Col className="d-flex justify-content-start " lg={4} md={4} sm={4} xs={12}>
                    <img
                      src="/joinimg.png"
                      alt="Picture of the author"
                      className="join_img"
                    />
                  </Col>
                  <Col lg={8} md={8} sm={8} xs={12}>
                    <p className='join_title'>Join the world’s work marketplace</p>
                    <div className='join_footer_row'>
                      <Row className="justify-content-lg-between justify-content-md-around">
                        <hr className='horizontal_line' />
                        <Col lg={8} md={8} sm={12}>
                          <p className='join_text'>Access a pre-screened pool of remote talent, shortlisted for you by specialized recruiters who help you select the best talent based on your business needs.</p>
                        </Col>
                        <Col lg={3} md={3} sm={12}>
                          <a href='https://client.uptal.org/'><button className='talent_btn'><div onClick={()=>{
                mixpanel.init('b7865fb165953c731ca885057e034237', {ignore_dnt: true}); 
                mixpanel.track('website-hire-now-click');
              }}>Find Talent</div></button></a>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </section>

        <section style={{
          maxWidth: '100vw',
          overflowX: 'hidden'
        }}>
          <div className="container">
            <div className="join_work_container_mobile mx-auto">
              <div className="join_flex_div_one">
                <img
                  src="/joinimg.png"
                  alt="Picture of the author"
                  className="join_img_foremploye_mobile"
                />
              </div>
              <div className="ps-3">
                <p className='join_title'>Join the world’s work marketplace</p>
                <div className='join_footer_row'>
                  <Row className="justify-content-lg-between justify-content-md-between">
                    <hr className='horizontal_line' />
                    <Col lg={8} md={8} sm={12}>
                      <p className='join_text'>Find great talent. Build your business. Take your career to the next level.</p>
                    </Col>
                    <Col lg={3} md={3} sm={12}>
                      <a href='https://client.uptal.org/'><button className='talent_btn'><div onClick={()=>{
                mixpanel.init('b7865fb165953c731ca885057e034237', {ignore_dnt: true}); 
                mixpanel.track('website-hire-now-click');
              }}>Find Talent</div></button></a>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='hire_faq_section mx-3'>
          <div className='hire_faq_row pb-4 pt-4'>
            <div className="container">
              <p className='hire_details_faq'>Frequently Asked Questions</p>

              <Accordion >
                <Accordion.Item eventKey="0">
                  <Accordion.Header> <span className='accordion_title'>Are there any subscription or upfront fees ?</span> </Accordion.Header>
                  <Accordion.Body>
                  We do not charge any upfront fees. Our platform is 100% free to use. Find, communicate and schedule interviews with developers.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header> <span className='accordion_title'>What is the service or hiring cost ?</span> </Accordion.Header>
                  <Accordion.Body>
                  Once you make hiring, We do charge one month salary + tax. No hidden costs involved                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header> <span className='accordion_title'>Why should I hire from Uptal ?</span> </Accordion.Header>
                  <Accordion.Body>
                  We have a verified pool of talents and our database filtering will help you find the best suitable matches
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header> <span className='accordion_title'>How do Uptal verifies talent skills ?</span> </Accordion.Header>
                  <Accordion.Body>
                  We conduct proctored coding challenges to measure candidate skills and you will get access to the report.
                  </Accordion.Body>
                </Accordion.Item>
                
              </Accordion>
            </div>
          </div>
        </section>
        
        <section className="technology_section" style={{ marginRight: '0' }}>
        <div className="container mt-4">
          <p className="based_text">Hiring guide</p>
          <div className="technology_div">
            {HalfSliceTwo.map(data => {
                 return <HireCard key={data.sys.id} data={data} />
                }
                )}
          </div>
          <Link href='https://www.uptal.org/sitemap/jobs'><a className="more_skills" target="blank">+ View more</a></Link>
        </div>
      </section>

      <section className="technology_section_mobile">
        <div className="container">
          <p className="based_text ">Based on Skills</p>
          { showTech || <div className="technology_div">
            {HalfSLice.map(data => {
                 return <HireCard key={data.sys.id} data={data} />
                }
                )}
          </div>
          }
          {
            showTech && <div className="technology_div">
              {hire.map(data => {
                 return <HireCard key={data.sys.id} data={data} />
                }
                )}
            </div>
          }
          <p onClick={() => setShowTech(!showTech)} className="text-primary mt-2">View More +</p>
        </div>
      </section>

        {/* <section className='blog_section'>
          <div className="container">
            {filterBlogs.length > 0 ? <h2 className='fw-bold pb-4 '>Recent Blog</h2> : ''}
            <Row className="mx-auto mt-3">
              {filterBlogs.map(blog => {
                return <RecentBlogCard key={blog.sys.id} blog={blog} />
              })}
            </Row>
          </div>
        </section> */}

        <section className='recent_blog_carusal_section' style={{
          display: 'block',
          marginBottom:'70px',
          marginTop:'70px'
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

        <div className="table_content_btn_row">
          <button onClick={handleShow} className='table_content_btn'>Table of Content</button>
        </div>

        <Offcanvas className="details_offcanvas_container w-100 h-50 bg-dark" show={show} onHide={handleClose} scroll={true} placement="bottom">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title> </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>

            <div style={{ width: '100%', marginLeft: '20px' }}>
              <p className='table_content_title text-light'>TABLE OF CONTENTS</p>
              <p>{documentToReactComponents(content, options)}</p>


            </div>
            <button onClick={handleClose} className='table_content_offcanvasbtn'>Table of Content</button>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
}
