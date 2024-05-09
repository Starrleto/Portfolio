import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import head from '../assets/Ellie_Rasuli_02_CSAS6_Headshots (1).jpg';

const AboutMe = () => {

  return (
    <div className='different-bg'>
      
      <div className='separate-bottom'>
          <h1 className='daydream App-logo orang-text'>✰ Welcome! ✰</h1>
      </div>
      
    <div>
      <Row className='different-bg padding'>
        <Col>
          <h1 className='rowdies'>Im Ellie Rasuli</h1>
          <p className='rowdies orang-text'>Back End Developer ✰ Front End Developer ✰ Video Game Developer </p>
          <p className='rowdies small-line orang-text'> Artist ✰ Teacher </p>
          <p></p>
        </Col>
        <Col>
          <Image src={head} alt={"A picture of me"} width={300} height={300} className='headshot'></Image>
        </Col>
      </Row>
      <Row className='different-bg-darker padding'>
        <h1>My Skills</h1>
        <h1>C# ✰ Javascript ✰ HTML </h1>
      </Row>
    </div>

    </div>
  )
}

export default AboutMe
