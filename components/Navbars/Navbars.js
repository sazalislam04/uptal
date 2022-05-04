import { Navbar, Container, Row, Nav, NavDropdown, Offcanvas } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image'
import logo from '../../public/my-img.png'
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Indicator from "../Indicator";
import mixpanel from 'mixpanel-browser';

export default function Nabars({ navigation }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const router = useRouter()

  return (
    <div style={{ width: '100%', paddingLeft:'0', paddingRight:'0'}}>
      <div className="container">

      <Navbar collapseOnSelect expand="lg" bg="" variant="light">
          <Navbar.Brand > <Link href="/"><a className="navtwo_logo">Uptal.</a></Link> </Navbar.Brand>

          <Navbar.Toggle className="mb-2" onClick={handleShow} aria-controls="responsive-navbar-nav" style={{ color: 'black' }} />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">

            </Nav>
            <div className="nav-itmes">
              <Nav >
              {router.route === '/apply-for-job'?   <Link href='/hire-developers'><a className="right-nav-span">Hire Developers</a></Link> :
                <Link href='/apply-for-job'><a  className="right-nav-span">Apply As Developer</a></Link> 
                }         

              {router.route === '/apply-for-job' || router.route ===  '/hire-developers' ? <> { router.route === '/apply-for-job' ? <Link href='https://developer.uptal.org/signin' ><a target='blank' className="getstarted_btn"><div onClick={()=>{
                mixpanel.init('b7865fb165953c731ca885057e034237', {ignore_dnt: true}); 
                mixpanel.track('website-apply-now-click');
              }}>Apply Now</div></a></Link> : 
              <Link href= 'https://client.uptal.org/'><a target='blank' className="getstarted_btn"><div onClick={()=>{
                mixpanel.init('b7865fb165953c731ca885057e034237', {ignore_dnt: true}); 
                mixpanel.track('website-hire-now-click');
              }}>Hire Developers </div></a></Link> } </> : <Link href='/hire-developers'><a className="getstarted_btn"><div onClick={()=>{
                mixpanel.init('b7865fb165953c731ca885057e034237', {ignore_dnt: true}); 
                mixpanel.track('website-hire-now-click');
              }}>Hire Developers</div> </a></Link>
              }

                <Link href='https://community.uptal.org/'><a target="blank" className="right-nav-span fs-6 mb-3">Community</a></Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Navbar>
        
        <Offcanvas className="offcanvas_container w-100" show={show} onHide={handleClose} scroll={true} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title> <Link href="/"><a className="navtwo_logo">Uptal.</a></Link></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>

            <div style={{ width: '100%' }}>

            {router.route === '/apply-for-job' || router.route ===  '/hire-developers' ? <> { router.route === '/apply-for-job' ? <Link href='https://developer.uptal.org/signin' ><a target='blank' className="offcangetstarted_btn"><div onClick={()=>{
                mixpanel.init('b7865fb165953c731ca885057e034237', {ignore_dnt: true}); 
                mixpanel.track('website-apply-now-click');
              }}>Apply Now</div></a></Link> : 
              <Link href= 'https://client.uptal.org/'><a target='blank' className="offcangetstarted_btn"><div onClick={()=>{
                mixpanel.init('b7865fb165953c731ca885057e034237', {ignore_dnt: true}); 
                mixpanel.track('website-hire-now-click');
              }}>Hire Developers </div></a></Link> } </> : <Link href='/hire-developers'><a className="offcangetstarted_btn"><div onClick={()=>{
                mixpanel.init('b7865fb165953c731ca885057e034237', {ignore_dnt: true}); 
                mixpanel.track('website-hire-now-click');
              }}>Hire Developers</div> </a></Link>
              }


              {router.route === '/apply-for-job'?   <Link href='/hire-developers'><a className="Applydev_btn">Hire Remote Developers</a></Link> :
                <Link href='/apply-for-job'><a  className="Applydev_btn"><div onClick={()=>{
                  mixpanel.init('b7865fb165953c731ca885057e034237', {ignore_dnt: true}); 
                  mixpanel.track('website-apply-now-click');
                }}>Apply As Developer</div></a></Link> 
                }

              <Link href='https://community.uptal.org/'><a target="blank" className="Login_btn fs-6 mt-3">Community</a></Link>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
}
