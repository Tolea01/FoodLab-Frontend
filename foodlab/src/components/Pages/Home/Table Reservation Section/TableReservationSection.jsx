import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import reservationSectionImg from '../../../../assets/img/reservation-section-img.jpg';
import RotatedImage from '../../../Template/RotatedImage';
import imgPlate1 from '../../../../assets/img/c-1.png';
import imgPlate2 from '../../../../assets/img/c-4.png';
import imgPlate3 from '../../../../assets/img/c-5.png';
import imgPlate4 from '../../../../assets/img/c-6.png';
import '../../../../assets/styles/table-reservation-section.css';

export default function TableReservationSection() {
  return (
    <Container fluid>
      <Row className='reservation-section'>
        <Col sm={12} md={7} className='col-left position-relative'>
          <div>
            <Image src={reservationSectionImg} fluid />
          </div>
          <figure className="circle position-absolute">
            <RotatedImage zIndex='2' position='absolute' top='0' left='0' width='30%' img={imgPlate1} />
            <RotatedImage zIndex='2' position='absolute' top='0' right='0' width='30%' img={imgPlate2} />
            <RotatedImage zIndex='2' position='absolute' bottom='0' left='0' width='30%' img={imgPlate3} />
            <RotatedImage zIndex='2' position='absolute' bottom='0' right='0' width='30%' img={imgPlate4} />
            <div className="inner-circle position-absolute"></div>
            <div className="middle-circle position-absolute"></div>
            <div className="outer-circle position-absolute z-1"></div>
          </figure>
        </Col>
        <Col sm={12} md={5} className='col-right'>
          <div className='reservation-section-img' />
        </Col>
      </Row>
    </Container >
  )
}
