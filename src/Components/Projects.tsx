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

export const Projects = () => {
  return (
    <div>
      
    <Container className='bigger-padding'>
      
      <Row>
        <Col>
          <Image src={all} alt="Rock Paper Scissor Lizard Spock" width={500} className='image-skew img-fluid'></Image>
        </Col>
        <Col className='project-col'>
          <a href='https://ambitious-mushroom-05a532b1e.4.azurestaticapps.net/' target='_blank' className=''>All For One!</a>
        </Col>
      </Row>

      <Row>
        <Col className='project-col'>
          <a href='https://rock-paper-scissors-lizard-spock-rosy-sigma.vercel.app/' target='_blank'>Rock Paper Scissors Game!</a>
        </Col>
        <Col>
          <Image src={rps} alt="Rock Paper Scissor Lizard Spock" width={500} className='image-skew-r img-fluid'></Image>
        </Col>
      </Row>

      <Row>
        <Col>
          <Image src={cal} alt="Rock Paper Scissor Lizard Spock" width={500} className='image-skew img-fluid'></Image>
        </Col>
        <Col className='project-col'>
          <a href='https://calculator-nextjs-369eneswk-soupletts-projects.vercel.app/' target='_blank'>A Tip Calculator!</a>
        </Col>
      </Row>
      

      <Row>
        <Col className='project-col'>
          <a href='https://random-generator-eight.vercel.app/' target='_blank'>A Random group/name generator!</a>
        </Col>
        <Col>
          <Image src={ran} alt="Rock Paper Scissor Lizard Spock" width={500} className='image-skew-r img-fluid'></Image>
        </Col>
      </Row>
    </Container>

    </div>
  )
}
