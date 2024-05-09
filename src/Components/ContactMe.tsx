import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/container';

export const ContactMe = () => {
  return (
    <div>
        <Container>
            <Row>
                <Col>
                    <h3 className='bigger-padding'>Any Questions or Inquiries? Feel free to Contact Me!</h3>
                    <p>Email: ellierasuli@gmail.com</p>
                    <p>Phone: (209)-480-4810</p>
                </Col>
                <Col className='contact bigger-padding'>
                    <h4>Email me now!</h4>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Subject here..." />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={6} placeholder="Type here..." />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Send!
                </Button>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
