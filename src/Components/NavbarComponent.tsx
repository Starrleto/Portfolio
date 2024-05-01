'use client'
import React from 'react'
import Nav from 'react-bootstrap/Nav';

const NavbarComponent = () => {
  return (
    <div className='top'>
        
    <h1>✰ Welcome! ✰</h1>
    <p>Web Developer ✰ Game Developer ✰ Artist </p>

    <Nav variant="tabs" defaultActiveKey="link" className='justify-center na'>
      <Nav.Item>
        <Nav.Link eventKey="link">About Me</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">My Projects</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Art Gallery</Nav.Link>
      </Nav.Item>
    </Nav>

    </div>
  )
}

export default NavbarComponent