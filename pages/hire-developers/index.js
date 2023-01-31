import { Row, Col } from "react-bootstrap";
import Navbartwo from "../../components/Navbars/Navbartwo";
import MainFooter from '../../components/Footers/MainFooter'
import HireCard from '../../components/HireCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IoIosArrowForward } from 'react-icons/io';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { createClient } from 'contentful'
import { useRouter } from "next/router";
import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import Meta from "../../partial/seo-meta";
import mixpanel from 'mixpanel-browser';

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
export default function Intro({ hire }) {
  const HalfSliceTwo = hire.slice(0, 18)
  const HalfSLice = hire.slice(0, 6)
  const [showTech, setShowTech] = useState(false)

 
  return (
    <div className="template_section" style={{ width: "100%" }}>
      <Navbartwo />
      <Meta
            title="Uptal - Matching remote developers with g startups"
            description="Hire verified remote developers from Uptal | Access future ready talent cloud and find developers with verified technical skills, matched in your timezone."
            image="https://uptal.org/hire-page.png"
        />
      <section>
        <div className="container">
          <Row className="container-fluid justify-content-xl-evenly justify-content-lg-evenly justify-content-xs-start  justify-content-sm-start  mx-auto employe_banner_section mt-4 gy-3">
            <Col className="ml-0" lg={6} md={6} sm={12} xs={12}>
              <p className="employe_title">Hire verified remote developers</p>
              <p className="employe_text ">Access future ready talent cloud to find remote developers with verified technical skills, 
              matched in your timezone - no upfront cost and pay only once you hire.</p>
              <div className="anchor_talkbtn ">
              <a target="blank" href='https://client.uptal.org/'><button className="talk_btn"><div onClick={()=>{
                mixpanel.init('b7865fb165953c731ca885057e034237', {ignore_dnt: true}); 
                mixpanel.track('website-hire-now-click');
              }}>Hire Developers</div></button></a>
                <p className="pt-2 pc_looking_anchor">Looking for job instead?<Link href="/apply-for-job"><a className="looking_anchor ms-2">Apply for job</a></Link></p>

                <p className="pt-2 mobile_looking_anchor">Looking for job instead? <br /> <Link href="/apply-for-job"><a className="looking_anchor">Apply for job</a></Link></p>
              </div>
            </Col>
            <Col className="text-end" lg={6} md={6} sm={10}>
              <img
                src="/banner4.jpg"
                alt="Picture of the author"
                className="employe_banner_img"
              />
            </Col>
          </Row>
        </div>
      </section>

      <section className="talent_section">
        <div className="container mx-auto">
          <p className="talent_title">Find talented developers in these fields</p>
          <div className="talent_div">
            <div className="talent_item">
              <img
                src="/fullstack.png"
                alt="Picture of the author"
                className="talent_img ps-2"
              />
              <p className="talent_text">Software Developers</p>
            </div>
            <div className="talent_item">
              <img
                src="/datascience.png"
                alt="Picture of the author"
                className="talent_img"
              />
              <p className="talent_text">Big data & ML</p>
            </div>
            <div className="talent_item">
              <img
                src="/cloud.png"
                alt="Picture of the author"
                className="talent_img"
              />
              <p className="talent_text">Web3 developers</p>
            </div>
          </div>
        </div>
      </section>

      <section className="brand_section">
        <div className="container mx-auto">
          <div>
            <p className="brand_title">Scale your startup from seed funding to IPO</p>
            <p className="brand_description">Our vetted talent cloud supports you to hire 4x faster, so you can focus on building products that matters.</p>
          </div>
          <Row>
            <Col xxl={2} xl={2} lg={2} md={4} sm={3} xs={4}>
              <img
                src="/airtable.svg"
                alt="Picture of the author"
                className="employe_brand_img"
              />
            </Col>
            <Col xxl={2} xl={2} lg={2} md={4} sm={3} xs={4}>
              <img
                src="/peloton.svg"
                alt="Picture of the author"
                className="employe_brand_img"
              />
            </Col>
            <Col xxl={2} xl={2} lg={2} md={4} sm={3} xs={4}>
              <img
                src="/doordash.svg"
                alt="Picture of the author"
                className="employe_brand_img"
              />
            </Col>
            <Col xxl={2} xl={2} lg={2} md={4} sm={3} xs={4}>
              <img
                src="/rippling.svg"
                alt="Picture of the author"
                className="employe_brand_img"
              />
            </Col>

            <Col xxl={2} xl={2} lg={2} md={4} sm={3} xs={4}>
              <img
                src="/yelp.svg"
                alt="Picture of the author"
                className="employe_brand_img"
              />
            </Col>
        
          </Row>

        </div>
      </section>

      <section className="expact_section">
        <div className="container">
          <div className="expact_row">
            <div className="expact_description_div" >
              <p className="expact_title">How it works ?</p>
              <p className="expact_text">It all starts with quality database—after registraion you will get access to <br />
                8000+ verified talent pool to quickly shortlist, communicate and <br />
                setup interview with the developers.</p>
            </div>
            <div className="expact_point_div">
              <div className="expact_point">
                <img style={{
                  height: '30px'
                }} alt="Picture of the author" src="/numone.png" />
                <p className="expact_text ms-3"> <span className="fw-bold">Sign up and Complete your profile</span> <br />
                  Give us a few details and set up
                  a time to talk with our hiring team</p>
              </div>
              <div className="expact_point">
                <img style={{
                  height: '30px'
                }} alt="Picture of the author" src="/twoicon.png" />
                <p className="expact_text ms-3"> <span className="fw-bold">Access Talent Cloud</span> <br />
                  After verification, you will get 100% access to our talent cloud for free.</p>
              </div>
              <div className="expact_point">
                <img style={{
                  height: '30px'
                }} alt="Picture of the author" src="/numthree.png" />
                <p className="expact_text ms-3"> <span className="fw-bold"> Engage and hire talents</span> <br />
                 Chat with talents, setup interview and hire 4X faster</p>
              </div>
            </div>
            <div className="talk_two_btn_div">
            <a target="blank" href='https://client.uptal.org/'><button className="talk_two_btn">Register now</button></a>
            </div>
          </div>
        </div>
      </section>

      <section className="technology_section" style={{ marginRight: '0' }}>
        <div className="container mt-4">
          <p className="based_text">Our hiring guides</p>
          <div className="technology_div">
            {HalfSliceTwo.map(data => {
                    return <HireCard key={data.sys.id} data={data} />
                })}
          </div>
          <Link href='https://www.uptal.org/sitemap/hire-developers'><a className="more_skills" target="blank">+ View more</a></Link>
        </div>
      </section>

      <section className="technology_section_mobile">
        <div className="container">
          <p className="based_text ">Based on Skills</p>
          { showTech || <div className="technology_div">
              {HalfSLice.map(data => {
                    return <HireCard key={data.sys.id} data={data} />
                })}
          </div>
          }
          {
            showTech && <div className="technology_div">
            {hire.map(data => {
                  return <HireCard key={data.sys.id} data={data} />
              })}
            </div>
          }
          <p onClick={() => setShowTech(!showTech)} className="text-primary mt-2">View More +</p>
        </div>
      </section>

      <section className="faq_section" style={{
        marginLeft: '0',
        marginRight: '0'
      }}>
        <div className="container">
          <Row className="faq_row justify-content-lg-evenly" style={{
            marginLeft: '0',
            marginRight: '0'
          }}>
            <Col xl={6} xxl={6} lg={5} md={6} sm={6}>
              <p className="faq_title">Frequently asked questions</p>
            </Col>
            <Col xl={6} xxl={6} lg={5} md={6} sm={6}>
              <div className="fa_question">
                <p className="faq_point_title">Why should I hire remote developers from Uptal ?</p>
                <p className="faq_text">Uptal offers 100% verified remote developers who are available to join in the next 30 days. We also make
                 remote development 4x faster by managing payroll and compliances.</p>
              </div>
              <hr />
              <div className="fa_question">
                <p className="faq_point_title">What is Uptal's pricing model ?</p>
                <p className="faq_text">We follow a transparent pricing model. Every month you will need to pay for talent cost + 12.5% of monthly salary per employee hired.
                There are no subscription or setup fees. Eg: If the offered salary is 1000$ per month, we will invoice you 1000$ + $125 = $1125 </p>
              </div>
              <hr />
              <div className="fa_question">
                <p className="faq_point_title">What types of engagements does Uptal offer (full-time, contract, etc.) ?</p>
                <p className="faq_text">Most of the developers that come to Uptal are seeking full-time, long-term work. Uptal does not offer much part-time developers at the moment. 
                The Talent Cloud company is committed to sourcing and vetting only the best remote developers for full-time roles. </p>
              </div>
              <hr />
              <div className="fa_question">
                <p className="faq_point_title">What is the difference between Uptal and a traditional staffing firm? ?</p>
                <p className="faq_text">Uptal does not setup developer fees or manage the workers as some staffing firms do. 
                We will provide you compelete access to our verified talent cloud. You can filter, search and hire your own full time developers and where you work with them directly.</p>
              </div>
              <div className="fa_question">
                <p className="faq_point_title">How do Uptal verifies talent skills ?</p>
                <p className="faq_text">We conduct proctored coding exams to measure candidates's specific skills and you will get access to the report in our talent dashboard.</p>
              </div>
            </Col>
          </Row>
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
                <Col className="d-flex justify-content-start " lg={4} md={4} sm={12} xs={12}>
                  <img
                    src="/joinimg.png"
                    alt="Picture of the author"
                    className="join_img"
                  />
                </Col>
                <Col lg={8} md={8} sm={12} xs={12}>
                  <p className='join_title'>Join the fast growing remote work marketplace</p>
                  <div className='join_footer_row'>
                    <Row className="justify-content-lg-between justify-content-md-around">
                      <hr className='horizontal_line' />
                      <Col lg={8} md={8} sm={12}>
                        <p className='join_text'>Find pre-vetted remote developers with verified technical skills, matched in your timezone - no subscription fees and 100% risk free.</p>
                      </Col>
                      <Col lg={3} md={3} sm={12}>
                        <a target="blank" href='https://client.uptal.org/'><button className='talent_btn'><div onClick={()=>{
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
        maxWidth:'100vw',
        overflowX:'hidden'
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
                    <a target="blank" href='https://client.uptal.org/'><button className='talent_btn'><div onClick={()=>{
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

      <MainFooter />

    </div>
  );
}
