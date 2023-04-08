import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import leftLine from '../../../../assets/img/left-s.png';
import rightLine from '../../../../assets/img/right-s.png';
import hTag from '../../../../assets/img/h-tag.png';
import plateWithFood from '../../../../assets/img/plate with food 2.png';
import fruitImg from '../../../../assets/img/pet-food.png';
import RotatedImage from '../../../Template/RotatedImage';
import '../../../../assets/styles/our-company-section.css'

export default function OurCompanySection() {
  return (
    <section className='our-company position-relative'>
      <figure className='img-food'>
        <RotatedImage img={plateWithFood} width='200px' height='200px' position='absolute' right='80px' top='80px' />
      </figure>
      <figure className="img-fruit position-absolute">
        <Image src={fruitImg} fluid />
      </figure>
      <Container className='container-lg'>
        <div className='d-flex flex-column align-items-center mt-2 best-service-text-section'>
          <Row>
            <h2>Our Focus</h2>
          </Row>
          <Row className='mb-2'>
            <p className='text-center our-company-text mt-2'>Lorem ipsum dolor sit amet consectetur adipiscing
              elit do eiusmod tempor incididunt ut labore.</p>
          </Row>
          <Row className='our-company-img'>
            <Col className='d-flex align-items-center'>
              <Image src={leftLine} />
            </Col>
            <Col className='d-flex justify-content-center'>
              <Image src={hTag} />
            </Col>
            <Col className='d-flex align-items-center'>
              <Image src={rightLine} />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}
