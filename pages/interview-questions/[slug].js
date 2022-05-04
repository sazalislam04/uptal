import React, { useState } from 'react';
import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import Navbartwo from '../../components/Navbars/Navbartwo';
import Meta from '../../partial/seo-meta';
import { Row, Col, Offcanvas, Card, Accordion, useAccordionButton } from "react-bootstrap";
import { useRouter } from "next/router";
import Footer from '../../components/Footers/Footers';
import HireCard from '../../components/HireCard';
import { BsArrowRight, BsArrowLeft, BsLinkedin, BsInstagram } from 'react-icons/bs';
import { RiArrowDownSFill } from 'react-icons/ri';
import QuestionCard from '../../components/QuestionCard';
import { FaFacebook, FaWhatsappSquare } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RecentBlogCard from '../../components/RecentBlogCard';
import RecentBlogSlide from '../../components/RecentBlogSlide';
import mixpanel from 'mixpanel-browser';


const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_KEY,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN,
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "interviewQuestions"
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

  const { items } = await client.getEntries({
    content_type: 'interviewQuestions',
    'fields.slug': params.slug
  })
  const res = await client.getEntries({ content_type: "hire" })
  const question = await client.getEntries({ content_type: "interviewQuestions" })
  const blogs = await client.getEntries({ content_type: "blog" })

  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  // console.log(res.items)
  return {
    props: { post: items[0], hire: res.items, question: question.items, blogs: blogs.items },
    revalidate: 1
  }
}


export default function HireDevelopers({ post, hire, question, blogs }, { }) {
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

  const [tech, setTech] = useState(false)
  const [show, setShow] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const [visible5, setVisible5] = useState(false);
  const [visible6, setVisible6] = useState(false);
  const [visible7, setVisible7] = useState(false);
  const [visible8, setVisible8] = useState(false);
  const [visible9, setVisible9] = useState(false);
  const [visible10, setVisible10] = useState(false);

  const { title, skill, skillLogo, contentIntro, question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, titleIntro } = post.fields;

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

  const option1 = {

    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, next) => {

        return (
          <>
            {visible1 ? <p>{next}</p> : ''}
          </>
        )
      },
      [BLOCKS.HEADING_4]: (node, next) => {

        return (
          <>
            <div className='d-flex'>
              <p className='question_heading'>{next} </p><RiArrowDownSFill onClick={() => { setVisible1(!visible1) }} className='ms-auto accordion_arrow' size={25} />
            </div>
            {
              visible1 || <button className='view_btn' onClick={() => { setVisible1(!visible1) }}>View Answer <BsArrowRight /></button>
            }
            {
              visible1 && <button className='view_btn' onClick={() => { setVisible1(!visible1) }}>Hide Answer <BsArrowLeft /></button>
            }
            {
              visible1 && <hr />
            }
          </>
        )
      },
      [BLOCKS.UL_LIST]: (node, next) => {
        return (
          <>
            {visible1 ? <p>{next}</p> : ''}
          </>
        )
      },
      [BLOCKS.OL_LIST]: (node, next) => {
        return (
          <>
            {visible1 ? <p>{next}</p> : ''}
          </>
        )
      },


    },

  };
  const option2 = {

    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, next) => {

        return (
          <>
            {visible2 ? <p >{next}</p> : ''}
          </>
        )
      },
      [BLOCKS.UL_LIST]: (node, next) => {
        return (
          <>
            {visible2 ? <p>{next}</p> : ''}
          </>
        )
      },
      [BLOCKS.OL_LIST]: (node, next) => {
        return (
          <>
            {visible2 ? <p>{next}</p> : ''}
          </>
        )
      },
      [BLOCKS.HEADING_4]: (node, next) => {

        return (
          <>
            <div className='d-flex'>
              <p className='question_heading'>{next} </p><RiArrowDownSFill onClick={() => { setVisible2(!visible2) }} className='ms-auto accordion_arrow' size={25} />
            </div>
            {
              visible2 || <button className='view_btn' onClick={() => { setVisible2(!visible2) }}>View Answer <BsArrowRight /></button>
            }
            {
              visible2 && <button className='view_btn' onClick={() => { setVisible2(!visible2) }}>Hide Answer <BsArrowLeft /></button>
            }
            {
              visible2 && <hr />
            }
          </>
        )
      }


    },
  }
  const option3 = {

    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, next) => {

        return (
          <>
            {visible3 ? <p>{next}</p> : ''}
          </>
        )
      },
      [BLOCKS.HEADING_4]: (node, next) => {

        return (
          <>
            <div className='d-flex'>
              <p className='question_heading'>{next} </p><RiArrowDownSFill onClick={() => { setVisible3(!visible3) }} className='ms-auto accordion_arrow' size={25} />
            </div>
            {
              visible3 || <button className='view_btn' onClick={() => { setVisible3(!visible3) }}>View Answer <BsArrowRight /></button>
            }
            {
              visible3 && <button className='view_btn' onClick={() => { setVisible3(!visible3) }}>Hide Answer <BsArrowLeft /></button>
            }
            {
              visible3 && <hr />
            }
          </>
        )
      },
      [BLOCKS.UL_LIST]: (node, next) => {
        return (
          <>
            {visible3 ? <p>{next}</p> : ''}
          </>
        )
      },
      [BLOCKS.OL_LIST]: (node, next) => {
        return (
          <>
            {visible3 ? <p>{next}</p> : ''}
          </>
        )
      },


    },
  }
  const option4 = {

    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, next) => {

        return (
          <>
            {visible4 ? <p>{next}</p> : ''}
          </>
        )
      },
      [BLOCKS.HEADING_4]: (node, next) => {

        return (
          <>
            <div className='d-flex'>
              <p className='question_heading'>{next} </p><RiArrowDownSFill onClick={() => { setVisible4(!visible4) }} className='ms-auto accordion_arrow' size={25} />
            </div>
            {
              visible4 || <button className='view_btn' onClick={() => { setVisible4(!visible4) }}>View Answer <BsArrowRight /></button>
            }
            {
              visible4 && <button className='view_btn' onClick={() => { setVisible4(!visible4) }}>Hide Answer <BsArrowLeft /></button>
            }
            {
              visible4 && <hr />
            }
          </>
        )
      },
      [BLOCKS.UL_LIST]: (node, next) => {
        return (
          <>
            {visible4 ? <p>{next}</p> : ''}
          </>
        )
      },
      [BLOCKS.OL_LIST]: (node, next) => {
        return (
          <>
            {visible4 ? <p>{next}</p> : ''}
          </>
        )
      },


    },
  }
  const option5 = {

    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, next) => {

        return (
          <>
            {visible5 ? <p>{next}</p> : ''}
          </>
        )
      },
      [BLOCKS.HEADING_4]: (node, next) => {

        return (
          <>
            <div className='d-flex'>
              <p className='question_heading'>{next} </p><RiArrowDownSFill onClick={() => { setVisible5(!visible5) }} className='ms-auto accordion_arrow' size={25} />
            </div>
            {
              visible5 || <button className='view_btn' onClick={() => { setVisible5(!visible5) }}>View Answer <BsArrowRight /></button>
            }
            {
              visible5 && <button className='view_btn' onClick={() => { setVisible5(!visible5) }}>Hide Answer <BsArrowLeft /></button>
            }
            {
              visible5 && <hr />
            }
          </>
        )
      },
      [BLOCKS.UL_LIST]: (node, next) => {
        return (
          <>
            {visible5 ? <p>{next}</p> : ''}
          </>
        )
      },
      [BLOCKS.OL_LIST]: (node, next) => {
        return (
          <>
            {visible5 ? <p>{next}</p> : ''}
          </>
        )
      },


    },
  }
  const option6 = {

    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, next) => {

        return (
          <>
            {visible6 ? <p>{next}</p> : ''}
          </>
        )
      },
      [BLOCKS.HEADING_4]: (node, next) => {

        return (
          <>
            <div className='d-flex'>
              <p className='question_heading'>{next} </p><RiArrowDownSFill onClick={() => { setVisible6(!visible6) }} className='ms-auto accordion_arrow' size={25} />
            </div>
            {
              visible6 || <button className='view_btn' onClick={() => { setVisible6(!visible6) }}>View Answer <BsArrowRight /></button>
            }
            {
              visible6 && <button className='view_btn' onClick={() => { setVisible6(!visible6) }}>Hide Answer <BsArrowLeft /></button>
            }
            {
              visible6 && <hr />
            }
          </>
        )
      },
      [BLOCKS.UL_LIST]: (node, next) => {
        return (
          <>
            {visible6 ? <p>{next}</p> : ''}
          </>
        )
      },
      [BLOCKS.OL_LIST]: (node, next) => {
        return (
          <>
            {visible6 ? <p>{next}</p> : ''}
          </>
        )
      },


    },
  }
  const option7 = {

    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, next) => {

        return (
          <>
            {visible7 ? <p>{next}</p> : ''}
          </>
        )
      },
      [BLOCKS.HEADING_4]: (node, next) => {

        return (
          <>
            <div className='d-flex'>
              <p className='question_heading'>{next} </p><RiArrowDownSFill onClick={() => { setVisible7(!visible7) }} className='ms-auto accordion_arrow' size={25} />
            </div>
            {
              visible7 || <button className='view_btn' onClick={() => { setVisible7(!visible7) }}>View Answer <BsArrowRight /></button>
            }
            {
              visible7 && <button className='view_btn' onClick={() => { setVisible7(!visible7) }}>Hide Answer <BsArrowLeft /></button>
            }
          </>
        )
      },
      [BLOCKS.UL_LIST]: (node, next) => {
        return (
          <>
            {visible7 ? <p>{next}</p> : ''}
          </>
        )
      },
      [BLOCKS.OL_LIST]: (node, next) => {
        return (
          <>
            {visible7 ? <p>{next}</p> : ''}
          </>
        )
      },


    },
  }
  const option8 = {

    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, next) => {

        return (
          <>
            {visible8 ? <p>{next}</p> : ''}
          </>
        )
      },
      [BLOCKS.HEADING_4]: (node, next) => {

        return (
          <>
            <div className='d-flex'>
              <p className='question_heading'>{next} </p><RiArrowDownSFill onClick={() => { setVisible8(!visible8) }} className='ms-auto accordion_arrow' size={25} />
            </div>
            {
              visible8 || <button className='view_btn' onClick={() => { setVisible8(!visible8) }}>View Answer <BsArrowRight /></button>
            }
            {
              visible8 && <button className='view_btn' onClick={() => { setVisible8(!visible8) }}>Hide Answer <BsArrowLeft /></button>
            }
            {
              visible8 && <hr />
            }
          </>
        )
      },
      [BLOCKS.UL_LIST]: (node, next) => {
        return (
          <>
            {visible8 ? <p>{next}</p> : ''}
          </>
        )
      },
      [BLOCKS.OL_LIST]: (node, next) => {
        return (
          <>
            {visible8 ? <p>{next}</p> : ''}
          </>
        )
      },


    },
  }
  const option9 = {

    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, next) => {

        return (
          <>
            {visible9 ? <p>{next}</p> : ''}
          </>
        )
      },
      [BLOCKS.HEADING_4]: (node, next) => {

        return (
          <>
            <div className='d-flex'>
              <p className='question_heading'>{next} </p><RiArrowDownSFill onClick={() => { setVisible9(!visible9) }} className='ms-auto ' size={25} />
            </div>
            {
              visible9 || <button className='view_btn' onClick={() => { setVisible9(!visible9) }}>View Answer <BsArrowRight /></button>
            }
            {
              visible9 && <button className='view_btn' onClick={() => { setVisible9(!visible9) }}>Hide Answer <BsArrowLeft /></button>
            }
            {
              visible9 && <hr />
            }
          </>
        )
      },
      [BLOCKS.UL_LIST]: (node, next) => {
        return (
          <>
            {visible9 ? <p>{next}</p> : ''}
          </>
        )
      },
      [BLOCKS.OL_LIST]: (node, next) => {
        return (
          <>
            {visible9 ? <p>{next}</p> : ''}
          </>
        )
      },


    },
  }
  const option10 = {

    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, next) => {

        return (
          <>
            {visible10 ? <p>{next}</p> : ''}
          </>
        )
      },
      [BLOCKS.HEADING_4]: (node, next) => {

        return (
          <>
            <div className='d-flex'>
              <p className='question_heading'>{next} </p><RiArrowDownSFill onClick={() => { setVisible10(!visible10) }} className='ms-auto accordion_arrow' size={25} />
            </div>
            {
              visible10 || <button className='view_btn' onClick={() => { setVisible10(!visible10) }}>View Answer <BsArrowRight /></button>
            }

            {
              visible10 && <button className='view_btn' onClick={() => { setVisible10(!visible10) }}>Hide Answer <BsArrowLeft /></button>
            }
            {
              visible10 && <hr />
            }
          </>
        )
      },
      [BLOCKS.UL_LIST]: (node, next) => {
        return (
          <>

            {visible10 ? <p>{next}</p> : ''}
          </>
        )
      },
      [BLOCKS.OL_LIST]: (node, next) => {
        return (
          <>
            <hr />
            {visible10 ? <p>{next}</p> : ''}
          </>
        )
      },


    },
  }
  return (
    <div>
      <Row className="mx-auto">
        <Navbartwo />
        <Meta
          title={`Top 10 interview question guide for ${skill} Developers Jobs in 2022 | Uptal.org`}
          image='https://uptal.org/interview-slug.png'
          description={`Find ${skill} developers with Uptal in 4 easy steps. Fill in your basic details. Get verified . Receive job offers and start your dream career`}
        />
        <div className='hire_details_banner_section'>
          <Row className='container-fluid hire_details_banner mx-auto'>
            <Row className="container  mx-auto banner_row d-md-flex d-sm-flex justify-content-md-between justify-content-sm-between">
              <Col className='align-items-center' lg={7} md={6} sm={6} xs={12}>
                <h1 className='hire__details_title'>{title}</h1>
                <div className='d-flex blog_details_container'>
                  <p className='hire_banner_text'>{titleIntro}</p>
                </div>
                <div className='mt-3'>
                  <a href='https://client.uptal.org/'><button className="interview_q_btn"><div onClick={()=>{
                mixpanel.init('b7865fb165953c731ca885057e034237', {ignore_dnt: true}); 
                mixpanel.track('website-hire-now-click');
              }}>Hire {skill} Developer</div></button></a>
                  <p className='mt-4'>Looking for a {skill} developer job?<span className='text-primary ms-2'>Try Uptal jobs</span></p>
                </div>
              </Col>
              <Col lg={4} md={6} sm={6} xs={12}>
                <img src={'https:' + skillLogo.fields.file.url} className='details_img' />
              </Col>
            </Row>
          </Row>
        </div>
        <div className='container-fluid hire_details_banner_mobile'>
          <Row className="container-fluid hire_details_mobile_banner_row  mx-auto banner_row d-md-flex d-sm-flex justify-content-md-center justify-content-sm-center">
            <Col lg={4} md={10} sm={12} xs={12}>
              <img src={'https:' + skillLogo.fields.file.url} className='details_img' />
            </Col>
            <Col className='align-items-center' lg={7} md={10} sm={12} xs={12}>
              <h1 className='details_title'>{title}</h1>
              <div className='d-flex blog_details_container'>
                <p className='blog_detailsone'>{titleIntro}</p>
              </div>
              <div className='mt-3'>
                <a href='https://client.uptal.org/'><button className="interview_q_btn"><div onClick={()=>{
                mixpanel.init('b7865fb165953c731ca885057e034237', {ignore_dnt: true}); 
                mixpanel.track('website-hire-now-click');
              }}>Hire {skill} Developer</div></button></a>
                <p className='mt-4'>Looking for a {skill} developer job?<span className='text-primary'>Try Upal jobs</span></p>
              </div>
            </Col>

          </Row>
        </div>

        <div className='Question_section'>
          <Row className='Question_row container-fluid mx-auto' >
            <Col lg={8} md={8} sm={12}>
              <p className=''>{contentIntro}</p>
              <p className='question_description_title'>{skill} interview questions and answers</p>
              <p className='Questions' >{documentToReactComponents(question1, option1)} {
                visible1 && <button className='view_btn' onClick={() => { setVisible1(!visible1) }}>Hide Answer <BsArrowLeft /></button>
              }</p>
              <p className='Questions' >{documentToReactComponents(question2, option2)} {
                visible2 && <button className='view_btn' onClick={() => { setVisible2(!visible2) }}>Hide Answer <BsArrowLeft /></button>
              }</p>
              <p className='Questions'>{documentToReactComponents(question3, option3)} {
                visible3 && <button className='view_btn' onClick={() => { setVisible3(!visible3) }}>Hide Answer <BsArrowLeft /></button>
              }</p>
              <p className='Questions'>{documentToReactComponents(question4, option4)} {
                visible4 && <button className='view_btn' onClick={() => { setVisible4(!visible4) }}>Hide Answer <BsArrowLeft /></button>
              }</p>
              <p className='Questions'>{documentToReactComponents(question5, option5)} {
                visible5 && <button className='view_btn' onClick={() => { setVisible5(!visible5) }}>Hide Answer <BsArrowLeft /></button>
              }</p>
              <p className='Questions'>{documentToReactComponents(question6, option6)} {
                visible6 && <button className='view_btn' onClick={() => { setVisible6(!visible6) }}>Hide Answer <BsArrowLeft /></button>
              }</p>
              <p className='Questions'>{documentToReactComponents(question7, option7)} {
                visible7 && <button className='view_btn' onClick={() => { setVisible7(!visible7) }}>Hide Answer <BsArrowLeft /></button>
              }</p>
              <p className='Questions'>{documentToReactComponents(question8, option8)} {
                visible8 && <button className='view_btn' onClick={() => { setVisible8(!visible8) }}>Hide Answer <BsArrowLeft /></button>
              }</p>
              <p className='Questions'>{documentToReactComponents(question9, option9)} {
                visible9 && <button className='view_btn' onClick={() => { setVisible9(!visible9) }}>Hide Answer <BsArrowLeft /></button>
              }</p>
              <p className='Questions'>{documentToReactComponents(question10, option10)}{
                visible10 && <button className='view_btn' onClick={() => { setVisible10(!visible10) }}>Hide Answer <BsArrowLeft /></button>
              }</p>
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
                  <FaFacebook className="silicon_fb mx-2 silicon_icons" size={35} />
                  <a href="https://www.linkedin.com/company/uptal"><BsLinkedin className="silicon_linkedin silicon_icons" size={35} /></a>
                  <a href="https://twitter.com/uptalorg"><AiFillTwitterCircle className="silicon_twitter mx-2 silicon_icons" size={40} /></a>
                  <a href="https://www.instagram.com/uptalorg/"><BsInstagram className="silicon_insta silicon_icons" size={35} /></a>

                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className="technology_section interview_question">
          <Row className='container-fluid mx-auto'>
            <p className="checkout_title">Check out more interview questions</p>
            <p className="based_text ms-2 mt-4">Based on Skills</p>
            <div className="technology_div mt-2 hire_tech_div">
              {question.map(data => {
                return <QuestionCard key={data.sys.id} data={data} />
              })}
            </div>
          </Row>
        </div>
        <div className="technology_section_mobile interview_question">
          <Row className='container-fluid mx-auto'>
            <p className="checkout_title">Check out more interview questions</p>

            <p className="based_text ">Based on Skills</p>
            <p className="sitemap_based_text">Hire developers based on skill</p>
            <div className="technology_div mt-2">
              {question.map(data => {
                return <QuestionCard key={data.sys.id} data={data} />
              })}
            </div>
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