import  { useState } from "react";
import {Offcanvas, Row, Col, Nav, Navbar,Container} from "react-bootstrap";
import { useRouter } from "next/router";
import Link from "next/link";
import { AiOutlineMenu} from 'react-icons/ai';

export default function HomeHeader() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const router = useRouter()
    return (
      <div  style={{ width: '100%', paddingLeft:'0', paddingRight:'0' , backgroundColor:'#F4F4F6'}}>
        <div className="container" >
          <Navbar  collapseOnSelect expand="lg" variant="l">
      
          <Navbar.Brand className="home_nav_logo me-4"> <Link href="/"><a className="navtwo_logo ">Uptal.</a></Link> </Navbar.Brand>

            <Navbar.Toggle onClick={handleShow} className="mb-2"  aria-controls="responsive-navbar-nav" style={{color: 'black'}}><AiOutlineMenu size={30}/></Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                
              </Nav>
              <div className="nav-itmes">
              <Nav>
                <Link href="https://community.uptal.org/"><a target="blank" className="home_blog_btn ">Community</a></Link>
                <Link href="/blog"><a className="home_blog_btn ">Blog</a></Link>
              </Nav>
              </div>
            </Navbar.Collapse>
      
          </Navbar>

        </div>

        <Offcanvas className="offcanvas_container w-100" show={show} onHide={handleClose} scroll={true} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><img
        src="/my-img.png"
        alt="Picture of the author"
        className="canvas_img"
      /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
   
            <div style={{width: '100%'}}>
              <Link href="/blog"><a className="home_blog__offcanvas_btn ">Community</a></Link>
              <Link href="/blog"><a className="home_blog__offcanvas_btn ">Blog</a></Link>
            </div>    
        </Offcanvas.Body>
        </Offcanvas>

      </div>
    );
  }
