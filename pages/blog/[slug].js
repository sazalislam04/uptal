import React, { useEffect, useState } from 'react';
import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import IndicatorNavbar from '../../components/Navbars/IndicatorNavbar';
import Meta from '../../partial/seo-meta';
import { Row, Col, Offcanvas } from "react-bootstrap";
import MainFooter from '../../components/Footers/MainFooter';
import { useRouter } from "next/router";
import Indicator from '../../components/Indicator';
import Link from 'next/link';
import RecentBlogCard from '../../components/RecentBlogCard';
import mixpanel from 'mixpanel-browser';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_KEY,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN,
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "blog"
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
  const allBlogs = await client.getEntries({ content_type: "blog" })
  const { items } = await client.getEntries({
    content_type: 'blog',
    'fields.slug': params.slug
  })
  const FilterBlog = allBlogs.items.filter(blog => blog.fields.category.fields.categoryName === items[0].fields.category.fields.categoryName);

  const recentBlog = FilterBlog.slice(0, 4)

  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { post: items[0], recentBlog: recentBlog },
    revalidate: 1
  }
}


export default function Post({ post, recentBlog }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { title, thumbnail, date, content, author, timeToRead, meta } = post.fields;

  function convert(str) {
    const dat = str.split(" ");

    return [dat[2], dat[1]].join(" ");
  }

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
        <IndicatorNavbar />
        <Meta
            title="Uptal - Matching remote developers with global startups"
            description="Hire verified remote developers from Uptal | Access future ready talent cloud and find developers with verified technical skills, matched in your timezone."
            image="https://uptal.org/home-page.png"
        />
        <div className=' details_banner'>
          <Row className="container mx-auto banner_row d-md-flex d-sm-flex justify-content-md-between justify-content-sm-between">
            <Col className='align-items-center' lg={7} md={6} sm={6} xs={12}>
              <h1 className='details_title'>{title}</h1>
              <div className='d-flex blog_details_container'>
                <p className='blog_detailsone'>{author}</p>
                <p className='blog_details'>{new Date(date).getDate()} {new Date(date).toLocaleString('default', { month: 'long' })}</p>
                <p className='blog_details'>{timeToRead} mins read</p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={6} xs={12}>
              <img src={'https:' + thumbnail.fields.file.url} className='details_img' />
            </Col>
          </Row>
        </div>
        <Row className='justify-content-lg-start justify-content-sm-center  justify-content-md-center description_container'>
          <Col className="table_colam" lg={2}>
            <div className='table_content'>
              <p className='table_content_title'>TABLE OF CONTENTS</p>
              <p>{documentToReactComponents(content, options)}</p>
            </div>
          </Col>
          <Col className='description_colam' lg={7} md={12} sm={12} xs={12}>
            <div className='container'>
              <p className='description'>{documentToReactComponents(content, main)}</p>
            </div>
          </Col>

        </Row>

        <div className='join_work_section_hire'>
          <Row className='container join_full_container justify-content-center mx-auto'>
            <Col lg={12} md={12} sm={12} xs={12} className='w-100 '>
              <Row className="join_work_container justify-content-md-between">
                <Col className="d-flex justify-content-start " lg={4} md={4} sm={12} xs={12}>
                  <img
                    src="/joinimg.png"
                    alt="Picture of the author"
                    className="join_img"
                  />
                </Col>
                <Col lg={8} md={8} sm={12} xs={12}>
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
        <div>
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
        <section className='blog_section'>
          <div className="container">
            <p className="blog_details_recent_blog_title">Recent Blog</p>
            <Row className="mx-auto mt-3">
              {recentBlog.map(blog => {
                return <RecentBlogCard key={blog.sys.id} blog={blog} />
              })}
            </Row>
          </div>
        </section>
        <MainFooter />
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
      </Row>

    </div>
  );
}

