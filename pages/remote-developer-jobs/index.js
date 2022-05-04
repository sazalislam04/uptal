import React,  {useEffect, useState} from 'react';
import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import Navbartwo from '../../components/Navbars/Navbartwo';
import Meta from '../../partial/seo-meta';
import { Row, Col} from "react-bootstrap";
import Footer from '../../components/Footers/Footers';
import { MdLocationOn, MdPeople} from 'react-icons/md';
import { BsCalendarCheck} from 'react-icons/bs';
import { CgCalculator} from 'react-icons/cg';
import HireCard from '../../components/HireCard';
import Link from 'next/link'
import mixpanel from 'mixpanel-browser';


const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_KEY,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN,
  })

  export async function getStaticProps() {

    const client = createClient({
      space: process.env.NEXT_PUBLIC_CONTENTFUL_KEY,
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN,
    })
  
    const res = await client.getEntries({ content_type: "jobs" })
    const technology = await client.getEntries({ content_type: "hire" })

    return {
      props: {
        jobs: res.items, techs: technology.items
      },
      revalidate: 1
    }
  }

export default function HireDevelopers({jobs, techs}) {
  const lastElelment = jobs.slice(-1);

  const [itemslug, setItemslug] = useState(jobs[0].fields.slug)

  const filterjobs = jobs.find(item => item.fields.slug === itemslug)

  const { title,skill, skillLogo ,content ,intro,jobResponsibilities,minimumRequirements} = filterjobs.fields;

  
  const headingTypes = [BLOCKS.HEADING_2]
  
  //const headings = content.json.content.filter(item => headingTypes.includes(item.nodeType))
  
    const document = {
      nodeType: 'document',
      content: headingTypes,
    }
   
    const main = {
        
        renderNode: {
             [BLOCKS.HEADING_2]: (node, pext) =>{
                const strUnderscores = String(pext).replace(/ /g,"_")
             
                return(
                    <p className="description_title"><a id={strUnderscores}>{pext} </a></p>
                )
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
           [BLOCKS.HEADING_2]: (node, pext) =>{
              const strUnderscores = String(pext).replace(/ /g,"_")

               return(
                  <p className="table_link"><a href={"#"+strUnderscores}>{pext}</a> </p>
               )
           }
          
        },  
  }; 

    return (
      <div>
        <Row className="mx-auto">
        <Navbartwo/>
        <Meta
            title={title}
            image={'https:' + skillLogo.fields.file.url}
        />
        <div className=''>
            <Row className='container-fluid hire_details_banner mx-auto'>
                <Row className="container  mx-auto banner_row d-md-flex d-sm-flex justify-content-md-between justify-content-sm-between">
                <Col className='align-items-center' lg={7} md={6} sm={6} xs={12}>
                  <h1 className='hire__details_title'>Latest remote software developer jobs</h1>
                  <div className='d-flex blog_details_container'>
                    <p className='hire_banner_text'>Welcome to Uptal jobs where you’ll find the best remote software roles. Apply now, and work with top U.S. companies from the comfort of your home. Get long-term, full-time job opportunities and be a part of the elite 1% of the world's remote engineers.</p>
                  </div>
                  <div className='mt-3'>
                  <a className="remote_apply_btn">Apply Now</a>
                  <p className='mt-4'>Check out the best jobs for February 2022 <span className='text-primary'>here</span></p>
                  </div>
                </Col>
                <Col lg={4} md={6} sm={6} xs={12}>
                  <img src="/remotedev.png" className='details_img' />
                </Col>
              </Row>
            </Row>
        </div>

        <div className='remote_dev_content_section'>
            <Row className='container-fluid mx-auto justify-content-center remote_dev_row'>
              <Col lg={3} md={3}>
              <div className='remote_dev_scroll_div'>
              {jobs.map(data => {
                  return <><div className={itemslug === data.fields.slug ? 'scroll_side_manu__color_div' : 'scroll_side_manu_div'} onClick={() => setItemslug(data.fields.slug)} key={data.sys.id}>
                  <h5 className='side_manu_title'>{data.fields.skill} Developer</h5> 
                    <div className='remote_side_icons_div'>
                        <div><p className='icons_text'> <CgCalculator/><span className='ms-2'>Technology</span></p></div>
                        <div><p className='icons_text'><MdPeople/><span className='ms-2'>1-10</span></p></div>
                        <div><p className='icons_text'><span className='ms-2'>23 Hours</span></p></div>
                    </div>
                </div>
                <hr className='horizontal_line m-0' />
                  
                  </>
                  }
                  )}
              </div>
              </Col>
              <Col className='pt-4 pb-4' lg={8} md={9}>
                  {
                      itemslug ? <div><Row className="romote_content_colam container-fluid mx-auto justify-content-center">
                      <h4>{skill} Developers</h4>
                      <div className='remote_dev_grid_div'>
                          <div className='remote_icons_div'>
                              <div><p> <CgCalculator/> Industry: Technology</p></div>
                              <div><p> <MdLocationOn/> <span>remote</span></p></div>
                              <div><p><MdPeople/><span className="ms-2">Company size: 11-50</span></p></div>
                              <div><p><BsCalendarCheck/> Full-time</p></div>
                          </div>
                          <div className='apply_btn_div'>
                              <a target="blank" href="https://developer.uptal.org/" className="job_apply_now_btn"><div onClick={()=>{
                mixpanel.init('b7865fb165953c731ca885057e034237', {ignore_dnt: true}); 
                mixpanel.track('website-apply-now-click');
              }}>Apply Now</div></a>
                          </div>
                      </div>
                      <hr/>
                      <h3 className='ms-2'>Job description</h3>
                      <h5 className='ms-2 responsibility_title'>Job responsibilities</h5>
                      <p className='mt-4'>{documentToReactComponents(jobResponsibilities)}</p>
                      <h3 className='ms-2'>Minimum Requirement</h3>
                      <p>{documentToReactComponents(minimumRequirements)}</p>
                      <div className='view_jobs_div'>
                          <Link href={`/jobs/${itemslug}`}><a className='view_jobs_btn'>View Jobs description</a></Link>
                      </div>
                    <div className="hire_expact_section">
                        <Row className="container  mx-auto ">
                            <div className="expact_description_div" >
                              <p className="expact_title text-center">How to become a Uptal developer?</p>
                              <p className="expact_text text-center">Work with the best software companies in just 4 easy steps</p>
                            </div>
                            <div className="apply_expact_point_div">
                                <div className="apply_expact_point">
                                <img  style={{ marginLeft: '5px',
                    height: '30px'}}  alt="Picture of the author"  src="/numone.png"/>
                                    <p className="expact_text ms-2 mt-2"> <span className="fw-bold" fs-5>Create your profile</span> <br/>
                                    Fill in your basic details - Name, location, skills, salary, & experience.</p>
                                </div>
                                <div className="apply_expact_point">
                                <img style={{ marginLeft: '5px',
                    height: '30px'}}  alt="Picture of the author"  src="/twoicon.png"/>
                                    <p className="expact_text ms-2 mt-2"> <span className="fw-bold fs-5">Take our tests and interviews</span> <br/>
                                    Solve questions and appear for technical interview.</p>
                                </div>
                                <div className="apply_expact_point">
                                <img style={{ marginLeft: '5px',
                    height: '30px'}}  alt="Picture of the author"  src="/numthree.png"/>
                                    <p className="expact_text ms-2 mt-2"> <span className="fw-bold fs-5"> Receive job offers</span> <br/>
                                    Get matched with the best US and Silicon Valley companies.</p>
                                </div>
                                <div className="apply_expact_point">
                                <img  style={{ marginLeft: '5px',
                    height: '30px'}}  alt="Picture of the author"  src="/numfour.png"/>
                                    <p className="expact_text ms-2 mt-2"> <span className="fw-bold fs-5">Start working on your dream job</span> <br/>
                                    Once you join Uptal, you’ll never have to apply for another job.</p>
                                </div>
                            </div>
                            <div className="apply_now_btn_div">
                                <a target="blank" href="https://developer.uptal.org/" className="job_apply_now_btn"><div onClick={()=>{
                mixpanel.init('b7865fb165953c731ca885057e034237', {ignore_dnt: true}); 
                mixpanel.track('website-apply-now-click');
              }}>Apply Now</div></a>
                            </div>
                        </Row>
                   </div>
                  </Row>
                        </div> : ''
                  }
              </Col>
            </Row>
        </div>

        <div className='remote_dev_content_section_mobile'>
            <Row className='container mx-auto justify-content-center'>
              <Col sm={12} md={12}>
              <div className='remote_dev_mobile'>
              {jobs.map(data => {
                  return <Link href={`/jobs/${itemslug}`} key={data.sys.id}><a><div > <h5 className='side_manu_title'>{data.fields.skill} (Backend Heavy)</h5> 
                  <div className='remote_side_icons_div'>
                      <div><p className='icons_text'> <CgCalculator/> Other</p></div>
                      <div><p className='icons_text'><MdPeople/>1-10</p></div>
                      <div><p className='icons_text'>23 Hours</p></div>
                  </div>
                </div></a></Link>
                  }
                  )}
              </div>
              </Col>
            </Row>
        </div>
        <Footer/>
      </Row>
      </div>
    );
}

