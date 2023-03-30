import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import RotatedImage from '../../../Template/RotatedImage';
import imgFood from '../../../../assets/img/side-img.png'
import '../../../../assets/styles/advantages-section.css';

export default function AdvantagesSection() {
  return (
    <Container fluid>
      <Row className='advantage-section w-100'>
        <Col className='test position-relative' sm={3}>
          <div className='position-absolute'>
            <h2>dsadasdsaaaaaaaaaaaaaaaaaaaaaaaa</h2>
          </div>
        </Col>
        <Col className='col-center' sm={8}>
          <h6 className='mb-4'>Why Chose Us</h6>
          <h2 className='mb-4'>Many Reason For Choosing FoodLab Restaurants</h2>
          <p className='mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p className='last-paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
        </Col>
        <Col sm={1}>
          <RotatedImage img={imgFood} />
        </Col>
      </Row>
    </Container>
  )
}
