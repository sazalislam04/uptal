import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image'
import logo from '../../public/my-img.png'
import { useRouter } from "next/router";
import { FaFacebook } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';
import { GrLinkedinOption } from 'react-icons/gr';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import Link from "next/link";

export default function MainFooter() {

    return (
        <footer className="footer">
            <div className="container">
                <Row className=" footerlink_container pb-3 mx-auto pt-4 mt-2">
                    <Col className="" lg={2} md={4} sm={12} style={{
                        paddingLeft:'0'
                    }}>
                        <p className="footer_website_title">Uptal.</p>
                    </Col>
                    <Col lg={10} md={8} sm={12}>
                        <Row className="gy-3  justify-content-center">
                            <Col className="justify-content-center" lg={3} md={6} sm={6} xs={6}>
                                <a className="foter_link_title fw-bold">Clients</a>
                                <Link href="/hire-developers"><a className="foter_link ">Hire Developers</a></Link>
                                <Link href="/hire-developers"><a className="foter_link ">Client Login</a></Link>
                                <a className="foter_link ">Book a Call</a>
                              
                            </Col>
                            <Col className="justify-content-center" lg={3} md={6} sm={6} xs={6}>
                                <a className="foter_link_title fw-bold">Developers</a>
                                <Link href="/apply-for-job"><a className="foter_link ">Apply for Jobs</a></Link>
                                <a className="foter_link ">Developer Login</a>
                                <Link href="https://community.uptal.org/"><a className="foter_link ">Developer community</a></Link>
                
                            </Col>
                            <Col className="justify-content-center" lg={3} md={6} sm={6} xs={6}>
                                <a className="foter_link_title fw-bold">Resources</a>
                                <Link href='/blog'><a className="foter_link ">Blog</a></Link>
                                <a className="foter_link_title">Press</a>
                                
                            </Col>
                            <Col className="justify-content-center" lg={3} md={6} sm={6} xs={6}>
                                <a className="foter_link_title fw-bold">Contact</a>
                                <Link href='/contact'><a className="foter_link ">Contact Us</a></Link>
                                <a className="foter_link ">Help Center</a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="bottom_footer justify-content-between">
                    <Col lg={5} md={5} sm={12}>
                        
                        <a target="blank" href="https://www.linkedin.com/company/uptal"><GrLinkedinOption className="social_icons" size={25} /></a>
                        <a target="blank" href="https://www.instagram.com/uptalorg/"><BsInstagram className="social_icons" size={25} /></a>
                        <a target="blank" href="https://twitter.com/uptalorg"><BsTwitter className="social_icons" size={25} /></a>
                        
                        <div className="d-flex pt-4 justify-content-between">
                            <Link href='/sitemap'><a className="bottomfooter_text ms-2 mt-2 bottom_text_containerOne">Sitemap</a></Link>
                            <Link href='/terms-of-service'><a className="bottomfooter_text ms-2 mt-2 bottom_text_containerOne">Terms of Service</a></Link>

                            <Link href='/policy'><a className="bottomfooter_text ms-2 mt-2  bottom_text_containerOne">Privacy Policy</a></Link>
                        </div>
                    </Col>
                    <Col lg={5} md={5} sm={12}>

                    </Col>
                </Row>
                <Row className="justify-content-between pb-3 pt-3">
                    <Col lg={5} md={6} sm={12}>
                        <a className="copyright_title">© 2021 Uptal,</a>
                        <a className="bottomfooter_text">Goodworks Lab, Electronic city,<span className="ms-2">Bengaluru, IN</span></a>
                    </Col>
                    <Col className="d-flex justify-content-evenly align-items-end" lg={5} md={6} sm={12}>
                        <div className="d-flex ">
                            <Link href='/sitemap'><a className="bottomfooter_text ms-2 bottom_text_containertwo">Sitemap</a></Link>
                            <Link href='/terms-of-service'><a className="bottomfooter_text ms-2 bottom_text_containertwo">Terms of Service</a></Link>

                            <Link href='/policy'><a className="bottomfooter_text ms-2 bottom_text_containertwo">Privacy Policy</a></Link>
                        </div>
                    </Col>
                </Row>
            </div>
        </footer>

    );
}
