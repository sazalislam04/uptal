import { Row, Col } from "react-bootstrap";
import Navbartwo from "../../components/Navbars/Navbartwo";
import MainFooter from '../../components/Footers/MainFooter'
import Link from 'next/link';
import JobCard from "../../components/JobCard";
import { createClient } from 'contentful'
import { useState } from "react";
import Meta from "../../partial/seo-meta";
import mixpanel from 'mixpanel-browser';

export async function getStaticProps() {

  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_KEY,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN,
  })

  const res = await client.getEntries({ content_type: "jobs" })

  return {
    props: {
      job: res.items,
    },
    revalidate: 1
  } 
}

export default function Applyjob({job}) {
  const HalfSLiceTwo = job.slice(0, 18)
  const HalfSLice = job.slice(0, 6)
  const [showTech, setShowTech] = useState(false)

  return (
    <div className="template_section" style={{ width: "100%" }}>
      <Navbartwo />
      <Meta
            title="Uptal - Matching remote developers with global startups"
            description="Hire verified remote developers from Uptal | Access future ready talent cloud and find developers with verified technical skills, matched in your timezone."
            image="https://uptal.org/apply-page.png"
        />

      <section>
        <div className="container">
          <Row className="container-fluid justify-content-xl-evenly justify-content-lg-evenly justify-content-sm-start justify-content-xs-start  mx-auto employe_banner_section mt-4 gy-3">
            <Col  lg={6} md={6} sm={12} xs={12}>
              <p className="employe_title">Find remote developer jobs.</p>
              <p className="employe_text ">Get high paying jobs with global tech startups - matched to your timezone.</p>
               <div className="anchor_talkbtn ">
               <a target="blank" href='https://developer.uptal.org/'><button className="talk_btn"><div onClick={()=>{
                mixpanel.init('b7865fb165953c731ca885057e034237', {ignore_dnt: true}); 
                mixpanel.track('website-apply-now-click');
              }}>Apply now</div></button></a>
                <p className="pt-2 pc_looking_anchor">Looking to Hire instead?<Link href="/hire-developers"><a className="looking_anchor ms-2">Hire Developers</a></Link></p>

                <p className="pt-2 mobile_looking_anchor">Looking to Hire instead? <br /> <Link href="/hire-developers"><a className="looking_anchor">Hire Developers</a></Link></p>
              </div>
            </Col>
            <Col className="text-end" lg={6} md={6} sm={12}>
              <img
                src="/banner2.png"
                alt="Picture of the author"
                className="employe_banner_img"
              />
            </Col>
          </Row>
        </div>
      </section>

      <section className="talent_section">
        <div className="container mx-auto ">
          <p className="talent_title">Start your remote developer career in these fields</p>
          <div className="talent_div">
            <div className="talent_item">
              <img
                src="/fullstack.png"
                alt="Picture of the author"
                className="talent_img ps-2"
              />
              <p className="talent_text">FullStack Developer</p>
            </div>
            <div className="talent_item">
              <img
                src="/datascience.png"
                alt="Picture of the author"
                className="talent_img"
              />
              <p className="talent_text">Data Science</p>
            </div>
            <div className="talent_item">
              <img
                src="/cloud.png"
                alt="Picture of the author"
                className="talent_img"
              />
              <p className="talent_text">Web3</p>
            </div>
          </div>
        </div>
      </section>

      <section className="brand_section">
        <div className="container mx-auto">
          <div>
            <p className="brand_title">Leading tech startups hire from us</p>
            <p className="brand_description">From seed funded startups to unicorns: 100+ brands trust our talent pool</p>
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
              <p className="how_to_become_title">How to become a Uptal developer?</p>
              <p className="expact_text_apply_job">Work with the best software companies in just 4 easy steps</p>
            </div>
            <div className="apply_expact_point_div">
              <div className="apply_expact_point">
                <img style={{
                  marginTop: '7px', marginLeft: '5px',
                  height: '30px'
                }} alt="Picture of the author" src="/numone.png" />
                <p className="expact_text ms-2 mt-2"> <span className="fw-bold fs-5" >Create your profile</span> <br />
                  Fill in your basic details - Name, location, skills, salary, & experience.</p>
              </div>
              <div className="apply_expact_point">
                <img style={{
                  marginTop: '7px', marginLeft: '5px',
                  height: '30px'
                }} alt="Picture of the author" src="/twoicon.png" />
                <p className="expact_text ms-2 mt-2"> <span className="fw-bold fs-5">Get verified</span> <br />
                After completing your profile, solve your preferred coding challenge</p>
              </div>
              <div className="apply_expact_point">
                <img style={{
                  marginTop: '7px', marginLeft: '5px',
                  height: '30px'
                }} alt="Picture of the author" src="/numthree.png" />
                <p className="expact_text ms-2 mt-2"> <span className="fw-bold fs-5"> Receive job offers</span> <br />
                Chat and engage directly with founders and recruiters.</p>
              </div>
              <div className="apply_expact_point">
                <img style={{
                  marginTop: '7px', marginLeft: '5px',
                  height: '30px'
                }} alt="Picture of the author" src="/numfour.png" />
                <p className="expact_text ms-2 mt-2"> <span className="fw-bold fs-5">Begin your career</span> <br />
                Get matched with the global tech startups.</p>
              </div>
            </div>
            <div className="apply_now_btn_div">
              <a target="blank" href="https://developer.uptal.org/" className="expect_apply_btn"><span onClick={()=>{
                mixpanel.init('b7865fb165953c731ca885057e034237', {ignore_dnt: true}); 
                mixpanel.track('website-apply-now-click');
              }}>Apply Now</span></a>
            </div>
          </div>
        </div>
      </section>
      
      <section className="technology_section" style={{ marginRight: '0' }}>
        <div className="container mt-4">
          <p className="based_text">Based on Skills</p>
          <div className="technology_div">
            {HalfSLiceTwo?.map(data => {
                 return <JobCard key={data.sys.id} data={data} />
                }
                )}
          </div>
          <Link href='https://www.uptal.org/sitemap/jobs'><a className="more_skills" target="blank">+ More skills</a></Link>

        </div>
      </section>

      <section className="technology_section_mobile">
        <div className="container">
          <p className="based_text ">Based on Skills</p>
          { showTech || <div className="technology_div">
            {HalfSLice.map(data => {
                 return <JobCard key={data.sys.id} data={data} />
                }
                )}
          </div>
          }
          {
            showTech && <div className="technology_div">
              {job.map(data => {
                 return <JobCard key={data.sys.id} data={data} />
                }
                )}
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
          <Row className="mx-auto faq_row justify-content-lg-around ">
            <Col xl={6} xxl={6} lg={5} md={6} sm={6}>
              <p className="faq_title">Frequently asked questions</p>
            </Col>
            <Col xl={6} xxl={6} lg={5} md={6} sm={6}>
              <div className="fa_question">
                <p className="faq_point_title">What does Uptal do?</p>
                <p className="faq_text">Uptal is building remote first Talent cloud to matched developers with global startups.</p>
              </div>
              <hr />
              <div className="fa_question">
                <p className="faq_point_title">How can Uptal help me build a strong career ?</p>
                <p className="faq_text">Once you create profile and get verified by taking a coding challenge, we consider you as Uptal talent. You will get life long access
                to developer centric community with global matching to high paying remote jobs. </p>
              </div>
              <hr />
              <div className="fa_question">
                <p className="faq_point_title">What is Uptal's vetting process??</p>
                <p className="faq_text">We have 2 step vetting process (step 1) Signup and complete your profile by providing personal and professional details
                (step 2) One hour real time coding exam to analyze your skills and expertise </p>
              </div>
              <hr />
              <div className="fa_question">
                <p className="faq_point_title">Will I be Uptal's employee or the partner company's employees? ?</p>
                <p className="faq_text">Once you are hired by a Uptal partner company, your contract will be Uptal. You will officially be on Uptal’s payroll, even though you will be working for a leading startups that has partnered with Uptal. 
                This is how Uptal ensures smooth, stable payments and a really rewarding experience for developers. </p>
              </div>
              <hr />
              <div className="fa_question">
                <p className="faq_point_title">Do I have to pay a fee or commission after I get hired? ?</p>
                <p className="faq_text">NO. Absolutely NOT. All developers negotiate their own salaries and are paid in full. 
                Furthermore, Uptal does not deduct any portion or percentage of your salary.</p>
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
                <Col className="d-flex justify-content-start " lg={4} md={4} sm={4} xs={12}>
                  <img
                    src="/joinimg.png"
                    alt="Picture of the author"
                    className="join_img"
                  />
                </Col>
                <Col lg={8} md={8} sm={8} xs={12}>
                  <p className='join_title'>Join the fast growing remote marketplace</p>
                  <div className='join_footer_row'>
                    <Row className="justify-content-lg-between justify-content-md-around">
                      <hr className='horizontal_line' />
                      <Col lg={8} md={8} sm={12}>
                        <p className='join_text'>Get matched with global tech startups. Create your profile and get your dream job.</p>
                      </Col>
                      <Col lg={3} md={3} sm={12}>
                        <a target="blank" href='https://developer.uptal.org/'><button className='talent_btn'><div onClick={()=>{
                mixpanel.init('b7865fb165953c731ca885057e034237', {ignore_dnt: true}); 
                mixpanel.track('website-apply-now-click');
              }}>Apply Now</div></button></a>
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
                    <a target="blank" href='https://client.uptal.org/'><button className='talent_btn'>Apply Now</button></a>
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
