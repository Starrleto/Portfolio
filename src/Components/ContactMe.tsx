import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export const ContactMe = () => {
  return (
    <div>
        <Container>
            <Row>
                <Col>
                    <h3 className='bigger-padding rowdies orang-text'>Any Questions or Inquiries? Feel free to Contact Me!</h3>
                    <p className='rowdies'>Email: ellierasuli@gmail.com</p>
                    <p className='rowdies'>Phone: (209)-480-4810</p>
                </Col>
                <Col className='contact bigger-padding different-bg lighter-borders'>
                    <h4 className='rowdies'>➤ Email me now!</h4>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='rowdies'>Your Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='rowdies'>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Subject here..." />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='rowdies'>Message</Form.Label>
                    <Form.Control as="textarea" rows={6} placeholder="Type here..." />
                </Form.Group>
                <Button type="submit" className='rowdies'>
                    Send!
                </Button>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
