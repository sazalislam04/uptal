import { Row ,Col, FloatingLabel,Form} from "react-bootstrap";
import Navbartwo from "../../components/Navbars/Navbartwo";
import Link from 'next/link'
import Footer from "../../components/Footers/Footers";
import React, {useState} from 'react'
import axios from 'axios';
import qs from 'qs'; 
import Meta from "../../partial/seo-meta";

export default function Contact() {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [topic,setTopic] = useState('')
  const [message,setMessage] = useState('')

  async function submitData(){

    // const data = {"refresh_token":"1000.693c75255acb78e8d228694908e21844.8fc1f58474967fc7e87abfd31f2a0036",
    //               "client_id":"1000.2SMNIWVPRPCNK2M1ZTPJBMGK9EUBMV",
    //               "client_secret":"308074678c641944ecb8accc78ad4880747d357518",
    //               "grant_type":"refresh_token"
    //               }
    // const url = 'https://accounts.zoho.in/oauth/v2/token'

    // const options = {
    //   method: 'POST',
    //   headers: { 'content-type': 'application/x-www-form-urlencoded' },
    //   data: qs.stringify(data),
    //   url,
    // };
    // const k = await axios(options)
    // const access_token = k.data.access_token
    console.log(email)

  
    var data = qs.stringify({
      'refresh_token': '1000.693c75255acb78e8d228694908e21844.8fc1f58474967fc7e87abfd31f2a0036',
      'client_id': '1000.2SMNIWVPRPCNK2M1ZTPJBMGK9EUBMV',
      'client_secret': '308074678c641944ecb8accc78ad4880747d357518',
      'grant_type': 'refresh_token' 
    });
    var config = {
      method: 'post',
      url: 'https://accounts.zoho.in/oauth/v2/token?= ',
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded', 
        'Cookie': '6e73717622=94da0c17b67b4320ada519c299270f95; _zcsr_tmp=3eedf25e-6082-4deb-bb91-794daf353bfd; iamcsr=3eedf25e-6082-4deb-bb91-794daf353bfd'
      },
      data : data
    };

    var access_token = await axios(config)

    var data = JSON.stringify({
      "data": [
        {
          "Company": "gh",
          "Last_Name": "nmmb",
          "First_Name": "nbg",
          "Email": "p.daly@zylker.com",
          "State": "Texas"
        }
      ]
    });

    var config = {
      method: 'post',
      url: 'https://www.zohoapis.in/crm/v2/Contacts',
      headers: { 
        'Authorization': `Zoho-oauthtoken ${access_token}`, 
        'Content-Type': 'application/json'
      },
      data : data
    };

    res = await axios(config)
    console.log(res)
    

  //   const dataa = qs.stringify({
  //     "data": [
  //         {
  //             "Company": "Zylker",
  //             "Last_Name": "Daly",
  //             "First_Name": "Paul",
  //             "Email": "p.daly@zylker.com",
  //             "State": "Texas"
  //         },
  //         {
  //             "Company": "Villa Margarita",
  //             "Last_Name": "Dolan",
  //             "First_Name": "Brian",
  //             "Email": "brian@villa.com",
  //             "State": "Texas"
  //         }
  //     ],
  //     "trigger": [
  //         "approval",
  //         "workflow",
  //         "blueprint"
  //     ]
  // })
  //   const url2 = 'https://www.zohoapis.in/crm/v2/Contacts'
  //   const optionss = {
  //     method: 'POST',
  //     headers: { "Content-Type": "application/x-www-form-urlencoded",'Authorization': `Zoho-oauthtoken ${access_token}` },
  //     data: dataa,
  //     url2,
  //   };
  //   const headers = { 
  //     'Authorization': `Zoho-oauthtoken ${access_token}`,
  //     "Content-Type": "application/json"
  // };
  //   const ress = await axios.post('https://www.zohoapis.in/crm/v2/Contacts', dataa, { headers }).then((response) => {})
  //   .catch((error) => {
  //       console.log(error);
  //       if (error.response){

  //         console.log(error.response);
          
  //         }else if(error.request){
          
  //           console.log(error.request);
          
  //         }else if(error.message){
          
  //           console.log(error.message);
          
  //         }
  //   })
    // const res = await axios(optionss).then((response) => {console.log(response)})
    // .catch((error) => {
    //     console.log(error);
    // })
    // fetch('https://www.zohoapis.in/crm/v2/Contact', {
    //   method: 'post',
    //   headers: {'Authorization': `Zoho-oauthtoken ${access_token}`,'Content-Type':'application/json'},
    //   body: JSON.stringify(dataa)
    //  }).then((response) => {console.log(response)})
    //  .catch((error) => {
    //      console.log(error);
    //  });
    
    // console.log(res)
  }
  return (
<div style={{width: "100%"}}>
    <Row className="mx-auto">
    <Meta
            title="Uptal - Matching remote developers with global startups"
            description="Hire verified remote developers from Uptal | Access future ready talent cloud and find developers with verified technical skills, matched in your timezone."
            image="https://uptal.org/home-page.png"
        />
    <Navbartwo/>
    <div className="contact_header_section">
        <Row className="container-fluid mx-auto d-flex justify-content-center contact_header_row text-center align-items-center">
            <Col lg={8} md={12} sm={12}>
                <h1 className="contact_title">Get in touch</h1>
                <p className="contact_header_text">Fill out the form below and a Uptal representative will contact you as soon as possible. <br /> For immediate assistance, please call our sales line or email our customer support.</p>
            </Col>
        </Row>
    </div>
    <div className="contact_form_section">
      <Row className="container mx-auto justify-content-between">
        <Col lg={9} md={8} sm={12}>
          <Form>
            <FloatingLabel
              controlId="floatingInput"
              label="Full Name"
              className="mb-4 contact_inputs"
              onChange={(e)=>{setName(e.target.value)}}
            >
            <Form.Control type="email" placeholder="Full Name" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Email"
              className="mb-4"
              onChange={(e)=>{setEmail(e.target.value)}}
            >
            <Form.Control type="text" placeholder="Email" />
            </FloatingLabel>
            
            <Form.Select style={{ height: '60px' }} className="mb-4 contact_inputs" aria-label="Floating label select example"  onChange={(e)=>{setTopic(e.target.value)}}>
              <option className="mb-2">General question</option>
              <option value="1">Sales inquires</option>
              <option value="2">Help/Support</option>
              <option value="3">Press</option>
              <option value="3">Other</option>
            </Form.Select>

            <FloatingLabel controlId="floatingTextarea2" label="I would Like to know about..">
            <Form.Control
              as="textarea"
              placeholder="I would Like to know about.."
              style={{ height: '400px' }}
              onChange={(e)=>{setMessage(e.target.value)}}
            />
            </FloatingLabel>
          </Form>
          <Row className="mt-3 mb-4 justify-content-end">
              <Col lg={6} md={6} sm={6} onClick={submitData}>
              <button className="contact_send_btn">Send Message</button>
              </Col>
          </Row>
        </Col>
        <Col lg={3} md={4} sm={12}>
          <Row>
            <Col lg={12} md={12} sm={6} xs={12}>
              <p className="fw-bold">Sales Inquiries</p>
              <p className="mb-3 text-primary" >+91 74182 84017</p>

              <p className="fw-bold">Customer support</p>
              <p className="mb-3 text-primary">reach@uptal.com</p>

              <p className="fw-bold">Press</p>
              <p className="mb-3 text-primary">reach@uptal.com</p>

              <p className="fw-bold">Partnerships</p>
              <p className="mb-3 text-primary">partnership@uptal.com</p>

              <p className="fw-bold">Investors</p>
              <p className="mb-3 text-primary">investors@uptal.com</p>
            </Col>
            <Col lg={12} md={12} sm={6} xs={12}>
              <p className="fw-bold mb-3">Mailing Address</p>
              <p>Uptal, LLP
              Goodwork labs,19/C 
             Bengaluru, India 560100</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
    <Footer/>
    </Row>
</div>
  );
}
