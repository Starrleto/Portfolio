'use client'
import AboutMe from '@/Components/AboutMe';
import { ArtGaller } from '@/Components/ArtGaller';
import { ContactMe } from '@/Components/ContactMe';
import { Projects } from '@/Components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';

export default function Home() {

  const [page, setPage] = useState<string>("AboutMe");

  return (
    <div>
        <div className='top'>
        
        <div className='separate-bottom'>
          <h1 className='daydream App-logo'>✰ Welcome! ✰</h1>
          <p className='rowdies'>Ellie Rasuli</p>
          <p className='rowdies'>Back End Developer ✰ Front End Developer ✰ Video Game Developer </p>
          <p className='rowdies small-line'> Artist ✰ Teacher </p>
        </div>
    
        <Nav variant="tabs" defaultActiveKey="link" className='justify-center na'>
          <Nav.Item>
            <Nav.Link className='rowdies different-bg nav-text' eventKey="link" onClick={() => {setPage("AboutMe")}}>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='rowdies nav-text' eventKey="link-1" onClick={() => {setPage("Projects")}}>My Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='rowdies nav-text' eventKey="link-2" onClick={() => {setPage("Gallery")}}>Art Gallery</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='rowdies nav-text' eventKey="link-3" onClick={() => {setPage("Contact")}}>Contact Me</Nav.Link>
          </Nav.Item>
        </Nav>

        { 
          page == "AboutMe" ? <AboutMe></AboutMe> : 
          page == "Gallery" ? <ArtGaller></ArtGaller> : 
          page == "Projects" ? <Projects></Projects> : <ContactMe></ContactMe> 
        }
    
        </div>
    </div>
  );
}
