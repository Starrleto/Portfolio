import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const ContactMe = () => {
  return (
    <div className='bigger-padding'>
        <h4>Any Questions or Inquiries? Feel free to Contact Me!</h4>

        <div className='contact'>
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
        </div>
    </div>
  )
}
