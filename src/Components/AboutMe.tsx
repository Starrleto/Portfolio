import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import head from '../assets/Ellie_Rasuli_02_CSAS6_Headshots (1).jpg';
import boot from '../assets/svgs/bootstrap.svg';
import csharp from '../assets/svgs/csharp.svg';
import css from '../assets/svgs/css3.svg';
import js from '../assets/svgs/javascript.svg';
import next from '../assets/svgs/nextdotjs.svg';
import react from '../assets/svgs/react.svg';
import tail from '../assets/svgs/tailwindcss.svg';
import unity from '../assets/svgs/unity.svg';

const AboutMe = () => {

  return (
    <div className='different-bg lighter-borders-2'>
      
      <div className='separate-bottom'>
          <h1 className='daydream App-logo orang-text i-had-a-stroke'>✰ Welcome! ✰</h1>
      </div>
      
    <div>
      <Row className='different-bg dark-border padding'>
        <Col>
          <h1 className='rowdies'>I{`'`}m Ellie Rasuli</h1>
          <p className='rowdies'>Back End Developer ✰ Front End Developer ✰ Video Game Developer </p>
          <p className='rowdies small-line'> Artist ✰ Teacher </p>
          <p></p>
        </Col>
        <Col>
          <Image src={head} alt={"A picture of me"} width={300} height={300} className='headshot'></Image>
        </Col>
      </Row>
      <Row className='different-bg-darker padding'>
        <h1 className='orang-text rowdies'>My Skills</h1>
        <div className='icons'> 

          <Image src={boot} alt="Bootstrap" width={50}></Image>
          <Image src={csharp} alt="Bootstrap" width={50}></Image>
          <Image src={css} alt="Bootstrap" width={50}></Image>
          <Image src={js} alt="Bootstrap" width={50}></Image>
          <Image src={next} alt="Bootstrap" width={50}></Image>
          <Image src={react} alt="Bootstrap" width={50}></Image>
          <Image src={tail} alt="Bootstrap" width={50}></Image>
          <Image src={unity} alt="Bootstrap" width={50}></Image>

        </div>
        {/* ^^ SVGs From simple icons website */}
      </Row>
    </div>

    </div>
  )
}

export default AboutMe
