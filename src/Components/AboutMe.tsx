import React from 'react'
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import head from '../assets/Ellie_Rasuli_02_CSAS6_Headshots (1).jpg';

const AboutMe = () => {
  return (
    <div>
      
    <div className='different-bg padding'>
      <Row>
        <Col>
          <h1 className='rowdies'>I'm Ellie Rasuli</h1>
          <p></p>
        </Col>
        <Col>
          <Image src={head} alt={"A picture of me"} width={300} height={300} className='headshot'></Image>
        </Col>
      </Row>
    </div>

    </div>
  )
}

export default AboutMe
