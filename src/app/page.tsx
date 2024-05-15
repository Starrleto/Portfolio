'use client'
import AboutMe from '@/Components/AboutMe';
import { ArtGaller } from '@/Components/ArtGaller';
import { Projects } from '@/Components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/wickedcss.min.css';
import Nav from 'react-bootstrap/Nav';
import { FooterComponent } from '@/Components/FooterComponent';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { emailTime } from '@/DataServices/script';

export default function Home() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  
  const [result, setResult] = useState<string>("");

  async function sendEmail() {
      if(name != "" && email != "" && message != ""){
          const one = document.getElementById("name") as HTMLInputElement;
          const two = document.getElementById("email") as HTMLInputElement;
          const three = document.getElementById("message") as HTMLInputElement;

          one.value = "";
          two.value = "";
          three.value = "";

          const result = await emailTime(name, email, message);

          if(result.text == "OK"){
              setResult(`Thanks ${name}, your email was sent!`);
          }
          else{
              setResult("Something went wrong. Please try again.");
          }
      }
      else{
          setResult("Please fill out every field.");
      }
  }

  return (
    <div className='bg'>
        <div className='top'>
    
        <Nav variant="pills" defaultActiveKey="link" className='justify-center na padding'>
          <Nav.Item>
            <Nav.Link className='rowdies home nav-text' eventKey="link">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='rowdies projs nav-text' eventKey="link-1" href='#projects'>My Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='rowdies art nav-text' eventKey="link-2" href='#gallery'>Art Gallery</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='rowdies con nav-text' eventKey="link-3" href='#' onClick={handleShow}>Contact Me</Nav.Link>
          </Nav.Item>
        </Nav>

        <AboutMe></AboutMe>
        <Projects></Projects>
        <ArtGaller></ArtGaller>
        <FooterComponent></FooterComponent>
    
        </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>


        <Container>
                <Row className='contact bigger-padding different-bg lighter-borders' sm={12}>

                  <div>
                    <h3 className='bigger-padding rowdies orang-text' id='contact'>Any Questions or Inquiries? Feel free to Contact Me!</h3>
                    <p className='rowdies'>Email: ellierasuli@gmail.com</p>
                    <p className='rowdies'>Phone: (209)-480-4810</p>
                  </div>

                    <h4 className='rowdies'>➤ Email me now!</h4>

                    <p>{result}</p>

                    <Form.Group className="mb-3">
                    <Form.Label className='rowdies'>Your Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => {setEmail(e.target.value)}} id='email' />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className='rowdies'>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name here..." onChange={(e) => {setName(e.target.value)}} id='name' />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className='rowdies'>Message</Form.Label>
                    <Form.Control as="textarea" rows={6} placeholder="Type here..." onChange={(e) => [setMessage(e.target.value)]} id='message' />
                </Form.Group>
                <Button type="submit" className='rowdies' onClick={sendEmail}>
                    Send!
                </Button>
                </Row>

        </Container>


        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
