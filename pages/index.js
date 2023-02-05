/* eslint-disable @next/next/no-img-element */
import mixpanel from "mixpanel-browser";
import Link from "next/link";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import HomeHeader from "../components/HomeComponents/HomeHeader";
import Homeslide from "../components/HomeComponents/Homeslide";
import data from "../datalayer/homeCard";
import Meta from "../partial/seo-meta";

export default function Home() {
  // backgroundColor: "#f4f4f6"

  useEffect(() => {
    mixpanel.init("b7865fb165953c731ca885057e034237", { ignore_dnt: true });
    mixpanel.track("website-visits");
  }, []);
  return (
    <div
      className="homesection"
      style={{ width: "100%", backgroundColor: "#f4f4f6" }}
    >
      <Meta
        title="Uptal - Matching remote developers with startups"
        description="Hire verified remote developers from Uptal | Access future ready talent cloud and find developers with verified technical skills, matched in your timezone."
        image="https://uptal.org/home-page.png"
      />
      <HomeHeader />
      <div className="home">
        <div className="container">
          <div className="home_content_wrapper">
            {/* <h1 className="maintitle fw-bold text-center">Matching remote developers with global startups</h1> */}
            <Row className="justify-content-xs-center justify-content-sm-center justify-content-md-evenly  justify-content-lg-evenly  gy-3 cardcontainer justify-content-xl-evenly p-3 mx-auto">
              {/* <Col className="text-center justify-content-center  pb-4 ps-3 pe-3 content-colam" lg={4} md={10} sm={12}>
                <button className="businessbtn">Employers</button>
                <h5 className="cardtitle fw-bold">Uptal for startups</h5>
                <p className="card-pera text-center">
                  Hire  vetted
                  remote developers with  strong technical and communication skills.
                </p>
                <Link href="/hire-developers"><a className="hirebtn"><div onClick={()=>{
                  mixpanel.init('b7865fb165953c731ca885057e034237', {ignore_dnt: true}); 
                  mixpanel.track('website-hire-now');
                }}>Hire Now</div></a></Link>
              </Col>
              <Col className="text-center pb-4 ps-3 pe-3  content-colam" lg={4} md={10} sm={12}>

                <button className="developers">Developers</button>
                <h5 className="cardtitle fw-bold">Uptal for developers</h5>
                <p className="card-pera text-center">
                  Join a community of developers
                  and get full time, long term remote jobs with better compensation.
                </p>
                <Link href="/apply-for-job"><a className="joinbtn"><div onClick={()=>{
                  mixpanel.init('b7865fb165953c731ca885057e034237', {ignore_dnt: true}); 
                  mixpanel.track('website-apply-now');
                }}>Apply Now</div></a></Link>
              </Col> */}
              <Col lg={7}>
                <h1 className="maintitle fw-bold">
                  Matching remote developers with global startups
                </h1>
                <Row className="d-flex align-items-center gap-5 mt-5">
                  <Col
                    className="text-center justify-content-center pb-4 ps-3 pe-3 content-colam"
                    lg={5}
                    md={10}
                    sm={12}
                  >
                    <button className="businessbtn">Employers</button>
                    <h5 className="cardtitle fw-bold">Uptal for startups</h5>
                    <p className="card-pera text-center">
                      Hire vetted remote developers with strong technical and
                      communication skills.
                    </p>
                    <Link href="/hire-developers">
                      <a className="hirebtn">
                        <div
                          onClick={() => {
                            mixpanel.init("b7865fb165953c731ca885057e034237", {
                              ignore_dnt: true,
                            });
                            mixpanel.track("website-hire-now");
                          }}
                        >
                          Hire Now
                        </div>
                      </a>
                    </Link>
                  </Col>
                  <Col
                    className="text-center pb-4 ps-3 pe-3  content-colam"
                    lg={5}
                    md={10}
                    sm={12}
                  >
                    <button className="developers">Developers</button>
                    <h5 className="cardtitle fw-bold">Uptal for developers</h5>
                    <p className="card-pera text-center">
                      Join a community of developers and get full time, long
                      term remote jobs with better compensation.
                    </p>
                    <Link href="/apply-for-job">
                      <a className="joinbtn">
                        <div
                          onClick={() => {
                            mixpanel.init("b7865fb165953c731ca885057e034237", {
                              ignore_dnt: true,
                            });
                            mixpanel.track("website-apply-now");
                          }}
                        >
                          Apply Now
                        </div>
                      </a>
                    </Link>
                  </Col>
                </Row>
              </Col>
              <Col className="maintitle">
                <Row className="d-flex align-tems-center gap-4">
                  {data.map((info) => (
                    <Col
                      lg={5}
                      md={10}
                      sm={12}
                      style={{ width: "13rem" }}
                      className="content-colam py-3 ps-3"
                      key={info.id}
                    >
                      <h6 className="fw-bold">{info.title}</h6>
                      <p className="rating d-flex align-items-center gap-1">
                        <FaStar className="text-success" /> {info.rating}
                      </p>
                      <div className="d-flex align-items-center img-container ">
                        <img src={info.img_1} width={40} height={40} alt="" />
                        <img src={info.img_2} width={40} height={40} alt="" />
                        <img src={info.img_3} width={40} height={40} alt="" />
                      </div>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </div>
        </div>
        <div
          className="home_brand_section"
          style={{
            backgroundColor: "#f4f4f6",
          }}
        >
          <Row className="container-fluid mx-auto justify-content-around">
            <Col lg={2} sm={4} md={3} xs={6}>
              <img
                src="/airtable.svg"
                alt="Picture of the author"
                className="brand_img paypal_img"
              />
            </Col>
            <Col lg={2} sm={4} md={3} xs={6}>
              <img
                src="/peloton.svg"
                alt="Picture of the author"
                className="brand_img"
              />
            </Col>
            <Col lg={2} sm={4} md={3} xs={6}>
              <img
                src="/doordash.svg"
                alt="Picture of the author"
                className="brand_img"
              />
            </Col>
            <Col lg={2} sm={4} md={3} xs={6}>
              <img
                src="/rippling.svg"
                alt="Picture of the author"
                className="brand_img"
              />
            </Col>
            <Col lg={2} sm={4} md={3} xs={6}>
              <img
                src="/yelp.svg"
                alt="Picture of the author"
                className="brand_img"
              />
            </Col>
          </Row>
        </div>
        <Homeslide />
      </div>
    </div>
  );
}
