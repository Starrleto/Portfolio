'use client'
import Image from 'next/image';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import rps from '../assets/rps.png';
import cal from '../assets/calculator.png';
import ran from '../assets/random.png';
import all from '../assets/allforone.png'
import wea from '../assets/weather.png';

export const Projects = () => {
  return (
    <div>
      
    <Container className='bigger-padding'>
      
{/* All For One */}
      <Row className='different-bg margin-bottom lighter-borders'>
        <Col className='picture slideRight'>
          <a href='https://ambitious-mushroom-05a532b1e.4.azurestaticapps.net/' target='_blank'><Image src={all} alt="All For One API website" width={500} className='image-skew-r img-fluid border-yeah image-obj'></Image></a>
          <div className='middle'>
              <p className='rowdies big-text'>Click to view!</p>
          </div>
        </Col>
        <Col className='project-col'>
          <a href='https://ambitious-mushroom-05a532b1e.4.azurestaticapps.net/' target='_blank' className='project-links'>➤ All For One!</a>
          <p className='rowdies'>I completed both Backened and Frontend work on this website in about a week.</p>
          <p className='rowdies'>I made the  Frontend design with React, and the API / Endpoints in C#. Both are hosted with Microsoft Azure.</p>
        </Col>
      </Row>

{/* Rock Paper Scissors */}
      <Row className='different-bg margin-bottom lighter-borders'>
        <Col className='project-col'>
          <a className='project-links' href='https://rock-paper-scissors-lizard-spock-rosy-sigma.vercel.app/' target='_blank'>➤ Rock Paper Scissors Game!</a>
          <p className='rowdies'>This project was completed in about a week using React</p>
        </Col>
        <Col className='slideLeft picture'>
          <a href='https://rock-paper-scissors-lizard-spock-rosy-sigma.vercel.app/' target='_blank'><Image src={rps} alt="Rock Paper Scissor Lizard Spock" width={450} className='image-skew img-fluid border-yeah image-obj'></Image></a>
          <div className='middle'>
              <p className='rowdies big-text'>Click to view!</p>
          </div>
        </Col>
      </Row>

{/* Tip Calculator */}
      <Row className='different-bg margin-bottom lighter-borders'>
        <Col className='slideRight picture'>
          <a href='https://calculator-nextjs-369eneswk-soupletts-projects.vercel.app/' target='_blank'><Image src={cal} alt="Tip Calculator Website" width={500} className='image-skew-r img-fluid border-yeah image-obj'></Image></a>
          <div className='middle'>
              <p className='rowdies big-text'>Click to view!</p>
          </div>
        </Col>
        <Col className='project-col'>
          <a className='project-links' href='https://calculator-nextjs-369eneswk-soupletts-projects.vercel.app/' target='_blank'>➤ A Tip Calculator!</a>
          <p className='rowdies'>This project was completed in a few days using Next.Js and TypeScript.</p>
        </Col>
      </Row>
      
{/* Weather App */}
      <Row className='different-bg margin-bottom lighter-borders'>
        <Col className='project-col'>
          <a className='project-links' href='https://weather-app-funnies.vercel.app/' target='_blank'>➤ A Weather App!</a>
          <p className='rowdies'>This project was completed in about a week using regular HTML and JS.</p>
        </Col>
        <Col className='slideLeft picture'>
          <a href='https://weather-app-funnies.vercel.app/' target='_blank'><Image src={wea} alt="Weather App Website" width={500} className='image-skew-r img-fluid border-yeah image-obj'></Image></a>
          <div className='middle'>
              <p className='rowdies big-text'>Click to view!</p>
          </div>
        </Col>
      </Row>
      
{/* Random Group Generator */}
      <Row className='different-bg margin-bottom lighter-borders'>
        <Col className='slideRight picture'>
          <a target='_blank' href='https://random-generator-eight.vercel.app/'><Image src={ran} alt="Random Group Generator" width={500} className='image-skew img-fluid border-yeah image-obj'></Image></a>
          <div className='middle'>
              <p className='rowdies big-text'>Click to view!</p>
          </div>
        </Col>
        <Col className='project-col'>
          <a className='project-links' href='https://random-generator-eight.vercel.app/' target='_blank'>➤ A Random group/name generator!</a>
          <p className='rowdies'>This project was completed in a few days using regular HTML and JS.</p>
        </Col>
      </Row>
    </Container>

    </div>
  )
}
