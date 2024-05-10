import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { emailTime } from '@/DataServices/script';

export const ContactMe = () => {

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
    <div>
        <Container>
            <Row>
                <Col sm={12} md={6}>
                    <h3 className='bigger-padding rowdies orang-text'>Any Questions or Inquiries? Feel free to Contact Me!</h3>
                    <p className='rowdies'>Email: ellierasuli@gmail.com</p>
                    <p className='rowdies'>Phone: (209)-480-4810</p>
                </Col>
                <Col className='contact bigger-padding different-bg lighter-borders'>
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
                </Col>
            </Row>
        </Container>
    </div>
  )
}
