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
import figma from '../assets/svgs/figma.svg';
import github from '../assets/svgs/github.svg';
import notion from '../assets/svgs/notion.svg';
import slack from '../assets/svgs/slack.svg';
import html from '../assets/svgs/html5.svg';
import itch from '../assets/svgs/itchdotio.svg';

const AboutMe = () => {

  return (
    <div className='different-bg lighter-borders-2'>
      
      <div className='separate-bottom'>
          <h1 className='daydream App-logo orang-text i-had-a-stroke'>✰ Welcome! ✰</h1>
      </div>
      
    <div>
      <Row className='different-bg dark-border padding'>
        <Col className='right'>
          <h1 className='rowdies orang-text big-test'>I{`'`}m Ellie Rasuli</h1>
          <p className='rowdies big-text'>Back End Developer ✰ Front End Developer ✰ Video Game Developer </p>
          <p className='rowdies small-line big-text'> Artist ✰ Teacher </p>
          <p className='ubuntu big-text'>I am a Fullstack developer with a strong passion for art. I combine creativity and logic to create the best products I can achieve.</p>
        </Col>
        <Col>
          <Image src={head} alt={"A picture of me"} width={300} height={300} className='headshot'></Image>
        </Col>
      </Row>
      <Row className='different-bg-darker padding'>
        <h1 className='orang-text rowdies padding'>My Skills</h1>

        <div className='flex-around'>

          <div>
            <h3 className='orang-text rowdies'>Languages</h3>
            <div className='icons'>
            <Image src={csharp} alt="CSharp" className='separate-side' width={50}></Image>
            <Image src={css} alt="CSS" width={50} className='separate-side'></Image>
            <Image src={html} alt="HTML" width={50} className='separate-side'></Image>
            <Image src={js} alt="Javascript" width={50}></Image>
            </div>
            <div>
              <p className='white-text rowdies'>C#, CSS, HTML, Javascript.</p>
            </div>
          </div>

          <div>
            <h3 className='orang-text rowdies'>Frameworks</h3>
            <div className='icons'>
            <Image src={boot} alt="Bootstrap" width={50} className='separate-side'></Image>
            <Image src={next} alt="Next JS" width={50} className='separate-side'></Image>
            <Image src={react} alt="React" width={50} className='separate-side'></Image>
            <Image src={tail} alt="Tailwind" width={50} className='separate-side'></Image>
            <Image src={unity} alt="Unity" width={50}></Image>
            </div>
            <div>
              <p className='white-text rowdies'>Bootstrap, Next JS, React, Tailwind, Unity.</p>
            </div>
          </div>

          <div>
            <h3 className='orang-text rowdies'>Productivity</h3>
            <div className='icons'>
            <Image src={figma} alt="figma" className='separate-side' width={50}></Image>
            <Image src={github} alt="github" width={50} className='separate-side'></Image>
            <Image src={notion} alt="notion" width={50} className='separate-side'></Image>
            <Image src={itch} alt="itchio" width={50} className='separate-side'></Image>
            <Image src={slack} alt="slack" width={50}></Image>
            </div>
            <div>
              <p className='white-text rowdies'>Figma, Github, Notion, Itch.io, Slack.</p>
            </div>
          </div>

        </div>
        {/* ^^ SVGs From simple icons website */}
      </Row>
    </div>

    </div>
  )
}

export default AboutMe
