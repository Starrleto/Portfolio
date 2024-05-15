'use client'
import AboutMe from '@/Components/AboutMe';
import { ArtGaller } from '@/Components/ArtGaller';
import { ContactMe } from '@/Components/ContactMe';
import { Projects } from '@/Components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/wickedcss.min.css';
import Nav from 'react-bootstrap/Nav';
import { FooterComponent } from '@/Components/FooterComponent';

export default function Home() {

  return (
    <div className='bg'>
        <div className='top'>
    
        <Nav variant="pills" defaultActiveKey="link" className='justify-center na padding'>
          <Nav.Item>
            <Nav.Link className='rowdies home nav-text' eventKey="link">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='rowdies projs nav-text' eventKey="link-1">My Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='rowdies art nav-text' eventKey="link-2">Art Gallery</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='rowdies con nav-text' eventKey="link-3">Contact Me</Nav.Link>
          </Nav.Item>
        </Nav>

        <AboutMe></AboutMe>
        <Projects></Projects>
        <ArtGaller></ArtGaller>
        <ContactMe></ContactMe>
        <FooterComponent></FooterComponent>
    
        </div>
    </div>
  );
}
