'use client'
import Image from 'next/image';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import rps from '../assets/rps.png';
import cal from '../assets/calculator.png';
import rgb from '../assets/rgb.png'
import all from '../assets/allforone.png'
import wea from '../assets/weather.png';
import vin from '../assets/vindicat.png';

export const Projects = () => {
  return (
    <div className='dark-border-top'>
      
    <Container>

    <div className='bigger-padding'>
    <hr className='border-color'></hr>
      <h1 className='bigger-padding rowdies orang-text' id='projects'>Completed Projects</h1>
    <hr className='border-color'></hr>
    </div>
      
{/* All For One */}
      <Row className='different-bg margin-bottom lighter-borders'>
        <Col className='picture slideRight' sm={12} md={6}>
          <a href='https://ambitious-mushroom-05a532b1e.4.azurestaticapps.net/' target='_blank'><Image src={all} alt="All For One API website" width={500} className='image-skew-r img-fluid border-yeah image-obj'></Image>
          <div className='middle'>
              <p className='rowdies big-text black'>Click to view!</p>
          </div>
          </a>
        </Col>
        <Col className='project-col' sm={12} md={6}>
          <a href='https://ambitious-mushroom-05a532b1e.4.azurestaticapps.net/' target='_blank' className='project-links'>➤ All For One!</a>
          <p className='rowdies'>I completed both Backened and Frontend work on this website in about a week.</p>
          <p className='rowdies'>I made the  Frontend design with React, and the API / Endpoints in C#. Both are hosted with Microsoft Azure.</p>
        </Col>
      </Row>

      {/* Weather App */}
      <Row className='different-bg margin-bottom lighter-borders'>
        <Col className='project-col' sm={12} md={6}>
          <a className='project-links' href='https://weather-app-funnies.vercel.app/' target='_blank'>➤ A Weather App!</a>
          <p className='rowdies'>This project was completed in about a week using regular HTML and JS.</p>
        </Col>
        <Col className='slideLeft picture' sm={12} md={6}>
          <a href='https://weather-app-funnies.vercel.app/' target='_blank'><Image src={wea} alt="Weather App Website" width={500} className='image-skew-r img-fluid border-yeah image-obj'></Image>
          <div className='middle'>
              <p className='rowdies big-text black'>Click to view!</p>
          </div>
          </a>
        </Col>
      </Row>

{/* RGB */}
      <Row className='different-bg margin-bottom lighter-borders'>
        <Col className='slideRight picture' sm={12} md={6}>
          <a href='https://starrlet.itch.io/rgb' target='_blank'><Image src={rgb} alt="Tip Calculator Website" width={500} className='image-skew img-fluid border-yeah image-obj'></Image>
          <div className='middle'>
              <p className='rowdies big-text black'>Click to view!</p>
          </div>
          </a>
        </Col>
        <Col className='project-col' sm={12} md={6}>
          <a className='project-links' href='https://starrlet.itch.io/rgb' target='_blank'>➤ RGB </a>
          <p className='rowdies'>This game was developed in Unity and C#, everything besides the music, including the coding, art, and design, was made by myself.</p>
          <p className='rowdies'>This game was submitted for a Highschool competition, and I recieved third place in the state of California with it. It can now be downloaded on itch.IO</p>
        </Col>
      </Row>

{/* Rock Paper Scissors */}
      <Row className='different-bg margin-bottom lighter-borders'>
        <Col className='project-col' sm={12} md={6}>
          <a className='project-links' href='https://rock-paper-scissors-lizard-spock-rosy-sigma.vercel.app/' target='_blank'>➤ Rock Paper Scissors Game!</a>
          <p className='rowdies'>This project was completed in about a week using React</p>
        </Col>
        <Col className='slideLeft picture' sm={12} md={6}>
          <a href='https://rock-paper-scissors-lizard-spock-rosy-sigma.vercel.app/' target='_blank'><Image src={rps} alt="Rock Paper Scissor Lizard Spock" width={450} className='image-skew img-fluid border-yeah image-obj'></Image>
          <div className='middle'>
              <p className='rowdies big-text black'>Click to view!</p>
          </div>
          </a>
        </Col>
      </Row>

{/* Tip Calculator */}
      <Row className='different-bg margin-bottom lighter-borders'>
        <Col className='slideRight picture' sm={12} md={6}>
          <a href='https://calculator-nextjs-369eneswk-soupletts-projects.vercel.app/' target='_blank'><Image src={cal} alt="Tip Calculator Website" width={500} className='image-skew-r img-fluid border-yeah image-obj'></Image>
          <div className='middle'>
              <p className='rowdies big-text black'>Click to view!</p>
          </div>
          </a>
        </Col>
        <Col className='project-col' sm={12} md={6}>
          <a className='project-links' href='https://calculator-nextjs-369eneswk-soupletts-projects.vercel.app/' target='_blank'>➤ A Tip Calculator!</a>
          <p className='rowdies'>This project was completed in a few days using Next.Js and TypeScript.</p>
        </Col>
      </Row>
      
      <hr className='border-color'></hr>
      <h1 className='bigger-padding rowdies orang-text'>Work In Progress...</h1>
      <hr className='border-color'></hr>

      <Row className='different-bg margin-bottom lighter-borders'>
        <Col className='project-col' sm={12} md={6}>
          <a className='project-links' href='https://vindicate.vercel.app/' target='_blank'>➤ Vindicate</a>
          <p className='rowdies'> This Website is dedicated to the video game I am currently working on, Vindicate. It is a passion project of mine I've been creating in Unity with C#. </p>
          <p className='rowdies'> It's an RPG with visual novel elements. </p>
        </Col>
        <Col className='slideLeft picture' sm={12} md={6}>
          <a href='https://vindicate.vercel.app/' target='_blank'><Image src={vin} alt="Weather App Website" width={500} className='image-skew-r img-fluid border-yeah image-obj'></Image>
          <div className='middle'>
              <p className='rowdies big-text black'>Click to view!</p>
          </div>
          </a>
        </Col>
      </Row>

    </Container>

    </div>
  )
}
