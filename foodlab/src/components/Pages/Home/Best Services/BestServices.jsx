import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import leftLine from '../../../../assets/img/left-s.png';
import rightLine from '../../../../assets/img/right-s.png';
import hTag from '../../../../assets/img/h-tag.png';
import '../../../../assets/styles/best-services.css';

export default function BestServices() {
  return (
    <section className='best-services'>
      <Container className='container-lg' fluid>
        <Row>
          <h2 className='text-center'>Our Best Services</h2>
        </Row>
        <Row className='d-flex justify-content-center mb-5'>
          <p className='text-center best-services-text mt-2'>Lorem ipsum dolor sit amet consectetur adipiscing
            elit do eiusmod tempor incididunt ut labore.</p>
        </Row>
        <Row>
          <Col>
            <Image src={leftLine} />
          </Col>
          <Col className='d-flex justify-content-center'>
            <Image src={hTag} />
          </Col>
          <Col>
            <Image src={rightLine} />
          </Col>
        </Row>
      </Container>
    </section >
  )
}
